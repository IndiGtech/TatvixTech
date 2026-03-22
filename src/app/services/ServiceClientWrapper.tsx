"use client";

import AnimatedBackground from "@/components/AnimatedBackground";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import ServiceCard from "@/components/ServiceCard";
import CTASection from "@/components/CTASection";
import { CircuitBoard, Code2, Wifi, TestTube2, Zap, Monitor, Smartphone, Code } from "lucide-react";
import StructuredData, { getServiceSchema } from "@/components/StructuredData";
import { SITE_URL } from "@/lib/site";

const serviceDetails = [
    {
        id: "hardware-design",
        title: "Hardware Design & PCB Layout",
        description: "End-to-end hardware engineering for complex embedded systems, ensuring reliability and compliance.",
        icon: CircuitBoard,
        accentColor: "cyan",
        processSteps: ["Requirement Analysis", "Component Selection", "Schematic Capture", "PCB Layout (HDI, Flex)", "DFM & DFA Check"],
        deliverables: ["Gerber & ODB++ Files", "Bill of Materials (BOM)", "Assembly Drawings", "3D STEP Models"],
        timeline: "2 to 6 weeks depending on complexity",
        technologies: ["Altium Designer", "KiCad", "Eagle", "OrCAD"],
    },
    {
        id: "firmware",
        title: "Firmware Development",
        description: "High-performance, secure, and robust firmware for microcontrollers and microprocessors.",
        icon: Code2,
        accentColor: "purple",
        processSteps: ["Architecture Design", "HAL/BSP Development", "RTOS Integration", "Application Logic", "OTA & Bootloader implementation"],
        deliverables: ["Source Code repository", "Binary files (.hex, .bin)", "API Documentation", "Test Scripts"],
        timeline: "4 to 12 weeks",
        technologies: ["C/C++", "FreeRTOS", "Zephyr", "Embedded Linux", "ARM Cortex-M/A"],
    },
    {
        id: "iot",
        title: "IoT & Cloud Connectivity",
        description: "Secure protocol implementation and scalable cloud integration for connected devices.",
        icon: Wifi,
        accentColor: "green",
        processSteps: ["Protocol Selection", "Security Implementation (TLS/SSL)", "Edge Computing Logic", "Cloud Gateway Setup", "Dashboard Creation"],
        deliverables: ["Cloud Architecture Document", "Provisioning Scripts", "Web/Mobile Dashboards", "API Endpoints"],
        timeline: "4 to 10 weeks",
        technologies: ["MQTT, CoAP", "AWS IoT, Azure IoT", "LoRaWAN, BLE, Wi-Fi, NB-IoT", "Python"],
    },
    {
        id: "testing",
        title: "Testing & Validation",
        description: "Rigorous environmental testing, compliance pre-scans, and field validation.",
        icon: TestTube2,
        accentColor: "blue",
        processSteps: ["Test Plan Creation", "Functional Testing", "Environmental Stress (Temp/Humidity)", "EMC/EMI Pre-compliance", "Field Trials"],
        deliverables: ["Detailed Test Reports", "Compliance Readiness Certificate", "Bug Tracking Logs", "Optimization Recommendations"],
        timeline: "2 to 8 weeks",
        technologies: ["Oscilloscopes, Logic Analyzers", "Spectrum Analyzers", "Thermal Chambers", "Automated HIL Testing"],
    },
    {
        id: "web-apps",
        title: "Web Applications",
        description: "Dashboard development, admin interfaces, and real-time monitoring systems for connected devices.",
        icon: Monitor,
        accentColor: "emerald",
        processSteps: ["UI/UX Design", "Frontend Development", "Backend API Creation", "Hardware Data Integration", "Deployment & Hosting"],
        deliverables: ["Responsive Web Dashboard", "Admin Control Panel", "Source Code", "API Documentation"],
        timeline: "4 to 10 weeks",
        technologies: ["React / Next.js", "Node.js", "GraphQL / REST", "WebSockets", "PostgreSQL / MongoDB"],
    },
    {
        id: "mobile-apps",
        title: "Mobile Applications",
        description: "Native iOS/Android apps, cross-platform solutions, and device companion apps with BLE/WiFi integration.",
        icon: Smartphone,
        accentColor: "pink",
        processSteps: ["Mobile UX Design", "App Development", "Hardware Connectivity (BLE/WiFi)", "Beta Testing", "App Store Submission"],
        deliverables: ["iOS & Android Apps", "Companion App Source Code", "App Store Listings", "User Manual"],
        timeline: "6 to 12 weeks",
        technologies: ["React Native", "Flutter", "Swift (iOS)", "Kotlin (Android)", "CoreBluetooth / RxAndroidBle"],
    },
    {
        id: "custom-software",
        title: "Custom Software",
        description: "Desktop applications, API development, system integrations, and enterprise software solutions.",
        icon: Code,
        accentColor: "cyan",
        processSteps: ["Architecture Design", "API Development", "System Integration", "End-to-End Testing", "Enterprise Deployment"],
        deliverables: ["Custom Desktop App", "Integration Scripts", "Enterprise Backend", "System Architecture Documentation"],
        timeline: "8 to 16 weeks",
        technologies: ["Electron / Tauri", "Python", "Go / Rust", "Docker / Kubernetes", "Enterprise Service Bus"],
    }
];

export default function ServiceClientWrapper() {
    const schemas = serviceDetails.map(service => 
        getServiceSchema(service.title, service.description, `${SITE_URL}/services#${service.id}`)
    );

    return (
        <main className="relative min-h-screen w-full flex flex-col items-center overflow-x-hidden">
            <StructuredData data={schemas} />
            <Navbar />
            <AnimatedBackground />
            
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-32 pb-24 w-full">
                <Breadcrumbs items={[{ label: "Services", href: "/services" }]} />

                <div className="mb-16 max-w-3xl">
                    <h1 className="text-4xl md:text-6xl font-heading font-bold text-slate-800 dark:text-white mb-6">
                        Engineering Excellence from Concept to Production
                    </h1>
                    <p className="text-xl text-slate-700 dark:text-muted leading-relaxed">
                        We deliver deeply specialized engineering services for embedded systems and IoT products. Our team handles the entire lifecycle or plugs into your existing workflows seamlessly.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-24">
                    {serviceDetails.map((service, index) => (
                        <ServiceCard
                            key={service.id}
                            title={service.title}
                            description={service.description}
                            icon={service.icon}
                            accentColor={service.accentColor}
                            delay={index * 0.1}
                            link={`#${service.id}`}
                        />
                    ))}
                </div>

                <div className="space-y-32 mb-32">
                    {serviceDetails.map((service, index) => {
                        const isEven = index % 2 === 0;
                        const Icon = service.icon;

                        return (
                            <section key={service.id} id={service.id} className="scroll-mt-32">
                                <div className={`flex flex-col lg:flex-row gap-12 lg:gap-24 ${!isEven ? 'lg:flex-row-reverse' : ''}`}>
                                    {/* Left: Summary */}
                                    <div className="flex-1">
                                        <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 bg-slate-100/80 dark:bg-white/8 border border-slate-300/60 dark:border-white/15 text-slate-800 dark:text-slate-300">
                                            <Icon className="w-8 h-8" />
                                        </div>
                                        <h2 className="text-3xl font-heading font-bold text-slate-800 dark:text-white mb-4">{service.title}</h2>
                                        <p className="text-lg text-slate-700 dark:text-muted mb-8">{service.description}</p>
                                        
                                        <div className="bg-white/95 dark:bg-white/12 border border-white/70 dark:border-white/20 rounded-2xl p-6 mb-6 backdrop-blur-xl shadow-xl shadow-slate-200/30 dark:shadow-none">
                                            <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-4 flex items-center">
                                                <Zap className="w-5 h-5 mr-2 text-primary" />
                                                Process & Workflow
                                            </h3>
                                            <ul className="space-y-3">
                                                {service.processSteps.map((step, i) => (
                                                    <li key={i} className="flex items-start text-slate-700 dark:text-muted">
                                                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-slate-200 dark:bg-slate-700 text-slate-900 dark:text-slate-200 border border-slate-300 dark:border-slate-600 flex items-center justify-center text-xs font-bold mr-3 mt-0.5">{i + 1}</span>
                                                        {step}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>

                                    {/* Right: Details */}
                                    <div className="flex-1 space-y-6">
                                        <div className="bg-white/95 dark:bg-white/12 border border-white/70 dark:border-white/20 rounded-2xl p-6 hover:border-white/90 dark:hover:border-white/30 transition-colors backdrop-blur-xl shadow-xl shadow-slate-200/30 dark:shadow-none">
                                            <h3 className="text-sm font-bold text-slate-800 dark:text-white uppercase tracking-wider mb-4">Deliverables</h3>
                                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                                {service.deliverables.map((item, i) => (
                                                    <li key={i} className="flex items-center text-sm text-slate-800 dark:text-white">
                                                        <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 mr-2" />
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div className="bg-white/95 dark:bg-white/12 border border-white/70 dark:border-white/20 rounded-2xl p-6 hover:border-white/90 dark:hover:border-white/30 transition-colors backdrop-blur-xl shadow-xl shadow-slate-200/30 dark:shadow-none">
                                            <h3 className="text-sm font-bold text-slate-800 dark:text-white uppercase tracking-wider mb-4">Core Technologies</h3>
                                            <div className="flex flex-wrap gap-2">
                                                {service.technologies.map((tech, i) => (
                                                    <span key={i} className="px-3 py-1.5 bg-white/40 dark:bg-white/10 border border-white/50 dark:border-white/10 rounded-full text-xs text-slate-800 dark:text-white">
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="bg-gradient-to-br from-primary/30 to-primary/5 border border-primary/40 rounded-2xl p-6 backdrop-blur-lg shadow-lg shadow-primary/10">
                                            <h3 className="text-sm font-bold text-slate-900 dark:text-slate-200 uppercase tracking-wider mb-2">Estimated Timeline</h3>
                                            <p className="text-slate-900 dark:text-slate-200 font-medium">{service.timeline}</p>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        );
                    })}
                </div>
            </div>
            
            <CTASection />
            <Footer />
        </main>
    );
}