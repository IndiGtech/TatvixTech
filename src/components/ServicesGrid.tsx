"use client";

import { CircuitBoard, Code2, Wifi, Cloud, Zap, Factory, Monitor, Smartphone, Code } from "lucide-react";
import ServiceCard from "./ServiceCard";

import CertificationBadges from "./CertificationBadges";

const services = [
    // Hardware
    {
        title: "Custom PCB Design",
        description: "Single & multi-layer PCB design with focus on manufacturability, signal integrity, and cost optimization.",
        icon: CircuitBoard,
        accentColor: "cyan",
    },
    {
        title: "Rapid Prototyping",
        description: "Fast-track your idea to reality with quick Proof of Concept (PoC) development and functional testing.",
        icon: Zap,
        accentColor: "orange",
    },
    {
        title: "Production Support",
        description: "Manufacturing support, test jig design, and lifecycle management for seamless mass production.",
        icon: Factory,
        accentColor: "emerald",
    },
    // Embedded
    {
        title: "Firmware Development",
        description: "High-performance embedded C/C++ firmware, RTOS integration, secure bootloaders, and OTA updates.",
        icon: Code2,
        accentColor: "purple",
    },
    {
        title: "IoT Connectivity",
        description: "Secure wireless communication using Wi-Fi, BLE, LoRa, Zigbee, NB-IoT, and LTE protocols.",
        icon: Wifi,
        accentColor: "green",
    },
    {
        title: "Cloud Integration",
        description: "End-to-end cloud connectivity with AWS IoT, Azure, or Google Cloud, including real-time dashboards.",
        icon: Cloud,
        accentColor: "blue",
    },
    // Software
    {
        title: "Web Applications",
        description: "Custom web dashboards, admin panels, and control interfaces for your connected products.",
        icon: Monitor,
        accentColor: "blue",
    },
    {
        title: "Mobile Applications",
        description: "iOS and Android companion apps for device control, monitoring, and user interaction.",
        icon: Smartphone,
        accentColor: "purple",
    },
    {
        title: "Custom Software",
        description: "Desktop applications, API integrations, and enterprise software solutions for your product ecosystem.",
        icon: Code,
        accentColor: "cyan",
    },
];

export default function ServicesGrid() {
    return (
        <section id="services" className="py-24 relative overflow-hidden bg-white/70 dark:bg-bg/50 backdrop-blur-xl border-y border-slate-200 dark:border-white/10 w-full shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-none">
            {/* Connection Flow Visual Background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-6xl h-full pointer-events-none hidden lg:block z-0 opacity-20">
                <svg className="w-full h-full" viewBox="0 0 1000 800" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                    <path 
                        d="M 166 150 Q 500 150 500 280 T 833 400 Q 500 400 500 530 T 166 660" 
                        stroke="url(#flow-gradient)" 
                        strokeWidth="3" 
                        strokeDasharray="8 8"
                        className="animate-pulse"
                    />
                    <defs>
                        <linearGradient id="flow-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#06b6d4" /> {/* cyan - Hardware */}
                            <stop offset="50%" stopColor="#a855f7" /> {/* purple - Embedded */}
                            <stop offset="100%" stopColor="#3b82f6" /> {/* blue - Software */}
                        </linearGradient>
                    </defs>
                </svg>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-800 dark:text-white mb-4">
                        Complete product development services from hardware to software
                    </h2>
                    <p className="text-lg text-slate-700 dark:text-muted max-w-2xl mx-auto">
                        Everything you need to bring connected products to market
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12 relative z-10">
                    {services.map((service, index) => (
                        <ServiceCard
                            key={service.title}
                            {...service}
                            delay={index * 0.1}
                            link="/services"
                        />
                    ))}
                </div>

                <div className="flex justify-center mt-12 mb-20 relative z-10">
                    <a
                        href="/services"
                        className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white/5 border border-slate-300 dark:border-white/10 text-slate-800 dark:text-white font-bold dark:font-medium hover:bg-slate-50 dark:hover:bg-white/10 hover:border-slate-400 dark:hover:border-white/20 hover:-translate-y-1 transition-all duration-300 group shadow-sm dark:shadow-none"
                    >
                        View all services in detail
                        <svg className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </a>
                </div>

                <div className="pt-16 border-t border-slate-200 dark:border-white/10 relative z-10">
                    <CertificationBadges />
                </div>
            </div>
        </section>
    );
}