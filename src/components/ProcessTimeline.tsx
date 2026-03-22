"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { LucideIcon, Search, PenTool, Code2, ShieldCheck, Factory } from "lucide-react";

interface Phase {
    id: string;
    title: string;
    icon: LucideIcon;
    description: string;
    activities: string[];
    outcomes: string[];
    timeline: string;
}

const phases: Phase[] = [
    {
        id: "discovery",
        title: "Discovery Phase",
        icon: Search,
        description: "We align on vision, analyze technical requirements, and de-risk the project before committing to full-scale engineering.",
        activities: ["Requirements analysis & elicitation", "Software requirements & UI/UX planning", "Integration architecture & PoC definition", "Risk assessment"],
        outcomes: ["Product Requirements Document (PRD)", "System Architecture Diagram", "Estimated Bill of Materials (BOM)", "Project Timeline"],
        timeline: "1 - 3 Weeks"
    },
    {
        id: "design",
        title: "Design Phase",
        icon: PenTool,
        description: "Translating requirements into concrete hardware schematics and software blueprints.",
        activities: ["Schematic design & component selection", "Software architecture & database design", "Firmware flow & API specifications", "Mechanical constraint alignment"],
        outcomes: ["Completed Schematics", "Software & API Contracts", "Firmware Flowcharts", "Initial PCB Layout"],
        timeline: "3 - 6 Weeks"
    },
    {
        id: "development",
        title: "Development Phase",
        icon: Code2,
        description: "Iterative engineering where hardware and software converge into a functional prototype.",
        activities: ["PCB Routing and fabrication (Prototypes)", "Parallel software & firmware development", "Cloud infrastructure setup", "Hardware/Software Integration testing"],
        outcomes: ["Functional Prototype (Rev A)", "Alpha Firmware Release", "Beta Web/Mobile Applications"],
        timeline: "4 - 10 Weeks"
    },
    {
        id: "validation",
        title: "Validation Phase",
        icon: ShieldCheck,
        description: "Rigorous testing to ensure reliability, safety, and compliance with industry standards.",
        activities: ["End-to-end integration testing", "User acceptance & performance validation", "Compliance testing (CE, FCC, RoHS)", "Field trials in real environments"],
        outcomes: ["Detailed Test Reports", "Compliance Pre-scan Results", "Release Candidate Software", "Optimized Hardware (Rev B)"],
        timeline: "3 - 8 Weeks"
    },
    {
        id: "production",
        title: "Production Phase",
        icon: Factory,
        description: "Scaling up from validated prototypes to mass manufacturing and software release.",
        activities: ["Manufacturing support & DFM finalization", "Software deployment & app store submission", "Quality assurance processes", "Full-stack maintenance planning"],
        outcomes: ["Golden Sample", "Live Production Applications", "Manufacturing Data Package", "Lifecycle Support Plan"],
        timeline: "Ongoing / 4 - 8 Weeks"
    }
];

export default function ProcessTimeline() {
    const [activePhase, setActivePhase] = useState<string>(phases[0].id);
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"]
    });

    const yProgress = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    return (
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16" ref={containerRef}>
            {/* Timeline Navigation */}
            <div className="lg:w-1/3 relative">
                {/* Scroll Progress Line for Desktop */}
                <div className="hidden lg:block absolute left-[-20px] top-4 bottom-4 w-1 bg-white/5 rounded-full overflow-hidden">
                    <motion.div 
                        className="w-full bg-gradient-to-b from-primary via-cyan-500 to-primary rounded-full"
                        style={{ height: yProgress }}
                    />
                </div>
                
                <div className="flex flex-row lg:flex-col overflow-x-auto lg:overflow-visible gap-4 pb-4 lg:pb-0 scrollbar-hide relative z-10 pl-0 lg:pl-2">
                    {phases.map((phase, index) => {
                        const isActive = activePhase === phase.id;
                        const Icon = phase.icon;

                        return (
                            <button
                                key={phase.id}
                                onClick={() => setActivePhase(phase.id)}
                                className={`group flex items-center text-left p-4 rounded-xl transition-all duration-300 min-w-[240px] lg:min-w-0 ${
                                    isActive 
                                        ? "border-primary/50 shadow-[0_0_20px_rgba(0,217,255,0.15)] scale-[1.02]" 
                                        : "bg-white/5 border-transparent hover:bg-white/10 hover:border-white/20 hover:scale-[1.02]"
                                } border relative overflow-hidden`}
                            >
                                {/* Subtle active background glow */}
                                {isActive && (
                                    <motion.div 
                                        layoutId="activeTimelinePhase"
                                        className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent pointer-events-none" 
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                    />
                                )}

                                <div className={`relative z-10 w-12 h-12 rounded-full flex items-center justify-center mr-4 shrink-0 transition-colors duration-300 ${
                                    isActive ? "bg-primary text-bg shadow-[0_0_15px_rgba(0,217,255,0.6)]" : "bg-bg border border-white/10 text-muted group-hover:border-primary/50 group-hover:text-primary"
                                }`}>
                                    <Icon className="w-5 h-5" />
                                </div>
                                <div className="relative z-10">
                                    <div className={`text-xs font-bold mb-1 transition-colors ${isActive ? "text-primary" : "text-muted group-hover:text-primary/70"}`}>
                                        STEP 0{index + 1}
                                    </div>
                                    <h3 className={`font-heading font-bold transition-colors ${isActive ? "text-white" : "text-muted group-hover:text-white"}`}>
                                        {phase.title}
                                    </h3>
                                </div>
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* Timeline Content */}
            <div className="lg:w-2/3 min-h-[400px]">
                <AnimatePresence mode="wait">
                    {phases.map((phase) => {
                        if (phase.id !== activePhase) return null;
                        const Icon = phase.icon;

                        return (
                            <motion.div
                                key={phase.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.3 }}
                                className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-10"
                            >
                                <motion.div 
                                    className="flex items-center gap-4 mb-6"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.4 }}
                                >
                                    <motion.div 
                                        className="p-3 bg-primary/20 rounded-xl text-primary"
                                        whileHover={{ scale: 1.1, rotate: 5 }}
                                    >
                                        <Icon className="w-8 h-8" />
                                    </motion.div>
                                    <h2 className="text-3xl font-heading font-bold text-white">{phase.title}</h2>
                                </motion.div>
                                
                                <motion.p 
                                    className="text-lg text-muted mb-8 leading-relaxed"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.5, delay: 0.1 }}
                                >
                                    {phase.description}
                                </motion.p>

                                <div className="grid md:grid-cols-2 gap-8 mb-8">
                                    <div>
                                        <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-white/10 pb-2">Key Activities</h4>
                                        <motion.ul 
                                            className="space-y-3"
                                            initial="hidden"
                                            animate="visible"
                                            variants={{
                                                visible: { transition: { staggerChildren: 0.1 } }
                                            }}
                                        >
                                            {phase.activities.map((item, i) => (
                                                <motion.li 
                                                    key={i} 
                                                    className="flex items-start text-sm text-muted"
                                                    variants={{
                                                        hidden: { opacity: 0, x: -10 },
                                                        visible: { opacity: 1, x: 0 }
                                                    }}
                                                >
                                                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 mr-3 shrink-0" />
                                                    {item}
                                                </motion.li>
                                            ))}
                                        </motion.ul>
                                    </div>
                                    
                                    <div>
                                        <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-white/10 pb-2">Outcomes & Deliverables</h4>
                                        <motion.ul 
                                            className="space-y-3"
                                            initial="hidden"
                                            animate="visible"
                                            variants={{
                                                visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
                                            }}
                                        >
                                            {phase.outcomes.map((item, i) => (
                                                <motion.li 
                                                    key={i} 
                                                    className="flex items-start text-sm text-muted"
                                                    variants={{
                                                        hidden: { opacity: 0, x: -10 },
                                                        visible: { opacity: 1, x: 0 }
                                                    }}
                                                >
                                                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-1.5 mr-3 shrink-0" />
                                                    {item}
                                                </motion.li>
                                            ))}
                                        </motion.ul>
                                    </div>
                                </div>

                                <motion.div 
                                    className="inline-flex items-center px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm font-medium text-white"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 }}
                                >
                                    <span className="text-muted mr-2">Typical Timeline:</span>
                                    {phase.timeline}
                                </motion.div>
                            </motion.div>
                        );
                    })}
                </AnimatePresence>
            </div>
        </div>
    );
}
