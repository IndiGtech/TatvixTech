"use client";

import { motion } from "framer-motion";
import { ArrowRight, Cpu, Activity, LineChart, BellRing } from "lucide-react";
import EcosystemDiagram from "./EcosystemDiagram";
import EcosystemBenefits from "./EcosystemBenefits";

export default function ProductEcosystem() {
    return (
        <section id="ecosystem" className="py-32 relative bg-bg/50">
            {/* Ambient Background Elements */}
            <div className="absolute top-1/4 left-0 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-primary/10 rounded-full blur-[150px] -translate-x-1/2 pointer-events-none" />
            <div className="absolute bottom-1/4 right-0 w-[250px] h-[250px] md:w-[500px] md:h-[500px] bg-purple-600/10 rounded-full blur-[120px] translate-x-1/2 pointer-events-none" />

            <div className="w-full relative z-10">
                {/* Section Header */}
                <div className="text-center mb-20 px-4">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="inline-block px-4 py-1.5 bg-primary/10 border border-primary/20 rounded-full text-slate-800 dark:text-primary font-bold dark:font-medium tracking-wider uppercase mb-6"
                    >
                        Complete Ecosystem
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-slate-900 dark:text-white mb-6 leading-tight max-w-5xl mx-auto"
                    >
                        From <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500">Silicon</span> to <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">Screen</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-xl text-slate-700 dark:text-muted max-w-3xl mx-auto"
                    >
                        We build interconnected product ecosystems. Experience seamless integration when one expert team develops your hardware, firmware, cloud backend, and user applications.
                    </motion.p>
                </div>

                {/* Interactive Diagram (Full Width Scroll Experience) */}
                <div className="w-full mb-32">
                    <EcosystemDiagram />
                </div>

                {/* Benefits Grid */}
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mb-12 text-center">
                        <h3 className="text-3xl font-heading font-bold text-text">The Full Stack Advantage</h3>
                    </div>
                    <EcosystemBenefits />
                </div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="flex justify-center mt-24"
                >
                    <a
                        href="/services"
                        className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-gradient-to-r from-primary to-blue-600 text-bg font-bold text-lg hover:shadow-[0_0_30px_rgba(0,217,255,0.4)] hover:scale-105 transition-all duration-300 group"
                    >
                        Explore our complete services
                        <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
                    </a>
                </motion.div>
            </div>
        </section>
    );
}