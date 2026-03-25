"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Code, Cpu, Cloud, ShieldCheck, Wifi } from "lucide-react";

export default function HeroIllustration() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <div className="relative w-full h-full min-h-[600px] flex items-center justify-center pointer-events-none select-none overflow-visible">

            {/* Ambient Background Aura */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] animate-pulse-slow" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-blue-600/10 rounded-full blur-[80px] mix-blend-screen" />

            {/* Main Stage */}
            <div className="relative w-[500px] h-[500px] perspective-[2000px]">

                {/* --- Background PCB Traces --- */}
                <svg className="absolute inset-0 w-full h-full opacity-60 dark:opacity-30" viewBox="0 0 500 500">
                    <motion.path 
                        d="M 100,50 L 150,100 L 200,100 L 220,150" 
                        fill="none" 
                        className="stroke-cyan-600 dark:stroke-cyan-400"
                        strokeWidth="2" 
                        strokeLinecap="square"
                        strokeLinejoin="miter"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: [0, 1, 1, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    />
                    <motion.path 
                        d="M 400,450 L 350,400 L 300,400 L 280,350" 
                        fill="none" 
                        className="stroke-cyan-600 dark:stroke-cyan-400"
                        strokeWidth="2" 
                        strokeLinecap="square"
                        strokeLinejoin="miter"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: [0, 1, 1, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "linear", delay: 1 }}
                    />
                    <motion.path 
                        d="M 50,400 L 100,350 L 100,300 L 150,250" 
                        fill="none" 
                        className="stroke-purple-600 dark:stroke-purple-400"
                        strokeWidth="2" 
                        strokeLinecap="square"
                        strokeLinejoin="miter"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: [0, 1, 1, 0] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "linear", delay: 0.5 }}
                    />
                    <motion.path 
                        d="M 450,100 L 400,150 L 400,200 L 350,250" 
                        fill="none" 
                        className="stroke-purple-600 dark:stroke-purple-400"
                        strokeWidth="2" 
                        strokeLinecap="square"
                        strokeLinejoin="miter"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: [0, 1, 1, 0] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "linear", delay: 1.5 }}
                    />
                    {/* Pads */}
                    <circle cx="100" cy="50" r="3" className="fill-cyan-600 dark:fill-cyan-400" />
                    <circle cx="220" cy="150" r="4" className="fill-cyan-600 dark:fill-cyan-400" />
                    <circle cx="400" cy="450" r="3" className="fill-cyan-600 dark:fill-cyan-400" />
                    <circle cx="280" cy="350" r="4" className="fill-cyan-600 dark:fill-cyan-400" />
                    <circle cx="50" cy="400" r="3" className="fill-purple-600 dark:fill-purple-400" />
                    <circle cx="150" cy="250" r="4" className="fill-purple-600 dark:fill-purple-400" />
                    <circle cx="450" cy="100" r="3" className="fill-purple-600 dark:fill-purple-400" />
                    <circle cx="350" cy="250" r="4" className="fill-purple-600 dark:fill-purple-400" />
                </svg>

                {/* --- 0. Orbit Ring (Connecting Icons) --- */}
                {/* Icons are at radius 210px. Container 500px. Inset = (500 - 420) / 2 = 40px */}
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-[40px] rounded-full border border-dashed border-cyan-600/40 dark:border-cyan-500/20"
                />
                <div className="absolute inset-[40px] rounded-full border border-black/5 dark:border-white/5" /> {/* Static base track */}

                {/* --- 1. The Gyroscopic Core --- */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] flex items-center justify-center transform-style-3d z-20">

                    {/* Core Sphere Glow */}
                    <motion.div
                        animate={{ scale: [1, 1.1, 1], opacity: [0.8, 1, 0.8] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-cyan-400/40 dark:from-cyan-300/30 via-blue-500/20 dark:via-blue-500/10 to-transparent blur-xl"
                    />

                    {/* Ring 1 - Horizontal Orbit */}
                    <motion.div
                        animate={{ rotateZ: 360, rotateX: 65 }}
                        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-0 rounded-full border-[1px] border-cyan-600/40 dark:border-cyan-400/30 border-t-cyan-500/80 dark:border-t-cyan-200/80 shadow-[0_0_15px_rgba(0,255,255,0.4)] dark:shadow-[0_0_15px_rgba(0,255,255,0.2)]"
                        style={{ rotateX: 65 }}
                    />

                    {/* Ring 2 - Vertical Orbit */}
                    <motion.div
                        animate={{ rotateZ: -360, rotateY: 65 }}
                        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-[15px] rounded-full border-[1px] border-blue-600/40 dark:border-blue-400/30 border-l-blue-500/80 dark:border-l-blue-200/80 shadow-[0_0_15px_rgba(50,50,255,0.4)] dark:shadow-[0_0_15px_rgba(50,50,255,0.2)]"
                        style={{ rotateY: 65 }}
                    />

                    {/* Ring 3 - Inner Diagonal */}
                    <motion.div
                        animate={{ rotateZ: 360, rotateX: -45, rotateY: 45 }}
                        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-[40px] rounded-full border-[2px] border-dashed border-black/20 dark:border-white/20"
                    />

                    {/* Central Energy Singularity */}
                    <div className="absolute w-[40px] h-[40px] bg-cyan-100 dark:bg-white rounded-full shadow-[0_0_40px_rgba(0,255,255,0.8)] z-10 animate-pulse" />
                    <div className="absolute w-[20px] h-[20px] bg-cyan-300 rounded-full blur-[2px] z-20" />

                </div>

                {/* --- 2. Data Tethers (CSS Version for Reliability) --- */}
                {/* Connecting Core (Center) to Icons (Radius) */}
                <DataBeam angle={270} radius={210} delay={0} />
                <DataBeam angle={342} radius={210} delay={0.2} />
                <DataBeam angle={54} radius={210} delay={0.4} />
                <DataBeam angle={126} radius={210} delay={0.6} />
                <DataBeam angle={198} radius={210} delay={0.8} />

                {/* --- 3. Floating Satellites (Icons) --- */}
                <Satellite icon={<Code className="w-7 h-7 text-cyan-600 dark:text-cyan-300" />} label="Firmware" angle={270} radius={210} delay={0} />
                <Satellite icon={<Cloud className="w-7 h-7 text-blue-600 dark:text-blue-300" />} label="Cloud" angle={342} radius={210} delay={1} />
                <Satellite icon={<ShieldCheck className="w-7 h-7 text-emerald-600 dark:text-emerald-300" />} label="Security" angle={54} radius={210} delay={2} />
                <Satellite icon={<Cpu className="w-7 h-7 text-purple-600 dark:text-purple-300" />} label="Hardware" angle={126} radius={210} delay={3} />
                <Satellite icon={<Wifi className="w-7 h-7 text-indigo-600 dark:text-indigo-300" />} label="Connectivity" angle={198} radius={210} delay={4} />

            </div>
        </div>
    );
}

// Sub-component: Animated Data Beam (CSS Implementation)
function DataBeam({ angle, radius, delay }: { angle: number, radius: number, delay: number }) {
    return (
        <div
            className="absolute top-1/2 left-1/2 h-[2px] origin-left z-0"
            style={{
                width: `${radius}px`,
                transform: `rotate(${angle}deg)`
            }}
        >
            <motion.div
                className="w-full h-full bg-gradient-to-r from-transparent via-cyan-500/80 dark:via-cyan-400/50 to-transparent"
                animate={{
                    opacity: [0.3, 1, 0.3],
                    scaleX: [0.8, 1, 0.8],
                    translateX: ["-10%", "10%", "-10%"]
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: delay }}
            />
        </div>
    );
}

// Sub-component: Floating Satellite Node
function Satellite({ icon, angle, radius, delay }: { icon: React.ReactNode, label?: string, angle: number, radius: number, delay: number }) {
    return (
        <div
            className="absolute top-1/2 left-1/2 w-0 h-0 flex items-center justify-center"
            style={{ transform: `rotate(${angle}deg) translate(${radius}px) rotate(-${angle}deg)` }}
        >
            <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: delay }}
                className="relative group cursor-default"
            >
                {/* Node Glow */}
                <div className="absolute inset-0 bg-cyan-500/30 dark:bg-cyan-400/25 rounded-2xl blur-lg transition-opacity duration-300 opacity-70 group-hover:opacity-100" />

                {/* Glass Container */}
                <div className="relative p-4 rounded-2xl bg-white/40 dark:bg-white/25 backdrop-blur-md border border-white/50 dark:border-white/30 shadow-lg md:shadow-[0_0_20px_rgba(0,0,0,0.3)] flex flex-col items-center justify-center gap-2 transition-transform duration-300 group-hover:scale-110 group-hover:border-cyan-400/50 group-hover:bg-white/50 dark:group-hover:bg-white/35">
                    <div className="drop-shadow-[0_0_8px_rgba(0,255,255,0.5)]">
                        {icon}
                    </div>
                    {/* Optional Label (Hidden by default, reveal on larger screens or hover if needed? Kept hidden for clean 'Icon only' look or minimal label) */}
                    {/* <span className="text-[10px] uppercase tracking-widest text-cyan-200/60 font-medium">{label}</span> */}
                </div>

                {/* Connection Point Dot (Where the beam hits) */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-cyan-400 rounded-full blur-[1px]" />
            </motion.div>
        </div>
    );
}
