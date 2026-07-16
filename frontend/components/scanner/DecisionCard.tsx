import {Card} from "../ui/Card";

type DecisionCardProps = {
    decision: string;
};

export function DecisionCard({
    decision,
}: DecisionCardProps) {
    return (
        <Card>
            <h2 className="mb-2 text-sm text-zinc-400">
                Decision
            </h2>
            <p className={`text-2xl font-bold ${decision === "block" ? "text-red-500" : decision === "warn" ? "text-amber-500" : "text-green-500"}`}>
                {decision.toUpperCase()}
            </p>
        </Card>
    );
}