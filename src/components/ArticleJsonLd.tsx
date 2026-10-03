import { absoluteUrl, SITE_URL } from "@/lib/site";
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
        // Person author (with job title) is a stronger E-E-A-T signal than Organization.
        author: {
            "@type": "Person",
            name: post.author,
            ...(post.authorRole ? { jobTitle: post.authorRole } : {}),
            worksFor: { "@id": `${SITE_URL}/#organization` },
        },
        publisher: {
            "@id": `${SITE_URL}/#organization`,
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
