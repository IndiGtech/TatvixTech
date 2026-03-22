"use client";

import { Lightbulb, Fingerprint, Code, Cloud, FlaskConical, Rocket } from "lucide-react";
import { IsoPathfinder, IsoPCBA, IsoBlocks, IsoCloud, IsoLayers, IsoAssembly } from "./ProcessVisuals";
import ProcessStep from "./ProcessStep";
import PCBTraceLine from "./PCBTraceLine";

const steps = [
    {
        number: 1,
        title: "Product Concept & Feasibility",
        description: "We analyze requirements, design system architecture, and develop Proof of Concepts (PoC) to validate ideas before full-scale development.",
        icon: Lightbulb,
        visual: IsoPathfinder,
    },
    {
        number: 2,
        title: "Embedded Hardware Design",
        description: "Custom PCB design tailored for your needs using ESP32, STM32, or nRF52. We focus on power management, DFM, and cost optimization.",
        icon: Fingerprint,
        visual: IsoPCBA,
    },
    {
        number: 3,
        title: "Firmware Development",
        description: "Robust Embedded C/C++ firmware, RTOS implementation, and secure bootloaders. We ensure reliable device drivers and middleware integration.",
        icon: Code,
        visual: IsoBlocks,
    },
    {
        number: 4,
        title: "IoT & Cloud Integration",
        description: "Seamless connectivity using MQTT/HTTPs protocols with AWS, Azure, or Google Cloud. We build scalable dashboards for real-time data visualization.",
        icon: Cloud,
        visual: IsoCloud,
    },
    {
        number: 5,
        title: "Prototyping & Testing",
        description: "Rapid hardware prototyping and rigorous functional testing. We ensure compliance with industry standards like CE, FCC, and RoHS.",
        icon: FlaskConical,
        visual: IsoLayers,
    },
    {
        number: 6,
        title: "Production & Scaling",
        description: "Support for mass manufacturing, test jig design, and lifecycle management to help you scale from prototype to thousands of units.",
        icon: Rocket,
        visual: IsoAssembly,
    },
];

export default function HowWeBuild() {
    return (
        <section id="solutions" className="relative py-24 overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-4">
                        From Concept to Production
                    </h2>
                    <p className="text-lg text-muted max-w-2xl mx-auto">
                        Our proven 6-step process to bring your embedded product to life with precision and speed.
                    </p>
                </div>

                <div className="relative">
                    {/* Central Trace Line */}
                    <PCBTraceLine />

                    <div className="relative z-10 py-12">
                        {steps.map((step, index) => (
                            <ProcessStep
                                key={step.number}
                                {...step}
                                isLeft={index % 2 === 0}
                                delay={index * 0.1}
                            />
                        ))}
                    </div>
                </div>

                <div className="flex justify-center mt-8 relative z-10">
                    <a
                        href="/process"
                        className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-primary/10 border border-primary/20 text-primary font-medium hover:bg-primary hover:text-bg hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(0,217,255,0.4)] transition-all duration-300"
                    >
                        Explore our engineering process
                        <svg className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
}
