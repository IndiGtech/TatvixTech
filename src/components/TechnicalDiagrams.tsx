"use client";

import { motion } from "framer-motion";
import { Zap, Wifi, Battery, Server, Check } from "lucide-react";
import { useState } from "react";

const protocols = [
    { name: "BLE", range: "Short (10-100m)", dataRate: "High (1-2 Mbps)", power: "Ultra Low", useCase: "Wearables, Local setup" },
    { name: "Wi-Fi", range: "Medium (50m)", dataRate: "Very High (54+ Mbps)", power: "High", useCase: "Video, High data telemetry" },
    { name: "LoRaWAN", range: "Long (1-10km)", dataRate: "Low (0.3-50 kbps)", power: "Very Low", useCase: "Smart Agriculture, City infra" },
    { name: "NB-IoT", range: "Long (Global)", dataRate: "Low (20-250 kbps)", power: "Medium-Low", useCase: "Asset tracking, Smart meters" },
];

export default function TechnicalDiagrams() {
    const [activeTab, setActiveTab] = useState<"protocol" | "power">("protocol");

    return (
        <section className="py-24 relative bg-bg">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
                <div className="mb-12 text-center">
                    <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-4">
                        Engineering Decisions
                    </h2>
                    <p className="text-lg text-muted">
                        Interactive comparisons and flowcharts representing core embedded tradeoffs.
                    </p>
                </div>

                {/* Tabs */}
                <div className="flex justify-center mb-8">
                    <div className="inline-flex bg-white/5 p-1 rounded-xl border border-white/10">
                        <button 
                            onClick={() => setActiveTab("protocol")}
                            className={`px-6 py-2.5 rounded-lg text-sm font-medium transition-all ${activeTab === "protocol" ? "bg-primary text-bg shadow-lg" : "text-muted hover:text-white"}`}
                            aria-selected={activeTab === "protocol"}
                            role="tab"
                        >
                            Connectivity Tradeoffs
                        </button>
                        <button 
                            onClick={() => setActiveTab("power")}
                            className={`px-6 py-2.5 rounded-lg text-sm font-medium transition-all ${activeTab === "power" ? "bg-primary text-bg shadow-lg" : "text-muted hover:text-white"}`}
                            aria-selected={activeTab === "power"}
                            role="tab"
                        >
                            Power Optimization
                        </button>
                    </div>
                </div>

                {/* Content Area */}
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 min-h-[400px]">
                    {activeTab === "protocol" && (
                        <motion.div 
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="overflow-x-auto"
                            role="tabpanel"
                        >
                            <table className="w-full text-left border-collapse" aria-label="Communication protocol comparison chart">
                                <thead>
                                    <tr className="border-b border-white/10">
                                        <th className="p-4 font-bold text-white uppercase tracking-wider text-xs">Protocol</th>
                                        <th className="p-4 font-bold text-white uppercase tracking-wider text-xs"><Wifi className="w-4 h-4 inline mr-2"/>Range</th>
                                        <th className="p-4 font-bold text-white uppercase tracking-wider text-xs"><Server className="w-4 h-4 inline mr-2"/>Data Rate</th>
                                        <th className="p-4 font-bold text-white uppercase tracking-wider text-xs"><Battery className="w-4 h-4 inline mr-2"/>Power Draw</th>
                                        <th className="p-4 font-bold text-white uppercase tracking-wider text-xs">Ideal Use Case</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {protocols.map((p, i) => (
                                        <tr key={i} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                                            <td className="p-4 font-bold text-primary">{p.name}</td>
                                            <td className="p-4 text-muted">{p.range}</td>
                                            <td className="p-4 text-muted">{p.dataRate}</td>
                                            <td className="p-4 text-muted">
                                                <span className={`inline-block px-2 py-1 rounded text-xs ${p.power.includes('Low') ? 'bg-green-500/20 text-green-400' : 'bg-orange-500/20 text-orange-400'}`}>
                                                    {p.power}
                                                </span>
                                            </td>
                                            <td className="p-4 text-muted">{p.useCase}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </motion.div>
                    )}

                    {activeTab === "power" && (
                        <motion.div 
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="flex flex-col items-center justify-center py-8"
                            role="tabpanel"
                            aria-label="Power consumption optimization flowchart"
                        >
                            {/* Simple Visual Flowchart */}
                            <div className="flex flex-col md:flex-row items-center gap-4 w-full max-w-3xl">
                                <div className="flex-1 bg-bg p-5 rounded-xl border border-blue-500/30 text-center relative group">
                                    <div className="text-blue-400 mb-2 font-bold font-mono">1. Hardware Layer</div>
                                    <p className="text-sm text-muted">Select ultra-low leakage LDOs and high-efficiency DC-DC buck converters.</p>
                                </div>
                                <Arrow />
                                <div className="flex-1 bg-bg p-5 rounded-xl border border-purple-500/30 text-center">
                                    <div className="text-purple-400 mb-2 font-bold font-mono">2. Firmware State</div>
                                    <p className="text-sm text-muted">Implement Deep Sleep / Hibernation modes. Wake on external interrupts.</p>
                                </div>
                                <Arrow />
                                <div className="flex-1 bg-bg p-5 rounded-xl border border-cyan-500/30 text-center">
                                    <div className="text-cyan-400 mb-2 font-bold font-mono">3. RF Tx/Rx Logic</div>
                                    <p className="text-sm text-muted">Batch sensor data. Transmit in short, high-power bursts. Turn off radio immediately.</p>
                                </div>
                            </div>
                            
                            <div className="mt-12 w-full max-w-md bg-green-500/10 border border-green-500/20 rounded-xl p-4 flex items-start gap-4">
                                <Check className="w-6 h-6 text-green-400 shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-bold text-white mb-1">Result: Battery Life Extended</h4>
                                    <p className="text-sm text-muted">A device transmitting once per hour can last 5+ years on a single coin cell (CR2450) by keeping average consumption below 10µA.</p>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </div>
            </div>
        </section>
    );
}

function Arrow() {
    return (
        <div className="hidden md:flex flex-col items-center text-white/20 px-2">
            <motion.div animate={{ x: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
                <Zap className="w-5 h-5 rotate-90 md:rotate-0" />
            </motion.div>
        </div>
    );
}
