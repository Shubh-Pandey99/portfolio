from fastapi import FastAPI, APIRouter, HTTPException, Query
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from typing import List, Optional
from pydantic import BaseModel, Field, EmailStr
from datetime import datetime
import uuid

# Load environment variables
ROOT_DIR = os.path.dirname(os.path.abspath(__file__))
# Check for .env file in the current directory or parent
env_path = os.path.join(ROOT_DIR, '.env')
load_dotenv(env_path)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

# MongoDB connection
mongo_url = os.environ.get('MONGO_URL')
db_name = os.environ.get('DB_NAME', 'portfolio_db')

db_client = None
db = None

if mongo_url:
    try:
        db_client = AsyncIOMotorClient(mongo_url)
        db = db_client[db_name]
        logger.info(f"Connected to MongoDB: {db_name}")
    except Exception as e:
        logger.error(f"Failed to connect to MongoDB: {e}")
        db = None
else:
    logger.warning("MONGO_URL not found. Database operations will fail.")
    db = None

# Create the main app
app = FastAPI(title="Shubh Portfolio API", version="1.1.0")
api_router = APIRouter()

# Define Models
class StatusCheck(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=datetime.utcnow)

class StatusCheckCreate(BaseModel):
    client_name: str

class ContactMessage(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str = Field(..., min_length=2, max_length=100)
    email: EmailStr
    message: str = Field(..., min_length=10, max_length=1000)
    timestamp: datetime = Field(default_factory=datetime.utcnow)

class ContactMessageCreate(BaseModel):
    name: str = Field(..., min_length=2, max_length=100)
    email: EmailStr
    message: str = Field(..., min_length=10, max_length=1000)

# Routes
@api_router.get("/")
async def root():
    return {
        "message": "Shubh Pandey Portfolio API",
        "status": "online",
        "version": "1.1.0"
    }

@api_router.get("/health")
async def health_check():
    db_status = "connected" if db is not None else "disconnected"
    return {
        "status": "healthy",
        "database": db_status,
        "timestamp": datetime.utcnow()
    }

@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    if not db:
        raise HTTPException(status_code=503, detail="Database connection unavailable")
    try:
        status_dict = input.dict()
        status_obj = StatusCheck(**status_dict)
        await db.status_checks.insert_one(status_obj.dict())
        return status_obj
    except Exception as e:
        logger.error(f"Error creating status check: {e}")
        raise HTTPException(status_code=500, detail="Internal server error")

@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks(limit: int = Query(10, le=100)):
    if not db:
        raise HTTPException(status_code=503, detail="Database connection unavailable")
    try:
        status_checks = await db.status_checks.find().sort("timestamp", -1).to_list(limit)
        return [StatusCheck(**status_check) for status_check in status_checks]
    except Exception as e:
        logger.error(f"Error fetching status checks: {e}")
        raise HTTPException(status_code=500, detail="Internal server error")

@api_router.post("/contact", response_model=ContactMessage)
async def create_contact_message(input: ContactMessageCreate):
    if not db:
        # We handle this gracefully because the frontend has a mailto fallback
        logger.error("Attempted to send message but DB is unavailable")
        raise HTTPException(status_code=503, detail="Database connection unavailable")
    
    try:
        msg_dict = input.dict()
        msg_obj = ContactMessage(**msg_dict)
        await db.contact_messages.insert_one(msg_obj.dict())
        logger.info(f"New contact message from {input.name} ({input.email})")
        return msg_obj
    except Exception as e:
        logger.error(f"Error saving contact message: {e}")
        raise HTTPException(status_code=500, detail="Internal server error")

# Include the router in the main app
app.include_router(api_router)

# CORS Configuration
allowed_origins = os.environ.get('CORS_ORIGINS', '*').split(',')
app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=allowed_origins,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.on_event("shutdown")
async def shutdown_db_client():
    if db_client:
        db_client.close()
        logger.info("MongoDB connection closed")
