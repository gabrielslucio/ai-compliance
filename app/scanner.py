from app.config.risk_config import RISK_SCORES
from app.detector_registry import DETECTORS

def create_finding(
        finding_type: str,
        value: str,
        severity: str,
        category: str,
        replacement: str,
):
    return {
        "type": finding_type,
        "value": value,
        "severity": severity,
        "category": category,
        "replacement": replacement,
    }

def scan_content(content: str):
    findings = []

    for detector_name, detector in DETECTORS.items():
        detector_function = detector["function"]
        severity = detector["severity"]
        category = detector["category"]
        replacement = detector["replacement"]
        values = detector_function(content)

        for value in values:
            findings.append(
                create_finding(
                    detector_name,
                    value,
                    severity,
                    category,
                    replacement,
                )
            )

    return findings

def mask_content(content: str, findings):
    masked_content = content

    for finding in findings:
        masked_content = masked_content.replace(
            finding["value"],
            finding["replacement"],
        )
    return masked_content

def calculate_risk_score(findings):
    score = 0

    for finding in findings:
        severity = finding["severity"]
        print("SEVERITY:", severity)
        score += RISK_SCORES[severity]
    return min(score, 100)   

def decide_action(risk_score: int):
    if risk_score >= 80:
        return "block"
    if risk_score >= 40:
        return "warn"
    return "allow"

