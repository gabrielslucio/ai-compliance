import {Card} from "../ui/Card";

type MaskedContentCardProps = {
    content: string;
};

export function MaskedContentCard({
    content,
}: MaskedContentCardProps) {
    return (
        <Card>
            <h2 className="mb-4 text-sm text-zinc-400">
                Masked Content
            </h2>
            <pre className="whitespace-pre-wrap break-words text-sm text-zinc-200">
                {content}
            </pre>
        </Card>
    );
}