"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Loader2, CheckCircle2, ChevronDown } from "lucide-react";
import { useTheme } from "next-themes";
import Button from "./Button";

interface ContactModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
    const { theme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        mobile: "",
        company: "",
        title: "",
        inquiryType: "General",
        description: "",
    });

    const inquiryTypes = [
        "Select Inquiry Type",
        "Inquiry for",
        "PCB Design",
        "Firmware Development",
        "IoT System Integration",
        "Cloud Solutions",
        "Prototyping",
        "Production Support",
    ];

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setIsSuccess(true);
                setTimeout(() => {
                    onClose();
                    setIsSuccess(false);
                    setFormData({
                        name: "",
                        email: "",
                        mobile: "",
                        company: "",
                        title: "",
                        inquiryType: "General",
                        description: "",
                    });
                }, 3000);
            }
        } catch (error) {
            console.error("Failed to send message", error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    if (!mounted) return null;

    const isDark = resolvedTheme === 'dark' || theme === 'dark';

    return (
        <AnimatePresence>
            {isOpen && (
                <div className={isDark ? 'dark' : ''}>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-slate-300/30 dark:bg-slate-900/90 backdrop-blur-xl z-50 flex items-center justify-center p-4 overflow-y-auto"
                    >
                        {/* Modal Container */}
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.95, opacity: 0, y: 20 }}
                            onClick={(e) => e.stopPropagation()}
                            className="relative w-full max-w-2xl bg-white/90 dark:bg-slate-900/95 backdrop-blur-3xl border border-white/60 dark:border-slate-700/50 rounded-3xl shadow-2xl shadow-slate-200/40 dark:shadow-[0_0_40px_rgba(0,0,0,0.3)] overflow-hidden my-8"
                        >
                            {/* Bright Glass Effect Base */}
                            <div className="absolute inset-0 bg-gradient-to-br from-white/70 via-white/40 to-white/60 dark:from-white/5 dark:via-white/2 dark:to-white/3 pointer-events-none rounded-3xl" />
                            <div className="absolute inset-0 bg-gradient-to-tl from-slate-50/60 via-transparent to-white/50 dark:from-slate-800/20 dark:to-slate-700/10 pointer-events-none rounded-3xl" />
                            
                            {/* Enhanced Corner Accents */}
                            <div className="absolute top-0 left-0 w-28 h-28 bg-gradient-to-br from-cyan-300/30 via-blue-300/20 to-transparent dark:from-cyan-500/15 dark:via-blue-500/10 rounded-tl-3xl blur-2xl opacity-80" />
                            <div className="absolute bottom-0 right-0 w-28 h-28 bg-gradient-to-tl from-purple-300/30 via-blue-300/20 to-transparent dark:from-purple-500/15 dark:via-blue-500/10 rounded-br-3xl blur-2xl opacity-80" />
                            
                            {/* Bright Edge Enhancement */}
                            <div className="absolute -inset-px bg-gradient-to-br from-white/40 via-slate-100/20 to-white/40 dark:from-white/10 dark:to-white/10 rounded-3xl blur-sm opacity-70" />
                            <div className="absolute inset-2 bg-gradient-to-br from-white/30 via-transparent to-white/20 dark:from-white/5 dark:to-white/3 rounded-2xl blur-lg opacity-60" />

                            {/* Header */}
                            <div className="relative px-6 py-4 border-b border-white/40 dark:border-slate-700/50 flex justify-between items-center bg-white/80 dark:bg-slate-800/60 backdrop-blur-xl">
                                <div>
                                    <h3 className="text-xl font-heading font-semibold text-slate-900 dark:text-white drop-shadow-sm">Start Your Project</h3>
                                    <p className="text-sm text-slate-700 dark:text-slate-300 drop-shadow-sm">Tell us about your embedded or IoT requirements</p>
                                </div>
                                <button
                                    onClick={onClose}
                                    className="p-2 rounded-full hover:bg-slate-200/50 dark:hover:bg-white/10 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            </div>

                            {/* Body */}
                            <div className="relative p-6 md:p-8 max-h-[85vh] overflow-y-auto bg-white/20 dark:bg-slate-900/50 backdrop-blur-md">
                                {isSuccess ? (
                                    <div className="flex flex-col items-center justify-center py-12 text-center space-y-4">
                                        <div className="w-16 h-16 rounded-full bg-emerald-500/20 flex items-center justify-center mb-4">
                                            <CheckCircle2 className="w-8 h-8 text-emerald-500" />
                                        </div>
                                        <h4 className="text-2xl font-bold text-slate-900 dark:text-white">Message Sent!</h4>
                                        <p className="text-slate-700 dark:text-slate-300 max-w-sm">
                                            Thanks for reaching out! Our team will review your project details and get back to you within 24 hours.
                                        </p>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div className="grid md:grid-cols-2 gap-6">
                                            {/* Name */}
                                            <div className="space-y-2">
                                                <label className="text-sm font-medium text-slate-800 dark:text-slate-200 drop-shadow-sm">Full Name *</label>
                                                <input
                                                    required
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    className="w-full bg-white/90 dark:bg-slate-800/60 border border-white/50 dark:border-slate-600/50 rounded-xl px-4 py-3 text-slate-900 dark:text-white focus:outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-slate-500 dark:placeholder:text-slate-400 backdrop-blur-sm shadow-sm shadow-slate-100/50 dark:shadow-slate-900/20"
                                                    placeholder="John Doe"
                                                />
                                            </div>

                                            {/* Email */}
                                            <div className="space-y-2">
                                                <label className="text-sm font-medium text-slate-800 dark:text-slate-200 drop-shadow-sm">Email Address *</label>
                                                <input
                                                    required
                                                    type="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    className="w-full bg-white/90 dark:bg-slate-800/60 border border-white/50 dark:border-slate-600/50 rounded-xl px-4 py-3 text-slate-900 dark:text-white focus:outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-slate-500 dark:placeholder:text-slate-400 backdrop-blur-sm shadow-sm shadow-slate-100/50 dark:shadow-slate-900/20"
                                                    placeholder="john@company.com"
                                                />
                                            </div>

                                            {/* Mobile */}
                                            <div className="space-y-2">
                                                <label className="text-sm font-medium text-slate-800 dark:text-slate-200 drop-shadow-sm">Mobile Number *</label>
                                                <input
                                                    required
                                                    type="tel"
                                                    name="mobile"
                                                    value={formData.mobile}
                                                    onChange={handleChange}
                                                    className="w-full bg-white/90 dark:bg-slate-800/60 border border-white/50 dark:border-slate-600/50 rounded-xl px-4 py-3 text-slate-900 dark:text-white focus:outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-slate-500 dark:placeholder:text-slate-400 backdrop-blur-sm shadow-sm shadow-slate-100/50 dark:shadow-slate-900/20"
                                                    placeholder="+91 12345 67890"
                                                />
                                            </div>

                                            {/* Company */}
                                            <div className="space-y-2">
                                                <label className="text-sm font-medium text-slate-800 dark:text-slate-200 drop-shadow-sm">Company Name</label>
                                                <input
                                                    name="company"
                                                    value={formData.company}
                                                    onChange={handleChange}
                                                    className="w-full bg-white/90 dark:bg-slate-800/60 border border-white/50 dark:border-slate-600/50 rounded-xl px-4 py-3 text-slate-900 dark:text-white focus:outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-slate-500 dark:placeholder:text-slate-400 backdrop-blur-sm shadow-sm shadow-slate-100/50 dark:shadow-slate-900/20"
                                                    placeholder="Tech Solutions Inc."
                                                />
                                            </div>

                                            {/* Title */}
                                            <div className="space-y-2">
                                                <label className="text-sm font-medium text-slate-800 dark:text-slate-200 drop-shadow-sm">Job Title</label>
                                                <input
                                                    name="title"
                                                    value={formData.title}
                                                    onChange={handleChange}
                                                    className="w-full bg-white/90 dark:bg-slate-800/60 border border-white/50 dark:border-slate-600/50 rounded-xl px-4 py-3 text-slate-900 dark:text-white focus:outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-slate-500 dark:placeholder:text-slate-400 backdrop-blur-sm shadow-sm shadow-slate-100/50 dark:shadow-slate-900/20"
                                                    placeholder="CTO / Product Manager"
                                                />
                                            </div>

                                            {/* Inquiry Type */}
                                            <div className="space-y-2">
                                                <label className="text-sm font-medium text-slate-800 dark:text-slate-200 drop-shadow-sm">Inquiry *</label>
                                                <div className="relative">
                                                    <select
                                                        required
                                                        name="inquiryType"
                                                        value={formData.inquiryType}
                                                        onChange={handleChange}
                                                        className="w-full bg-white/90 dark:bg-slate-800/60 border border-white/50 dark:border-slate-600/50 rounded-xl px-4 py-3 text-slate-900 dark:text-white appearance-none focus:outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/20 transition-all cursor-pointer backdrop-blur-sm shadow-sm shadow-slate-100/50 dark:shadow-slate-900/20"
                                                    >
                                                        {inquiryTypes.map((type, i) => (
                                                            <option key={i} value={type === "Select Inquiry Type" ? "" : type} disabled={type === "Select Inquiry Type"} className="bg-white dark:bg-slate-800 text-slate-900 dark:text-white">
                                                                {type}
                                                            </option>
                                                        ))}
                                                    </select>
                                                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 dark:text-gray-400 pointer-events-none" />
                                                </div>
                                            </div>
                                        </div>

                                        {/* Description */}
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-slate-800 dark:text-slate-200 drop-shadow-sm">Project Description</label>
                                            <textarea
                                                rows={4}
                                                name="description"
                                                value={formData.description}
                                                onChange={handleChange}
                                                className="w-full bg-white/90 dark:bg-slate-800/60 border border-white/50 dark:border-slate-600/50 rounded-xl px-4 py-3 text-slate-900 dark:text-white focus:outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-slate-500 dark:placeholder:text-slate-400 resize-none backdrop-blur-sm shadow-sm shadow-slate-100/50 dark:shadow-slate-900/20"
                                                placeholder="Describe your project, timeline, and any specific requirements..."
                                            />
                                        </div>

                                        {/* Actions */}
                                        <div className="flex justify-end pt-4">
                                            <Button
                                                type="submit"
                                                size="lg"
                                                disabled={isLoading}
                                                className="w-full md:w-auto min-w-[150px]"
                                            >
                                                {isLoading ? (
                                                    <Loader2 className="w-5 h-5 animate-spin mx-auto" />
                                                ) : (
                                                    "Submit Request"
                                                )}
                                            </Button>
                                        </div>
                                    </form>
                                )}
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
