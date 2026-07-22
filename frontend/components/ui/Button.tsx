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
        <button onClick={onClick} disabled={disabled} className="rounded-xl bg-blue-600 text-white px-6 py-2 font-medium text-black transition-all duration-200 hover:scale-[1.02] hover:shadow-xl active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:scale-100 disabled:hover:shadow-none">
            {children}
        </button>
    );
}