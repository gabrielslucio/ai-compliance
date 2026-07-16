import {Card} from "../ui/Card";

type RiskScoreCardProps = {
    score: number;
};

export function RiskScoreCard({
    score,
}: RiskScoreCardProps) {
    return (
        <Card>
            <h2 className="mb-2 text-sm text-zinc-400">
                Risk Score
            </h2>
            <p className="text-2xl font-bold">
                {score}
            </p>
        </Card>
    );
}