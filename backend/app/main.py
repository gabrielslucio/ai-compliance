from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.scanner import (
    scan_content,
    calculate_risk_score,
    decide_action,
    mask_content,
    get_categories,
    get_summary,
    get_highest_severity,
)

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


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

    categories = get_categories(findings)
    summary = get_summary(findings)
    highest_severity = get_highest_severity(findings)

    masked_content = mask_content(
        content,
        findings,
    )

    serialized_findings = [
        finding.to_dict()
        for finding in findings
    ]

    return {
        "findings": serialized_findings,
        "count": len(findings),
        "risk_score": risk_score,
        "decision": decision,
        "highest_severity": highest_severity,
        "categories": categories,
        "summary": summary,
        "masked_content": masked_content,
    }