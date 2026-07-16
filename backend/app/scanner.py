from app.config.risk_config import (RISK_SCORES, SEVERITY_ORDER,)
from app.detector_registry import DETECTORS
from app.models.finding import Finding

def create_finding(
        finding_type: str,
        value: str,
        severity: str,
        category: str,
        replacement: str,
):
    return Finding(
        finding_type = finding_type,
        value = value,
        severity = severity,
        category = category,
        replacement = replacement,
    )

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
            finding.value,
            finding.replacement,
        )
    return masked_content

def calculate_risk_score(findings):
    score = 0

    for finding in findings:
        severity = finding.severity
        score += RISK_SCORES[severity]
    return min(score, 100)   

def decide_action(risk_score: int):
    if risk_score >= 80:
        return "block"
    if risk_score >= 40:
        return "warn"
    return "allow"

def get_categories(findings):
    categories = set()

    for finding in findings:
        categories.add(
            finding.category
        )
    return sorted(categories)

def get_summary(findings):
    summary = {
        "total_findings": len(findings),
        "by_category": {},
    }

    for finding in findings:
        category = finding.category

        if category not in summary["by_category"]:
            summary["by_category"][category] = 0
        summary["by_category"][category] += 1
        
    return summary

def get_highest_severity(findings):
    if not findings:
        return None
    
    highest_severity = "medium"

    for finding in findings:
        severity = finding.severity

        if(
            SEVERITY_ORDER[severity]
            >
            SEVERITY_ORDER[highest_severity]
        ):
            highest_severity = severity

    return highest_severity