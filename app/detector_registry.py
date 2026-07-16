import re
from app.detectors.email_detector import find_emails
from app.detectors.iban_detector import find_ibans
from app.detectors.password_detector import find_passwords
from app.detectors.credit_card_detector import find_credit_cards
from app.detectors.jwt_detector import find_jwt
from app.detectors.aws_access_key_detector import find_aws_access_keys

DETECTORS = {
    "email": {
        "severity": "medium",
        "category": "pii",
        "replacement": "[EMAIL]",
        "function": find_emails,
    },
    "iban": {
        "severity": "high",
        "category": "financial",
        "replacement": "[IBAN]",
        "function": find_ibans,
    },
    "password": {
        "severity": "critical",
        "category": "secret",
        "replacement": "[PASSWORD]",
        "function": find_passwords
    },
    "credit_card": {
        "severity": "critical",
        "category": "financial",
        "replacement": "[CREDIT_CARD]",
        "function": find_credit_cards
    },
    "jwt": {
        "severity": "critical",
        "category": "secret",
        "replacement": "[JWT]",
        "function": find_jwt
    },
    "aws_access_key": {
        "severity": "critical",
        "category": "secret",
        "replacement": "[AWS_ACCESS_KEY]",
        "function": find_aws_access_keys
    },
}