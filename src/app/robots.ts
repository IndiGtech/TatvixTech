import { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

// Paths that should never be crawled by anyone.
const PRIVATE_PATHS = ["/api/", "/private/", "/_next/", "/admin/", "/tmp/"];

// AI search/answer crawlers we explicitly allow — a blocked bot cannot cite us.
const AI_BOTS = [
    "GPTBot",
    "ChatGPT-User",
    "OAI-SearchBot",
    "PerplexityBot",
    "ClaudeBot",
    "anthropic-ai",
    "Claude-Web",
    "Google-Extended",
    "Applebot-Extended",
];

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: "*",
                allow: "/",
                // Dropped "*.json$" (it blocked /manifest.json) and crawlDelay
                // (ignored by Google). Kept search/filter query traps.
                disallow: [...PRIVATE_PATHS, "/search?*", "/filter?*"],
            },
            // Explicitly allow the major AI crawlers so we remain citable.
            ...AI_BOTS.map((userAgent) => ({
                userAgent,
                allow: "/",
                disallow: PRIVATE_PATHS,
            })),
            // Block the training-only Common Crawl bot while keeping search bots allowed.
            {
                userAgent: "CCBot",
                disallow: "/",
            },
        ],
        sitemap: `${SITE_URL}/sitemap.xml`,
        host: SITE_URL,
    };
}
