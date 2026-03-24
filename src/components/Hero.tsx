"use client";

import { motion } from "framer-motion";
import Button from "./Button";
import HeroIllustration from "./HeroIllustration";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useContactModal } from "@/context/ContactModalContext";

export default function Hero() {
    const { openContactModal } = useContactModal();

    return (
        <section className="relative min-h-screen pt-28 pb-20 md:pt-32 md:pb-32 flex items-center overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                {/* Left Column: Content */}
                <div className="space-y-8 z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold leading-tight">
                            <span className="text-slate-800 dark:text-white">
                                Professional Embedded Systems &
                            </span>
                            <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                                IoT Development
                            </span>
                            <br />
                            <span className="text-slate-900 dark:text-white">Company</span>
                        </h1>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-lg md:text-xl text-slate-800 dark:text-slate-200 max-w-lg leading-relaxed"
                    >
                        Leading embedded systems and IoT development company specializing in hardware design, firmware development, PCB design, and complete product solutions from concept to mass production.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="flex flex-col sm:flex-row gap-4"
                    >
                        <Button
                            size="lg"
                            icon={<ArrowRight className="w-5 h-5" />}
                            onClick={openContactModal}
                        >
                            Start Your Project
                        </Button>
                    </motion.div>

                    {/* Social Proof */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="pt-8 border-t border-slate-300 dark:border-white/5 flex flex-wrap gap-6 text-sm"
                    >
                        {[
                            "Embedded Hardware Design",
                            "Firmware Development",
                            "IoT Solutions & Connectivity",
                        ].map((text, i) => (
                            <div key={i} className="flex items-center gap-2 text-slate-800 dark:text-slate-200 font-semibold dark:font-medium">
                                <CheckCircle2 className="w-4 h-4 text-accent" />
                                <span>{text}</span>
                            </div>
                        ))}
                    </motion.div>
                </div>

                {/* Right Column: Illustration */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.4 }}
                    className="relative"
                >
                    <HeroIllustration />
                </motion.div>
            </div>
        </section>
    );
}
