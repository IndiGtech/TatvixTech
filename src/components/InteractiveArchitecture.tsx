"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Server, Cpu, Cloud, Database, ArrowRight, Shield, Wifi } from "lucide-react";
import { useState } from "react";

const nodes = [
    {
        id: "device",
        title: "Edge Devices",
        icon: Cpu,
        color: "cyan",
        details: ["Sensors (Temp, Accelerometer)", "Microcontrollers (ESP32, STM32)", "Actuators & Relays", "Battery / PMIC"],
        tech: ["Embedded C/C++", "FreeRTOS", "Zephyr"]
    },
    {
        id: "gateway",
        title: "Local Gateway",
        icon: Server,
        color: "purple",
        details: ["Protocol Translation", "Local Processing (Edge AI)", "Data Aggregation", "Offline Buffer"],
        tech: ["Linux", "Python", "MQTT/CoAP"]
    },
    {
        id: "cloud",
        title: "Cloud Infrastructure",
        icon: Cloud,
        color: "blue",
        details: ["Device Registry & Shadows", "Time-series Database", "OTA Update Server", "Analytics Pipeline"],
        tech: ["AWS IoT Core", "Azure IoT", "PostgreSQL"]
    },
    {
        id: "app",
        title: "End User App",
        icon: Database,
        color: "green",
        details: ["Real-time Dashboards", "Alerts & Notifications", "Device Provisioning", "User Management"],
        tech: ["Next.js", "React Native", "WebSockets"]
    }
];

export default function InteractiveArchitecture() {
    const [hoveredNode, setHoveredNode] = useState<string | null>(null);

    return (
        <section className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
                <div className="mb-16">
                    <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-4">
                        End-to-End System Architecture
                    </h2>
                    <p className="text-lg text-muted">
                        We design full-stack IoT solutions from the physical silicon at the edge to scalable cloud analytics.
                    </p>
                </div>

                <div className="relative bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 overflow-hidden">
                    
                    {/* Animated background grid for technical feel */}
                    <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10 pointer-events-none" />

                    <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-4">
                        {nodes.map((node, index) => {
                            const Icon = node.icon;
                            const isHovered = hoveredNode === node.id;
                            
                            // Map colors
                            const colorMap: Record<string, string> = {
                                cyan: "text-cyan-400 border-cyan-400/30 bg-cyan-400/10",
                                purple: "text-purple-400 border-purple-400/30 bg-purple-400/10",
                                blue: "text-blue-400 border-blue-400/30 bg-blue-400/10",
                                green: "text-green-400 border-green-400/30 bg-green-400/10",
                            };

                            return (
                                <div key={node.id} className="relative flex flex-col items-center w-full lg:w-1/4">
                                    
                                    {/* Connection Arrow (Except last node) */}
                                    {index < nodes.length - 1 && (
                                        <div className="hidden lg:block absolute top-12 left-[60%] w-full">
                                            <div className="relative w-[80%] h-0.5 bg-white/10 mx-auto">
                                                <motion.div 
                                                    className="absolute inset-0 bg-gradient-to-r from-transparent via-primary to-transparent"
                                                    animate={{ x: ["-100%", "200%"] }}
                                                    transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: index * 0.5 }}
                                                />
                                            </div>
                                            {/* Security / Protocol tags on lines */}
                                            <div className="absolute -top-6 left-1/2 -translate-x-1/2 flex items-center gap-1 text-[10px] text-muted font-mono bg-bg px-2 border border-white/5 rounded-full">
                                                {index === 0 ? <><Wifi className="w-3 h-3 text-cyan-400" /> BLE/LoRa</> : 
                                                 index === 1 ? <><Shield className="w-3 h-3 text-purple-400" /> MQTT+TLS</> : 
                                                 <><Server className="w-3 h-3 text-blue-400" /> REST/WSS</>}
                                            </div>
                                        </div>
                                    )}

                                    {/* Node Card */}
                                    <div 
                                        className="relative group w-full"
                                        onMouseEnter={() => setHoveredNode(node.id)}
                                        onMouseLeave={() => setHoveredNode(null)}
                                        tabIndex={0}
                                        onFocus={() => setHoveredNode(node.id)}
                                        onBlur={() => setHoveredNode(null)}
                                        aria-label={`Details for ${node.title}`}
                                    >
                                        <motion.div 
                                            className={`relative z-20 flex flex-col items-center justify-center p-6 rounded-2xl border transition-all duration-300 cursor-pointer backdrop-blur-md
                                                ${isHovered ? colorMap[node.color] : "bg-white/5 border-white/10 text-muted"}
                                            `}
                                            whileHover={{ y: -5 }}
                                        >
                                            <Icon className={`w-10 h-10 mb-3 ${isHovered ? "" : "text-white/70"}`} />
                                            <h3 className={`font-bold font-heading text-center ${isHovered ? "text-white" : ""}`}>
                                                {node.title}
                                            </h3>
                                        </motion.div>

                                        {/* Hover Tooltip (Details) */}
                                        <AnimatePresence>
                                            {isHovered && (
                                                <motion.div 
                                                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                                    className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[280px] lg:w-[320px] bg-bg/95 backdrop-blur-xl border border-white/10 p-5 rounded-xl shadow-2xl z-30 pointer-events-none"
                                                >
                                                    <div className="space-y-4">
                                                        <div>
                                                            <h4 className="text-xs font-bold uppercase tracking-wider text-white/60 mb-2">Components</h4>
                                                            <ul className="space-y-1.5">
                                                                {node.details.map((detail, i) => (
                                                                    <li key={i} className="text-sm text-white/90 flex items-start">
                                                                        <span className="text-primary mr-2 mt-0.5">•</span>
                                                                        {detail}
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                        <div>
                                                            <h4 className="text-xs font-bold uppercase tracking-wider text-white/60 mb-2">Core Tech</h4>
                                                            <div className="flex flex-wrap gap-2">
                                                                {node.tech.map((t, i) => (
                                                                    <span key={i} className="text-xs px-2 py-1 bg-white/5 border border-white/10 rounded text-cyan-200">
                                                                        {t}
                                                                    </span>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                    
                                    {/* Mobile arrow */}
                                    {index < nodes.length - 1 && (
                                        <div className="lg:hidden my-4 text-white/20">
                                            <ArrowRight className="w-6 h-6 rotate-90" />
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
