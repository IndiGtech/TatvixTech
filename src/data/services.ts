import {
    CircuitBoard,
    Code2,
    Wifi,
    TestTube2,
    Monitor,
    Smartphone,
    Code,
    type LucideIcon,
} from "lucide-react";

export interface ServiceFAQ {
    question: string;
    answer: string;
}

export interface ServiceStat {
    /** Short metric label, e.g. "Typical timeline" */
    label: string;
    /** The value, e.g. "2–6 weeks" */
    value: string;
}

export interface Service {
    /** Canonical URL slug — single source of truth for the page and the sitemap. */
    slug: string;
    /** Legacy in-page anchor id (kept so the overview page's deep-links still work). */
    id: string;
    title: string;
    /** Short marketing description used on cards. */
    description: string;
    /** 40–60 word self-contained answer block for "what is X" extraction (ai-seo). */
    definition: string;
    seoTitle: string;
    metaDescription: string;
    keywords: string[];
    icon: LucideIcon;
    accentColor: string;
    processSteps: string[];
    deliverables: string[];
    timeline: string;
    technologies: string[];
    stats: ServiceStat[];
    faqs: ServiceFAQ[];
}

export const services: Service[] = [
    {
        slug: "embedded-hardware-design",
        id: "hardware-design",
        title: "Hardware Design & PCB Layout",
        description:
            "End-to-end hardware engineering for complex embedded systems, ensuring reliability and compliance.",
        definition:
            "Embedded hardware design is the engineering of custom electronics — schematic capture, component selection, and multi-layer PCB layout — that turns a product concept into a manufacturable board. Tatvix delivers HDI and flex designs, DFM/DFA-checked, with full fabrication and assembly data ready for production.",
        seoTitle:
            "Embedded Hardware Design & PCB Layout Services | Tatvix",
        metaDescription:
            "Custom embedded hardware design and multi-layer PCB layout services — schematic capture, HDI/flex boards, DFM/DFA review, and production-ready Gerber, BOM, and assembly files.",
        keywords: [
            "embedded hardware design",
            "PCB layout services",
            "HDI PCB design",
            "schematic capture",
            "DFM DFA review",
            "electronics design company India",
        ],
        icon: CircuitBoard,
        accentColor: "cyan",
        processSteps: [
            "Requirement Analysis",
            "Component Selection",
            "Schematic Capture",
            "PCB Layout (HDI, Flex)",
            "DFM & DFA Check",
        ],
        deliverables: [
            "Gerber & ODB++ Files",
            "Bill of Materials (BOM)",
            "Assembly Drawings",
            "3D STEP Models",
        ],
        timeline: "2 to 6 weeks depending on complexity",
        technologies: ["Altium Designer", "KiCad", "Eagle", "OrCAD"],
        stats: [
            { label: "Typical timeline", value: "2–6 weeks" },
            { label: "Board layers", value: "Up to 12+ (HDI)" },
            { label: "Outputs", value: "Gerber, BOM, STEP" },
        ],
        faqs: [
            {
                question: "What does your embedded hardware design service include?",
                answer:
                    "It covers the full electronics workflow: requirements analysis, component selection, schematic capture, multi-layer PCB layout (including HDI and flex), and DFM/DFA review. You receive production-ready Gerber/ODB++ files, a bill of materials, assembly drawings, and 3D STEP models.",
            },
            {
                question: "Can you design HDI or flexible PCBs?",
                answer:
                    "Yes. We routinely design high-density interconnect (HDI) and rigid-flex boards for compact products such as wearables and medical devices, and we run DFM checks with your fabricator to keep them manufacturable at volume.",
            },
            {
                question: "How long does a PCB design project take?",
                answer:
                    "Most boards take 2 to 6 weeks depending on complexity, layer count, and the number of design revisions. We share a fixed schedule after the requirements review.",
            },
        ],
    },
    {
        slug: "firmware-development",
        id: "firmware",
        title: "Firmware Development",
        description:
            "High-performance, secure, and robust firmware for microcontrollers and microprocessors.",
        definition:
            "Firmware development is the writing of low-level embedded software that runs directly on a microcontroller or microprocessor. Tatvix builds firmware architecture, HAL/BSP layers, RTOS integration, OTA-capable bootloaders, and application logic in C/C++ for ARM Cortex-M/A, FreeRTOS, Zephyr, and Embedded Linux targets.",
        seoTitle: "Embedded Firmware Development Services | Tatvix",
        metaDescription:
            "Secure, reliable embedded firmware development for microcontrollers — RTOS integration, HAL/BSP, OTA bootloaders, and application logic in C/C++ for ARM Cortex, FreeRTOS, Zephyr, and Embedded Linux.",
        keywords: [
            "firmware development services",
            "embedded software development",
            "RTOS firmware",
            "FreeRTOS Zephyr development",
            "OTA bootloader",
            "ARM Cortex firmware",
        ],
        icon: Code2,
        accentColor: "purple",
        processSteps: [
            "Architecture Design",
            "HAL/BSP Development",
            "RTOS Integration",
            "Application Logic",
            "OTA & Bootloader implementation",
        ],
        deliverables: [
            "Source Code repository",
            "Binary files (.hex, .bin)",
            "API Documentation",
            "Test Scripts",
        ],
        timeline: "4 to 12 weeks",
        technologies: [
            "C/C++",
            "FreeRTOS",
            "Zephyr",
            "Embedded Linux",
            "ARM Cortex-M/A",
        ],
        stats: [
            { label: "Typical timeline", value: "4–12 weeks" },
            { label: "Targets", value: "ARM Cortex-M/A" },
            { label: "OTA updates", value: "Supported" },
        ],
        faqs: [
            {
                question: "Which microcontrollers and RTOSes do you work with?",
                answer:
                    "We develop firmware for ARM Cortex-M and Cortex-A devices and common RTOSes including FreeRTOS and Zephyr, as well as bare-metal and Embedded Linux targets. We select the platform that best fits your power, real-time, and cost requirements.",
            },
            {
                question: "Do you implement secure OTA firmware updates?",
                answer:
                    "Yes. We build OTA-capable bootloaders with signed, verified images and rollback protection so devices can be updated safely in the field after deployment.",
            },
            {
                question: "Can you refactor or maintain existing firmware?",
                answer:
                    "Absolutely. We often step in to stabilise legacy firmware, improve reliability and power consumption, and add new connectivity features without a full rewrite.",
            },
        ],
    },
    {
        slug: "iot-cloud-connectivity",
        id: "iot",
        title: "IoT & Cloud Connectivity",
        description:
            "Secure protocol implementation and scalable cloud integration for connected devices.",
        definition:
            "IoT and cloud connectivity is the work of getting devices securely online and their data into a usable cloud backend. Tatvix implements MQTT/CoAP protocols, TLS security, edge logic, and AWS/Azure IoT gateways, plus dashboards and APIs — across BLE, Wi-Fi, LoRaWAN, and cellular (NB-IoT) links.",
        seoTitle: "IoT Development & Cloud Connectivity Services | Tatvix",
        metaDescription:
            "End-to-end IoT development and cloud connectivity — MQTT/CoAP, TLS security, edge computing, AWS/Azure IoT integration, and dashboards across BLE, Wi-Fi, LoRaWAN, and cellular networks.",
        keywords: [
            "IoT development company",
            "cloud connectivity for devices",
            "AWS IoT Azure IoT integration",
            "MQTT CoAP development",
            "LoRaWAN BLE Wi-Fi",
            "edge computing",
        ],
        icon: Wifi,
        accentColor: "green",
        processSteps: [
            "Protocol Selection",
            "Security Implementation (TLS/SSL)",
            "Edge Computing Logic",
            "Cloud Gateway Setup",
            "Dashboard Creation",
        ],
        deliverables: [
            "Cloud Architecture Document",
            "Provisioning Scripts",
            "Web/Mobile Dashboards",
            "API Endpoints",
        ],
        timeline: "4 to 10 weeks",
        technologies: [
            "MQTT, CoAP",
            "AWS IoT, Azure IoT",
            "LoRaWAN, BLE, Wi-Fi, NB-IoT",
            "Python",
        ],
        stats: [
            { label: "Typical timeline", value: "4–10 weeks" },
            { label: "Clouds", value: "AWS IoT, Azure IoT" },
            { label: "Transports", value: "BLE, Wi-Fi, LoRa, Cellular" },
        ],
        faqs: [
            {
                question: "Which cloud platforms do you integrate with?",
                answer:
                    "We integrate connected devices with AWS IoT and Azure IoT, including device provisioning, secure MQTT/TLS connectivity, data pipelines, and dashboards. We can also work with an existing backend if you already have one.",
            },
            {
                question: "Which wireless protocols do you support?",
                answer:
                    "We work across BLE, Wi-Fi, LoRaWAN, and cellular (NB-IoT/LTE-M), choosing the protocol based on range, power budget, and data-rate needs for your deployment.",
            },
            {
                question: "How do you secure IoT data?",
                answer:
                    "We use TLS/SSL for transport security, per-device credentials and certificate-based provisioning, and signed firmware updates so both the data in transit and the devices themselves stay protected.",
            },
        ],
    },
    {
        slug: "testing-and-validation",
        id: "testing",
        title: "Testing & Validation",
        description:
            "Rigorous environmental testing, compliance pre-scans, and field validation.",
        definition:
            "Testing and validation is the structured verification that embedded hardware works reliably and is ready for certification. Tatvix runs functional testing, environmental stress (temperature/humidity), EMC/EMI pre-compliance, and field trials, delivering detailed reports and a compliance-readiness assessment before you commit to certification labs.",
        seoTitle: "Embedded Testing, Validation & Compliance Services | Tatvix",
        metaDescription:
            "Embedded hardware testing and validation — functional testing, environmental stress, EMC/EMI pre-compliance, and field trials with detailed reports and CE/FCC compliance-readiness guidance.",
        keywords: [
            "embedded testing and validation",
            "EMC EMI pre-compliance testing",
            "environmental stress testing",
            "hardware validation services",
            "CE FCC compliance readiness",
        ],
        icon: TestTube2,
        accentColor: "blue",
        processSteps: [
            "Test Plan Creation",
            "Functional Testing",
            "Environmental Stress (Temp/Humidity)",
            "EMC/EMI Pre-compliance",
            "Field Trials",
        ],
        deliverables: [
            "Detailed Test Reports",
            "Compliance Readiness Certificate",
            "Bug Tracking Logs",
            "Optimization Recommendations",
        ],
        timeline: "2 to 8 weeks",
        technologies: [
            "Oscilloscopes, Logic Analyzers",
            "Spectrum Analyzers",
            "Thermal Chambers",
            "Automated HIL Testing",
        ],
        stats: [
            { label: "Typical timeline", value: "2–8 weeks" },
            { label: "Coverage", value: "Functional, EMC, environmental" },
            { label: "Output", value: "Compliance-readiness report" },
        ],
        faqs: [
            {
                question: "Do you help with CE and FCC certification?",
                answer:
                    "We provide pre-compliance EMC/EMI testing and design optimisation so your product is ready to pass CE, FCC, and RoHS certification at an accredited lab on the first attempt, reducing costly re-test cycles.",
            },
            {
                question: "What environmental tests do you run?",
                answer:
                    "We run temperature and humidity stress, thermal cycling, and functional tests using thermal chambers and automated hardware-in-the-loop (HIL) rigs, then document results with optimisation recommendations.",
            },
            {
                question: "Can you validate hardware you didn't design?",
                answer:
                    "Yes. We regularly create test plans and run validation for boards designed elsewhere, and deliver detailed reports and bug-tracking logs you can act on.",
            },
        ],
    },
    {
        slug: "web-application-development",
        id: "web-apps",
        title: "Web Applications",
        description:
            "Dashboard development, admin interfaces, and real-time monitoring systems for connected devices.",
        definition:
            "Web application development for connected products is the building of dashboards, admin panels, and real-time monitoring interfaces that visualise device data. Tatvix builds responsive React/Next.js front ends with Node.js back ends, REST/GraphQL APIs, and WebSocket streams wired directly to your hardware telemetry.",
        seoTitle: "Web Application & IoT Dashboard Development | Tatvix",
        metaDescription:
            "Custom web application development for connected products — real-time IoT dashboards, admin panels, and monitoring systems built with React/Next.js, Node.js, REST/GraphQL, and WebSockets.",
        keywords: [
            "IoT dashboard development",
            "web application development",
            "real-time monitoring dashboard",
            "React Next.js development",
            "device admin panel",
        ],
        icon: Monitor,
        accentColor: "emerald",
        processSteps: [
            "UI/UX Design",
            "Frontend Development",
            "Backend API Creation",
            "Hardware Data Integration",
            "Deployment & Hosting",
        ],
        deliverables: [
            "Responsive Web Dashboard",
            "Admin Control Panel",
            "Source Code",
            "API Documentation",
        ],
        timeline: "4 to 10 weeks",
        technologies: [
            "React / Next.js",
            "Node.js",
            "GraphQL / REST",
            "WebSockets",
            "PostgreSQL / MongoDB",
        ],
        stats: [
            { label: "Typical timeline", value: "4–10 weeks" },
            { label: "Stack", value: "React / Next.js + Node" },
            { label: "Realtime", value: "WebSocket telemetry" },
        ],
        faqs: [
            {
                question: "Can you build a dashboard for our existing IoT devices?",
                answer:
                    "Yes. We build responsive web dashboards that connect to your devices via cloud APIs or WebSockets, with real-time charts, alerts, role-based admin controls, and data export tailored to your telemetry.",
            },
            {
                question: "What technologies do you use for web apps?",
                answer:
                    "We build with React and Next.js on the front end and Node.js on the back end, using REST or GraphQL APIs, WebSockets for real-time data, and PostgreSQL or MongoDB for storage.",
            },
        ],
    },
    {
        slug: "mobile-app-development",
        id: "mobile-apps",
        title: "Mobile Applications",
        description:
            "Native iOS/Android apps, cross-platform solutions, and device companion apps with BLE/WiFi integration.",
        definition:
            "Mobile app development for hardware is the building of companion apps that pair with and control physical devices. Tatvix builds native iOS/Android and cross-platform React Native/Flutter apps with BLE and Wi-Fi connectivity, guided setup flows, OTA triggers, and app-store submission for consumer and industrial products.",
        seoTitle: "Mobile App & IoT Companion App Development | Tatvix",
        metaDescription:
            "Mobile app development for connected devices — native iOS/Android and cross-platform React Native/Flutter companion apps with BLE/Wi-Fi pairing, device control, and app-store submission.",
        keywords: [
            "IoT companion app development",
            "mobile app development",
            "BLE app development",
            "React Native Flutter app",
            "device companion app",
        ],
        icon: Smartphone,
        accentColor: "pink",
        processSteps: [
            "Mobile UX Design",
            "App Development",
            "Hardware Connectivity (BLE/WiFi)",
            "Beta Testing",
            "App Store Submission",
        ],
        deliverables: [
            "iOS & Android Apps",
            "Companion App Source Code",
            "App Store Listings",
            "User Manual",
        ],
        timeline: "6 to 12 weeks",
        technologies: [
            "React Native",
            "Flutter",
            "Swift (iOS)",
            "Kotlin (Android)",
            "CoreBluetooth / RxAndroidBle",
        ],
        stats: [
            { label: "Typical timeline", value: "6–12 weeks" },
            { label: "Platforms", value: "iOS + Android" },
            { label: "Connectivity", value: "BLE, Wi-Fi" },
        ],
        faqs: [
            {
                question: "Do you build companion apps that connect to hardware over Bluetooth?",
                answer:
                    "Yes. We build iOS and Android companion apps that pair with devices over BLE or Wi-Fi, handle provisioning and firmware-update triggers, and present device data — using CoreBluetooth, RxAndroidBle, or cross-platform BLE libraries.",
            },
            {
                question: "Native or cross-platform — which do you recommend?",
                answer:
                    "It depends on your performance and connectivity needs. We build native (Swift/Kotlin) when low-level BLE control or platform features matter, and cross-platform (React Native/Flutter) when shared code and faster delivery are the priority.",
            },
        ],
    },
    {
        slug: "custom-software-development",
        id: "custom-software",
        title: "Custom Software",
        description:
            "Desktop applications, API development, system integrations, and enterprise software solutions.",
        definition:
            "Custom software development is the building of bespoke desktop applications, APIs, and system integrations around your hardware and operations. Tatvix delivers cross-platform desktop apps (Electron/Tauri), enterprise back ends in Python/Go/Rust, and containerised integrations that connect devices, databases, and existing business systems.",
        seoTitle: "Custom Software & System Integration Development | Tatvix",
        metaDescription:
            "Custom software development services — cross-platform desktop apps, API development, enterprise back ends, and system integrations built with Electron/Tauri, Python, Go/Rust, and Docker/Kubernetes.",
        keywords: [
            "custom software development",
            "system integration services",
            "API development",
            "desktop application development",
            "enterprise software development",
        ],
        icon: Code,
        accentColor: "cyan",
        processSteps: [
            "Architecture Design",
            "API Development",
            "System Integration",
            "End-to-End Testing",
            "Enterprise Deployment",
        ],
        deliverables: [
            "Custom Desktop App",
            "Integration Scripts",
            "Enterprise Backend",
            "System Architecture Documentation",
        ],
        timeline: "8 to 16 weeks",
        technologies: [
            "Electron / Tauri",
            "Python",
            "Go / Rust",
            "Docker / Kubernetes",
            "Enterprise Service Bus",
        ],
        stats: [
            { label: "Typical timeline", value: "8–16 weeks" },
            { label: "Desktop", value: "Electron / Tauri" },
            { label: "Deployment", value: "Docker / Kubernetes" },
        ],
        faqs: [
            {
                question: "What kinds of custom software do you build?",
                answer:
                    "We build cross-platform desktop applications, REST/GraphQL APIs, system integrations between devices and business systems, and enterprise back ends — typically using Electron/Tauri, Python, Go or Rust, and containerised deployment.",
            },
            {
                question: "Can you integrate our hardware with existing enterprise systems?",
                answer:
                    "Yes. We specialise in connecting embedded devices to ERPs, databases, and cloud services through APIs and message buses, with end-to-end testing before enterprise deployment.",
            },
        ],
    },
];

export function getAllServiceSlugs(): string[] {
    return services.map((s) => s.slug);
}

export function getServiceBySlug(slug: string): Service | undefined {
    return services.find((s) => s.slug === slug);
}
