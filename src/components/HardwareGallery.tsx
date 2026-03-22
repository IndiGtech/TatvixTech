"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X } from "lucide-react";

const images = [
    {
        id: "pcb-1",
        src: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800",
        alt: "Multi-layer HDI PCB Design",
        caption: "High-density interconnect (HDI) PCB designed for a medical wearable.",
        span: "md:col-span-2 md:row-span-2",
    },
    {
        id: "lab-1",
        src: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800",
        alt: "Hardware Testing Lab",
        caption: "Signal integrity testing using high-speed oscilloscopes in our lab.",
        span: "md:col-span-1 md:row-span-1",
    },
    {
        id: "sensor-1",
        src: "https://images.unsplash.com/photo-1555664424-778a1e5e1b48?auto=format&fit=crop&q=80&w=800",
        alt: "IoT Sensor Node",
        caption: "Ultra-low power LoRaWAN environmental sensor node.",
        span: "md:col-span-1 md:row-span-1",
    },
    {
        id: "proto-1",
        src: "https://images.unsplash.com/photo-1608564697071-ddf911d81370?auto=format&fit=crop&q=80&w=800",
        alt: "Prototype vs Production",
        caption: "Iterative design: from breadboard PoC to mass-produced PCBA.",
        span: "md:col-span-2 md:row-span-1",
    }
];

export default function HardwareGallery() {
    const [selectedId, setSelectedId] = useState<string | null>(null);

    return (
        <section className="py-24 relative bg-bg/50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-12">
                    <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-4">
                        Inside the Lab
                    </h2>
                    <p className="text-lg text-muted max-w-2xl">
                        A glimpse into our engineering environment, from raw silicon to field-ready devices.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[250px]">
                    {images.map((img) => (
                        <motion.div
                            key={img.id}
                            layoutId={`gallery-container-${img.id}`}
                            className={`relative rounded-2xl overflow-hidden cursor-pointer group ${img.span}`}
                            onClick={() => setSelectedId(img.id)}
                            whileHover={{ scale: 0.98 }}
                            transition={{ duration: 0.3 }}
                        >
                            <Image
                                src={img.src}
                                alt={img.alt}
                                fill
                                loading="lazy"
                                sizes="(max-width: 768px) 100vw, 50vw"
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-bg/90 via-bg/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                <p className="text-white font-medium text-sm translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                    {img.caption}
                                </p>
                            </div>
                            
                            {/* Focus indicator for keyboard navigation */}
                            <button className="sr-only focus:not-sr-only focus:absolute focus:inset-0 focus:ring-4 focus:ring-primary focus:outline-none focus:rounded-2xl" aria-label={`View ${img.alt} in fullscreen`}>
                                View {img.alt}
                            </button>
                        </motion.div>
                    ))}
                </div>

                <AnimatePresence>
                    {selectedId && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-12 bg-bg/90 backdrop-blur-xl"
                            onClick={() => setSelectedId(null)}
                        >
                            {images.filter(i => i.id === selectedId).map(img => (
                                <motion.div
                                    key={`modal-${img.id}`}
                                    layoutId={`gallery-container-${img.id}`}
                                    className="relative w-full max-w-5xl aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    <Image
                                        src={img.src}
                                        alt={img.alt}
                                        fill
                                        className="object-contain bg-black/50"
                                        sizes="100vw"
                                    />
                                    <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 to-transparent p-6 md:p-8">
                                        <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{img.alt}</h3>
                                        <p className="text-muted">{img.caption}</p>
                                    </div>
                                    <button
                                        onClick={() => setSelectedId(null)}
                                        className="absolute top-4 right-4 p-2 rounded-full bg-black/50 text-white hover:bg-white/20 transition-colors focus:ring-2 focus:ring-primary outline-none"
                                        aria-label="Close image"
                                    >
                                        <X className="w-6 h-6" />
                                    </button>
                                </motion.div>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
}
