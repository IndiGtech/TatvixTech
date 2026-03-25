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
        <div className="relative w-full h-full min-h-[400px] md:min-h-[600px] flex items-center justify-center pointer-events-none select-none overflow-visible" style={{ isolation: 'isolate' }}>

            {/* Ambient Background Aura */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-primary/5 rounded-full blur-[100px] animate-pulse-slow" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] md:w-[300px] md:h-[300px] bg-blue-600/10 rounded-full blur-[80px] mix-blend-screen" />

            {/* Main Stage */}
            <div className="relative w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] md:w-[500px] md:h-[500px] perspective-[2000px] overflow-visible">

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
                {/* Orbit ring with consistent 40px inset across all screen sizes */}
                {/* This creates: Mobile 200px diameter, SM 270px diameter, MD+ 420px diameter */}
                <div className="absolute inset-[40px] rounded-full border border-black/5 dark:border-white/5 z-[8]" /> {/* Static base track */}
                
                {/* Rotating container for orbit ring and satellites */}
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 z-[10]"
                >
                    {/* Dashed orbit ring */}
                    <div className="absolute inset-[40px] rounded-full border border-dashed border-cyan-600/40 dark:border-cyan-500/20" />
                    
                    {/* --- 2. Data Tethers (CSS Version for Reliability) --- */}
                    {/* Connecting Core (Center) to Icons (Radius) - Responsive radius */}
                    <DataBeam angle={270} delay={0} />
                    <DataBeam angle={342} delay={0.2} />
                    <DataBeam angle={54} delay={0.4} />
                    <DataBeam angle={126} delay={0.6} />
                    <DataBeam angle={198} delay={0.8} />

                    {/* --- 3. Floating Satellites (Icons) --- */}
                    <Satellite icon={<Code className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />} angle={270} delay={0} />
                    <Satellite icon={<Cloud className="w-4 h-4 text-blue-600 dark:text-blue-400" />} angle={342} delay={1} />
                    <Satellite icon={<ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />} angle={54} delay={2} />
                    <Satellite icon={<Cpu className="w-4 h-4 text-purple-600 dark:text-purple-400" />} angle={126} delay={3} />
                    <Satellite icon={<Wifi className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />} angle={198} delay={4} />
                </motion.div>

                {/* --- 1. The Gyroscopic Core --- */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] md:w-[200px] md:h-[200px] flex items-center justify-center transform-style-3d z-[15]">

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
                    <div className="absolute w-[40px] h-[40px] bg-cyan-100 dark:bg-white rounded-full shadow-[0_0_40px_rgba(0,255,255,0.8)] z-[18] animate-pulse" />
                    <div className="absolute w-[20px] h-[20px] bg-cyan-300 rounded-full blur-[2px] z-[19]" />

                </div>


            </div>
        </div>
    );
}

// Sub-component: Animated Data Beam (CSS Implementation)
function DataBeam({ angle, delay }: { angle: number, delay: number }) {
    const [radius, setRadius] = useState(100);
    
    useEffect(() => {
        const updateRadius = () => {
            const width = window.innerWidth;
            // Match the same radius calculation as Satellite component
            if (width >= 768) {
                setRadius(210); // md: 500px - 80px = 420px diameter = 210px radius
            } else if (width >= 640) {
                setRadius(135); // sm: 350px - 80px = 270px diameter = 135px radius  
            } else {
                setRadius(100); // mobile: 280px - 80px = 200px diameter = 100px radius
            }
        };
        
        updateRadius();
        window.addEventListener('resize', updateRadius);
        return () => window.removeEventListener('resize', updateRadius);
    }, []);
    
    return (
        <div
            className="absolute top-1/2 left-1/2 h-[2px] origin-left z-[5]"
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
function Satellite({ icon, angle, delay }: { icon: React.ReactNode, angle: number, delay: number }) {
    const [radius, setRadius] = useState(100);
    
    useEffect(() => {
        const updateRadius = () => {
            const width = window.innerWidth;
            // Calculate radius to match orbit ring (inset-[40px])
            // Container - (2 * inset) = diameter, so radius = diameter / 2
            if (width >= 768) {
                setRadius(210); // md: 500px - 80px = 420px diameter = 210px radius
            } else if (width >= 640) {
                setRadius(135); // sm: 350px - 80px = 270px diameter = 135px radius  
            } else {
                setRadius(100); // mobile: 280px - 80px = 200px diameter = 100px radius
            }
        };
        
        updateRadius();
        window.addEventListener('resize', updateRadius);
        return () => window.removeEventListener('resize', updateRadius);
    }, []);
    
    // Calculate position using trigonometry
    const radian = (angle * Math.PI) / 180;
    const x = Math.cos(radian) * radius;
    const y = Math.sin(radian) * radius;
    
    // Debug: Log positioning for verification (remove in production)
    // console.log(`Satellite ${angle}°: radius=${radius}px, x=${x.toFixed(1)}px, y=${y.toFixed(1)}px`);
    
    return (
        <div
            className="absolute z-[50]"
            style={{ 
                left: `calc(50% + ${x}px)`,
                top: `calc(50% + ${y}px)`,
                transform: 'translate(-50%, -50%)'
            }}
        >
            {/* Subtle floating animation container */}
            <motion.div
                animate={{ 
                    scale: [1, 1.05, 1],
                    rotateZ: [-2, 2, -2]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: delay }}
            >
                {/* Glass Container with Enhanced Visibility */}
                <div className="relative p-2 rounded-lg bg-white/60 dark:bg-white/40 backdrop-blur-md border border-white/70 dark:border-white/50 shadow-lg shadow-black/20 dark:shadow-black/40 flex items-center justify-center group hover:scale-110 transition-all duration-300 hover:bg-white/70 dark:hover:bg-white/50 hover:shadow-xl w-[36px] h-[36px]">
                    {/* Inner glow effect */}
                    <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-cyan-100/20 to-blue-100/20 dark:from-cyan-400/10 dark:to-blue-400/10" />
                    
                    <div className="relative flex items-center justify-center z-10">
                        {icon}
                    </div>
                </div>

                {/* Connection Point Dot */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-cyan-400 rounded-full blur-[0.5px] z-[45]" />
            </motion.div>
        </div>
    );
}
