"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";

export default function ThemeToggle() {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return <div className="w-10 h-10" />; // placeholder to prevent layout shift
    }

    const isDark = theme === "dark" || (!theme && document.documentElement.classList.contains("dark"));

    return (
        <button
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className="relative inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            aria-label="Toggle theme"
        >
            <div className="relative w-5 h-5 flex items-center justify-center">
                <motion.div
                    initial={false}
                    animate={{ 
                        scale: isDark ? 1 : 0, 
                        opacity: isDark ? 1 : 0,
                        rotate: isDark ? 0 : -90
                    }}
                    transition={{ duration: 0.2 }}
                    className="absolute inset-0"
                >
                    <Moon className="w-5 h-5 text-white/80" />
                </motion.div>
                <motion.div
                    initial={false}
                    animate={{ 
                        scale: isDark ? 0 : 1, 
                        opacity: isDark ? 0 : 1,
                        rotate: isDark ? 90 : 0
                    }}
                    transition={{ duration: 0.2 }}
                    className="absolute inset-0"
                >
                    <Sun className="w-5 h-5 text-white/80" />
                </motion.div>
            </div>
        </button>
    );
}