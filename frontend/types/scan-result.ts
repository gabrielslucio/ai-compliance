import {Finding} from "./finding";

export type ScanResult = {
    findings: Finding[];
    count: number;
    risk_score: number;
    decision: string;
    highest_severity: string;
    categories: string[];
    summary: {
        total_findings: number;
        by_category: Record<string, number>;
    };
    masked_content: string;
};