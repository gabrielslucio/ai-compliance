from fastapi import FastAPI
from app.scanner import find_emails

app = FastAPI()

@app.get("/")
def home():
    return {
        "message": "AI Compliance API"
    }

@app.post("/scan")
def scan(payload: dict):
        content = payload["content"]

        emails = find_emails(content)

        return {
              "emails": emails,
              "count": len(emails)
        }