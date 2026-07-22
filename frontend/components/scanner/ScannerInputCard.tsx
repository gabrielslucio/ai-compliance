import {Button} from "../ui/Button";
import {Card} from "../ui/Card";
import {Textarea} from "../ui/Textarea";


type ScannerInputCardProps = {
    content: string;
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    onScan: () => void;
};

export function ScannerInputCard({
    content,
    onChange,
    onScan
}: ScannerInputCardProps) {
    return (
        <Card>
            <div className="space-y-4">
                <Textarea value={content} placeholder="Paste content here..." onChange={onChange} />
            </div>
            <Button onClick={onScan}>
                Scan
            </Button>
        </Card>
    );
}

