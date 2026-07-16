import re

def find_ibans(content: str):
    return re.findall(
        r"\b[A-Z]{2}\d{2}[A-Z0-9]{11,30}\b",
        content,
    )
