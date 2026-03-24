"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CircuitBoard, Code2, Cloud, Monitor, Smartphone, ChevronRight, Sparkles, FlaskConical, Factory } from "lucide-react";

interface Step {
    id: string;
    title: string;
    description: string;
    icon: React.ElementType;
    color: string;
    gradient: string;
    features: string[];
}

const steps: Step[] = [
    {
        id: "hardware",
        title: "Hardware Design",
        description: "Custom PCB layout, component selection, and power optimization for your specific use case. We engineer for extreme environments and rigorous compliance standards.",
        icon: CircuitBoard,
        color: "text-cyan-400",
        gradient: "from-cyan-500/20 to-cyan-500/5",
        features: ["Schematic Capture", "Multi-layer PCB Routing", "DFM / DFA Analysis", "Power Budgeting"]
    },
    {
        id: "firmware",
        title: "Firmware Development",
        description: "Robust embedded C/C++, RTOS integration, and secure bootloaders for reliable operation. We ensure your device never bricks in the field.",
        icon: Code2,
        color: "text-purple-400",
        gradient: "from-purple-500/20 to-purple-500/5",
        features: ["RTOS Implementation", "Bare-metal C/C++", "OTA Update Systems", "Hardware Abstraction"]
    },
    {
        id: "cloud",
        title: "Cloud Backend",
        description: "Scalable IoT architecture, MQTT brokers, and secure data storage. We connect the physical world to scalable cloud infrastructure seamlessly.",
        icon: Cloud,
        color: "text-blue-400",
        gradient: "from-blue-500/20 to-blue-500/5",
        features: ["Serverless Architecture", "MQTT Protocol Security", "Data Warehousing", "API Development"]
    },
    {
        id: "web",
        title: "Web Dashboard",
        description: "Real-time monitoring, admin controls, and data analytics in a responsive web interface. Turn raw sensor telemetry into actionable business insights.",
        icon: Monitor,
        color: "text-emerald-400",
        gradient: "from-emerald-500/20 to-emerald-500/5",
        features: ["Real-time Data Vis", "Device Fleet Management", "Admin Access Controls", "Responsive React UI"]
    },
    {
        id: "mobile",
        title: "Mobile App",
        description: "Native iOS/Android companion apps for end-user control. We build mobile experiences that handle physical connection realities elegantly.",
        icon: Smartphone,
        color: "text-pink-400",
        gradient: "from-pink-500/20 to-pink-500/5",
        features: ["Bluetooth (BLE) Syncing", "Cross-platform Mobile", "Push Notifications", "User Onboarding Flows"]
    },
    {
        id: "prototyping",
        title: "Prototyping & Testing",
        description: "Rapid hardware prototyping and rigorous functional testing. We ensure compliance with industry standards before moving to mass production.",
        icon: FlaskConical,
        color: "text-yellow-400",
        gradient: "from-yellow-500/20 to-yellow-500/5",
        features: ["Rapid 3D Printing", "Environmental Testing", "Functional Validation", "Pre-compliance Scans"]
    },
    {
        id: "production",
        title: "Production & Scaling",
        description: "Support for mass manufacturing, test jig design, and lifecycle management to help you scale from prototype to thousands of units seamlessly.",
        icon: Factory,
        color: "text-orange-400",
        gradient: "from-orange-500/20 to-orange-500/5",
        features: ["Test Jig (ATE) Design", "Supply Chain Management", "Mass Manufacturing", "Lifecycle Support"]
    }
];

export default function EcosystemDiagram() {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className="w-full relative px-4 sm:px-6 lg:px-8 py-16">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 max-w-[1400px] mx-auto items-center">
                
                {/* Left Side: Clickable Nodes */}
                <div className="w-full lg:w-5/12 relative">
                    {/* Path effect line */}
                    <div className="absolute left-[39px] md:left-[50px] top-12 bottom-12 w-[3px] bg-white/5 rounded-full z-0 overflow-hidden">
                        {/* Dynamic Filling Path */}
                        <motion.div 
                            className="absolute top-0 left-0 w-full bg-gradient-to-b from-cyan-400 via-purple-500 to-pink-500 rounded-full"
                            animate={{ height: `${(activeIndex / (steps.length - 1)) * 100}%` }}
                            transition={{ type: "spring", stiffness: 40, damping: 14 }}
                        />
                        {/* Continuous shooting light */}
                        <motion.div 
                            className="absolute top-0 left-0 w-full h-[150px] bg-gradient-to-b from-transparent via-white to-transparent opacity-60"
                            animate={{ y: ["-150px", "800px"] }}
                            transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
                        />
                    </div>

                    <div className="space-y-4 relative w-full">
                        {steps.map((step, index) => {
                            const Icon = step.icon;
                            const isActive = index === activeIndex;

                            return (
                                <button 
                                    key={step.id} 
                                    onClick={() => setActiveIndex(index)}
                                    className={`w-full flex items-center relative z-10 text-left group outline-none p-3 md:p-4 rounded-[2rem] transition-all duration-500 overflow-hidden ${
                                        isActive ? "bg-white/5 border border-white/10 shadow-2xl backdrop-blur-xl" : "border border-transparent hover:bg-white/[0.02]"
                                    }`}
                                >
                                    {/* Animated active dot on the line */}
                                    <div className="w-[56px] md:w-[70px] flex justify-center shrink-0">
                                        <div className="relative flex items-center justify-center w-6 h-6">
                                            {isActive ? (
                                                <motion.div
                                                    layoutId="activeDot"
                                                    className={`w-4 h-4 rounded-full bg-white shadow-[0_0_20px_3px_currentColor] z-20 ${step.color}`}
                                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                                />
                                            ) : (
                                                <div className={`w-2 h-2 rounded-full transition-colors duration-300 z-10 ${index < activeIndex ? step.color : 'bg-white/20 group-hover:bg-white/40'}`} />
                                            )}
                                        </div>
                                    </div>

                                    {/* Icon Container */}
                                    <motion.div 
                                        className={`w-12 h-12 md:w-16 md:h-16 rounded-2xl flex items-center justify-center border transition-all duration-500 relative shrink-0 z-10 mr-4 md:mr-6 ${
                                            isActive 
                                                ? `border-white/30 bg-white/10 shadow-lg scale-110` 
                                                : 'border-white/5 bg-bg/50 group-hover:border-white/20 group-hover:bg-white/5 group-hover:scale-105'
                                        }`}
                                    >
                                        {isActive && (
                                            <motion.div
                                                layoutId="activeIconGlow"
                                                className={`absolute inset-0 bg-gradient-to-br ${step.gradient} rounded-2xl opacity-80`}
                                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                            />
                                        )}
                                        <Icon className={`w-6 h-6 md:w-8 md:h-8 relative z-10 transition-all duration-500 ${isActive ? step.color + ' scale-110 drop-shadow-md' : 'text-muted/50 group-hover:text-text/80'}`} />
                                    </motion.div>
                                    
                                    {/* Text Container */}
                                    <div className="flex-1 py-2">
                                        <h3 className={`text-xl md:text-3xl font-heading font-bold transition-all duration-500 flex items-center ${
                                            isActive ? 'text-slate-900 dark:text-white translate-x-1' : 'text-slate-500 dark:text-muted/50 group-hover:text-slate-700 dark:group-hover:text-muted/90'
                                        }`}>
                                            {step.title}
                                            {isActive && (
                                                <motion.div
                                                    initial={{ opacity: 0, scale: 0, x: -10 }}
                                                    animate={{ opacity: 1, scale: 1, x: 0 }}
                                                    transition={{ delay: 0.1, type: "spring" }}
                                                >
                                                    <ChevronRight className={`w-6 h-6 md:w-8 md:h-8 ml-3 ${step.color}`} />
                                                </motion.div>
                                            )}
                                        </h3>
                                    </div>

                                    {/* subtle background glow inside button */}
                                    {isActive && (
                                        <div className={`absolute right-0 top-1/2 -translate-y-1/2 w-32 h-32 bg-current opacity-10 blur-[40px] pointer-events-none ${step.color}`} />
                                    )}
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* Right Side: Active Content Template */}
                <div className="w-full lg:w-7/12 relative lg:min-h-[500px] flex items-center">
                    <AnimatePresence mode="wait">
                        {steps.map((step, index) => {
                            if (index !== activeIndex) return null;
                            const Icon = step.icon;
                            
                            return (
                                <motion.div 
                                    key={step.id}
                                    initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                                    exit={{ opacity: 0, y: -30, filter: "blur(10px)" }}
                                    transition={{ duration: 0.4, ease: "easeOut" }}
                                    className={`w-full p-8 md:p-14 rounded-[2rem] md:rounded-[3rem] border border-white/10 bg-gradient-to-br ${step.gradient} backdrop-blur-2xl overflow-hidden shadow-2xl relative`}
                                >
                                    {/* Tech Grid Background Pattern */}
                                    <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03] mix-blend-overlay" />
                                    
                                    {/* Dynamic Rotating Glow */}
                                    <motion.div 
                                        className={`absolute top-0 right-0 w-[250px] h-[250px] md:w-[500px] md:h-[500px] bg-current opacity-15 blur-[120px] rounded-full pointer-events-none ${step.color}`}
                                        animate={{ 
                                            scale: [1, 1.2, 1],
                                            x: ["30%", "20%", "30%"],
                                            y: ["-30%", "-20%", "-30%"]
                                        }}
                                        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                                    />
                                    
                                    <div className="relative z-10">
                                        <motion.div 
                                            initial={{ scale: 0.8, opacity: 0 }}
                                            animate={{ scale: 1, opacity: 1 }}
                                            transition={{ delay: 0.1, duration: 0.4 }}
                                            className={`inline-flex items-center justify-center p-4 rounded-2xl bg-white/5 border border-white/10 mb-8 backdrop-blur-md shadow-inner`}
                                        >
                                            <Icon className={`w-10 h-10 ${step.color}`} />
                                        </motion.div>
                                        
                                        <motion.h3 
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.2, duration: 0.4 }}
                                            className="text-4xl md:text-5xl font-heading font-bold text-slate-900 dark:text-white mb-6"
                                        >
                                            {step.title}
                                        </motion.h3>
                                        
                                        <motion.p 
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.3, duration: 0.4 }}
                                            className="text-lg md:text-xl text-muted/90 leading-relaxed mb-10 max-w-2xl"
                                        >
                                            {step.description}
                                        </motion.p>

                                        <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                                            {step.features.map((feature, i) => (
                                                <motion.div 
                                                    key={feature} 
                                                    initial={{ opacity: 0, y: 10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{ delay: 0.4 + (i * 0.1), duration: 0.3 }}
                                                    className="flex items-center gap-3 p-3 md:p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors"
                                                >
                                                    <Sparkles className={`w-5 h-5 shrink-0 ${step.color}`} />
                                                    <span className="text-text/90 font-medium text-sm md:text-base">{feature}</span>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
}