import Link from "next/link";

export function CallToActionSection() {
    return (
        <section className="py-24">
            <div className="rouded-3xl border border-zinc-800 bg-zinc-900/50 p-12 text-center">
                <h2 className="text-4xl font-bold">
                    Ready to protect sensitive data?
                </h2>
                <p className="mx-auto mt-4 max-w-2xl text-zinc-400">
                    Start scanning content, detect compliance risks and automatically protect sensitive information.
                </p>
                <div className="mt-8">
                    <Link href="/scan" className="rounded-xl bg-white px-6 py-3 font-medium text-black transition-all hover:scale-[1.02]">
                        Launch Scanner
                    </Link>
                </div>
            </div>
        </section>
    );
}