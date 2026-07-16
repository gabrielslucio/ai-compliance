import re
from app.detectors.email_detector import find_emails
from app.detectors.iban_detector import find_ibans
from app.detectors.password_detector import find_passwords

DETECTORS = {
    "email": {
        "severity": "medium",
        "function": find_emails,
    },
    "iban": {
        "severity": "high",
        "function": find_ibans,
    },
    "password": {
        "severity": "critical",
        "function": find_passwords
    }
}