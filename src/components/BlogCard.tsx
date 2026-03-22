import Link from "next/link";
import { ArrowUpRight, Clock } from "lucide-react";
import { cn } from "@/lib/utils";

export interface BlogCardProps {
    slug: string;
    title: string;
    description: string;
    publishedAt: string;
    readingTimeMinutes: number;
    tags: string[];
    className?: string;
}

function formatDate(iso: string): string {
    try {
        return new Intl.DateTimeFormat("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
        }).format(new Date(iso));
    } catch {
        return iso;
    }
}

export default function BlogCard({
    slug,
    title,
    description,
    publishedAt,
    readingTimeMinutes,
    tags,
    className,
}: BlogCardProps) {
    return (
        <Link
            href={`/insights/${slug}`}
            className={cn(
                "group flex h-full flex-col rounded-2xl border-2 border-slate-300 dark:border-white/20 bg-white/90 dark:bg-white/[0.08] backdrop-blur-xl p-6 transition-all duration-300 shadow-lg shadow-slate-200/40 dark:shadow-[0_8px_32px_rgba(0,0,0,0.2)]",
                "hover:border-primary/60 dark:hover:border-primary/50 hover:bg-white/95 dark:hover:bg-white/[0.12] hover:shadow-xl hover:shadow-slate-200/60 dark:hover:shadow-[0_0_40px_rgba(0,217,255,0.15)] hover:-translate-y-1",
                className
            )}
        >
            <div className="mb-3 flex flex-wrap items-center gap-2 text-xs text-black dark:text-slate-300">
                <span className="inline-flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5 text-primary" />
                    {readingTimeMinutes} min read
                </span>
            </div>
            <h2 className="mb-3 font-heading text-xl font-bold text-slate-900 dark:text-white transition-colors group-hover:text-primary md:text-2xl">
                {title}
            </h2>
            <p className="mb-6 flex-1 text-sm leading-relaxed text-slate-800 dark:text-slate-200 md:text-base">
                {description}
            </p>
            <div className="mt-auto pt-6 flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap gap-2">
                    {tags.slice(0, 3).map((tag) => (
                        <span
                            key={tag}
                            className="rounded-full border border-slate-300 dark:border-slate-600 bg-slate-100 dark:bg-slate-700 px-3 py-1 text-xs font-semibold text-slate-900 dark:text-slate-200"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
                <span className="shrink-0 inline-flex items-center gap-1 text-sm font-bold text-black dark:text-primary">
                    Read
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
            </div>
        </Link>
    );
}
