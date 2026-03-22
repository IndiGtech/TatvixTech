"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface IndustryCardProps {
    name: string;
    description: string;
    icon: LucideIcon;
    delay?: number;
}

export default function IndustryCard({ name, description, icon: Icon, delay = 0 }: IndustryCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay }}
            className="group relative h-full bg-gradient-to-br from-white/90 via-white/80 to-white/70 dark:from-white/[0.12] dark:via-white/[0.08] dark:to-white/[0.04] backdrop-blur-2xl border border-white/60 dark:border-white/[0.08] rounded-3xl p-6 transition-all duration-500 overflow-hidden shadow-2xl shadow-slate-200/40 dark:shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:shadow-3xl hover:shadow-slate-300/60 dark:hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] hover:-translate-y-2 hover:scale-[1.02]"
        >
            {/* Enhanced Glass Effect Layers */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/20 via-white/10 to-transparent opacity-60 dark:opacity-30" />
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-tl from-slate-100/30 via-transparent to-white/20 dark:from-white/[0.05] dark:to-white/[0.02]" />
            
            {/* Edge Blur Effects */}
            <div className="absolute -inset-px rounded-3xl bg-gradient-to-r from-white/40 via-transparent to-white/40 dark:from-white/[0.1] dark:to-white/[0.1] blur-sm" />
            <div className="absolute -inset-0.5 rounded-3xl bg-gradient-to-b from-slate-200/20 via-transparent to-slate-200/20 dark:from-white/[0.05] dark:to-white/[0.05] blur-md opacity-50" />
            
            {/* Hover Glow Effects - Reduced for dark mode */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/8 via-transparent to-cyan-500/8 dark:from-primary/3 dark:to-cyan-500/3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-cyan-500/8 dark:bg-cyan-500/3 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative z-10 flex flex-col h-full">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-white/80 via-white/60 to-white/40 dark:from-white/[0.15] dark:via-white/[0.10] dark:to-white/[0.05] flex items-center justify-center mb-4 group-hover:scale-110 transition-all duration-300 backdrop-blur-xl shadow-xl shadow-slate-200/40 dark:shadow-[0_4px_20px_rgba(0,0,0,0.4)] border border-white/50 dark:border-white/[0.08]">
                    <Icon className="w-6 h-6 text-slate-500 dark:text-gray-400 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors duration-300" />
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 font-display">{name}</h3>
                <p className="text-sm text-slate-600 dark:text-gray-400 leading-relaxed">
                    {description}
                </p>
            </div>
        </motion.div>
    );
};
