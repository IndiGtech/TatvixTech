import { SITE_URL, BUSINESS_INFO, LOGO_URL, OG_IMAGE_URL } from "@/lib/site";

interface StructuredDataProps {
    data: unknown;
}

// Render JSON-LD directly in the server HTML (not via next/script
// afterInteractive) so crawlers and AI bots that don't execute JS can
// extract structured data from the initial response.
export default function StructuredData({ data }: StructuredDataProps) {
    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
    );
}

// India PostalAddress, omitting postalCode when it isn't set so we never
// publish a placeholder ZIP.
const postalAddress = () => ({
    "@type": "PostalAddress",
    streetAddress: BUSINESS_INFO.address,
    addressLocality: BUSINESS_INFO.city,
    addressRegion: BUSINESS_INFO.state,
    ...(BUSINESS_INFO.zip ? { postalCode: BUSINESS_INFO.zip } : {}),
    addressCountry: BUSINESS_INFO.countryCode,
});

// Tatvix serves a global market from its India HQ.
const areaServedWorldwide = { "@type": "Place", name: "Worldwide" };

export const getOrganizationSchema = () => ({
    "@context": "https://schema.org",
    "@type": ["Organization", "TechnologyCompany"],
    "@id": `${SITE_URL}/#organization`,
    name: BUSINESS_INFO.name,
    alternateName: "Tatvix",
    url: SITE_URL,
    logo: {
        "@type": "ImageObject",
        url: LOGO_URL,
    },
    image: OG_IMAGE_URL,
    description: "Embedded systems and IoT product development company (India HQ, serving clients worldwide) specializing in hardware design, firmware development, and complete product solutions from concept to mass production.",
    foundingDate: "2020",
    numberOfEmployees: "10-50",
    industry: "Technology",
    areaServed: areaServedWorldwide,
    knowsAbout: [
        "Embedded Systems Development",
        "IoT Development",
        "Hardware Design",
        "Firmware Development",
        "PCB Design",
        "Microcontroller Programming",
        "Wireless Connectivity",
        "Industrial IoT",
        "Medical Device Development",
        "Consumer Electronics"
    ],
    address: postalAddress(),
    contactPoint: [
        {
            "@type": "ContactPoint",
            telephone: BUSINESS_INFO.phone,
            contactType: "customer service",
            email: BUSINESS_INFO.email,
            availableLanguage: ["English", "Hindi"]
        },
        {
            "@type": "ContactPoint",
            contactType: "sales",
            email: BUSINESS_INFO.email,
            availableLanguage: ["English", "Hindi"]
        }
    ],
    sameAs: [
        BUSINESS_INFO.linkedin,
        BUSINESS_INFO.twitter,
        BUSINESS_INFO.facebook
    ],
    hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Embedded Systems Services",
        itemListElement: [
            {
                "@type": "Offer",
                itemOffered: {
                    "@type": "Service",
                    name: "Embedded Hardware Design",
                    description: "Custom hardware design and PCB development services"
                }
            },
            {
                "@type": "Offer",
                itemOffered: {
                    "@type": "Service",
                    name: "Firmware Development",
                    description: "Embedded software and firmware programming services"
                }
            },
            {
                "@type": "Offer",
                itemOffered: {
                    "@type": "Service",
                    name: "IoT Solutions",
                    description: "Complete IoT product development and connectivity solutions"
                }
            }
        ]
    }
});

export const getLocalBusinessSchema = () => ({
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}/#localbusiness`,
    name: BUSINESS_INFO.name,
    image: OG_IMAGE_URL,
    logo: LOGO_URL,
    telephone: BUSINESS_INFO.phone,
    email: BUSINESS_INFO.email,
    address: postalAddress(),
    // geo omitted until exact coordinates are confirmed (no fabricated coords).
    areaServed: areaServedWorldwide,
    url: SITE_URL,
    priceRange: "$$$$",
    openingHoursSpecification: [
        {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            opens: "09:00",
            closes: "18:00"
        }
    ]
});

export const getWebsiteSchema = () => ({
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: BUSINESS_INFO.name,
    description: "Embedded systems and IoT development company",
    publisher: {
        "@id": `${SITE_URL}/#organization`
    }
    // SearchAction removed: there is no /search route and it's disallowed in robots.
});

export const getServiceSchema = (name: string, description: string, url: string) => ({
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: name,
    provider: {
        "@id": `${SITE_URL}/#organization`
    },
    description: description,
    url: url,
    areaServed: areaServedWorldwide,
    hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: name,
        itemListElement: [
            {
                "@type": "Offer",
                itemOffered: {
                    "@type": "Service",
                    name: name,
                    description: description
                }
            }
        ]
    }
});

export const getBreadcrumbSchema = (items: Array<{name: string, url: string}>) => ({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
        item: item.url
    }))
});

export const getFAQSchema = (faqs: { question: string; answer: string }[]) => ({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
        },
    })),
});

export const getArticleSchema = (article: {
    title: string;
    description: string;
    publishedAt: string;
    updatedAt?: string;
    author: string;
    authorRole?: string;
    url: string;
    image?: string;
}) => ({
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    image: article.image || OG_IMAGE_URL,
    // Person author improves E-E-A-T over a generic Organization byline.
    author: {
        "@type": "Person",
        name: article.author,
        ...(article.authorRole ? { jobTitle: article.authorRole } : {}),
        worksFor: { "@id": `${SITE_URL}/#organization` },
    },
    publisher: {
        "@id": `${SITE_URL}/#organization`
    },
    datePublished: article.publishedAt,
    dateModified: article.updatedAt || article.publishedAt,
    mainEntityOfPage: {
        "@type": "WebPage",
        "@id": article.url
    }
});
