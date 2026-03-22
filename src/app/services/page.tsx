import { Metadata } from "next";
import ServiceClientWrapper from "./ServiceClientWrapper";
import StructuredData, { getServiceSchema, getBreadcrumbSchema } from "@/components/StructuredData";
import { SITE_URL } from "@/lib/site";

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
    openGraph: {
        title: "Embedded Systems & IoT Development Services",
        description: "Professional embedded systems development services including hardware design, firmware programming, and complete IoT solutions.",
        url: `${SITE_URL}/services`,
        images: [
            {
                url: `${SITE_URL}/services-og.jpg`,
                width: 1200,
                height: 630,
                alt: "Tatvix Technologies Services"
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "Embedded Systems & IoT Development Services",
        description: "Professional embedded systems development services including hardware design, firmware programming, and complete IoT solutions.",
        images: [`${SITE_URL}/services-og.jpg`]
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

    const services = [
        {
            name: "Embedded Hardware Design",
            description: "Custom hardware design and PCB development for embedded systems, IoT devices, and electronic products.",
            url: `${SITE_URL}/services#hardware-design`
        },
        {
            name: "Firmware Development",
            description: "Embedded software and firmware programming for microcontrollers, real-time systems, and IoT devices.",
            url: `${SITE_URL}/services#firmware-development`
        },
        {
            name: "IoT Solutions",
            description: "Complete IoT product development including connectivity, cloud integration, and mobile applications.",
            url: `${SITE_URL}/services#iot-solutions`
        }
    ];

    return (
        <>
            <StructuredData data={getBreadcrumbSchema(breadcrumbItems)} />
            {services.map((service, index) => (
                <StructuredData 
                    key={index}
                    data={getServiceSchema(service.name, service.description, service.url)} 
                />
            ))}
            <ServiceClientWrapper />
        </>
    );
}