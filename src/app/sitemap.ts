import { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { getAllPostsSorted } from "@/data/blogPosts";
import { services } from "@/data/services";
import { industries } from "@/data/industries";

export default function sitemap(): MetadataRoute.Sitemap {
    const now = new Date();

    const posts = getAllPostsSorted();
    const blogUrls = posts.map((post) => ({
        url: `${SITE_URL}/insights/${post.slug}`,
        lastModified: new Date(post.updatedAt || post.publishedAt),
        changeFrequency: "weekly" as const,
        priority: 0.7,
    }));

    // Service + industry URLs are generated from the data modules so the sitemap
    // always matches the slugs that actually have pages (single source of truth).
    const serviceUrls = services.map((service) => ({
        url: `${SITE_URL}/services/${service.slug}`,
        lastModified: now,
        changeFrequency: "monthly" as const,
        priority: 0.8,
    }));

    const industryUrls = industries.map((industry) => ({
        url: `${SITE_URL}/industries/${industry.slug}`,
        lastModified: now,
        changeFrequency: "monthly" as const,
        priority: 0.7,
    }));

    // Only routes that actually exist (removed /about and /contact — they 404).
    const staticUrls = [
        { url: `${SITE_URL}`, changeFrequency: "daily" as const, priority: 1.0 },
        { url: `${SITE_URL}/services`, changeFrequency: "weekly" as const, priority: 0.9 },
        { url: `${SITE_URL}/process`, changeFrequency: "monthly" as const, priority: 0.8 },
        { url: `${SITE_URL}/industries`, changeFrequency: "monthly" as const, priority: 0.8 },
        { url: `${SITE_URL}/insights`, changeFrequency: "daily" as const, priority: 0.8 },
        { url: `${SITE_URL}/careers`, changeFrequency: "weekly" as const, priority: 0.6 },
        { url: `${SITE_URL}/privacy`, changeFrequency: "yearly" as const, priority: 0.3 },
        { url: `${SITE_URL}/terms`, changeFrequency: "yearly" as const, priority: 0.3 },
    ].map((entry) => ({ ...entry, lastModified: now }));

    return [...staticUrls, ...serviceUrls, ...industryUrls, ...blogUrls];
}
