from fastapi import FastAPI
from app.scanner import scan_content, calculate_risk_score

app = FastAPI()

@app.get("/")
def home():
    return {
        "message": "AI Compliance API"
    }

@app.post("/scan")
def scan(payload: dict):
        content = payload["content"]

        findings = scan_content(content)
        risk_score = calculate_risk_score(findings)

        return {
              "findings": findings,
              "count": len(findings),
              "risk_score": risk_score,
        }