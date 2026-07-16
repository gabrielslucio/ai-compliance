import re

def find_jwt(content: str):
    return re.findall(
        r"\beyJ[A-Za-z0-9_-]+\.[A-Za-z0-9_-]+\.[A-Za-z0-9_-]+\b",
        content,   
    )