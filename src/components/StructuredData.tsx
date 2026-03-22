import Script from "next/script";
import { SITE_URL, BUSINESS_INFO } from "@/lib/site";

interface StructuredDataProps {
    data: any;
}

export default function StructuredData({ data }: StructuredDataProps) {
    return (
        <Script
            id="structured-data"
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
            strategy="afterInteractive"
        />
    );
}

export const getOrganizationSchema = () => ({
    "@context": "https://schema.org",
    "@type": ["Organization", "TechnologyCompany"],
    "@id": `${SITE_URL}/#organization`,
    name: BUSINESS_INFO.name,
    alternateName: "Tatvix",
    url: SITE_URL,
    logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/logo.png`,
        width: 200,
        height: 60
    },
    image: `${SITE_URL}/og-image.jpg`,
    description: "Leading embedded systems and IoT development company specializing in hardware design, firmware development, and complete product solutions from concept to mass production.",
    foundingDate: "2020",
    numberOfEmployees: "10-50",
    industry: "Technology",
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
    address: {
        "@type": "PostalAddress",
        streetAddress: BUSINESS_INFO.address,
        addressLocality: BUSINESS_INFO.city,
        addressRegion: BUSINESS_INFO.state,
        postalCode: BUSINESS_INFO.zip,
        addressCountry: BUSINESS_INFO.country
    },
    contactPoint: [
        {
            "@type": "ContactPoint",
            telephone: BUSINESS_INFO.phone,
            contactType: "customer service",
            email: BUSINESS_INFO.email,
            availableLanguage: "English"
        },
        {
            "@type": "ContactPoint",
            contactType: "sales",
            email: BUSINESS_INFO.email,
            availableLanguage: "English"
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
    image: `${SITE_URL}/og-image.jpg`,
    telephone: BUSINESS_INFO.phone,
    email: BUSINESS_INFO.email,
    address: {
        "@type": "PostalAddress",
        streetAddress: BUSINESS_INFO.address,
        addressLocality: BUSINESS_INFO.city,
        addressRegion: BUSINESS_INFO.state,
        postalCode: BUSINESS_INFO.zip,
        addressCountry: BUSINESS_INFO.country
    },
    geo: {
        "@type": "GeoCoordinates",
        latitude: "40.7128",
        longitude: "-74.0060"
    },
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
    description: "Leading embedded systems and IoT development company",
    publisher: {
        "@id": `${SITE_URL}/#organization`
    },
    potentialAction: [
        {
            "@type": "SearchAction",
            target: {
                "@type": "EntryPoint",
                urlTemplate: `${SITE_URL}/search?q={search_term_string}`
            },
            "query-input": "required name=search_term_string"
        }
    ]
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
    areaServed: {
        "@type": "Country",
        name: "United States"
    },
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
    url: string;
    image?: string;
}) => ({
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    image: article.image || `${SITE_URL}/og-image.jpg`,
    author: {
        "@type": "Organization",
        name: article.author,
        url: SITE_URL
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
