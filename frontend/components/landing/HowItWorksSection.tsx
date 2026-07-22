export function HowItWorksSection() {
    return(
        <section className="py-24">
            <h2 className="mb-12 text-4xl font-bold">
                How It Works
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
                <div>
                    <div className="mb-4 text-5xl font-bold text-zinc-700">
                        01
                    </div>
                    <h3 className="mb-2 text-xl font-semibold">
                        Scan Content
                    </h3>
                    <p className="text-zinc-400">
                        Submit text for compliance analysis and sensitive information detection.
                    </p>
                </div>
                <div>
                    <div className="mb-4 text-5xl font-bold text-zinc-700">
                        02
                    </div>
                    <h3 className="mb-2 text-xl font-semibold">
                        Classify Findings
                    </h3>
                    <p className="text-zinc-400">
                        Automatically identify risks, categories and severity levels.
                    </p>                    
                </div>
                <div>
                    <div className="mb-4 text-5xl font-bold text-zinc-700">
                        03
                    </div>
                    <h3 className="mb-2 text-xl font-semibold">
                        Protect Data
                    </h3>
                    <p className="text-zinc-400">
                        Mask senstive information before sharing externally.
                    </p>
                </div>               
            </div>
        </section>
    );
}