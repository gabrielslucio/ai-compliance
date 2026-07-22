import Link from "next/link";
import {DashboardPreview} from "./DashboardPreview";


export function HeroSection() {
    return (
       <section className="relative py-10">

    <div className="absolute right-[-250px] top-[-150px] h-[700px] w-[700px] rounded-full bg-blue-500/20 blur-[120px] pointer-events-none" />

    <div className="absolute left-[-200px] top-[100px] h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-[120px]" />

    <div className="relative grid items-center gap-12 lg:grid-cols-2">
        <div>
            <div className="mb-4 inline-flex rounded-full border border-zinc-800 px-4 py-2 text-sm text-zinc-400">
                AI Compliance • Security • Risk Analytics
            </div>
            <h1 className="text-5xl font-bold tracking-tight md:text-7xl">
                Detect, classify and protect
                <span
                    className="
                        bg-gradient-to-r
                        from-blue-400
                        to-cyan-400
                        bg-clip-text
                        text-transparent
                    "
                >
                    {" "}sensitive information.
                </span>
            </h1>
            <p className="mt-6 max-w-2xl text-xl leading-8 text-zinc-400">
                Scan content for secrets, personal data and financial information.
                Automatically assess risk, categorize findings and protect sensitive
                data before sharing.
            </p>
            <div className="mt-8 flex flex-row gap-4">
                <Link href="/scan" className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 font-medium text-black transition-all duration-200 hover:scale-[1.03] hover:shadow-xl">
                    Try the Scanner
                </Link>
                <a href="#features" className="inline-flex items-center justify-center rounded-xl border border-zinc-700 px-6 py-3 font-medium text-zinc-100 transition-all duration:200 hover:boder-blue-500 hover:text-blue-400">
                    Learn More
                </a>
            </div>
            <div className="mt-8 flex flex-wrap gap-6 text-sm text-zinc-500">
                <span>6 Active Detectors</span>
                <span>Risk Scoring Engine</span>
                <span>Automated Masking</span>
            </div>
        </div>

        <div className="hidden lg:block">
            <DashboardPreview />
        </div>
    </div>
</section>
    );
}