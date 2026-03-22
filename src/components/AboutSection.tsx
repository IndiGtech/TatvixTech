"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import HomeSectionLink from "./HomeSectionLink";

export default function AboutSection() {
    return (
        <section id="about" className="py-24 relative overflow-hidden bg-bg/50">
            {/* Ambient Background Elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-600/10 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2" />

            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                <div className="grid md:grid-cols-2 gap-16 items-center">

                    {/* Left Column: Text Content */}
                    <div className="space-y-8">
                        <div>
                            <motion.span
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="inline-block text-accent font-medium tracking-wider uppercase mb-3"
                            >
                                About Us
                            </motion.span>
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="text-3xl md:text-5xl font-heading font-bold mb-6 leading-tight"
                            >
                                <span className="text-white">Complete Product </span>
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                                    Ecosystems
                                </span>
                            </motion.h2>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="space-y-6 text-lg text-muted/80 leading-relaxed"
                            >
                                <p>
                                    At Tatvix, we don&apos;t just write embedded code — we create complete digital ecosystems from silicon to screen.
                                    Our team exists at the intersection of hardware and software, specializing in
                                    crafting robust systems that power the next generation of connected devices.
                                </p>
                                <p>
                                    From ultra-low-power wearables to complex industrial controllers, we understand
                                    the unique constraints of embedded environments. We leverage deep technical
                                    expertise to deliver solutions that are not only functional but optimized for
                                    manufacturing and scale.
                                </p>
                                <p>
                                    Our software development capabilities are a natural extension of our embedded expertise. 
                                    We build custom web dashboards, mobile applications, and cloud integrations that seamlessly 
                                    connect with your hardware, delivering a unified and powerful user experience.
                                </p>
                            </motion.div>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="flex flex-wrap gap-4"
                        >
                            {["Firmware Engineering", "PCB Design", "Cloud Integration"].map((tag, i) => (
                                <span
                                    key={i}
                                    className="px-4 py-2 rounded-full border-2 border-slate-300 dark:border-white/10 bg-white/50 dark:bg-white/5 text-sm font-semibold dark:font-medium text-slate-800 dark:text-cyan-100/80 shadow-sm dark:shadow-none"
                                >
                                    {tag}
                                </span>
                            ))}
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                        >
                            <HomeSectionLink
                                href="/#insights"
                                className="group inline-flex items-center gap-2 text-base font-bold text-slate-800 dark:text-primary transition-colors hover:text-cyan-600 dark:hover:text-cyan-300"
                            >
                                Read our technical insights
                                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </HomeSectionLink>
                        </motion.div>
                    </div>

                    {/* Right Column: Visual */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border border-white/10 group">
                            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 pointer-events-none" />
                            <Image
                                src="/embedded_system_visual.png"
                                alt="Advanced Embedded System Board"
                                width={600}
                                height={600}
                                loading="lazy"
                                sizes="(max-width: 768px) 100vw, 50vw"
                                className="w-full h-auto object-cover transform transition-transform duration-700 hover:scale-105"
                            />
                        </div>

                        {/* Decorative glow behind the device */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 blur-3xl -z-10 rounded-full opacity-60" />
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
