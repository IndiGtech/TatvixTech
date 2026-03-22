"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronRight } from "lucide-react";
import { useEffect } from "react";
import HomeSectionLink from "./HomeSectionLink";

interface MobileMenuProps {
    isOpen: boolean;
    onClose: () => void;
    links: { name: string; href: string }[];
}

export default function MobileMenu({ isOpen, onClose, links }: MobileMenuProps) {
    // Lock body scroll when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    const menuVariants = {
        closed: {
            opacity: 0,
            x: "100%",
            transition: {
                duration: 0.3
            },
        },
        open: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.4,
                staggerChildren: 0.07,
                delayChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        closed: { x: 50, opacity: 0 },
        open: { x: 0, opacity: 1 },
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-bg/90 backdrop-blur-xl z-[60]"
                    />

                    {/* Menu Panel */}
                    <motion.div
                        variants={menuVariants}
                        initial="closed"
                        animate="open"
                        exit="closed"
                        className="fixed inset-y-0 right-0 w-full md:w-[400px] bg-glass border-l border-border z-[70] p-6 flex flex-col"
                    >
                        <div className="flex justify-end mb-8">
                            <button
                                onClick={onClose}
                                className="p-2 rounded-full hover:bg-white/10 transition-colors border border-white/5"
                            >
                                <X className="w-6 h-6 text-primary" />
                            </button>
                        </div>

                        <nav className="flex flex-col gap-6">
                            {links.map((link) => (
                                <motion.div key={link.name} variants={itemVariants}>
                                    <HomeSectionLink
                                        href={link.href}
                                        onNavigate={onClose}
                                        className="group flex items-center justify-between text-2xl font-heading font-medium text-text hover:text-primary transition-colors"
                                    >
                                        <span>{link.name}</span>
                                        <ChevronRight className="w-6 h-6 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-primary" />
                                    </HomeSectionLink>
                                    <div className="mt-4 h-px w-full bg-gradient-to-r from-white/10 to-transparent" />
                                </motion.div>
                            ))}
                        </nav>

                        <motion.div
                            variants={itemVariants}
                            className="mt-auto"
                        >
                            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                                <h3 className="text-lg font-heading font-bold text-white mb-2">
                                    Ready to start?
                                </h3>
                                <p className="text-muted mb-4 text-sm">
                                    Let&apos;s bring your embedded vision to life.
                                </p>
                                <HomeSectionLink
                                    href="/#contact"
                                    onNavigate={onClose}
                                    className="block w-full text-center py-3 bg-primary text-black font-bold rounded-xl hover:bg-cyan-400 transition-colors shadow-[0_0_20px_rgba(0,217,255,0.3)]"
                                >
                                    Get Started
                                </HomeSectionLink>
                            </div>
                        </motion.div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
