"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import Button from "@/components/Button";
import { useContactModal } from "@/context/ContactModalContext";

export default function CTASection() {
    const { openContactModal } = useContactModal();

    return (
        <section id="contact" className="relative w-full py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-bg to-emerald-900/10 opacity-80 dark:from-blue-900/20 dark:via-bg dark:to-emerald-900/20 dark:opacity-50" />

            {/* Glow Effect */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="relative max-w-4xl mx-auto text-center z-10">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-text via-blue-500 to-text/80 dark:from-white dark:via-blue-100 dark:to-white/80"
                >
                    Ready to Build the Future?
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-lg md:text-xl text-muted dark:text-white/60 mb-10 max-w-2xl mx-auto"
                >
                    From concept to production-ready hardware, we turn your innovative ideas into reality with precision engineering and cutting-edge IoT solutions.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <Button
                        variant="primary"
                        size="lg"
                        className="group min-w-[200px]"
                        onClick={openContactModal}
                    >
                        Start Your Project
                        <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Button>

                    <Button
                        variant="secondary"
                        size="lg"
                        className="min-w-[200px]"
                        onClick={openContactModal}
                    >
                        <Mail className="mr-2 w-4 h-4" />
                        Contact Sales
                    </Button>
                </motion.div>
            </div>
        </section>
    );
}
