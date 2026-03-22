export default function InsightsLoading() {
    return (
        <div className="mx-auto w-full max-w-[min(100%,88rem)] px-3 pb-20 pt-8 sm:px-5 md:px-8 lg:px-12 xl:px-16">
            <div className="mb-14 h-10 w-48 animate-pulse rounded-lg bg-white/10" />
            <div className="mb-4 h-12 max-w-xl animate-pulse rounded-lg bg-white/10" />
            <div className="mb-14 h-24 max-w-2xl animate-pulse rounded-lg bg-white/5" />
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {[1, 2, 3].map((i) => (
                    <div
                        key={i}
                        className="h-72 animate-pulse rounded-2xl border border-white/5 bg-white/[0.04]"
                    />
                ))}
            </div>
        </div>
    );
}
