"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Play, Pause, Clock, CheckCircle, ArrowRight, Users, Zap } from "lucide-react";

interface TimelineStep {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    videoUrl: string;
    duration: string;
    deliverables: string[];
    icon: React.ElementType;
    color: string;
    gradient: string;
}

const timelineSteps: TimelineStep[] = [
    {
        id: "discovery",
        title: "Discovery & Planning",
        subtitle: "Week 1-2",
        description: "We start by understanding your vision, technical requirements, and market constraints. Our team conducts thorough research and creates a comprehensive project roadmap.",
        videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        duration: "2:30",
        deliverables: ["Technical Requirements Document", "Project Timeline", "Cost Estimation", "Risk Assessment"],
        icon: Users,
        color: "blue",
        gradient: "from-blue-500 to-indigo-600"
    },
    {
        id: "design",
        title: "Hardware Design",
        subtitle: "Week 3-6",
        description: "Our engineers design custom PCBs, select optimal components, and create detailed schematics. Every design decision is optimized for performance, cost, and manufacturability.",
        videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
        duration: "3:45",
        deliverables: ["Schematic Designs", "PCB Layouts", "3D Models", "BOM (Bill of Materials)"],
        icon: Zap,
        color: "cyan",
        gradient: "from-cyan-500 to-blue-500"
    },
    {
        id: "prototyping",
        title: "Rapid Prototyping",
        subtitle: "Week 7-8",
        description: "We build and test functional prototypes to validate the design. This phase includes rigorous testing, debugging, and iterative improvements based on real-world performance.",
        videoUrl: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
        duration: "4:20",
        deliverables: ["Working Prototypes", "Test Results", "Performance Metrics", "Design Optimizations"],
        icon: CheckCircle,
        color: "emerald",
        gradient: "from-emerald-500 to-teal-500"
    },
    {
        id: "firmware",
        title: "Firmware Development",
        subtitle: "Week 9-14",
        description: "Concurrent with hardware development, we write robust embedded software. Our firmware includes real-time operating systems, communication protocols, and security features.",
        videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
        duration: "5:15",
        deliverables: ["Embedded Software", "Communication Protocols", "Security Implementation", "OTA Update System"],
        icon: Clock,
        color: "purple",
        gradient: "from-purple-500 to-pink-500"
    },
    {
        id: "integration",
        title: "System Integration",
        subtitle: "Week 15-18",
        description: "We integrate all components—hardware, firmware, cloud backend, and mobile apps—into a cohesive system. Comprehensive testing ensures everything works seamlessly together.",
        videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        duration: "6:00",
        deliverables: ["Integrated System", "Cloud Dashboard", "Mobile Applications", "API Documentation"],
        icon: ArrowRight,
        color: "orange",
        gradient: "from-orange-500 to-red-500"
    }
];

export default function VideoTimelineOption3() {
    const [activeStep, setActiveStep] = useState<TimelineStep | null>(null);
    const [currentStepIndex, setCurrentStepIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);
    const timelineRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(timelineRef, { once: true, margin: "-100px" });

    const openVideo = (step: TimelineStep, index: number) => {
        setActiveStep(step);
        setCurrentStepIndex(index);
        setIsPlaying(true);
    };

    const closeVideo = () => {
        setActiveStep(null);
        setIsPlaying(false);
    };

    const togglePlay = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    useEffect(() => {
        if (activeStep && videoRef.current) {
            videoRef.current.play().catch(() => {
                setIsPlaying(false);
            });
        }
    }, [activeStep]);

    return (
        <section className="py-24 bg-gradient-to-br from-slate-50 to-white dark:from-slate-900 dark:to-slate-800 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
            
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header */}
                <div className="text-center mb-20">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-primary rounded-full text-sm font-semibold uppercase tracking-wider mb-4 border border-blue-200 dark:border-blue-800"
                    >
                        Development Journey
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-heading font-bold text-slate-900 dark:text-white mb-6"
                    >
                        From Idea to Production
                        <span className="block text-3xl md:text-4xl bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent mt-2">
                            in 18 Weeks
                        </span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-slate-700 dark:text-slate-300 max-w-3xl mx-auto"
                    >
                        Watch our proven development process unfold step by step. 
                        Each phase is designed for maximum efficiency and quality delivery.
                    </motion.p>
                </div>

                {/* Timeline */}
                <div ref={timelineRef} className="relative max-w-6xl mx-auto">
                    {/* Timeline Line */}
                    <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-200 via-purple-200 to-cyan-200 dark:from-blue-800 dark:via-purple-800 dark:to-cyan-800 transform md:-translate-x-1/2 rounded-full">
                        {isInView && (
                            <motion.div
                                initial={{ height: 0 }}
                                animate={{ height: "100%" }}
                                transition={{ duration: 2, ease: "easeInOut" }}
                                className="w-full bg-gradient-to-b from-blue-500 via-purple-500 to-cyan-500 rounded-full"
                            />
                        )}
                    </div>

                    {/* Timeline Steps */}
                    <div className="space-y-16">
                        {timelineSteps.map((step, index) => {
                            const Icon = step.icon;
                            const isEven = index % 2 === 0;

                            return (
                                <motion.div
                                    key={step.id}
                                    initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.2 }}
                                    className={`relative flex items-center ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col md:gap-16`}
                                >
                                    {/* Timeline Dot */}
                                    <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 -translate-y-1/2 top-1/2 z-10">
                                        <motion.div
                                            initial={{ scale: 0 }}
                                            whileInView={{ scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.2 + 0.3, type: "spring" }}
                                            className={`w-16 h-16 rounded-full bg-gradient-to-br ${step.gradient} flex items-center justify-center shadow-lg border-4 border-white dark:border-slate-900`}
                                        >
                                            <Icon className="w-8 h-8 text-white" />
                                        </motion.div>
                                    </div>

                                    {/* Content Card */}
                                    <div className={`w-full md:w-5/12 ml-20 md:ml-0 ${isEven ? '' : 'md:text-right'}`}>
                                        <div className="bg-white/80 dark:bg-white/5 backdrop-blur-xl border border-white/50 dark:border-white/10 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 group cursor-pointer"
                                             onClick={() => openVideo(step, index)}>
                                            
                                            {/* Video Preview */}
                                            <div className="relative mb-6 rounded-xl overflow-hidden bg-slate-200 dark:bg-slate-700 aspect-video">
                                                <div className={`absolute inset-0 bg-gradient-to-br ${step.gradient} opacity-20`} />
                                                <div className="absolute inset-0 flex items-center justify-center">
                                                    <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                                        <Play className="w-6 h-6 text-white ml-1" />
                                                    </div>
                                                </div>
                                                <div className="absolute top-4 right-4 px-2 py-1 bg-black/50 text-white text-xs rounded">
                                                    {step.duration}
                                                </div>
                                            </div>

                                            <div className="mb-2 text-sm font-semibold text-primary">
                                                {step.subtitle}
                                            </div>
                                            <h3 className="text-2xl font-heading font-bold text-slate-900 dark:text-white mb-3">
                                                {step.title}
                                            </h3>
                                            <p className="text-slate-700 dark:text-slate-300 mb-4 leading-relaxed">
                                                {step.description}
                                            </p>

                                            {/* Deliverables */}
                                            <div className="space-y-2">
                                                <h4 className="text-sm font-semibold text-slate-900 dark:text-white uppercase tracking-wider">
                                                    Key Deliverables:
                                                </h4>
                                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                                    {step.deliverables.map((deliverable, i) => (
                                                        <div key={i} className="flex items-center text-sm text-slate-600 dark:text-slate-400">
                                                            <CheckCircle className="w-4 h-4 text-emerald-500 mr-2 flex-shrink-0" />
                                                            {deliverable}
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* Hover Effect */}
                                            <div className="mt-4 flex items-center text-primary font-medium text-sm group-hover:translate-x-2 transition-transform duration-300">
                                                Watch Process Video
                                                <ArrowRight className="w-4 h-4 ml-2" />
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>

                {/* Video Modal */}
                <AnimatePresence>
                    {activeStep && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
                            onClick={closeVideo}
                        >
                            <motion.div
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.8, opacity: 0 }}
                                className="relative w-full max-w-5xl bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-2xl"
                                onClick={(e) => e.stopPropagation()}
                            >
                                {/* Video Player */}
                                <div className="relative aspect-video bg-black">
                                    <video
                                        ref={videoRef}
                                        className="w-full h-full"
                                        controls
                                        onPlay={() => setIsPlaying(true)}
                                        onPause={() => setIsPlaying(false)}
                                    >
                                        <source src={activeStep.videoUrl} type="video/mp4" />
                                    </video>
                                </div>

                                {/* Video Info */}
                                <div className="p-6">
                                    <div className="flex items-start justify-between mb-4">
                                        <div>
                                            <div className="text-sm font-semibold text-primary mb-1">
                                                {activeStep.subtitle}
                                            </div>
                                            <h3 className="text-2xl font-heading font-bold text-slate-900 dark:text-white mb-2">
                                                {activeStep.title}
                                            </h3>
                                            <p className="text-slate-700 dark:text-slate-300">
                                                {activeStep.description}
                                            </p>
                                        </div>
                                        <button
                                            onClick={closeVideo}
                                            className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
                                        >
                                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        </button>
                                    </div>

                                    {/* Deliverables */}
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                                        {activeStep.deliverables.map((deliverable, i) => (
                                            <div key={i} className="flex items-center text-sm text-slate-600 dark:text-slate-400">
                                                <CheckCircle className="w-4 h-4 text-emerald-500 mr-2 flex-shrink-0" />
                                                {deliverable}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
}