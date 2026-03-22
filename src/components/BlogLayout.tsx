import Link from "next/link";
import { ChevronLeft, Clock, User } from "lucide-react";
import ShareButtons from "./ShareButtons";
import { absoluteUrl } from "@/lib/site";
import type { BlogPost } from "@/data/blogPosts";

function formatDate(iso: string): string {
    try {
        return new Intl.DateTimeFormat("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
        }).format(new Date(iso));
    } catch {
        return iso;
    }
}

interface BlogLayoutProps {
    post: BlogPost;
    children: React.ReactNode;
}

export default function BlogLayout({ post, children }: BlogLayoutProps) {
    const url = absoluteUrl(`/insights/${post.slug}`);

    return (
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-8">
            <nav aria-label="Breadcrumb" className="mb-8">
                <Link
                    href="/insights"
                    className="inline-flex items-center gap-1 text-sm font-medium text-slate-700 dark:text-muted transition-colors hover:text-primary"
                >
                    <ChevronLeft className="h-4 w-4" />
                    All insights
                </Link>
            </nav>

            <article className="bg-white/95 dark:bg-white/12 border border-white/70 dark:border-white/20 rounded-3xl p-6 sm:p-8 md:p-12 lg:p-16 backdrop-blur-xl shadow-xl shadow-slate-200/30 dark:shadow-none max-w-none">
                <header className="mb-12 border-b border-slate-200/50 dark:border-white/10 pb-10">
                    <div className="mb-4 flex flex-wrap gap-2">
                        {post.tags.map((tag) => (
                            <span
                                key={tag}
                                className="rounded-full border border-slate-300 bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-900 dark:text-slate-200"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                    <h1 className="mb-6 font-heading text-3xl font-bold leading-tight text-slate-800 dark:text-white md:text-4xl lg:text-5xl">
                        {post.title}
                    </h1>
                    <p className="mb-8 text-lg text-slate-700 dark:text-muted md:text-xl">
                        {post.description}
                    </p>
                    <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
                        <div className="flex flex-wrap items-center gap-4 text-sm text-slate-700 dark:text-muted">
                            <span className="inline-flex items-center gap-2">
                                <User className="h-4 w-4 text-accent" />
                                <span className="text-slate-800 dark:text-text">
                                    {post.author}
                                    {post.authorRole && (
                                        <span className="text-slate-700 dark:text-muted">
                                            {" "}
                                            · {post.authorRole}
                                        </span>
                                    )}
                                </span>
                            </span>
                            <span aria-hidden className="text-slate-400 dark:text-white/20">
                                |
                            </span>
                            <span className="inline-flex items-center gap-1.5">
                                <Clock className="h-4 w-4 text-primary" />
                                {post.readingTimeMinutes} min read
                            </span>
                        </div>
                        <ShareButtons
                            url={url}
                            title={post.title}
                            description={post.description}
                        />
                    </div>
                </header>

                <div className="prose prose-slate dark:prose-invert prose-lg max-w-none">
                    {children}
                </div>
            </article>
        </div>
    );
}
