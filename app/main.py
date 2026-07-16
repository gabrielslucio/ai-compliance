from fastapi import FastAPI
from app.scanner import (scan_content, calculate_risk_score, decide_action, mask_content)

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
        decision = decide_action(risk_score)
        masked_content = mask_content(
            content,
            findings,
        )

        return {
              "findings": findings,
              "count": len(findings),
              "risk_score": risk_score,
              "decision": decision,
              "masked_content": masked_content,
        }