type ButtonProps = {
    children: React.ReactNode;
    onClick?: () => void;
};

export function Button({
    children,
    onClick,
} : ButtonProps) {
    return (
        <button onClick={onClick} className="rounded-xl bg-white px-6 py-2 font-medium text-black transition hover:opacity-90">
            {children}
        </button>
    );
}