import re

def create_finding(
        finding_type: str,
        value: str,
        severity: str,
):
    return {
        "type": finding_type,
        "value": value,
        "severity": severity,
    }

def find_emails(content: str):
    return re.findall(
        r"\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b",
        content,
    )

def find_ibans(content: str):
    return re.findall(
        r"\b[A-Z]{2}\d{2}[A-Z0-9]{11,30}\b",
        content,
    )

def find_passwords(content: str):
    return re.findall(
        r"(?i)\b(password|passwd|pwd|secret)\s*[:=]\s*\S+",
        content,
    )

def scan_content(content: str):
    findings = []

    for email in find_emails(content):
        findings.append(
            {
                "type": "email",
                "value": email,
                "severity": "medium",
            }
        )
    for iban in find_ibans(content):
        findings.append(
            {
                "type": "iban",
                "value": iban,
                "severity": "high",
            }
        )
    for password in find_passwords(content):
        findings.append(
            {
                "type": "password",
                "value": password,
                "severity": "critical",
            }
        )
    return findings

def calculate_risk_score(findings):
    score = 0
    for finding in findings:
        severity = finding["severity"]

        if severity == "medium":
            score += 20
        elif severity == "high":
            score += 50
        elif severity == "critical":
            score += 80
    return min(score, 100)

def decide_action(risk_score: int):
    if risk_score >= 80:
        return "block"
    if risk_score >= 40:
        return "warn"
    return "allow"