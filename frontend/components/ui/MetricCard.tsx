import {Card} from "./Card";

type MetricCardProps = {
    label: string;
    value: string | number;
    color?:string;
};

export function MetricCard({
    label,
    value,
    color = "text-zinc-50",
}: MetricCardProps) {
    return (
        <Card>
            <p className="text-sm text-zinc-400">
                {label}
            </p>
            <h2 className={`mt-2 text-3xl font-bold ${color}`}>
                {value}
            </h2>
        </Card>
    );
}