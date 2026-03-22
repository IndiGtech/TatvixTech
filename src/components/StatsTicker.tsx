"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useId, useRef } from "react";
import { cn } from "@/lib/utils";

export interface StatDefinition {
    value: string;
    label: string;
    hoverContext: string;
    delay?: number;
}

const STATS: StatDefinition[] = [
    {
        value: "4+",
        label: "Years Experience",
        hoverContext:
            "Embedded firmware, hardware bring-up, and IoT integration across regulated and industrial programs.",
        delay: 0,
    },
    {
        value: "50+",
        label: "Projects Delivered",
        hoverContext:
            "From proof-of-concept through pilot builds, including CE/FCC-bound product cycles.",
        delay: 0.1,
    },
    {
        value: "15+",
        label: "Industries Served",
        hoverContext:
            "Medical, automotive, industrial, agriculture, smart home, and adjacent B2B device categories.",
        delay: 0.2,
    },
    {
        value: "99%",
        label: "On-Time Delivery",
        hoverContext:
            "Milestone adherence on scoped engagements, with transparent schedule risk communication.",
        delay: 0.3,
    },
];

const StatItem = ({
    value,
    label,
    hoverContext,
    delay = 0,
}: StatDefinition) => {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });
    const reduceMotion = useReducedMotion();
    const tooltipId = useId();

    return (
        <div
            ref={ref}
            className={cn(
                "relative text-center group/stat rounded-xl px-2 py-3 md:px-4 md:py-4",
                "transition-[transform,box-shadow,background-color] duration-300",
                "hover:bg-white/[0.04] hover:shadow-[0_0_0_1px_rgba(255,255,255,0.08)]",
                "focus-within:bg-white/[0.04] focus-within:shadow-[0_0_0_1px_rgba(0,217,255,0.25)]",
                "md:hover:-translate-y-0.5"
            )}
            tabIndex={0}
            aria-describedby={tooltipId}
        >
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={
                    isInView
                        ? { opacity: 1, y: 0 }
                        : { opacity: 0, y: 20 }
                }
                transition={{
                    duration: reduceMotion ? 0 : 0.6,
                    delay: reduceMotion ? 0 : delay,
                }}
                className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-text to-muted mb-2 font-display group-hover/stat:from-primary group-hover/stat:to-accent transition-all duration-300"
            >
                {value}
            </motion.div>
            <div className="text-sm font-mono text-emerald-600 dark:text-emerald-500/80 tracking-wider uppercase">
                {label}
            </div>
            <div
                id={tooltipId}
                role="tooltip"
                className={cn(
                    "pointer-events-none absolute left-1/2 top-full z-20 mt-3 w-[min(100%,18rem)] -translate-x-1/2",
                    "rounded-lg border border-white/10 bg-bg/95 px-3 py-2 text-left text-xs leading-relaxed text-muted shadow-lg backdrop-blur-md",
                    "opacity-0 translate-y-1 scale-[0.98]",
                    "transition-all duration-200",
                    "group-hover/stat:pointer-events-none group-hover/stat:opacity-100 group-hover/stat:translate-y-0 group-hover/stat:scale-100",
                    "group-focus-within/stat:opacity-100 group-focus-within/stat:translate-y-0 group-focus-within/stat:scale-100"
                )}
            >
                {hoverContext}
            </div>
        </div>
    );
};

export default function StatsTicker() {
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 py-12 border-y border-white/5 bg-white/[0.02]">
            {STATS.map((stat) => (
                <StatItem key={stat.label} {...stat} />
            ))}
        </div>
    );
}
