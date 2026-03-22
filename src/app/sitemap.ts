import { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { getAllPostsSorted } from "@/data/blogPosts";

export default function sitemap(): MetadataRoute.Sitemap {
    const posts = getAllPostsSorted();
    
    const blogUrls = posts.map((post) => ({
        url: `${SITE_URL}/insights/${post.slug}`,
        lastModified: new Date(post.updatedAt || post.publishedAt),
        changeFrequency: "weekly" as const,
        priority: 0.7,
    }));

    // Service-specific pages for better SEO targeting
    const serviceUrls = [
        {
            url: `${SITE_URL}/services/embedded-hardware-design`,
            lastModified: new Date(),
            changeFrequency: "monthly" as const,
            priority: 0.8,
        },
        {
            url: `${SITE_URL}/services/firmware-development`,
            lastModified: new Date(),
            changeFrequency: "monthly" as const,
            priority: 0.8,
        },
        {
            url: `${SITE_URL}/services/iot-development`,
            lastModified: new Date(),
            changeFrequency: "monthly" as const,
            priority: 0.8,
        },
        {
            url: `${SITE_URL}/services/pcb-design`,
            lastModified: new Date(),
            changeFrequency: "monthly" as const,
            priority: 0.8,
        },
    ];

    // Industry-specific pages
    const industryUrls = [
        {
            url: `${SITE_URL}/industries/medical-devices`,
            lastModified: new Date(),
            changeFrequency: "monthly" as const,
            priority: 0.7,
        },
        {
            url: `${SITE_URL}/industries/industrial-iot`,
            lastModified: new Date(),
            changeFrequency: "monthly" as const,
            priority: 0.7,
        },
        {
            url: `${SITE_URL}/industries/consumer-electronics`,
            lastModified: new Date(),
            changeFrequency: "monthly" as const,
            priority: 0.7,
        },
    ];

    const staticUrls = [
        {
            url: `${SITE_URL}`,
            lastModified: new Date(),
            changeFrequency: "daily" as const,
            priority: 1.0,
        },
        {
            url: `${SITE_URL}/services`,
            lastModified: new Date(),
            changeFrequency: "weekly" as const,
            priority: 0.9,
        },
        {
            url: `${SITE_URL}/process`,
            lastModified: new Date(),
            changeFrequency: "monthly" as const,
            priority: 0.8,
        },
        {
            url: `${SITE_URL}/industries`,
            lastModified: new Date(),
            changeFrequency: "monthly" as const,
            priority: 0.8,
        },
        {
            url: `${SITE_URL}/insights`,
            lastModified: new Date(),
            changeFrequency: "daily" as const,
            priority: 0.8,
        },
        {
            url: `${SITE_URL}/careers`,
            lastModified: new Date(),
            changeFrequency: "weekly" as const,
            priority: 0.6,
        },
        {
            url: `${SITE_URL}/about`,
            lastModified: new Date(),
            changeFrequency: "monthly" as const,
            priority: 0.7,
        },
        {
            url: `${SITE_URL}/contact`,
            lastModified: new Date(),
            changeFrequency: "monthly" as const,
            priority: 0.6,
        },
        {
            url: `${SITE_URL}/privacy`,
            lastModified: new Date(),
            changeFrequency: "yearly" as const,
            priority: 0.3,
        },
        {
            url: `${SITE_URL}/terms`,
            lastModified: new Date(),
            changeFrequency: "yearly" as const,
            priority: 0.3,
        },
    ];

    return [...staticUrls, ...serviceUrls, ...industryUrls, ...blogUrls];
}