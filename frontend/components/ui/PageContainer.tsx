type PageContainerProps = {
    children: React.ReactNode;
};

export function PageContainer({
    children,
} : PageContainerProps) {
    return (
        <main className="min-h-screen bg-zinc-950 p-8 text-zinc-50">
            <div className="mx-auto max-w-6xl">
                {children}
            </div>
        </main>
    );
}