type CardProps = {
    children: React.ReactNode;
};

export function Card({
    children,
}: CardProps) {
    return (
        <div className="rounded-2xl border border-zinc-800 bg-zinc-900/80 p-6 shadow-lg shadow-black/20 backdrop-blur hover:border-zinc-700 hover:-translate-y-1 transition-all duration-300 hover:border-blue-500/20">
            {children}
        </div>
    );    
}