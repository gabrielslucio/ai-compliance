from app.config.scanner_config import DETECTOR_TYPES, DETECTOR_NAMES
from app.config.risk_config import RISK_SCORES
from app.detector_registry import DETECTOR_FUNCTIONS

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

def scan_content(content: str):
    findings = []

    for detector_name in DETECTOR_NAMES:
        detector_function = DETECTOR_FUNCTIONS[detector_name]

        values = detector_function(content)

        severity = DETECTOR_TYPES[detector_name]["severity"]

        for value in values:
            findings.append(
                create_finding(
                    detector_name,
                    value,
                    severity,
                )
            )

    return findings

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

