import {Card} from "../ui/Card";

type CategoryBadgesProps = {
    categories: string[];
};

export function CategoryBadges({
    categories,
} : CategoryBadgesProps) {
    return (
        <Card>
            <h2 className="mb-4 text-sm text-zinc-400">
                Categories
            </h2>
            <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                    <span key={category} className="rounded-full border border-zinc-700 bg-zinc-800 px-3 py-1 text-sm">
                        {category.toUpperCase()}
                    </span>
                ))}
            </div>
        </Card>
    );
}