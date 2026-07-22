import {Card} from "../ui/Card";

type SummaryCardProps ={
    summary: {
        total_findings: number;
        by_category: Record<string, number>;
    };
};

export function SummaryCard({
    summary,
}: SummaryCardProps) {
    return (
        <Card>
            <h2 className="mb-4 text-sm text-zinc-400">
                Findings Summary
            </h2>
            <div className="space-y-3">
                <div className="flex justify-between">
                    <span>Total Findings</span>
                    <span>{summary.total_findings}</span>
                </div>

                {Object.entries(summary.by_category).map(
                    ([category, count]) => (
                        <div key={category} className="flex justify-between"> 
                            <span className="capitalize">
                                {category}
                            </span>
                            <span>
                                {count}
                            </span>
                        </div>
                    )
                )}
            </div>
        </Card>
    );
};