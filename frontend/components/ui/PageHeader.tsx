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
            <h1 className="text-4xl font-bold">
                {title}
            </h1>
            <p className="mt-2 text-zinc-400">
                {description}
            </p>
        </header>
    );
}