import { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: "*",
                allow: "/",
                disallow: [
                    "/api/",
                    "/private/",
                    "/_next/",
                    "/admin/",
                    "/tmp/",
                    "*.json$",
                    "/search?*",
                    "/filter?*"
                ],
                crawlDelay: 1,
            },
            {
                userAgent: "Googlebot",
                allow: "/",
                disallow: [
                    "/api/",
                    "/private/",
                    "/_next/",
                    "/admin/"
                ],
            },
            {
                userAgent: "Bingbot",
                allow: "/",
                disallow: [
                    "/api/",
                    "/private/",
                    "/_next/",
                    "/admin/"
                ],
            }
        ],
        sitemap: `${SITE_URL}/sitemap.xml`,
        host: SITE_URL,
    };
}