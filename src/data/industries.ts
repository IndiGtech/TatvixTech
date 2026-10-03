import {
    Factory,
    Stethoscope,
    Tractor,
    Zap,
    CarFront,
    Smartphone,
    type LucideIcon,
} from "lucide-react";

export interface IndustryFAQ {
    question: string;
    answer: string;
}

export interface IndustryStat {
    label: string;
    value: string;
}

export interface Industry {
    /** Canonical URL slug — single source of truth for the page and the sitemap. */
    slug: string;
    /** Legacy in-page anchor id (kept so existing deep-links still work). */
    id: string;
    name: string;
    description: string;
    /** 40–60 word self-contained answer block (ai-seo extractability). */
    definition: string;
    seoTitle: string;
    metaDescription: string;
    keywords: string[];
    icon: LucideIcon;
    image: string;
    challenges: string[];
    solutions: string[];
    softwareComponents: string[];
    standards: string[];
    stats: IndustryStat[];
    faqs: IndustryFAQ[];
}

export const industries: Industry[] = [
    {
        slug: "medical-device-development",
        id: "medical",
        name: "Medical Devices",
        description:
            "We engineer ISO 13485 compliant embedded systems for patient monitoring, diagnostics, and wearable health tech. Our designs prioritize safety, high reliability, and low power consumption for critical care applications.",
        definition:
            "Medical device development is the design of embedded electronics for regulated healthcare products such as patient monitors, diagnostics, and wearables. Tatvix engineers ISO 13485-aligned hardware and firmware with redundant architectures, hardware encryption, and pre-compliance validation for IEC 60601 and FDA Class II/III requirements.",
        seoTitle: "Medical Device Embedded Development (ISO 13485) | Tatvix",
        metaDescription:
            "Embedded development for medical devices — ISO 13485-aligned hardware and firmware for patient monitoring, diagnostics, and wearables, with IEC 60601 and FDA Class II/III pre-compliance.",
        keywords: [
            "medical device development",
            "ISO 13485 embedded",
            "IEC 60601 design",
            "patient monitoring hardware",
            "medical wearable development",
        ],
        icon: Stethoscope,
        image: "https://images.unsplash.com/photo-1516549655169-df83a0833860?auto=format&fit=crop&q=80&w=800",
        challenges: [
            "Strict regulatory compliance",
            "Data security & HIPAA",
            "Biocompatibility constraints",
            "Zero-fault tolerance",
        ],
        solutions: [
            "Pre-compliance validation",
            "Hardware encryption engines",
            "Redundant system architecture",
            "Medical-grade component sourcing",
        ],
        softwareComponents: [
            "Patient Portals",
            "Clinician Dashboards",
            "Mobile Health Apps",
            "Compliance Reporting Systems",
        ],
        standards: ["ISO 13485", "IEC 60601", "FDA Class II/III", "HIPAA"],
        stats: [
            { label: "Quality system", value: "ISO 13485-aligned" },
            { label: "Safety standard", value: "IEC 60601" },
            { label: "Regulatory class", value: "FDA Class II/III" },
        ],
        faqs: [
            {
                question: "Do you design to ISO 13485 and IEC 60601?",
                answer:
                    "Yes. We engineer medical electronics with an ISO 13485-aligned design process and IEC 60601 safety considerations built in from the start, and we run pre-compliance validation to reduce risk before formal certification.",
            },
            {
                question: "Can you help with FDA Class II/III devices?",
                answer:
                    "We design hardware and firmware suitable for FDA Class II and III devices, including redundant architectures, traceable documentation, and data-security measures aligned with HIPAA for connected health products.",
            },
        ],
    },
    {
        slug: "industrial-iot",
        id: "industrial",
        name: "Industrial IoT",
        description:
            "Ruggedized controllers, PLCs, and predictive maintenance sensors built to withstand extreme environments, EMI noise, and continuous operation in smart factories.",
        definition:
            "Industrial IoT development is the engineering of ruggedized controllers and sensors for factory and infrastructure environments. Tatvix builds galvanically isolated, conformal-coated hardware with RTOS firmware for deterministic real-time control, protocol translation (Modbus, CAN), and predictive-maintenance telemetry built for continuous operation in harsh, high-EMI conditions.",
        seoTitle: "Industrial IoT Development & Ruggedized Controllers | Tatvix",
        metaDescription:
            "Industrial IoT development — ruggedized controllers, PLCs, and predictive-maintenance sensors with galvanic isolation, RTOS real-time control, and Modbus/CAN integration for harsh factory environments.",
        keywords: [
            "industrial IoT development",
            "ruggedized controller design",
            "predictive maintenance sensors",
            "Modbus CAN integration",
            "smart factory hardware",
        ],
        icon: Factory,
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800",
        challenges: [
            "Harsh operating conditions",
            "High EMI/EMC interference",
            "Legacy system integration",
            "Real-time determinism",
        ],
        solutions: [
            "Galvanic isolation & shielding",
            "RTOS with microsecond latency",
            "Protocol translation (Modbus, CAN)",
            "Conformal coated PCBs",
        ],
        softwareComponents: [
            "Real-time Monitoring Dashboards",
            "Predictive Maintenance Apps",
            "Mobile Field Service Tools",
            "SCADA Integration",
        ],
        standards: [
            "IEC 61508",
            "IP67/IP68",
            "Industrial Temperature Grade",
            "CE/FCC",
        ],
        stats: [
            { label: "Ingress rating", value: "Up to IP67/IP68" },
            { label: "Functional safety", value: "IEC 61508" },
            { label: "Protocols", value: "Modbus, CAN, SCADA" },
        ],
        faqs: [
            {
                question: "Can your hardware survive harsh factory environments?",
                answer:
                    "Yes. We design ruggedized boards with galvanic isolation, EMI shielding, conformal coating, and industrial-grade components rated to IP67/IP68, so they keep running through vibration, dust, moisture, and electrical noise.",
            },
            {
                question: "Do you integrate with existing industrial protocols and SCADA?",
                answer:
                    "We implement protocol translation for Modbus, CAN, and related industrial buses, and integrate device telemetry with SCADA and predictive-maintenance dashboards, including legacy equipment.",
            },
        ],
    },
    {
        slug: "automotive-embedded-systems",
        id: "automotive",
        name: "Automotive & Mobility",
        description:
            "From battery management systems (BMS) for EVs to CAN-bus diagnostics tools and telematics gateways, we design robust automotive electronics.",
        definition:
            "Automotive embedded systems development is the design of vehicle-grade electronics such as battery management systems, telematics gateways, and diagnostics tools. Tatvix builds AEC-Q100-qualified hardware with ISO 26262 functional-safety practices, CAN/LIN/FlexRay integration, and thermal management for the temperature swings and vibration of automotive environments.",
        seoTitle: "Automotive Embedded Systems & BMS Development | Tatvix",
        metaDescription:
            "Automotive embedded development — EV battery management systems, telematics gateways, and CAN-bus diagnostics with AEC-Q100 components and ISO 26262 functional-safety design.",
        keywords: [
            "automotive embedded systems",
            "battery management system development",
            "ISO 26262 design",
            "CAN bus diagnostics",
            "automotive telematics",
        ],
        icon: CarFront,
        image: "https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?auto=format&fit=crop&q=80&w=800",
        challenges: [
            "Extreme temperature swings",
            "Vibration and mechanical stress",
            "Complex vehicular networks",
            "Functional safety",
        ],
        solutions: [
            "AEC-Q100 qualified components",
            "ISO 26262 compliant design",
            "CAN/LIN/FlexRay integration",
            "Advanced thermal management",
        ],
        softwareComponents: [
            "Fleet Management Systems",
            "Diagnostic Software",
            "Mobile Service Apps",
            "OTA Update Portals",
        ],
        standards: ["ISO 26262", "AEC-Q100", "CISPR 25", "IATF 16949"],
        stats: [
            { label: "Functional safety", value: "ISO 26262" },
            { label: "Components", value: "AEC-Q100 qualified" },
            { label: "Networks", value: "CAN, LIN, FlexRay" },
        ],
        faqs: [
            {
                question: "Do you design EV battery management systems?",
                answer:
                    "Yes. We design battery management systems (BMS) and related power electronics for electric vehicles, using AEC-Q100-qualified components, accurate cell monitoring, and thermal management built for automotive duty cycles.",
            },
            {
                question: "Is your automotive design process ISO 26262 aware?",
                answer:
                    "We apply ISO 26262 functional-safety practices to automotive projects, including hazard analysis, safety requirements, and CAN/LIN/FlexRay network integration validated against CISPR 25 EMC expectations.",
            },
        ],
    },
    {
        slug: "agritech-solutions",
        id: "agriculture",
        name: "Agriculture Tech",
        description:
            "Smart sensors and automated systems for precision farming, livestock monitoring, and environmental control with ultra-low power wireless communication.",
        definition:
            "AgriTech development is the engineering of low-power sensors and automation for precision farming, livestock monitoring, and environmental control. Tatvix designs solar-harvesting, weather-resistant devices using LoRaWAN and mesh networking with cost-optimised BOMs, so they run reliably in remote fields with no mains power and patchy cellular coverage.",
        seoTitle: "AgriTech & Precision Farming IoT Development | Tatvix",
        metaDescription:
            "AgriTech IoT development — low-power smart sensors for precision farming and livestock monitoring with solar harvesting, LoRaWAN/mesh networking, and weather-resistant, cost-optimised hardware.",
        keywords: [
            "agritech development",
            "precision farming sensors",
            "LoRaWAN agriculture",
            "solar powered IoT sensor",
            "livestock monitoring IoT",
        ],
        icon: Tractor,
        image: "https://images.unsplash.com/photo-1625246333195-58197bd47d26?auto=format&fit=crop&q=80&w=800",
        challenges: [
            "Remote areas with no power",
            "Poor cellular coverage",
            "Exposure to elements",
            "Cost sensitivity",
        ],
        solutions: [
            "Solar harvesting PMICs",
            "LoRaWAN & Mesh networking",
            "UV/Weather-resistant enclosures",
            "Low-cost BOM optimization",
        ],
        softwareComponents: [
            "Farm Management Dashboards",
            "Mobile Monitoring Apps",
            "Data Analytics Platforms",
            "Automated Irrigation Controls",
        ],
        standards: ["IP66/IP67", "FCC/CE", "RoHS", "REACH"],
        stats: [
            { label: "Power", value: "Solar / energy-harvesting" },
            { label: "Range", value: "LoRaWAN, long-range mesh" },
            { label: "Enclosure", value: "IP66/IP67 weatherproof" },
        ],
        faqs: [
            {
                question: "How do your agriculture sensors work without mains power?",
                answer:
                    "We design ultra-low-power devices with solar harvesting and efficient power management so they run for seasons on harvested energy, and we use LoRaWAN or mesh networking to reach areas with poor cellular coverage.",
            },
            {
                question: "Can you keep the per-unit cost low for large deployments?",
                answer:
                    "Yes. For high-volume field deployments we optimise the bill of materials and enclosure design while keeping IP66/IP67 weather resistance, balancing durability against cost.",
            },
        ],
    },
    {
        slug: "consumer-electronics",
        id: "consumer",
        name: "Consumer Electronics",
        description:
            "Innovative smart home devices, wearables, and IoT gadgets designed for exceptional user experience, mass production, and aggressive price points.",
        definition:
            "Consumer electronics development is the design of smart home devices, wearables, and IoT gadgets for high-volume manufacturing. Tatvix engineers compact HDI and rigid-flex hardware with ultra-low-power states, automated test-jig design, and OTA update infrastructure, balancing aggressive form factors and price points against a great out-of-box user experience.",
        seoTitle: "Consumer Electronics & Smart Device Development | Tatvix",
        metaDescription:
            "Consumer electronics development — smart home devices, wearables, and IoT gadgets with HDI/flex hardware, ultra-low-power design, DFM for mass production, and OTA update infrastructure.",
        keywords: [
            "consumer electronics development",
            "smart home device design",
            "wearable development",
            "IoT gadget design",
            "design for mass production",
        ],
        icon: Smartphone,
        image: "https://images.unsplash.com/photo-1550009158-9ebf69173e03?auto=format&fit=crop&q=80&w=800",
        challenges: [
            "Aggressive form factors",
            "Battery life constraints",
            "High volume DFM",
            "Seamless UX/UI",
        ],
        solutions: [
            "HDI PCB & Flex-Rigid design",
            "Ultra-low power states",
            "Automated test jig (ATE) design",
            "OTA update infrastructure",
        ],
        softwareComponents: [
            "Companion Mobile Apps",
            "Web-based Device Management",
            "Customer Support Portals",
            "Voice Assistant Integration",
        ],
        standards: ["FCC/CE", "Bluetooth SIG", "Wi-Fi Alliance", "UL"],
        stats: [
            { label: "Form factor", value: "HDI / rigid-flex" },
            { label: "Power", value: "Ultra-low-power states" },
            { label: "Production", value: "DFM + ATE test jigs" },
        ],
        faqs: [
            {
                question: "Can you take a consumer product from concept to mass production?",
                answer:
                    "Yes. We design compact HDI and rigid-flex hardware, optimise it for design-for-manufacture, build automated test jigs (ATE) for the production line, and provide OTA update infrastructure for devices in the field.",
            },
            {
                question: "How do you maximise battery life in wearables?",
                answer:
                    "We architect ultra-low-power states, choose efficient components and radios, and tune firmware duty cycles so wearables and smart devices get the longest practical battery life for their form factor.",
            },
        ],
    },
    {
        slug: "energy-management-systems",
        id: "energy",
        name: "Energy Management",
        description:
            "Smart metering, renewable energy controllers, and battery management systems (BMS) for efficient power distribution and storage.",
        definition:
            "Energy management systems development is the engineering of smart meters, renewable-energy controllers, and grid-connected battery systems. Tatvix designs high-voltage-isolated hardware with precision ADC measurement and smart-grid protocols (DNP3), built for accuracy, safety, and the long product lifecycles required in power distribution and storage.",
        seoTitle: "Energy Management Systems & Smart Metering Development | Tatvix",
        metaDescription:
            "Energy management embedded development — smart metering, renewable-energy controllers, and battery management systems with high-voltage isolation, precision measurement, and smart-grid (DNP3) connectivity.",
        keywords: [
            "energy management systems",
            "smart metering development",
            "battery management system",
            "renewable energy controller",
            "smart grid DNP3",
        ],
        icon: Zap,
        image: "https://images.unsplash.com/photo-1473341304170-5799d416f718?auto=format&fit=crop&q=80&w=800",
        challenges: [
            "High voltage safety",
            "Accurate power measurement",
            "Grid connectivity",
            "Long product lifecycles",
        ],
        solutions: [
            "High-voltage isolation barriers",
            "Precision ADC integration",
            "Smart Grid protocols (DNP3)",
            "Industrial-grade component selection",
        ],
        softwareComponents: [
            "Energy Monitoring Dashboards",
            "Consumer Usage Apps",
            "Grid Analytics Software",
            "Billing Integrations",
        ],
        standards: ["IEC 62053", "UL 1741", "IEEE 1547", "ISO 9001"],
        stats: [
            { label: "Metering", value: "IEC 62053 accuracy" },
            { label: "Grid interconnect", value: "UL 1741 / IEEE 1547" },
            { label: "Safety", value: "High-voltage isolation" },
        ],
        faqs: [
            {
                question: "Do you design smart meters and grid-connected systems?",
                answer:
                    "Yes. We design smart metering and renewable-energy hardware with precision ADC measurement to IEC 62053 accuracy classes, high-voltage isolation barriers, and smart-grid protocols such as DNP3 for utility integration.",
            },
            {
                question: "Can you build battery management systems for storage?",
                answer:
                    "We design battery management systems (BMS) for stationary storage and renewable installations, focusing on accurate cell monitoring, safety, and the long, reliable product lifecycles the energy sector requires.",
            },
        ],
    },
];

export function getAllIndustrySlugs(): string[] {
    return industries.map((i) => i.slug);
}

export function getIndustryBySlug(slug: string): Industry | undefined {
    return industries.find((i) => i.slug === slug);
}
