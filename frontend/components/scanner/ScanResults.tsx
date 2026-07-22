import { ScanResult } from "../../types/scan-result";

import {SummaryCard} from "./SummaryCard";
import { DecisionCard } from "./DecisionCard";
import { RiskScoreCard } from "./RiskScoreCard";
import { CategoryBadges } from "./CategoryBadges";
import { MaskedContentCard } from "./MaskedContentCard";
import { FindingsTable } from "./FindingsTable";
import { HighestSeverityCard } from "./HighestSeverityCard";

type ScanResultsProps = {
    result: ScanResult;
};

export function ScanResults({
    result,
} : ScanResultsProps) {
    return (
        <div className="mt-6 space-y-4">
            <div className="grid gap-4 md:grid-cols-3">
                <DecisionCard decision={result.decision} />
                <RiskScoreCard score={result.risk_score} />
                <HighestSeverityCard severity={result.highest_severity} />
            </div>
            <div className="grid gap-4 md:grid-cols-2">
                <CategoryBadges categories={result.categories} />
                <SummaryCard summary={result.summary} />
            </div>
            <MaskedContentCard content={result.masked_content} />
            <FindingsTable findings={result.findings} />
        </div>
    );
}