"use client";

import Breadcrumbs from "@/components/Breadcrumbs";
import IndustryShowcase from "@/components/IndustryShowcase";
import { Factory, Stethoscope, Tractor, Zap, CarFront, Smartphone } from "lucide-react";
import SoftwareTestimonials from "@/components/SoftwareTestimonials";
import SoftwareCaseStudy from "@/components/SoftwareCaseStudy";

const industriesData = [
    {
        id: "medical",
        name: "Medical Devices",
        description: "We engineer ISO 13485 compliant embedded systems for patient monitoring, diagnostics, and wearable health tech. Our designs prioritize safety, high reliability, and low power consumption for critical care applications.",
        icon: Stethoscope,
        image: "https://images.unsplash.com/photo-1516549655169-df83a0833860?auto=format&fit=crop&q=80&w=800",
        challenges: ["Strict regulatory compliance", "Data security & HIPAA", "Biocompatibility constraints", "Zero-fault tolerance"],
        solutions: ["Pre-compliance validation", "Hardware encryption engines", "Redundant system architecture", "Medical-grade component sourcing"],
        softwareComponents: ["Patient Portals", "Clinician Dashboards", "Mobile Health Apps", "Compliance Reporting Systems"],
        standards: ["ISO 13485", "IEC 60601", "FDA Class II/III", "HIPAA"]
    },
    {
        id: "industrial",
        name: "Industrial IoT",
        description: "Ruggedized controllers, PLCs, and predictive maintenance sensors built to withstand extreme environments, EMI noise, and continuous operation in smart factories.",
        icon: Factory,
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800",
        challenges: ["Harsh operating conditions", "High EMI/EMC interference", "Legacy system integration", "Real-time determinism"],
        solutions: ["Galvanic isolation & shielding", "RTOS with microsecond latency", "Protocol translation (Modbus, CAN)", "Conformal coated PCBs"],
        softwareComponents: ["Real-time Monitoring Dashboards", "Predictive Maintenance Apps", "Mobile Field Service Tools", "SCADA Integration"],
        standards: ["IEC 61508", "IP67/IP68", "Industrial Temperature Grade", "CE/FCC"]
    },
    {
        id: "automotive",
        name: "Automotive & Mobility",
        description: "From battery management systems (BMS) for EVs to CAN-bus diagnostics tools and telematics gateways, we design robust automotive electronics.",
        icon: CarFront,
        image: "https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?auto=format&fit=crop&q=80&w=800",
        challenges: ["Extreme temperature swings", "Vibration and mechanical stress", "Complex vehicular networks", "Functional safety"],
        solutions: ["AEC-Q100 qualified components", "ISO 26262 compliant design", "CAN/LIN/FlexRay integration", "Advanced thermal management"],
        softwareComponents: ["Fleet Management Systems", "Diagnostic Software", "Mobile Service Apps", "OTA Update Portals"],
        standards: ["ISO 26262", "AEC-Q100", "CISPR 25", "IATF 16949"]
    },
    {
        id: "agriculture",
        name: "Agriculture Tech",
        description: "Smart sensors and automated systems for precision farming, livestock monitoring, and environmental control with ultra-low power wireless communication.",
        icon: Tractor,
        image: "https://images.unsplash.com/photo-1625246333195-58197bd47d26?auto=format&fit=crop&q=80&w=800",
        challenges: ["Remote areas with no power", "Poor cellular coverage", "Exposure to elements", "Cost sensitivity"],
        solutions: ["Solar harvesting PMICs", "LoRaWAN & Mesh networking", "UV/Weather-resistant enclosures", "Low-cost BOM optimization"],
        softwareComponents: ["Farm Management Dashboards", "Mobile Monitoring Apps", "Data Analytics Platforms", "Automated Irrigation Controls"],
        standards: ["IP66/IP67", "FCC/CE", "RoHS", "REACH"]
    },
    {
        id: "consumer",
        name: "Consumer Electronics",
        description: "Innovative smart home devices, wearables, and IoT gadgets designed for exceptional user experience, mass production, and aggressive price points.",
        icon: Smartphone,
        image: "https://images.unsplash.com/photo-1550009158-9ebf69173e03?auto=format&fit=crop&q=80&w=800",
        challenges: ["Aggressive form factors", "Battery life constraints", "High volume DFM", "Seamless UX/UI"],
        solutions: ["HDI PCB & Flex-Rigid design", "Ultra-low power states", "Automated test jig (ATE) design", "OTA update infrastructure"],
        softwareComponents: ["Companion Mobile Apps", "Web-based Device Management", "Customer Support Portals", "Voice Assistant Integration"],
        standards: ["FCC/CE", "Bluetooth SIG", "Wi-Fi Alliance", "UL"]
    },
    {
        id: "energy",
        name: "Energy Management",
        description: "Smart metering, renewable energy controllers, and battery management systems (BMS) for efficient power distribution and storage.",
        icon: Zap,
        image: "https://images.unsplash.com/photo-1473341304170-5799d416f718?auto=format&fit=crop&q=80&w=800",
        challenges: ["High voltage safety", "Accurate power measurement", "Grid connectivity", "Long product lifecycles"],
        solutions: ["High-voltage isolation barriers", "Precision ADC integration", "Smart Grid protocols (DNP3)", "Industrial-grade component selection"],
        softwareComponents: ["Energy Monitoring Dashboards", "Consumer Usage Apps", "Grid Analytics Software", "Billing Integrations"],
        standards: ["IEC 62053", "UL 1741", "IEEE 1547", "ISO 9001"]
    }
];

export default function IndustriesClientWrapper() {
    return (
        <main className="min-h-screen pt-32 pb-24 bg-bg relative">
            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-20 pointer-events-none" />
            
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <Breadcrumbs items={[{ label: "Industries", href: "/industries" }]} />

                <div className="mb-24 max-w-3xl">
                    <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6">
                        Domain-Specific Expertise
                    </h1>
                    <p className="text-xl text-muted leading-relaxed">
                        Different industries demand vastly different engineering approaches. We apply deep domain knowledge to navigate regulatory landscapes and technical constraints unique to your sector.
                    </p>
                </div>

                <div className="space-y-32">
                    {industriesData.map((industry, index) => {
                        const Icon = industry.icon;
                        
                        return (
                            <IndustryShowcase
                                key={industry.id}
                                id={industry.id}
                                name={industry.name}
                                description={industry.description}
                                icon={Icon}
                                image={industry.image}
                                challenges={industry.challenges}
                                solutions={industry.solutions}
                                softwareComponents={industry.softwareComponents}
                                standards={industry.standards}
                                isLeft={index % 2 === 0}
                            />
                        );
                    })}
                </div>

                <div className="mt-32">
                    <SoftwareCaseStudy />
                </div>

                <div className="mt-32">
                    <SoftwareTestimonials />
                </div>
            </div>
        </main>
    );
}
