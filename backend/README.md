# Backend — FastAPI on Render

This folder contains the FastAPI backend for the Online Quiz System.

## Structure

```
backend/
├── main.py              # App entry point
├── requirements.txt     # Python dependencies
├── app/
│   ├── __init__.py
│   ├── config.py        # Environment config
│   ├── database.py      # DB connection
│   ├── models.py        # ORM / Pydantic models
│   ├── routers/         # API routes
│   └── services/        # Business logic
├── Dockerfile           # For Render deployment
├── render.yaml          # Render service config
└── README.md
```

## Local Development

```bash
# Create virtual environment
python -m venv venv
venv\Scripts\activate      # Windows
# source venv/bin/activate  # Linux/Mac

# Install dependencies
pip install -r requirements.txt

# Run server
uvicorn main:app --reload --port 8000
```

## Deployment (Render)

1. Push code to GitHub
2. Create a new Web Service on [render.com](https://render.com)
3. Connect your GitHub repo
4. Set environment variables (DATABASE_URL, etc.)
5. Deploy
