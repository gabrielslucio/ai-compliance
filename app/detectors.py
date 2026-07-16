import re

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