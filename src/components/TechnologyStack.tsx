"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { CircuitBoard, Code2, Cloud, Monitor, ArrowDown } from "lucide-react";

const stackLayers = [
    {
        id: "hardware",
        title: "Hardware Engineering",
        description: "PCB Design, Component Selection, Manufacturing",
        icon: CircuitBoard,
        items: ["Altium / KiCad", "ESP32 / STM32 / nRF52", "Power Optimization", "DFM / DFA"],
        color: "text-cyan-400",
        bg: "bg-cyan-500/10",
        border: "border-cyan-500/30",
        gradient: "from-cyan-500/20 to-transparent"
    },
    {
        id: "embedded",
        title: "Embedded Systems",
        description: "Real-time Systems, Communication Protocols, Power Management",
        icon: Code2,
        items: ["C / C++ / Rust", "FreeRTOS / Zephyr", "BLE / WiFi / LoRaWAN", "OTA Bootloaders"],
        color: "text-emerald-400",
        bg: "bg-emerald-500/10",
        border: "border-emerald-500/30",
        gradient: "from-emerald-500/20 to-transparent"
    },
    {
        id: "cloud",
        title: "Cloud & Backend",
        description: "Backend Services, Data Analytics, Security",
        icon: Cloud,
        items: ["Node.js / Python", "AWS IoT / Azure IoT", "GraphQL / REST APIs", "PostgreSQL / MongoDB"],
        color: "text-purple-400",
        bg: "bg-purple-500/10",
        border: "border-purple-500/30",
        gradient: "from-purple-500/20 to-transparent"
    },
    {
        id: "software",
        title: "Software Applications",
        description: "Web Applications, Mobile Apps, Desktop Solutions",
        icon: Monitor,
        items: ["React / Next.js", "React Native / iOS / Android", "Electron / Tauri", "Tailwind CSS"],
        color: "text-blue-400",
        bg: "bg-blue-500/10",
        border: "border-blue-500/30",
        gradient: "from-blue-500/20 to-transparent"
    }
];

export default function TechnologyStack() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"]
    });

    const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    return (
        <section className="py-24 relative">
            <div className="text-center mb-16">
                <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="inline-block text-accent font-medium tracking-wider uppercase mb-3"
                >
                    Full Stack Capability
                </motion.span>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-3xl md:text-5xl font-heading font-bold text-white mb-6"
                >
                    Complete Technology Stack
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-lg text-muted max-w-2xl mx-auto"
                >
                    From raw silicon routing to intuitive user interfaces, we maintain deep expertise across every layer of the connected product ecosystem.
                </motion.p>
            </div>

            <div className="max-w-4xl mx-auto relative px-4" ref={containerRef}>
                {/* Visual connecting line behind the stack */}
                <div className="absolute top-10 bottom-10 left-1/2 -translate-x-1/2 w-1 bg-white/5 hidden md:block rounded-full" />
                
                {/* Scroll-filled gradient line */}
                <motion.div 
                    className="absolute top-10 left-1/2 -translate-x-1/2 w-1 bg-gradient-to-b from-cyan-500 via-emerald-500 via-purple-500 to-blue-500 hidden md:block rounded-full shadow-[0_0_15px_rgba(0,217,255,0.5)] z-0"
                    style={{ height: lineHeight }}
                />
                
                <div className="space-y-4 md:space-y-6 relative z-10">
                    {stackLayers.map((layer, index) => {
                        const Icon = layer.icon;
                        
                        return (
                            <div key={layer.id} className="relative">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className={`bg-white/5 backdrop-blur-md border ${layer.border} rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 relative overflow-hidden group hover:bg-white/10 transition-colors`}
                                >
                                    {/* Hover background gradient */}
                                    <div className={`absolute inset-0 bg-gradient-to-r ${layer.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                                    <div className="flex-shrink-0 flex items-center justify-center relative z-10 w-full md:w-auto">
                                        <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${layer.bg} border ${layer.border}`}>
                                            <Icon className={`w-8 h-8 ${layer.color}`} />
                                        </div>
                                    </div>
                                    
                                    <div className="flex-1 text-center md:text-left relative z-10">
                                        <h3 className="text-2xl font-bold text-white mb-2">{layer.title}</h3>
                                        <p className="text-muted mb-4">{layer.description}</p>
                                        
                                        <motion.div 
                                            className="flex flex-wrap justify-center md:justify-start gap-2"
                                            initial="hidden"
                                            whileInView="visible"
                                            viewport={{ once: true }}
                                            variants={{ visible: { transition: { staggerChildren: 0.1, delayChildren: index * 0.1 + 0.3 } } }}
                                        >
                                            {layer.items.map((item, i) => (
                                                <motion.span 
                                                    key={i} 
                                                    className="px-3 py-1 bg-white/10 border border-white/10 rounded-full text-xs text-white/80 hover:bg-white/20 transition-colors cursor-default"
                                                    variants={{
                                                        hidden: { opacity: 0, scale: 0.8 },
                                                        visible: { opacity: 1, scale: 1 }
                                                    }}
                                                >
                                                    {item}
                                                </motion.span>
                                            ))}
                                        </motion.div>
                                    </div>
                                </motion.div>
                                
                                {index < stackLayers.length - 1 && (
                                    <div className="flex justify-center my-2 md:my-0 md:absolute md:-bottom-8 md:left-1/2 md:-translate-x-1/2 z-20">
                                        <motion.div
                                            animate={{ y: [0, 5, 0] }}
                                            transition={{ duration: 2, repeat: Infinity }}
                                            className="w-8 h-8 rounded-full bg-bg border border-white/20 flex items-center justify-center"
                                        >
                                            <ArrowDown className="w-4 h-4 text-white/40" />
                                        </motion.div>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}