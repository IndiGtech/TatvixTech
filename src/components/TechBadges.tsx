"use client";

import { motion } from "framer-motion";
import {
    SiStmicroelectronics,
    SiNordicsemiconductor,
    SiEspressif,
    SiKicad,
    SiPython,
    SiCplusplus,
    SiLinux,
    SiNxp
} from "react-icons/si";

// Fallbacks removed
import { FaAws } from "react-icons/fa";
import { VscAzure } from "react-icons/vsc";

// Authentic SVG Logos with Real Multi-Colors

// Zephyr: Authentic colors (Teal/Purple/Dark)
const ZephyrLogo = () => (
    <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
        <path d="M50 5 L20 35 L50 95 L80 35 L50 5 Z" fill="#762886" /> {/* Purple Body */}
        <path d="M50 15 L70 35 H30 L50 15 Z" fill="#4BCCF5" /> {/* Cyan Detail as per some brand assets */}
        <path d="M50 5 L50 95" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
    </svg>
);

// FreeRTOS: Authentic Green Orb with Pulse
const FreeRTOSLogo = () => (
    <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
        <defs>
            <radialGradient id="greenOrb" cx="50%" cy="50%" r="50%" fx="30%" fy="30%">
                <stop offset="0%" stopColor="#8EE524" /> {/* Bright Green Highlight */}
                <stop offset="100%" stopColor="#439539" /> {/* Darker Green Shadow */}
            </radialGradient>
        </defs>
        <circle cx="50" cy="50" r="48" fill="url(#greenOrb)" />
        {/* Pulse Line */}
        <path d="M15 50 H30 L40 30 L50 70 L60 40 L70 50 H85" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.9" />
        <text x="50" y="85" fontSize="14" fill="white" textAnchor="middle" fontWeight="bold" fontFamily="sans-serif" style={{ textShadow: "0px 1px 2px rgba(0,0,0,0.3)" }}>FreeRTOS</text>
    </svg>
);

// Altium: Authentic Gold/Black A
const AltiumLogo = () => (
    <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
        <path d="M50 10 L10 90 H30 L40 70 H60 L70 90 H90 L50 10 Z" fill="#A5915F" />
        <path d="M50 30 L55 40 H45 L50 30 Z" fill="#FFFFFF" fillOpacity="0.3" /> {/* Shine */}
    </svg>
);

const technologies = [
    { name: "NXP", icon: SiNxp, color: "#F8AC1C" },
    { name: "STM32", icon: SiStmicroelectronics, color: "#00B8F5" },
    { name: "Nordic Semi", icon: SiNordicsemiconductor, color: "#00A9CE" },
    { name: "Espressif", icon: SiEspressif, color: "#E7352C" },
    { name: "Altium", icon: AltiumLogo, color: "#A5915F" },
    { name: "KiCad", icon: SiKicad, color: "#314CB6" },
    { name: "Python", icon: SiPython, color: "#FFD43B" },
    { name: "C++", icon: SiCplusplus, color: "#00599C" },
    { name: "Linux", icon: SiLinux, color: "#FCC624" },
    { name: "FreeRTOS", icon: FreeRTOSLogo, color: "#439539" },
    { name: "Zephyr", icon: ZephyrLogo, color: "#762886" },
    { name: "AWS IoT", icon: FaAws, color: "#FF9900" },
    { name: "Azure", icon: VscAzure, color: "#0078D4" },
];

export default function TechBadges() {
    return (
        <div className="relative w-full py-16 overflow-hidden bg-gradient-to-br from-white/95 via-white/90 to-white/80 dark:from-white/[0.15] dark:via-white/[0.12] dark:to-white/[0.08] backdrop-blur-xl border-y border-white/40 dark:border-white/15 shadow-xl shadow-slate-200/30 dark:shadow-none">
            {/* Fade Edges with glass effect */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white/90 via-white/60 to-transparent dark:from-white/[0.12] dark:via-white/[0.06] dark:to-transparent backdrop-blur-xl z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white/90 via-white/60 to-transparent dark:from-white/[0.12] dark:via-white/[0.06] dark:to-transparent backdrop-blur-xl z-10" />

            <div className="flex w-full">
                <motion.div
                    className="flex min-w-max gap-16 md:gap-24 px-12"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        duration: 60,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                >
                    {/* Duplicate list 4 times for smooth infinite scroll */}
                    {[...technologies, ...technologies, ...technologies, ...technologies].map((tech, i) => (
                        <div
                            key={`${tech.name}-${i}`}
                            className="flex flex-col items-center justify-center gap-4 group cursor-pointer"
                        >
                            <div
                                className="relative p-4 rounded-xl bg-white/70 dark:bg-white/[0.15] backdrop-blur-xl border border-white/80 dark:border-white/[0.25] group-hover:bg-white/90 dark:group-hover:bg-white/[0.25] transition-all duration-300 transform group-hover:-translate-y-1 shadow-[0_8px_32px_rgba(31,38,135,0.25)] dark:shadow-[0_8px_32px_rgba(255,255,255,0.06)] group-hover:shadow-[0_12px_40px_rgba(31,38,135,0.40)] dark:group-hover:shadow-[0_12px_40px_rgba(255,255,255,0.15)]"
                            >
                                <div
                                    className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center transition-all duration-300 filter grayscale-[0.3] opacity-85 group-hover:grayscale-0 group-hover:opacity-100 contrast-[1.1] group-hover:contrast-[1.2]"
                                >
                                    <div
                                        className="w-full h-full"
                                        style={{ color: tech.color }} // For font icons to take color when grayscale is removed
                                    >
                                        <tech.icon className="w-full h-full" />
                                    </div>
                                </div>
                            </div>
                            <span
                                className="text-xs md:text-sm font-medium text-gray-600 dark:text-gray-400 group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors duration-300"
                            >
                                {tech.name}
                            </span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};
