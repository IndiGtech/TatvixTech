"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Pause, RotateCcw, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";

interface VideoService {
    id: string;
    title: string;
    description: string;
    videoUrl: string;
    thumbnail: string;
    features: string[];
    color: string;
    gradient: string;
}

const videoServices: VideoService[] = [
    {
        id: "hardware",
        title: "Hardware Design & PCB Layout",
        description: "Watch our engineers design custom PCBs from schematic to production-ready boards.",
        videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
        thumbnail: "/api/placeholder/600/400",
        features: ["Multi-layer PCB Design", "Component Selection", "DFM Analysis", "Signal Integrity"],
        color: "cyan",
        gradient: "from-cyan-500/20 to-blue-500/20"
    },
    {
        id: "firmware",
        title: "Embedded Firmware Development",
        description: "See how we develop robust C/C++ firmware with real-time operating systems.",
        videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        thumbnail: "/api/placeholder/600/400",
        features: ["RTOS Integration", "Hardware Abstraction", "OTA Updates", "Power Management"],
        color: "purple",
        gradient: "from-purple-500/20 to-pink-500/20"
    },
    {
        id: "iot",
        title: "IoT Cloud Integration",
        description: "Experience seamless device-to-cloud connectivity with real-time data streaming.",
        videoUrl: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
        thumbnail: "/api/placeholder/600/400",
        features: ["MQTT Protocol", "AWS IoT Core", "Real-time Analytics", "Device Management"],
        color: "emerald",
        gradient: "from-emerald-500/20 to-teal-500/20"
    },
    {
        id: "mobile",
        title: "Mobile App Development",
        description: "Discover intuitive mobile interfaces that control IoT devices seamlessly.",
        videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
        thumbnail: "/api/placeholder/600/400",
        features: ["Cross-platform Apps", "BLE Integration", "Real-time Control", "User Analytics"],
        color: "orange",
        gradient: "from-orange-500/20 to-red-500/20"
    }
];

export default function VideoShowcaseOption2() {
    const [activeVideo, setActiveVideo] = useState<VideoService | null>(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);

    const openVideoModal = (service: VideoService) => {
        setActiveVideo(service);
        setIsPlaying(true);
    };

    const closeVideoModal = () => {
        setActiveVideo(null);
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

    const restartVideo = () => {
        if (videoRef.current) {
            videoRef.current.currentTime = 0;
            videoRef.current.play();
            setIsPlaying(true);
        }
    };

    const nextVideo = () => {
        const nextIndex = (currentIndex + 1) % videoServices.length;
        setCurrentIndex(nextIndex);
        setActiveVideo(videoServices[nextIndex]);
    };

    const prevVideo = () => {
        const prevIndex = (currentIndex - 1 + videoServices.length) % videoServices.length;
        setCurrentIndex(prevIndex);
        setActiveVideo(videoServices[prevIndex]);
    };

    useEffect(() => {
        if (activeVideo && videoRef.current) {
            videoRef.current.play().catch(() => {
                setIsPlaying(false);
            });
        }
    }, [activeVideo]);

    return (
        <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold uppercase tracking-wider mb-4"
                    >
                        Interactive Video Showcase
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-heading font-bold text-slate-900 dark:text-white mb-6"
                    >
                        See Our Process in Action
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-slate-700 dark:text-slate-300 max-w-3xl mx-auto"
                    >
                        Click on any service below to watch real development processes, 
                        from initial design to final implementation.
                    </motion.p>
                </div>

                {/* Video Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    {videoServices.map((service, index) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group cursor-pointer"
                            onClick={() => {
                                setCurrentIndex(index);
                                openVideoModal(service);
                            }}
                        >
                            <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${service.gradient} p-6 border border-white/20 dark:border-white/10 hover:border-white/40 dark:hover:border-white/20 transition-all duration-300 hover:scale-105`}>
                                {/* Video Thumbnail */}
                                <div className="relative mb-4 rounded-xl overflow-hidden bg-slate-200 dark:bg-slate-700 aspect-video">
                                    <div className="absolute inset-0 bg-gradient-to-br from-slate-300 to-slate-400 dark:from-slate-600 dark:to-slate-700" />
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                            <Play className="w-6 h-6 text-white ml-1" />
                                        </div>
                                    </div>
                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                                </div>

                                <h3 className="text-xl font-heading font-bold text-slate-900 dark:text-white mb-2">
                                    {service.title}
                                </h3>
                                <p className="text-sm text-slate-700 dark:text-slate-300 mb-4 line-clamp-2">
                                    {service.description}
                                </p>

                                {/* Features */}
                                <div className="space-y-1">
                                    {service.features.slice(0, 2).map((feature, i) => (
                                        <div key={i} className="flex items-center text-xs text-slate-600 dark:text-slate-400">
                                            <div className={`w-1.5 h-1.5 rounded-full mr-2 bg-${service.color}-500`} />
                                            {feature}
                                        </div>
                                    ))}
                                </div>

                                {/* Hover Effect */}
                                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <ExternalLink className="w-5 h-5 text-white" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Video Modal */}
                <AnimatePresence>
                    {activeVideo && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
                            onClick={closeVideoModal}
                        >
                            <motion.div
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.8, opacity: 0 }}
                                className="relative w-full max-w-6xl bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-2xl"
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
                                        <source src={activeVideo.videoUrl} type="video/mp4" />
                                    </video>
                                </div>

                                {/* Video Info */}
                                <div className="p-6">
                                    <div className="flex items-start justify-between mb-4">
                                        <div>
                                            <h3 className="text-2xl font-heading font-bold text-slate-900 dark:text-white mb-2">
                                                {activeVideo.title}
                                            </h3>
                                            <p className="text-slate-700 dark:text-slate-300">
                                                {activeVideo.description}
                                            </p>
                                        </div>
                                        <button
                                            onClick={closeVideoModal}
                                            className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
                                        >
                                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        </button>
                                    </div>

                                    {/* Features */}
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
                                        {activeVideo.features.map((feature, i) => (
                                            <div key={i} className="flex items-center text-sm text-slate-600 dark:text-slate-400">
                                                <div className={`w-2 h-2 rounded-full mr-2 bg-${activeVideo.color}-500`} />
                                                {feature}
                                            </div>
                                        ))}
                                    </div>

                                    {/* Controls */}
                                    <div className="flex items-center justify-between">
                                        <div className="flex gap-2">
                                            <button
                                                onClick={togglePlay}
                                                className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors flex items-center gap-2"
                                            >
                                                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                                                {isPlaying ? 'Pause' : 'Play'}
                                            </button>
                                            <button
                                                onClick={restartVideo}
                                                className="px-4 py-2 bg-slate-200 dark:bg-slate-700 text-slate-900 dark:text-white rounded-lg hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors flex items-center gap-2"
                                            >
                                                <RotateCcw className="w-4 h-4" />
                                                Restart
                                            </button>
                                        </div>

                                        <div className="flex gap-2">
                                            <button
                                                onClick={prevVideo}
                                                className="p-2 bg-slate-200 dark:bg-slate-700 text-slate-900 dark:text-white rounded-lg hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors"
                                            >
                                                <ChevronLeft className="w-5 h-5" />
                                            </button>
                                            <button
                                                onClick={nextVideo}
                                                className="p-2 bg-slate-200 dark:bg-slate-700 text-slate-900 dark:text-white rounded-lg hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors"
                                            >
                                                <ChevronRight className="w-5 h-5" />
                                            </button>
                                        </div>
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