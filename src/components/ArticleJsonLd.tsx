import { absoluteUrl } from "@/lib/site";
import type { BlogPost } from "@/data/blogPosts";

interface ArticleJsonLdProps {
    post: BlogPost;
}

export default function ArticleJsonLd({ post }: ArticleJsonLdProps) {
    const url = absoluteUrl(`/insights/${post.slug}`);
    const data = {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: post.title,
        description: post.description,
        datePublished: post.publishedAt,
        dateModified: post.updatedAt ?? post.publishedAt,
        author: {
            "@type": "Organization",
            name: post.author,
        },
        publisher: {
            "@type": "Organization",
            name: "Tatvix",
            url: absoluteUrl("/"),
        },
        mainEntityOfPage: {
            "@type": "WebPage",
            "@id": url,
        },
        url,
        keywords: post.tags.join(", "),
        articleSection: "Embedded systems",
        inLanguage: "en-US",
        wordCount: post.readingTimeMinutes * 200,
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
    );
}
