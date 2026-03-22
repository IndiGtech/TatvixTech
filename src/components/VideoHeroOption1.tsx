"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Play, Pause, Volume2, VolumeX, Maximize2 } from "lucide-react";
import { useContactModal } from "@/context/ContactModalContext";

export default function VideoHeroOption1() {
    const [isPlaying, setIsPlaying] = useState(true);
    const [isMuted, setIsMuted] = useState(true);
    const [showControls, setShowControls] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);
    const { openContactModal } = useContactModal();

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.play().catch(() => {
                // Auto-play failed, that's okay
                setIsPlaying(false);
            });
        }
    }, []);

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

    const toggleMute = () => {
        if (videoRef.current) {
            videoRef.current.muted = !isMuted;
            setIsMuted(!isMuted);
        }
    };

    const toggleFullscreen = () => {
        if (videoRef.current) {
            if (document.fullscreenElement) {
                document.exitFullscreen();
            } else {
                videoRef.current.requestFullscreen();
            }
        }
    };

    return (
        <section className="relative h-screen w-full overflow-hidden">
            {/* Video Background */}
            <div className="absolute inset-0 w-full h-full">
                <video
                    ref={videoRef}
                    className="w-full h-full object-cover"
                    loop
                    muted={isMuted}
                    playsInline
                    onPlay={() => setIsPlaying(true)}
                    onPause={() => setIsPlaying(false)}
                >
                    {/* Placeholder video sources - you can replace these */}
                    <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
                    <source src="https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4" type="video/mp4" />
                    {/* Fallback for browsers that don't support video */}
                    <div className="w-full h-full bg-gradient-to-br from-cyan-500 via-blue-600 to-purple-700" />
                </video>

                {/* Video Overlay */}
                <div className="absolute inset-0 bg-black/40 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
            </div>

            {/* Video Controls */}
            <div 
                className={`absolute bottom-6 right-6 flex gap-2 transition-opacity duration-300 ${showControls ? 'opacity-100' : 'opacity-0'}`}
                onMouseEnter={() => setShowControls(true)}
                onMouseLeave={() => setShowControls(false)}
            >
                <button
                    onClick={togglePlay}
                    className="p-3 bg-white/20 backdrop-blur-md rounded-full hover:bg-white/30 transition-colors"
                >
                    {isPlaying ? <Pause className="w-5 h-5 text-white" /> : <Play className="w-5 h-5 text-white" />}
                </button>
                <button
                    onClick={toggleMute}
                    className="p-3 bg-white/20 backdrop-blur-md rounded-full hover:bg-white/30 transition-colors"
                >
                    {isMuted ? <VolumeX className="w-5 h-5 text-white" /> : <Volume2 className="w-5 h-5 text-white" />}
                </button>
                <button
                    onClick={toggleFullscreen}
                    className="p-3 bg-white/20 backdrop-blur-md rounded-full hover:bg-white/30 transition-colors"
                >
                    <Maximize2 className="w-5 h-5 text-white" />
                </button>
            </div>

            {/* Control Trigger Area */}
            <div 
                className="absolute bottom-0 right-0 w-32 h-32 cursor-pointer"
                onMouseEnter={() => setShowControls(true)}
                onMouseLeave={() => setShowControls(false)}
            />

            {/* Hero Content */}
            <div className="absolute inset-0 flex items-center justify-center text-center px-6">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="mb-6"
                    >
                        <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-primary font-semibold text-sm uppercase tracking-wider border border-white/20">
                            Complete Product Development
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-5xl md:text-7xl font-heading font-bold text-white mb-6 leading-tight"
                    >
                        From Concept to
                        <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                            Connected Reality
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed"
                    >
                        We transform innovative ideas into production-ready IoT solutions. 
                        Hardware design, embedded firmware, cloud integration, and mobile apps—all under one roof.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                    >
                        <button
                            onClick={openContactModal}
                            className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                        >
                            Start Your Project
                        </button>
                        <button className="px-8 py-4 bg-white/10 backdrop-blur-md text-white font-semibold rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300">
                            Watch Our Process
                        </button>
                    </motion.div>

                    {/* Floating Stats */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1.0 }}
                        className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto"
                    >
                        {[
                            { number: "50+", label: "Projects Delivered" },
                            { number: "2-12", label: "Week Delivery" },
                            { number: "100%", label: "Production Ready" }
                        ].map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                                <div className="text-white/70 text-sm uppercase tracking-wider">{stat.label}</div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.5 }}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
                >
                    <motion.div
                        animate={{ y: [0, 12, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="w-1 h-3 bg-white/60 rounded-full mt-2"
                    />
                </motion.div>
            </motion.div>
        </section>
    );
}