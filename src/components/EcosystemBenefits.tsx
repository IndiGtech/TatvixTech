"use client";

import { motion } from "framer-motion";
import { Handshake, Layers, Zap, Wrench } from "lucide-react";

const benefits = [
    {
        title: "Single Partner, Complete Solution",
        description: "Eliminate vendor coordination overhead. We handle your entire product journey from PCB design to mobile app deployment.",
        icon: Handshake,
        gradient: "from-blue-500/20 to-cyan-500/5",
        iconColor: "text-cyan-400",
    },
    {
        title: "Consistent Architecture",
        description: "Achieve seamless integration with a unified design philosophy across your hardware, firmware, and software layers.",
        icon: Layers,
        gradient: "from-purple-500/20 to-pink-500/5",
        iconColor: "text-purple-400",
    },
    {
        title: "Faster Time-to-Market",
        description: "Parallel development processes between hardware and software teams accelerate your product launch.",
        icon: Zap,
        gradient: "from-emerald-500/20 to-teal-500/5",
        iconColor: "text-emerald-400",
    },
    {
        title: "Ongoing Support",
        description: "Comprehensive maintenance, OTA updates, and full-stack improvements as your product scales in the market.",
        icon: Wrench,
        gradient: "from-orange-500/20 to-red-500/5",
        iconColor: "text-orange-400",
    },
];

export default function EcosystemBenefits() {
    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
            {benefits.map((benefit, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`p-6 rounded-2xl border border-white/5 bg-gradient-to-br ${benefit.gradient} backdrop-blur-sm hover:border-white/20 transition-all duration-300 hover:-translate-y-1`}
                >
                    <div className={`w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-4 border border-white/10 ${benefit.iconColor}`}>
                        <benefit.icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{benefit.title}</h3>
                    <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">{benefit.description}</p>
                </motion.div>
            ))}
        </div>
    );
}