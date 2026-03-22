import type { Metadata } from "next";
import Link from "next/link";
import BlogCard from "@/components/BlogCard";
import { getAllPostsSorted } from "@/data/blogPosts";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
    title: {
        absolute: "Embedded Systems Technical Insights | ESP32, STM32, IoT Architecture",
    },
    description:
        "Technical articles on embedded firmware, ESP32 systems, connectivity, and building reliable consumer and industrial IoT products.",
    alternates: {
        canonical: absoluteUrl("/insights"),
    },
    openGraph: {
        url: absoluteUrl("/insights"),
        title: "Embedded Systems Technical Insights | ESP32, STM32, IoT Architecture",
        description:
            "Technical articles on embedded firmware, ESP32, and IoT architecture.",
        type: "website",
    },
};

export default function InsightsPage() {
    const posts = getAllPostsSorted();

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <nav className="mb-8">
                <Link
                    href="/"
                    className="text-sm font-medium text-slate-700 dark:text-muted transition-colors hover:text-primary"
                >
                    ← Back to home
                </Link>
            </nav>
            <header className="mb-14 max-w-3xl">
                <h1 className="mb-4 font-heading text-4xl font-bold text-slate-800 dark:text-white md:text-5xl">
                    Insights
                </h1>
                <p className="text-lg text-slate-700 dark:text-muted md:text-xl">
                    Practical notes from the lab—architecture, debugging,
                    connectivity, and what it takes to ship embedded products
                    that survive the real world.
                </p>
            </header>
            {posts.length === 0 ? (
                <div className="bg-white/95 dark:bg-white/12 border border-white/70 dark:border-white/20 rounded-2xl p-8 backdrop-blur-xl shadow-xl shadow-slate-200/30 dark:shadow-none text-center">
                    <p className="text-slate-700 dark:text-muted">
                        No articles yet. Check back soon.
                    </p>
                </div>
            ) : (
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {posts.map((post) => (
                        <BlogCard
                            key={post.slug}
                            slug={post.slug}
                            title={post.title}
                            description={post.description}
                            publishedAt={post.publishedAt}
                            readingTimeMinutes={post.readingTimeMinutes}
                            tags={post.tags}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}
