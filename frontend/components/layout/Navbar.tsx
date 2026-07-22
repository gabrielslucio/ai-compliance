import Link from "next/link";

export function Navbar() {
    return (
        <nav className="flex items-center justify-between py-6">
            <Link href="/" className="text-lg font-semibold">
                AI Compliance
            </Link>
            <div className="flex gap-6 text-zinc-400">
                <a href="#features" className="hover:text-white transition-colors">
                    Features
                </a>
                <Link href="/scan" className="hover:text-white transition-colors">
                    Scanner
                </Link>
            </div>
        </nav>
    );
}