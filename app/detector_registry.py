import re
from app.detectors.email_detector import find_emails
from app.detectors.iban_detector import find_ibans
from app.detectors.password_detector import find_passwords

DETECTOR_FUNCTIONS = {
    "email": find_emails,
    "iban": find_ibans,
    "password": find_passwords,
}