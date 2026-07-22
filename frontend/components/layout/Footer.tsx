import Link from "next/link";

export function Footer() {
    return(
        <footer className="border-t border-zinc-800 py-8">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                <div>
                    <h3 className="font-semibold">
                        AI Compliance
                    </h3>
                    <p className="mt-2 text-sm text-zinc-400">
                        Detect, classify and proect sensitive information.
                    </p>
                </div>
                <div className="flex gap-6 text-sm text-zinc-400">
                    <Link href="/scan">
                        Scanner
                    </Link>
                    <a href="#features">
                        Find out more
                    </a>
                </div>
            </div>
        </footer>
    );
}