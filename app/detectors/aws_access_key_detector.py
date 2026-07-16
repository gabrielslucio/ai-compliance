import re

def find_aws_access_keys(content: str):
    return re.findall(
        r"\bAKIA[0-9A-Z]{16}\b",
        content,
    )