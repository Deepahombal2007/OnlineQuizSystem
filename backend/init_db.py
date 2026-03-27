import asyncio
import os
import asyncpg
from dotenv import load_dotenv

load_dotenv()

async def create_tables():
    db_url = os.getenv("DATABASE_URL")
    if not db_url:
        print("DATABASE_URL not set")
        return

    print("Connecting to NeonDB...")
    conn = await asyncpg.connect(db_url)
    
    with open("../db/schema.sql", "r") as f:
        schema = f.read()
    
    print("Executing schema...")
    await conn.execute(schema)
    print("Schema executed successfully!")
    await conn.close()

if __name__ == "__main__":
    asyncio.run(create_tables())
