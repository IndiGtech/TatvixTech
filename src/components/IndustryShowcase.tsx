"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import Image from "next/image";

export interface IndustryShowcaseProps {
    id: string;
    name: string;
    description: string;
    icon: LucideIcon;
    image: string;
    challenges: string[];
    solutions: string[];
    softwareComponents: string[];
    standards: string[];
    isLeft: boolean;
}

export default function IndustryShowcase({
    id,
    name,
    description,
    icon: Icon,
    image,
    challenges,
    solutions,
    softwareComponents,
    standards,
    isLeft
}: IndustryShowcaseProps) {
    return (
        <motion.section
            id={id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className={`flex flex-col lg:flex-row gap-12 lg:gap-20 items-center scroll-mt-32 ${!isLeft ? 'lg:flex-row-reverse' : ''}`}
        >
            {/* Image Side */}
            <div className="w-full lg:w-1/2 relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-white/10">
                    <Image
                        src={image}
                        alt={`${name} solutions`}
                        fill
                        loading="lazy"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/20 to-transparent opacity-80" />
                    <div className="absolute bottom-6 left-6 right-6">
                        <div className="flex flex-wrap gap-2">
                            {standards.map((standard) => (
                                <span key={standard} className="px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-xs font-medium text-white">
                                    {standard}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Content Side */}
            <div className="w-full lg:w-1/2 space-y-8">
                <div>
                    <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                        <Icon className="w-8 h-8" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">{name}</h2>
                    <p className="text-lg text-muted leading-relaxed">
                        {description}
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-8">
                    <div>
                        <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Hardware Solutions</h4>
                        <ul className="space-y-3">
                            {solutions.map((item, i) => (
                                <li key={i} className="flex items-start text-sm text-muted">
                                    <span className="text-cyan-400 mr-2 mt-0.5">■</span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Software Ecosystem</h4>
                        <ul className="space-y-3">
                            {softwareComponents.map((item, i) => (
                                <li key={i} className="flex items-start text-sm text-muted">
                                    <span className="text-purple-400 mr-2 mt-0.5">●</span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="pt-4 border-t border-white/10">
                    <h4 className="text-sm font-bold text-white/50 uppercase tracking-wider mb-4">Key Challenges Addressed</h4>
                    <div className="flex flex-wrap gap-2">
                        {challenges.map((item, i) => (
                            <span key={i} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-muted">
                                {item}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </motion.section>
    );
}
