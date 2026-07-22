import {MetricCard} from "../ui/MetricCard";

type HighestSeverityCardProps = {
    severity: string;
};

export function HighestSeverityCard({
    severity,
}: HighestSeverityCardProps) {
    const color =
    severity === "critical"
    ? "text-red-500"
    : severity === "high"
    ? "text-amber-500"
    : "text-blue-500";

    return (
        <MetricCard label="Highest Severity" value={severity.toUpperCase()} color={color} />
    );
};