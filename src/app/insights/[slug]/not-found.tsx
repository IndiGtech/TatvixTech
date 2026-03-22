import Link from "next/link";

export default function InsightNotFound() {
    return (
        <div className="container mx-auto max-w-lg px-4 py-24 text-center">
            <h1 className="mb-4 font-heading text-3xl font-bold text-white">
                Article not found
            </h1>
            <p className="mb-8 text-muted">
                This insight may have moved or the link is incorrect.
            </p>
            <Link
                href="/insights"
                className="inline-flex rounded-xl bg-primary px-6 py-3 font-medium text-bg transition-colors hover:bg-cyan-400"
            >
                Browse all insights
            </Link>
        </div>
    );
}
