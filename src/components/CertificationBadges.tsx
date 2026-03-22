"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const badges = [
    { name: "CE", title: "CE Compliant", icon: "/badges/ce-mark.svg" },
    { name: "FCC", title: "FCC Certified", icon: "/badges/fcc-mark.svg" },
    { name: "RoHS", title: "RoHS Compliant", icon: "/badges/rohs-mark.svg" }
];

export default function CertificationBadges() {
    return (
        <div className="w-full">
                <div className="w-full mx-auto px-6 md:px-12 lg:px-16">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8 w-full">
                    <div className="text-center lg:text-left max-w-lg shrink-0">
                        <h3 className="text-2xl md:text-3xl font-heading font-bold text-text mb-3">Designed for Compliance</h3>
                        <p className="text-base text-slate-700 dark:text-muted">We engineer devices to pass rigorous certification standards on the first try, saving you time and money.</p>
                    </div>
                    
                    <div className="flex flex-wrap justify-center lg:justify-end items-center gap-8 md:gap-16 w-full py-4">
                        {badges.map((badge, index) => (
                            <motion.div
                                key={badge.name}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.15, duration: 0.6, ease: "easeOut" }}
                                className="group relative flex flex-col items-center justify-center focus-within:ring-2 focus-within:ring-primary rounded-xl outline-none p-2"
                                tabIndex={0}
                            >
                                <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-bg shadow-xl border border-white/10 flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-105 group-hover:border-primary/50 group-hover:shadow-[0_0_20px_rgba(0,217,255,0.2)] group-hover:-translate-y-1">
                                    <span className="text-xl md:text-2xl font-black text-transparent bg-clip-text bg-gradient-to-br from-text to-muted group-hover:from-cyan-300 group-hover:to-blue-500 transition-all">{badge.name}</span>
                                </div>
                                <span className="text-sm font-medium text-slate-800 dark:text-muted group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors tracking-wide uppercase">
                                    {badge.title}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
