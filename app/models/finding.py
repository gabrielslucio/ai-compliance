from dataclasses import dataclass

@dataclass
class Finding:
    finding_type: str
    value: str
    severity: str
    category: str
    replacement: str

    def to_dict(self):
        return {
            "type": self.finding_type,
            "value": self.value,
            "severity": self.severity,
            "category": self.category,
            "replacement": self.replacement,
        }