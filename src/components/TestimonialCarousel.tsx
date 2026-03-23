"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { cn } from "@/lib/utils";

const AUTO_ADVANCE_MS = 6500;

export interface Testimonial {
    id: string;
    quote: string;
    author: string;
    role: string;
    company: string;
}

const TESTIMONIALS: Testimonial[] = [
    {
        id: "1",
        quote:
            "Tatvix delivered our medical device firmware 2 weeks ahead of schedule",
        author: "Mr. Subnesh B",
        role: "CTO",
        company: "MedTech Corp",
    },
    {
        id: "2",
        quote:
            "Their ESP32 expertise helped us scale from prototype to 10K units",
        author: "Mr. Harshil R",
        role: "Hardware Lead",
        company: "AutoSense",
    },
    {
        id: "3",
        quote:
            "Professional team that understands both hardware constraints and software architecture",
        author: "Mr. Kalpesh B",
        role: "Founder",
        company: "SmartHome Inc",
    },
];

export default function TestimonialCarousel() {
    const [index, setIndex] = useState(0);
    const [hoverPaused, setHoverPaused] = useState(false);
    const [tabHidden, setTabHidden] = useState(false);
    const reduceMotion = useReducedMotion();
    const count = TESTIMONIALS.length;
    const active = useMemo(() => TESTIMONIALS[index], [index]);

    const goTo = useCallback(
        (next: number) => {
            if (count === 0) return;
            const wrapped = ((next % count) + count) % count;
            setIndex(wrapped);
        },
        [count]
    );

    const prev = useCallback(() => goTo(index - 1), [goTo, index]);
    const next = useCallback(() => goTo(index + 1), [goTo, index]);

    useEffect(() => {
        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === "ArrowLeft") prev();
            if (e.key === "ArrowRight") next();
        };
        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, [prev, next]);

    useEffect(() => {
        const onVisibility = () => {
            setTabHidden(document.visibilityState === "hidden");
        };
        onVisibility();
        document.addEventListener("visibilitychange", onVisibility);
        return () =>
            document.removeEventListener("visibilitychange", onVisibility);
    }, []);

    const autoAdvancePaused =
        reduceMotion || hoverPaused || tabHidden || count < 2;

    useEffect(() => {
        if (autoAdvancePaused) return;
        const id = window.setInterval(() => {
            setIndex((i) => (i + 1) % count);
        }, AUTO_ADVANCE_MS);
        return () => window.clearInterval(id);
    }, [autoAdvancePaused, count]);

    if (!active) {
        return null;
    }

    const transition = reduceMotion
        ? { duration: 0 }
        : { type: "spring" as const, stiffness: 380, damping: 34 };

    return (
        <div
            className={cn(
                "relative mx-auto w-full max-w-4xl lg:max-w-5xl",
                "rounded-2xl border-2 border-slate-300 dark:border-white/15 bg-white/95 dark:bg-white/[0.08] backdrop-blur-xl",
                "px-5 py-8 sm:px-8 sm:py-10 md:px-12 md:py-12 lg:px-14 lg:py-14",
                "shadow-xl shadow-slate-200/60 dark:shadow-[0_0_40px_rgba(0,0,0,0.25)]"
            )}
            role="region"
            aria-roledescription="carousel"
            aria-label="Client testimonials"
            onMouseEnter={() => setHoverPaused(true)}
            onMouseLeave={() => setHoverPaused(false)}
        >
            <Quote
                className={cn(
                    "absolute text-primary/10",
                    "right-4 top-4 h-24 w-24 sm:right-6 sm:top-6 sm:h-32 sm:w-32",
                    "md:h-40 md:w-40 lg:h-[12rem] lg:w-[12rem]",
                    "-z-10"
                )}
                aria-hidden
            />

                <div
                    className={cn(
                        "relative z-10",
                        "min-h-[16rem] sm:min-h-[15rem] md:min-h-[14rem] lg:min-h-[12.5rem]"
                    )}
                >
                    <AnimatePresence mode="wait" initial={false}>
                        <motion.div
                            id={`testimonial-panel-${active.id}`}
                            key={active.id}
                            role="group"
                            aria-live="polite"
                            aria-label={`Testimonial ${index + 1} of ${count}`}
                            initial={
                                reduceMotion
                                    ? { opacity: 1, x: 0 }
                                    : { opacity: 0, x: 24 }
                            }
                            animate={{ opacity: 1, x: 0 }}
                            exit={
                                reduceMotion
                                    ? { opacity: 1, x: 0 }
                                    : { opacity: 0, x: -24 }
                            }
                            transition={transition}
                        >
                            <blockquote
                                className={cn(
                                    "pr-8 sm:pr-12 md:pr-14",
                                    "font-heading font-bold leading-tight text-slate-900 dark:text-white",
                                    "text-2xl sm:text-3xl md:text-4xl lg:text-[2.5rem] xl:text-5xl",
                                    "drop-shadow-sm dark:drop-shadow-lg"
                                )}
                            >
                                &ldquo;{active.quote}&rdquo;
                            </blockquote>
                            <footer className="mt-8 md:mt-12 flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center text-[#ffffff] font-bold text-lg shadow-lg">
                                    {active.author.charAt(0)}
                                </div>
                                <cite className="not-italic">
                                    <span
                                        className={cn(
                                            "block font-bold text-slate-900 dark:text-white",
                                            "text-base sm:text-lg"
                                        )}
                                    >
                                        {active.author}
                                    </span>
                                    <span
                                        className={cn(
                                            "block text-slate-700 dark:text-muted mt-0.5",
                                            "text-sm sm:text-base"
                                        )}
                                    >
                                        {active.role}, {active.company}
                                    </span>
                                </cite>
                            </footer>
                        </motion.div>
                    </AnimatePresence>
                </div>

            <div className="mt-8 flex flex-col items-center gap-4 sm:mt-10 sm:flex-row sm:justify-between md:mt-12">
                <div className="flex gap-2" aria-label="Testimonial index">
                    {TESTIMONIALS.map((t, i) => (
                        <button
                            key={t.id}
                            type="button"
                            aria-label={`Go to testimonial ${i + 1} of ${count}`}
                            aria-current={i === index ? "true" : undefined}
                            className={cn(
                                "h-2.5 w-2.5 rounded-full transition-all duration-300",
                                "focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-bg",
                                i === index
                                    ? "w-8 bg-primary shadow-[0_0_12px_rgba(0,217,255,0.45)]"
                                    : "bg-slate-400 dark:bg-white/40 hover:bg-slate-600 dark:hover:bg-white/60"
                            )}
                            onClick={() => goTo(i)}
                        />
                    ))}
                </div>

                <div className="flex gap-2">
                    <button
                        type="button"
                        onClick={prev}
                        className={cn(
                            "inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 sm:h-12 sm:w-12",
                            "bg-white/90 dark:bg-white/[0.08] text-slate-800 dark:text-muted transition-all duration-300 backdrop-blur-md",
                            "hover:border-primary/40 hover:text-primary hover:bg-primary/10",
                            "focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                        )}
                        aria-label="Previous testimonial"
                    >
                        <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
                    </button>
                    <button
                        type="button"
                        onClick={next}
                        className={cn(
                            "inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 sm:h-12 sm:w-12",
                            "bg-white/90 dark:bg-white/[0.08] text-slate-800 dark:text-muted transition-all duration-300 backdrop-blur-md",
                            "hover:border-primary/40 hover:text-primary hover:bg-primary/10",
                            "focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                        )}
                        aria-label="Next testimonial"
                    >
                        <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
                    </button>
                </div>
            </div>
        </div>
    );
}
