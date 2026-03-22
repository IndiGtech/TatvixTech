"use client";

import { useState } from "react";
import { Menu } from "lucide-react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Logo from "./Logo";
import MobileMenu from "./MobileMenu";
import ThemeToggle from "./ThemeToggle";
import { useContactModal } from "@/context/ContactModalContext";
import HomeSectionLink from "./HomeSectionLink";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { openContactModal } = useContactModal();
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        if (latest > 50) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    });

    const navLinks = [
        { name: "Solutions", href: "/#solutions" },
        { name: "Services", href: "/#services" },
        { name: "Industries", href: "/#industries" },
        { name: "Insights", href: "/#insights" },
        { name: "About", href: "/#about" },
        { name: "Contact", href: "/#contact" },
    ];

    return (
        <>
            <motion.header
                className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isScrolled
                    ? "bg-white/80 dark:bg-bg/80 backdrop-blur-xl border-b border-slate-200/50 dark:border-white/10 py-4 shadow-lg"
                    : "bg-white/20 dark:bg-transparent backdrop-blur-md py-6"
                    }`}
            >
                <div className="container mx-auto px-6 flex items-center justify-between">
                    <Logo />

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <HomeSectionLink
                                key={link.name}
                                href={link.href}
                                className="text-sm font-semibold text-slate-700 dark:text-muted hover:text-primary dark:hover:text-white transition-colors relative group"
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                            </HomeSectionLink>
                        ))}
                    </nav>

                    {/* CTA & Mobile Toggle */}
                    <div className="flex items-center gap-4">
                        <ThemeToggle />
                        
                        <button
                            onClick={openContactModal}
                            className="hidden md:block px-6 py-2.5 rounded-full bg-primary text-white font-medium text-sm hover:bg-primary/90 transition-all duration-300"
                        >
                            Get Started
                        </button>

                        <button
                            onClick={() => setIsMobileMenuOpen(true)}
                            className="md:hidden p-2 rounded-lg text-slate-800 dark:text-white hover:bg-slate-100 dark:hover:bg-white/10 transition-colors"
                        >
                            <Menu className="w-6 h-6" />
                        </button>
                    </div>
                </div>
            </motion.header>

            <MobileMenu
                isOpen={isMobileMenuOpen}
                onClose={() => setIsMobileMenuOpen(false)}
                links={navLinks}
            />
        </>
    );
}
