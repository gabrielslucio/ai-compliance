import {Button} from "../ui/Button";
import {Card} from "../ui/Card";
import {Textarea} from "../ui/Textarea";


type ScannerInputCardProps = {
    content: string;
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    onScan: () => void;
    isLoading: boolean;
};

export function ScannerInputCard({
    content,
    onChange,
    onScan,
    isLoading,
}: ScannerInputCardProps) {
    return (
        <Card>
            <div className="space-y-4">
                <Textarea value={content} placeholder="Paste content here..." onChange={onChange} />
            </div>
            <Button onClick={onScan} disabled={isLoading}>
                {isLoading ? "Scanning..." : "Scan Content"}
            </Button>
        </Card>
    );
}

