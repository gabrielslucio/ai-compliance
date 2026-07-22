import {MetricCard} from "../ui/MetricCard";

type RiskScoreCardProps = {
    score: number;
};

export function RiskScoreCard({
    score,
} : RiskScoreCardProps) {
    return (
        <MetricCard label="Risk Score" value={score} />
    );
}