import {MetricCard} from "../ui/MetricCard";

type DecisionCardProps = {
    decision: string;
};

export function DecisionCard({
    decision
}: DecisionCardProps) {
    const color =
        decision === "block"
        ? "text-red-500"
        : decision === "warn"
        ? "text-amber-500"
        : "text-green-500";

    return (
        <MetricCard label="Decision" value={decision.toUpperCase()} color={color} />
    );
}