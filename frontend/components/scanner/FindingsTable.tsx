import {Card} from "../ui/Card";
import {Finding} from "../../types/finding";
import {StatusBadge} from "../ui/StatusBadge";
import {Badge} from "../ui/Badge";

type FindingsTableProps = {
    findings: Finding[];
};

export function FindingsTable({
    findings,
} : FindingsTableProps) {
    return (
        <Card>
            <h2 className="mb-4 text-sm text-zinc-400">
                Findings
            </h2>
            <table className="w-full text-sm">
                <thead>
                    <tr className="border-b border-zinc-800">
                        <th className="py-2 text-left">
                            Type
                        </th>
                        <th className="py-2 text-left">
                            Severity
                        </th>
                        <th className="py-2 text-left">
                            Category
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {findings.map((finding, index) => (
                        <tr key={index} className="border-b border-zinc-800">
                            <td className="py-2"> 
                                {finding.type}
                            </td>
                            <td className="py-2">
                                <StatusBadge value={finding.severity} />
                            </td>
                            <td className="py-2">
                                <Badge>
                                    {finding.category.toUpperCase()}
                                </Badge>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Card>
    );
}