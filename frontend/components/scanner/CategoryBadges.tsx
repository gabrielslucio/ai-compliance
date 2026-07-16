import {Card} from "../ui/Card";
import {Badge} from "../ui/Badge";

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
                    <Badge key={category}>
                        {category.toUpperCase()}
                    </Badge>
                ))}
            </div>
        </Card>
    );
}