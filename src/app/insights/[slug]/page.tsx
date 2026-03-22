import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogLayout from "@/components/BlogLayout";
import BlogPostContent from "@/components/BlogPostContent";
import BlogCard from "@/components/BlogCard";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import {
    getAllSlugs,
    getPostBySlug,
    getRelatedPosts,
} from "@/data/blogPosts";
import { absoluteUrl } from "@/lib/site";

type PageProps = {
    params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
    return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
    params,
}: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const post = getPostBySlug(slug);
    if (!post) {
        return { title: { absolute: "Article not found | Tatvix" } };
    }
    const url = absoluteUrl(`/insights/${post.slug}`);
    return {
        title: {
            absolute: `${post.title} | Insights · Tatvix`,
        },
        description: post.description,
        authors: [{ name: post.author }],
        keywords: post.tags,
        alternates: { canonical: url },
        openGraph: {
            title: post.title,
            description: post.description,
            type: "article",
            publishedTime: post.publishedAt,
            modifiedTime: post.updatedAt ?? post.publishedAt,
            url,
            tags: post.tags,
        },
        twitter: {
            card: "summary_large_image",
            title: post.title,
            description: post.description,
        },
    };
}

export default async function InsightArticlePage({ params }: PageProps) {
    const { slug } = await params;
    const post = getPostBySlug(slug);
    if (!post) {
        notFound();
    }

    const related = getRelatedPosts(slug, 2);

    return (
        <>
            <ArticleJsonLd post={post} />
            <BlogLayout post={post}>
                <BlogPostContent sections={post.sections} />
                {related.length > 0 && (
                    <aside className="mt-20 w-full border-t border-slate-200/50 dark:border-white/10 pt-12">
                        <h2 className="mb-8 font-heading text-2xl font-bold text-slate-800 dark:text-white">
                            Related insights
                        </h2>
                        <div className="grid gap-6 sm:grid-cols-2">
                            {related.map((r) => (
                                <BlogCard
                                    key={r.slug}
                                    slug={r.slug}
                                    title={r.title}
                                    description={r.description}
                                    publishedAt={r.publishedAt}
                                    readingTimeMinutes={
                                        r.readingTimeMinutes
                                    }
                                    tags={r.tags}
                                />
                            ))}
                        </div>
                    </aside>
                )}
            </BlogLayout>
        </>
    );
}
