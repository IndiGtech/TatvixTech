export const SITE_URL = (
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://tatvixtech.com"
).replace(/\/$/, "");

export function absoluteUrl(path: string): string {
    const p = path.startsWith("/") ? path : `/${path}`;
    return `${SITE_URL}${p}`;
}

// SEO Configuration
export const SEO_CONFIG = {
    siteName: "Tatvix Technologies",
    siteDescription: "Leading embedded systems and IoT development company specializing in hardware design, firmware development, and complete product solutions from concept to mass production.",
    defaultTitle: "Tatvix Technologies - Embedded Systems & IoT Development Company",
    titleTemplate: "%s | Tatvix Technologies",
    keywords: [
        "embedded systems development",
        "IoT development company",
        "hardware design services",
        "firmware development",
        "product development company",
        "embedded software",
        "PCB design",
        "microcontroller programming",
        "wireless connectivity solutions",
        "industrial IoT",
        "medical device development",
        "consumer electronics",
        "prototype to production",
        "embedded consulting",
        "hardware engineering"
    ],
    author: "Tatvix Technologies",
    creator: "Tatvix Technologies",
    publisher: "Tatvix Technologies",
    robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    googleSiteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
    bingSiteVerification: process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION,
};

// Business Information for Local SEO
export const BUSINESS_INFO = {
    name: process.env.NEXT_PUBLIC_BUSINESS_NAME || "Tatvix Technologies",
    phone: process.env.NEXT_PUBLIC_BUSINESS_PHONE || "+1-XXX-XXX-XXXX",
    email: process.env.NEXT_PUBLIC_BUSINESS_EMAIL || "info@tatvixtech.com",
    address: process.env.NEXT_PUBLIC_BUSINESS_ADDRESS || "Your Business Address",
    city: process.env.NEXT_PUBLIC_BUSINESS_CITY || "Your City",
    state: process.env.NEXT_PUBLIC_BUSINESS_STATE || "Your State",
    zip: process.env.NEXT_PUBLIC_BUSINESS_ZIP || "Your ZIP",
    country: process.env.NEXT_PUBLIC_BUSINESS_COUNTRY || "United States",
    linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL || "https://www.linkedin.com/company/tatvix",
    twitter: process.env.NEXT_PUBLIC_TWITTER_URL || "https://twitter.com/tatvix",
    facebook: process.env.NEXT_PUBLIC_FACEBOOK_URL || "https://facebook.com/tatvix",
};
