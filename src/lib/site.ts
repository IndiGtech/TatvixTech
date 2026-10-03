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

// Brand assets (App Router file conventions auto-generate the favicon/OG image;
// these are the explicit references used inside JSON-LD).
export const LOGO_URL = `${SITE_URL}/Logo2.png`;
export const OG_IMAGE_URL = `${SITE_URL}/opengraph-image`;

// Business Information for Local SEO.
// India HQ, global market. Real values come from .env.local; defaults below are
// India-based (no placeholder/fake-US data) so schema is never penalized.
// NOTE: set NEXT_PUBLIC_BUSINESS_ZIP in .env.local (currently a placeholder) — leave
// `zip` empty rather than emitting "Your ZIP" into structured data.
const rawZip = process.env.NEXT_PUBLIC_BUSINESS_ZIP;
export const BUSINESS_INFO = {
    name: process.env.NEXT_PUBLIC_BUSINESS_NAME || "Tatvix Technologies",
    phone: process.env.NEXT_PUBLIC_BUSINESS_PHONE || "+91 8401301970",
    email: process.env.NEXT_PUBLIC_BUSINESS_EMAIL || "info@tatvixtech.com",
    address: process.env.NEXT_PUBLIC_BUSINESS_ADDRESS || "Ahmedabad",
    city: process.env.NEXT_PUBLIC_BUSINESS_CITY || "Ahmedabad",
    state: process.env.NEXT_PUBLIC_BUSINESS_STATE || "Gujarat",
    // Drop the "Your ZIP" placeholder so it never leaks into JSON-LD.
    zip: rawZip && rawZip !== "Your ZIP" ? rawZip : "",
    country: process.env.NEXT_PUBLIC_BUSINESS_COUNTRY || "India",
    // ISO 3166-1 alpha-2 for schema addressCountry (more reliable than a free-text name).
    countryCode: process.env.NEXT_PUBLIC_BUSINESS_COUNTRY_CODE || "IN",
    linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL || "https://www.linkedin.com/company/tatvix",
    twitter: process.env.NEXT_PUBLIC_TWITTER_URL || "https://twitter.com/tatvix",
    facebook: process.env.NEXT_PUBLIC_FACEBOOK_URL || "https://facebook.com/tatvix",
};
