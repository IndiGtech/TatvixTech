"use client";

import { motion } from "framer-motion";
import { ArrowRight, BarChart3, TrendingUp, Zap, Clock } from "lucide-react";
import Image from "next/image";

export default function SoftwareCaseStudy() {
    return (
        <section className="py-12 border-t border-white/10">
            <div className="text-center mb-16">
                <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="inline-block text-accent font-medium tracking-wider uppercase mb-3"
                >
                    Software ROI
                </motion.span>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-3xl md:text-5xl font-heading font-bold text-white mb-6"
                >
                    The Impact of a Complete Ecosystem
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-lg text-muted max-w-2xl mx-auto"
                >
                    Adding a tailored software layer to your embedded device transforms it from a static piece of hardware into a scalable, monetizable product.
                </motion.p>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden"
            >
                <div className="grid lg:grid-cols-2">
                    {/* Before/After Visualization */}
                    <div className="p-8 md:p-12 border-b lg:border-b-0 lg:border-r border-white/10 relative overflow-hidden bg-gradient-to-br from-bg to-bg/50">
                        {/* Abstract Backgrounds */}
                        <div className="absolute top-0 left-0 w-full h-1/2 bg-red-500/5 blur-[100px] pointer-events-none" />
                        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-emerald-500/10 blur-[100px] pointer-events-none" />

                        <div className="space-y-12 relative z-10">
                            {/* Before */}
                            <div className="space-y-4">
                                <h3 className="text-xl font-bold text-white/50 uppercase tracking-wider flex items-center">
                                    <span className="w-2 h-2 rounded-full bg-red-500 mr-3" />
                                    Before: Hardware Only
                                </h3>
                                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 opacity-60 grayscale">
                                    <div className="flex justify-between items-center mb-4">
                                        <div className="font-mono text-sm">Industrial Sensor v1.0</div>
                                        <div className="px-2 py-1 bg-white/10 rounded text-xs">Offline</div>
                                    </div>
                                    <ul className="space-y-2 text-sm text-muted">
                                        <li>• Manual data collection</li>
                                        <li>• Reactive maintenance only</li>
                                        <li>• No remote diagnostics</li>
                                    </ul>
                                </div>
                            </div>

                            {/* After */}
                            <div className="space-y-4">
                                <h3 className="text-xl font-bold text-white uppercase tracking-wider flex items-center">
                                    <span className="w-2 h-2 rounded-full bg-emerald-500 mr-3 animate-pulse" />
                                    After: Full Stack Solution
                                </h3>
                                <div className="bg-gradient-to-br from-emerald-500/10 to-blue-500/10 border border-emerald-500/30 rounded-2xl p-6 shadow-[0_0_30px_rgba(16,185,129,0.1)]">
                                    <div className="flex justify-between items-center mb-4">
                                        <div className="font-mono text-sm text-emerald-400">Smart Sensor v2.0</div>
                                        <div className="px-2 py-1 bg-emerald-500/20 text-emerald-300 rounded text-xs flex items-center">
                                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mr-1.5 animate-ping" />
                                            Live Sync
                                        </div>
                                    </div>
                                    <ul className="space-y-2 text-sm text-white/90">
                                        <li className="flex items-center"><Zap className="w-4 h-4 mr-2 text-cyan-400" /> Automated cloud telemetry</li>
                                        <li className="flex items-center"><BarChart3 className="w-4 h-4 mr-2 text-purple-400" /> Predictive web dashboard</li>
                                        <li className="flex items-center"><Clock className="w-4 h-4 mr-2 text-blue-400" /> Instant mobile push alerts</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ROI Metrics */}
                    <div className="p-8 md:p-12 flex flex-col justify-center bg-gradient-to-bl from-white/[0.02] to-transparent">
                        <h3 className="text-2xl font-bold text-white mb-8">Measurable Business Impact</h3>
                        
                        <div className="grid grid-cols-2 gap-6 mb-10">
                            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                                <div className="text-3xl font-bold text-emerald-400 mb-2">40%</div>
                                <div className="text-sm text-muted">Reduction in field service costs</div>
                            </div>
                            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                                <div className="text-3xl font-bold text-blue-400 mb-2">3x</div>
                                <div className="text-sm text-muted">Faster issue resolution</div>
                            </div>
                            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                                <div className="text-3xl font-bold text-purple-400 mb-2">New</div>
                                <div className="text-sm text-muted">Recurring SaaS revenue stream</div>
                            </div>
                            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                                <div className="text-3xl font-bold text-pink-400 mb-2">100%</div>
                                <div className="text-sm text-muted">Device fleet visibility</div>
                            </div>
                        </div>

                        <p className="text-muted text-sm leading-relaxed border-l-2 border-primary pl-4">
                            "By upgrading our standalone hardware to a connected ecosystem with Tatvix's software team, we transformed our one-off hardware sales into a profitable hardware-as-a-service model."
                        </p>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}