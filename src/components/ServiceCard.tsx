"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { useRef, useState, useEffect } from "react";

interface ServiceCardProps {
    title: string;
    description: string;
    icon: LucideIcon;
    accentColor: string;
    delay: number;
    features?: string[];
    link?: string;
}

export default function ServiceCard({ title, description, icon: Icon, accentColor, delay, features, link }: ServiceCardProps) {
    const ref = useRef<HTMLDivElement>(null);
    const [randomDelay, setRandomDelay] = useState(0);

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setRandomDelay(Math.random() * 2);
    }, []);

    // Motion values for tilt effect
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    // Spring physics for smooth tilt
    const mouseX = useSpring(x, { stiffness: 250, damping: 25 });
    const mouseY = useSpring(y, { stiffness: 250, damping: 25 });

    // Transform mouse position to rotation degrees
    const rotateX = useTransform(mouseY, [-0.5, 0.5], [15, -15]); // Reverse axis for natural tilt
    const rotateY = useTransform(mouseX, [-0.5, 0.5], [-15, 15]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return;

        const rect = ref.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;

        const clientX = e.clientX - rect.left;
        const clientY = e.clientY - rect.top;

        const xPct = clientX / width - 0.5;
        const yPct = clientY / height - 0.5;

        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    // lighter gradients for border/glow based on accent color
    const gradients: Record<string, string> = {
        cyan: "from-cyan-200 to-blue-300",
        purple: "from-purple-200 to-pink-300",
        green: "from-green-200 to-emerald-300",
        blue: "from-blue-200 to-indigo-300",
        orange: "from-orange-200 to-red-300",
        emerald: "from-emerald-200 to-teal-300",
    };

    const textColors: Record<string, string> = {
        cyan: "text-slate-800 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-slate-200",
        purple: "text-slate-800 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-slate-200",
        green: "text-slate-800 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-slate-200",
        blue: "text-slate-800 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-slate-200",
        orange: "text-slate-800 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-slate-200",
        emerald: "text-slate-800 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-slate-200",
    };

    const borderGradient = gradients[accentColor] || "from-white/20 to-white/5";

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                transformStyle: "preserve-3d",
                rotateX,
                rotateY,
            }}
            className="relative group h-full perspective-[1000px]"
        >
            {/* Hover Lift & Shadow Container */}
            <motion.div
                className="h-full relative rounded-3xl transition-transform duration-300 group-hover:-translate-y-2"
                style={{ transformStyle: "preserve-3d" }}
            >
                    {/* 1. Animated Gradient Border (Background Layer) */}
                <div
                    className={`absolute inset-[-1.5px] rounded-3xl bg-gradient-to-br ${borderGradient} opacity-[0.15] dark:opacity-0 group-hover:opacity-[0.4] dark:group-hover:opacity-[0.6] transition-all duration-500`}
                    style={{ transform: "translateZ(-1px)" }} // Push slightly back
                />

                {/* 2. Glass Card Content */}
                <div className="relative h-full p-8 rounded-3xl bg-white/60 dark:shadow-none dark:bg-bg/90 backdrop-blur-md border border-white/50 dark:border-white/10 group-hover:bg-white/80 dark:group-hover:bg-bg/90 transition-all duration-300 overflow-hidden shadow-sm">

                    {/* Inner Content Component */}
                    <div className="relative z-10 flex flex-col h-full" style={{ transform: "translateZ(20px)" }}>

                        {/* Icon Container */}
                        <motion.div
                            className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 bg-slate-100/80 dark:bg-white/8 border border-slate-300/60 dark:border-white/15 group-hover:scale-110 transition-transform duration-300 ${textColors[accentColor]}`}
                            animate={{ y: [0, -5, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: randomDelay }}
                        >
                            <Icon className="w-8 h-8" />
                        </motion.div>

                        <h3 className="text-2xl font-heading font-bold text-slate-800 dark:text-white mb-3">{title}</h3>

                        <p className="text-slate-600 dark:text-muted text-sm leading-relaxed mb-6 flex-grow">
                            {description}
                        </p>

                        {features && features.length > 0 && (
                            <ul className="mt-4 space-y-2 mb-6">
                                {features.map((feature, i) => (
                                    <li key={i} className="flex items-center text-xs text-slate-500 dark:text-muted/80">
                                        <div className={`w-1.5 h-1.5 rounded-full mr-2 bg-gradient-to-r ${borderGradient}`} />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        )}

                        {link && (
                            <div className="mt-auto pt-4 border-t border-white/10">
                                <a href={link} className={`inline-flex items-center text-sm font-medium ${textColors[accentColor]} hover:underline transition-all duration-300`}>
                                    Learn more
                                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </a>
                            </div>
                        )}
                    </div>

                    {/* Subtle Glow Overlay inside card */}
                    <div className={`absolute -right-20 -bottom-20 w-64 h-64 bg-gradient-to-br ${borderGradient} opacity-0 group-hover:opacity-[0.06] blur-[60px] transition-opacity duration-500 pointer-events-none`} />

                    {/* Glass Surface Shine Effect */}
                    <div className="absolute inset-0 overflow-hidden rounded-3xl pointer-events-none">
                        <motion.div
                            className="absolute top-0 bottom-0 -left-[100%] w-[100%] bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-[-25deg]"
                            initial={{ x: "0%" }}
                            whileHover={{ x: "250%" }}
                            transition={{ duration: 0.8, ease: "easeInOut" }}
                        />
                    </div>
                </div>
            </motion.div>
        </motion.div >
    );
}
