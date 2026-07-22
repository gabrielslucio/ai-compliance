type CardProps = {
    children: React.ReactNode;
};

export function Card({
    children,
}: CardProps) {
    return (
        <div className="rounded-2xl border border-zinc-800 bg-zinc-900/80 p-6 shadow-lg shadow-black/20 backdrop-blur">
            {children}
        </div>
    );    
}