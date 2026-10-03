import { Metadata } from "next";
import ServiceClientWrapper from "./ServiceClientWrapper";
import StructuredData, { getServiceSchema, getBreadcrumbSchema } from "@/components/StructuredData";
import { SITE_URL } from "@/lib/site";
import { services } from "@/data/services";

export const metadata: Metadata = {
    title: "Embedded Systems & IoT Development Services | Hardware Design & Firmware",
    description: "Professional embedded systems development services including hardware design, firmware programming, PCB design, IoT solutions, and complete product development from concept to production.",
    keywords: [
        "embedded systems services",
        "hardware design services",
        "firmware development",
        "PCB design",
        "IoT development",
        "microcontroller programming",
        "embedded consulting",
        "product development services",
        "industrial IoT solutions",
        "medical device development"
    ],
    // OG/Twitter images are supplied automatically by the root app/opengraph-image.tsx
    // (the previous /services-og.jpg asset did not exist).
    openGraph: {
        title: "Embedded Systems & IoT Development Services",
        description: "Professional embedded systems development services including hardware design, firmware programming, and complete IoT solutions.",
        url: `${SITE_URL}/services`,
    },
    twitter: {
        card: "summary_large_image",
        title: "Embedded Systems & IoT Development Services",
        description: "Professional embedded systems development services including hardware design, firmware programming, and complete IoT solutions.",
    },
    alternates: {
        canonical: `${SITE_URL}/services`,
    }
};

export default function ServicesPage() {
    const breadcrumbItems = [
        { name: "Home", url: SITE_URL },
        { name: "Services", url: `${SITE_URL}/services` }
    ];

    return (
        <>
            <StructuredData data={getBreadcrumbSchema(breadcrumbItems)} />
            {services.map((service) => (
                <StructuredData
                    key={service.slug}
                    data={getServiceSchema(
                        service.title,
                        service.description,
                        `${SITE_URL}/services/${service.slug}`
                    )}
                />
            ))}
            <ServiceClientWrapper />
        </>
    );
}