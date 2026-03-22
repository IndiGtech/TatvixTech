"use client";

import { motion } from "framer-motion";
import { ArrowRight, Smartphone, LineChart, Cpu, Monitor } from "lucide-react";

const caseStudies = [
    {
        id: "medical",
        title: "Medical Device Companion App",
        description: "A complete hardware and software solution for a continuous glucose monitor, featuring an ultra-low-power BLE embedded device seamlessly synced to a HIPAA-compliant mobile app and web portal.",
        hardware: "Custom nRF52 BLE Board",
        software: "React Native App & Node.js Backend",
        icon: Smartphone,
        color: "text-pink-400",
        bg: "bg-pink-500/10",
        border: "border-pink-500/20"
    },
    {
        id: "industrial",
        title: "Industrial IoT Dashboard",
        description: "An end-to-end predictive maintenance system. Ruggedized ESP32 vibration sensors stream real-time data to a cloud backend, analyzed and displayed on a robust web dashboard with mobile alerts.",
        hardware: "Ruggedized ESP32 Sensors",
        software: "Next.js Dashboard & AWS IoT",
        icon: LineChart,
        color: "text-emerald-400",
        bg: "bg-emerald-500/10",
        border: "border-emerald-500/20"
    },
    {
        id: "consumer",
        title: "Smart Home Controller",
        description: "A consumer product bridging physical controls with digital intelligence. Custom STM32 hardware paired with a sleek user-facing mobile app and secure cloud data analytics.",
        hardware: "STM32 & WiFi/BLE Module",
        software: "iOS/Android App & Cloud Analytics",
        icon: Cpu,
        color: "text-blue-400",
        bg: "bg-blue-500/10",
        border: "border-blue-500/20"
    }
];

export default function SoftwareCaseStudies() {
    return (
        <section className="pt-16 border-t border-white/10">
            <div className="text-center mb-16">
                <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="inline-block text-accent font-medium tracking-wider uppercase mb-3"
                >
                    Case Studies
                </motion.span>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-3xl md:text-5xl font-heading font-bold text-white mb-6"
                >
                    Integrated Hardware & Software
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-lg text-muted max-w-2xl mx-auto"
                >
                    See how our complete product development approach accelerates time-to-market and ensures unified architecture from silicon to screen.
                </motion.p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
                {caseStudies.map((study, index) => {
                    const Icon = study.icon;
                    return (
                        <motion.div
                            key={study.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group relative overflow-hidden"
                        >
                            <div className={`absolute top-0 right-0 w-32 h-32 ${study.bg} blur-3xl -translate-y-1/2 translate-x-1/2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                            
                            <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${study.bg} ${study.border} border`}>
                                <Icon className={`w-7 h-7 ${study.color}`} />
                            </div>
                            
                            <h3 className="text-2xl font-bold text-white mb-4">{study.title}</h3>
                            <p className="text-muted leading-relaxed mb-8 h-32 overflow-hidden">{study.description}</p>
                            
                            <div className="space-y-3 mb-8">
                                <div className="flex items-center text-sm">
                                    <Cpu className="w-4 h-4 mr-3 text-cyan-400" />
                                    <span className="text-white/80">{study.hardware}</span>
                                </div>
                                <div className="flex items-center text-sm">
                                    <Monitor className="w-4 h-4 mr-3 text-purple-400" />
                                    <span className="text-white/80">{study.software}</span>
                                </div>
                            </div>
                            
                            <a 
                                href={`/industries#${study.id}`}
                                className="flex items-center text-sm font-bold text-primary group-hover:text-cyan-300 transition-colors w-fit"
                            >
                                View full details 
                                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                            </a>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
}