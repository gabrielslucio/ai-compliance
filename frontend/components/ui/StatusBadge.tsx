type StatusBadgeProps = {
    value: string;
};

export function StatusBadge({
    value,
}: StatusBadgeProps) {
    const color =
        value.toLowerCase() === "critical" ||
        value.toLowerCase() === "block"
        ? "bg-red-500/10 text-red-400 border-red-500/20"
        : value.toLowerCase() === "high" ||
          value.toLowerCase() === "warn"
        ? "bg-amber-500/10 text-amber-400 border-amber-500/20"
        : value.toLowerCase() === "allow"
        ? "bg-green-500/10 text-green-400 border-green-500/20"
        : "bg-blue-500/10 text-blue-400 border-blue-500/20";

    return (
        <span className={`inline-flex rounded-full border px-3 py-1 text-xs font-medium ${color}`}>
            {value.toUpperCase()}
        </span>
    );
}