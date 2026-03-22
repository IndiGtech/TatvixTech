"use client";

export default function InsightsError({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    return (
        <div className="container mx-auto max-w-lg px-4 py-24 text-center">
            <h2 className="mb-2 font-heading text-xl font-bold text-white">
                Could not load insights
            </h2>
            <p className="mb-6 text-sm text-muted">
                {error.message || "An unexpected error occurred."}
            </p>
            <button
                type="button"
                onClick={() => reset()}
                className="rounded-xl bg-primary px-5 py-2.5 font-medium text-bg transition-colors hover:bg-cyan-400"
            >
                Try again
            </button>
        </div>
    );
}
