"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
    {
        quote: "We originally hired Tatvix just for PCB design. When we realized they could also build our AWS backend and React Native app, it changed everything. Having one team handle the entire stack saved us months of vendor coordination.",
        author: "Mr. Subnesh B",
        role: "CTO, MedTech Solutions",
        highlight: "Saved months of vendor coordination"
    },
    {
        quote: "Their unique ability to write low-level firmware and high-level web dashboards is incredibly rare. The dashboard they built visualizes our sensor data flawlessly without ever dropping a packet.",
        author: "Mr. Rajesh P",
        role: "Director of Engineering, IndustrialIoT",
        highlight: "Visualizes sensor data flawlessly"
    }
];

export default function SoftwareTestimonials() {
    return (
        <section className="py-12">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-heading font-bold text-white mb-4">
                    Why Clients Choose Our Full Stack
                </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
                {testimonials.map((t, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                        className="bg-white/5 border border-white/10 rounded-3xl p-8 relative"
                    >
                        <Quote className="absolute top-8 right-8 w-12 h-12 text-white/5" />
                        
                        <div className="mb-6">
                            <span className="inline-block px-3 py-1 bg-primary/10 text-primary border border-primary/20 rounded-full text-xs font-bold mb-4">
                                {t.highlight}
                            </span>
                            <p className="text-lg text-muted/90 leading-relaxed relative z-10">
                                "{t.quote}"
                            </p>
                        </div>
                        
                        <div className="flex items-center pt-6 border-t border-white/10">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center text-[#ffffff] font-bold mr-4">
                                {t.author.charAt(0)}
                            </div>
                            <div>
                                <div className="text-white font-bold">{t.author}</div>
                                <div className="text-sm text-muted">{t.role}</div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}