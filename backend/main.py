from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="Online Quiz System API")

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # In production, we should specify the Vercel URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
async def root():
    return {"message": "Welcome to the Online Quiz System API"}

@app.post("/auth/signup")
async def signup():
    return {"message": "Signup endpoint (placeholder)"}

@app.post("/auth/signin")
async def signin():
    return {"message": "Signin endpoint (placeholder)"}
