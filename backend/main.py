from fastapi import FastAPI, Depends, HTTPException, status
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import text
from database import get_db
from schemas import UserCreate, UserLogin
from auth_utils import get_password_hash, verify_password

app = FastAPI(title="Online Quiz System API")

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # In production, specify frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
async def root():
    return {"message": "Welcome to the Online Quiz System API"}

@app.get("/health")
async def health_check(db: AsyncSession = Depends(get_db)):
    try:
        # Test database connection
        await db.execute(text("SELECT 1"))
        return {"status": "ok", "database": "connected"}
    except Exception as e:
        return {"status": "error", "database": str(e)}

@app.post("/auth/signup")
async def signup(user_data: UserCreate, db: AsyncSession = Depends(get_db)):
    # Check if user already exists
    query = text("SELECT id FROM users WHERE email = :email OR username = :username")
    result = await db.execute(query, {"email": user_data.email, "username": user_data.username})
    if result.first():
        raise HTTPException(status_code=400, detail="Email or username already registered")
    
    hashed_password = get_password_hash(user_data.password)
    
    insert_query = text("""
        INSERT INTO users (username, email, password_hash)
        VALUES (:username, :email, :password_hash)
        RETURNING id
    """)
    await db.execute(insert_query, {
        "username": user_data.username,
        "email": user_data.email,
        "password_hash": hashed_password
    })
    await db.commit()
    return {"message": "User created successfully"}

@app.post("/auth/signin")
async def signin(user_data: UserLogin, db: AsyncSession = Depends(get_db)):
    query = text("SELECT id, username, password_hash FROM users WHERE username = :username")
    result = await db.execute(query, {"username": user_data.username})
    row = result.fetchone()
    
    if not row or not verify_password(user_data.password, row[2]):
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Incorrect username or password")
    
    return {"message": "Signin successful"}
