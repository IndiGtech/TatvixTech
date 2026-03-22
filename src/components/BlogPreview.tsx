import Link from "next/link";
import { ArrowRight } from "lucide-react";
import BlogCard from "./BlogCard";
import { getLatestPosts } from "@/data/blogPosts";

export default function BlogPreview() {
    const posts = getLatestPosts(3);

    if (posts.length === 0) {
        return null;
    }

    return (
        <section
            id="insights"
            className="relative w-full border-y border-slate-200 dark:border-white/5 bg-white/70 dark:bg-white/[0.02] backdrop-blur-xl py-24 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-none"
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
                    <div>
                        <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-wider text-black dark:text-primary">
                            Insights
                        </span>
                        <h2 className="font-heading text-3xl font-bold text-slate-900 dark:text-white md:text-4xl">
                            Technical depth from the bench
                        </h2>
                        <p className="mt-4 max-w-2xl text-lg text-slate-800 dark:text-slate-200">
                            Firmware patterns, connectivity architecture, and
                            product-grade embedded practices—written by our
                            engineering team.
                        </p>
                    </div>
                    <Link
                        href="/insights"
                        className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white/90 px-5 py-2.5 text-sm font-bold text-slate-900 transition-all duration-300 hover:bg-gradient-to-r hover:from-primary hover:to-blue-600 hover:text-white hover:border-primary/50 hover:shadow-lg hover:shadow-primary/25 hover:scale-105 backdrop-blur-sm"
                    >
                        View all insights
                        <ArrowRight className="h-4 w-4" />
                    </Link>
                </div>
                <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
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
            </div>
        </section>
    );
}
