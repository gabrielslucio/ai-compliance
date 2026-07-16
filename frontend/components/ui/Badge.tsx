type BadgeProps = {
    children: React.ReactNode;
};

export function Badge({
    children,
} : BadgeProps) {
    return (
        <span className="rounded-full border border-zinc-700 bg-zinc-800 px-3 py-1 text-sm">
            {children}
        </span>
    )
}