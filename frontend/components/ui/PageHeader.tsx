import {Badge} from "./Badge";

type PageHeaderProps = {
    title: string;
    description: string;
};

export function PageHeader({
    title,
    description,
} : PageHeaderProps) {
    return (
        <header className="mb-8">
            <div className="mb-4 flex flex-wrap gap-2">
                <Badge>6 DETECTORS</Badge>
                <Badge>MASKING ENGINE</Badge>
                <Badge>RISK SCORING</Badge>
            </div>
            <h1 className="text-5xl font-bold tracking-tight">
                {title}
            </h1>
            <p className="mt-4 max-w-2xl text-zinc-400">
                {description}
            </p>
        </header>
    );
}