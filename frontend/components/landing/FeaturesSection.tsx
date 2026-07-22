import {Card} from "../ui/Card";

export function FeaturesSection() {
    return (
        <section id="features" className="py-16">
            <h2 className="mb-8 text-4xl font-bold">
                Built for AI Compliance
            </h2>
            <div className="grid gap-4 md:grid-cols-3">
                <Card>
                    <h3 className="mb-2 font-semibold">
                        Sensitive Data Detection
                    </h3>
                    <p className="text-zinc-400">
                        Detect emails, passwords, credit cards, API keys and other sensitive data.
                    </p>
                </Card>
                <Card>
                    <h3 className="mb-2 font-semibold">
                        Risk Scoring
                    </h3>
                    <p className="text-zinc-400">
                        Automatically classify findings and calculate a risk score.
                    </p>
                </Card>
                <Card>
                    <h3 className="mb-2 font-semibold">
                        Automated Masking
                    </h3>
                    <p className="text-zinc-400">
                        Replace sensitive content before sharing information externally.
                    </p>
                </Card>
            </div>
        </section>
    );
};