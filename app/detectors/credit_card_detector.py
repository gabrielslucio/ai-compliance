import re

def find_credit_cards(content: str):
    return re.findall(
        r"\b(?:\d[ -]*?){13,19}\b",
        content,
    )