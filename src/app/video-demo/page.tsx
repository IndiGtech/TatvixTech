"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Monitor, Grid3X3, History, ArrowRight, Check } from "lucide-react";
import VideoHeroOption1 from "@/components/VideoHeroOption1";
import VideoShowcaseOption2 from "@/components/VideoShowcaseOption2";
import VideoTimelineOption3 from "@/components/VideoTimelineOption3";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedBackground from "@/components/AnimatedBackground";

interface VideoOption {
    id: string;
    title: string;
    description: string;
    features: string[];
    icon: React.ElementType;
    component: React.ComponentType;
    preview: string;
    bestFor: string[];
}

const videoOptions: VideoOption[] = [
    {
        id: "hero-video",
        title: "Hero Video Background",
        description: "Immersive full-screen video experience that captures attention immediately with cinematic storytelling.",
        features: [
            "Full-screen video background",
            "Elegant overlay content",
            "Auto-play with controls",
            "Mobile optimized",
            "Scroll indicators",
            "Call-to-action integration"
        ],
        icon: Monitor,
        component: VideoHeroOption1,
        preview: "Perfect for creating immediate impact and engagement",
        bestFor: ["Brand storytelling", "Product launches", "High-impact landing pages", "Emotional connection"]
    },
    {
        id: "video-showcase",
        title: "Interactive Video Showcase",
        description: "Service-focused video gallery with modal playback and detailed information for each offering.",
        features: [
            "Clickable video thumbnails",
            "Modal video player",
            "Service categorization",
            "Feature highlights",
            "Navigation controls",
            "Responsive grid layout"
        ],
        icon: Grid3X3,
        component: VideoShowcaseOption2,
        preview: "Ideal for showcasing multiple services with detailed demonstrations",
        bestFor: ["Service portfolios", "Product demonstrations", "Case studies", "Educational content"]
    },
    {
        id: "video-timeline",
        title: "Video Timeline Journey",
        description: "Step-by-step process visualization with timeline progression and detailed deliverables.",
        features: [
            "Animated timeline progression",
            "Step-by-step videos",
            "Deliverable tracking",
            "Process documentation",
            "Interactive milestones",
            "Professional presentation"
        ],
        icon: History,
        component: VideoTimelineOption3,
        preview: "Best for explaining complex processes and building trust through transparency",
        bestFor: ["Process explanation", "Project timelines", "Educational content", "Trust building"]
    }
];

export default function VideoDemoPage() {
    const [selectedOption, setSelectedOption] = useState<VideoOption | null>(null);
    const [previewMode, setPreviewMode] = useState(false);

    const selectOption = (option: VideoOption) => {
        setSelectedOption(option);
        setPreviewMode(true);
    };

    const backToSelection = () => {
        setSelectedOption(null);
        setPreviewMode(false);
    };

    if (previewMode && selectedOption) {
        const SelectedComponent = selectedOption.component;
        return (
            <div className="min-h-screen">
                <Navbar />
                <AnimatedBackground />
                
                {/* Back Button */}
                <div className="fixed top-24 left-6 z-50">
                    <button
                        onClick={backToSelection}
                        className="px-4 py-2 bg-white/20 backdrop-blur-md text-white rounded-full hover:bg-white/30 transition-colors flex items-center gap-2 border border-white/20"
                    >
                        ← Back to Options
                    </button>
                </div>

                {/* Option Title */}
                <div className="fixed top-24 right-6 z-50">
                    <div className="px-4 py-2 bg-black/50 backdrop-blur-md text-white rounded-full text-sm font-medium border border-white/20">
                        Preview: {selectedOption.title}
                    </div>
                </div>

                <SelectedComponent />
                <Footer />
            </div>
        );
    }

    return (
        <main className="relative min-h-screen w-full flex flex-col items-center overflow-x-hidden">
            <Navbar />
            <AnimatedBackground />
            
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-32 pb-24 w-full">
                {/* Header */}
                <div className="text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold uppercase tracking-wider mb-4"
                    >
                        Video Website Options
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-heading font-bold text-slate-900 dark:text-white mb-6"
                    >
                        Choose Your Video Experience
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-slate-700 dark:text-slate-300 max-w-3xl mx-auto"
                    >
                        Select from three distinct video-based website approaches. Each option is fully functional and ready to implement with your content.
                    </motion.p>
                </div>

                {/* Options Grid */}
                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    {videoOptions.map((option, index) => {
                        const Icon = option.icon;
                        return (
                            <motion.div
                                key={option.id}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 + 0.3 }}
                                className="group cursor-pointer"
                                onClick={() => selectOption(option)}
                            >
                                <div className="bg-white/80 dark:bg-white/5 backdrop-blur-xl border border-white/50 dark:border-white/10 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full flex flex-col">
                                    {/* Icon */}
                                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                        <Icon className="w-8 h-8 text-primary" />
                                    </div>

                                    {/* Title & Description */}
                                    <h3 className="text-2xl font-heading font-bold text-slate-900 dark:text-white mb-4">
                                        {option.title}
                                    </h3>
                                    <p className="text-slate-700 dark:text-slate-300 mb-6 leading-relaxed flex-grow">
                                        {option.description}
                                    </p>

                                    {/* Preview Note */}
                                    <div className="mb-6 p-3 bg-primary/5 border border-primary/20 rounded-lg">
                                        <p className="text-sm text-primary font-medium">
                                            {option.preview}
                                        </p>
                                    </div>

                                    {/* Features */}
                                    <div className="mb-6">
                                        <h4 className="text-sm font-semibold text-slate-900 dark:text-white uppercase tracking-wider mb-3">
                                            Key Features:
                                        </h4>
                                        <div className="space-y-2">
                                            {option.features.slice(0, 4).map((feature, i) => (
                                                <div key={i} className="flex items-center text-sm text-slate-600 dark:text-slate-400">
                                                    <Check className="w-4 h-4 text-emerald-500 mr-2 flex-shrink-0" />
                                                    {feature}
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Best For */}
                                    <div className="mb-6">
                                        <h4 className="text-sm font-semibold text-slate-900 dark:text-white uppercase tracking-wider mb-3">
                                            Best For:
                                        </h4>
                                        <div className="flex flex-wrap gap-2">
                                            {option.bestFor.map((use, i) => (
                                                <span key={i} className="px-2 py-1 bg-slate-100 dark:bg-white/10 text-slate-700 dark:text-slate-300 text-xs rounded-full">
                                                    {use}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* CTA */}
                                    <div className="mt-auto pt-4 border-t border-slate-200 dark:border-white/10">
                                        <div className="flex items-center justify-between">
                                            <span className="text-sm font-medium text-slate-600 dark:text-slate-400">
                                                Click to preview
                                            </span>
                                            <div className="flex items-center text-primary font-medium group-hover:translate-x-2 transition-transform duration-300">
                                                <Play className="w-4 h-4 mr-1" />
                                                Preview
                                                <ArrowRight className="w-4 h-4 ml-1" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Instructions */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="text-center bg-white/60 dark:bg-white/5 backdrop-blur-xl border border-white/50 dark:border-white/10 rounded-2xl p-8 shadow-xl"
                >
                    <h3 className="text-2xl font-heading font-bold text-slate-900 dark:text-white mb-4">
                        How to Choose?
                    </h3>
                    <div className="grid md:grid-cols-3 gap-6 text-left">
                        <div>
                            <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Hero Video Background</h4>
                            <p className="text-sm text-slate-700 dark:text-slate-300">
                                Choose this for maximum visual impact and emotional engagement. Perfect for brand-focused websites.
                            </p>
                        </div>
                        <div>
                            <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Interactive Showcase</h4>
                            <p className="text-sm text-slate-700 dark:text-slate-300">
                                Ideal for service-based businesses that want to demonstrate multiple offerings with detailed videos.
                            </p>
                        </div>
                        <div>
                            <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Timeline Journey</h4>
                            <p className="text-sm text-slate-700 dark:text-slate-300">
                                Best for complex processes, consulting services, or when you need to build trust through transparency.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>

            <Footer />
        </main>
    );
}