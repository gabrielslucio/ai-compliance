export function DashboardPreview() {
    return (
        <div className="rounded-3xl border border-zinc-800 bg-zinc-900/60 p-6 backdrop-blur shadow-2x1 shadow-blue-500/10 mr-5">
            <div className="grip gap-6">
                <div className="rounded-2xl border border-zinc-800 p-4">
                    <p className="text-sm text-zinc-400">
                        Decision
                    </p>
                    <p className="mt-2 text-2x1 font-bold text-red-400">
                        BLOCK
                    </p>
                </div>
                <div className="grid grid-cols-2 gap-5 mt-5">
                    <div className="rounded-2xl border border-zinc-800 p-4">
                        <p className="text-sm text-zinc-400">
                            Risk Score
                        </p>
                        <p className="mt-2 text-2xl font-bold">
                            100
                        </p>
                    </div>
                    <div className="rounded-2xl border border-zinc-800 p-4">
                        <p className="text-sm text-zinc-400">
                            Findings
                        </p>
                        <p className="mt-2 text-2xl font-bold">
                            3
                        </p>
                    </div>
                </div>
                <div className="rounded-2xl border border-zinc-800 p-4 mt-5">
                    <p className="mb-3 text-sm text-zinc-400">
                        Categories
                    </p>
                    <div className="flex gap-2">
                        <span className="rounded-full bg-blue-500/10 px-3 py-1 text-sm text-blue-400">
                            PII
                        </span>
                        <span className="rounded-full bg-blue-500/10 px-3 py-1 text-sm text-blue-400">
                            SECRET
                        </span>
                        <span className="rounded-full bg-blue-500/10 px-3 py-1 text-sm text-blue-400">
                            FINANCIAL
                        </span>
                    </div>

                </div>
            </div>
        </div>
    );
}