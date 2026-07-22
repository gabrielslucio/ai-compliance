type ButtonProps = {
    children: React.ReactNode;
    onClick?: () => void;
    disabled?: boolean;
};

export function Button({
    children,
    onClick,
    disabled = false,
} : ButtonProps) {
    return (
        <button onClick={onClick} className="rounded-xl bg-white px-6 py-2 font-medium text-black transition hover:opacity-90 disabled: cursor-not-allowed disabled: opacity-50">
            {children}
        </button>
    );
}