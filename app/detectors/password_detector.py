import re

def find_passwords(content: str):
    return re.findall(
        r"(?i)\b(password|passwd|pwd|secret)\s*[:=]\s*\S+",
        content,
    )
