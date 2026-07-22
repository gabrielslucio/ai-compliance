import {Card} from "../ui/Card";
import { IoSearchOutline, IoWarningOutline, IoShieldOutline } from "react-icons/io5"; 

export function FeaturesSection() {
    return (
        <section id="features" className="py-16 rounded-3xl border border-zinc-800 bg-zinc-800/20 p-10 mt-10">
            <h2 className="mb-10 text-4xl md:text-5xl font-bold tracking-tight">
                Built for AI Compliance
            </h2>
            <div className="grid gap-4 md:grid-cols-3">
                <Card>
                    <h3 className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-2xl">
                        <IoSearchOutline />
                    </h3>
                    <h3 className="mb-2 text-lg font-semibold">
                        Sensitive Data Detection
                    </h3>
                    <p className="text-zinc-400">
                        Detect emails, passwords, credit cards, API keys and other sensitive data.
                    </p>
                </Card>
                <Card>
                    <h3 className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500/10 text-2xl">
                        <IoWarningOutline />
                    </h3>
                    <h3 className="mb-2 text-lg font-semibold">
                        Risk Scoring
                    </h3>
                    <p className="text-zinc-400">
                        Automatically classify findings and calculate a risk score.
                    </p>
                </Card>
                <Card>
                    <h3 className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/10 text-2xl">
                       <IoShieldOutline />
                    </h3>
                    <h3 className="mb-2 text-lg font-semibold">
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