"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useTheme } from "next-themes";

export default function AnimatedBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const { scrollY } = useScroll();
    const { theme, systemTheme } = useTheme();
    const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
    const y2 = useTransform(scrollY, [0, 1000], [0, -150]);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        // Determine if dark mode is active
        const isDark = theme === "dark" || (theme === "system" && systemTheme === "dark") || (!theme && document.documentElement.classList.contains("dark"));
        
        // Colors for particles
        const particleColor = isDark ? "0, 217, 255" : "14, 165, 233";
        const lineColor = isDark ? "rgba(0, 217, 255, 0.05)" : "rgba(14, 165, 233, 0.4)";

        let width = window.innerWidth;
        let height = window.innerHeight;

        const setSize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
        };

        setSize();
        window.addEventListener("resize", setSize);

        // Particles system for "circuit" feel
        const particles: Array<{
            x: number;
            y: number;
            vx: number;
            vy: number;
            size: number;
            alpha: number;
        }> = [];

        const particleCount = Math.floor((width * height) / 9000);

        for (let i = 0; i < particleCount; i++) {
            particles.push({
                x: Math.random() * width,
                y: Math.random() * height,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5,
                size: Math.random() * 2 + 0.5,
                alpha: Math.random() * 0.5 + 0.1,
            });
        }

        let animationFrameId: number;
        let mouseX = 0;
        let mouseY = 0;

        const handleMouseMove = (e: MouseEvent) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        };

        window.addEventListener("mousemove", handleMouseMove);

        const drawKeypoints = () => {
            ctx.clearRect(0, 0, width, height);

            // Draw connecting lines
            ctx.strokeStyle = lineColor;
            ctx.lineWidth = 1;

            for (let i = 0; i < particles.length; i++) {
                const p = particles[i];

                // Update position
                p.x += p.vx;
                p.y += p.vy;

                // Mouse interaction (repel/attract)
                const dx = mouseX - p.x;
                const dy = mouseY - p.y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < 200) {
                    const angle = Math.atan2(dy, dx);
                    const force = (200 - dist) / 200;
                    p.x -= Math.cos(angle) * force * 0.5;
                    p.y -= Math.sin(angle) * force * 0.5;
                }

                // Wrap around screen
                if (p.x < 0) p.x = width;
                if (p.x > width) p.x = 0;
                if (p.y < 0) p.y = height;
                if (p.y > height) p.y = 0;

                // Draw particle
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(${particleColor}, ${p.alpha})`; // Dynamic
                ctx.fill();

                // Connect nearby particles
                for (let j = i + 1; j < particles.length; j++) {
                    const p2 = particles[j];
                    const dist = Math.sqrt((p.x - p2.x) ** 2 + (p.y - p2.y) ** 2);

                    if (dist < 120) {
                        ctx.beginPath();
                        ctx.moveTo(p.x, p.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.stroke();
                    }
                }
            }

            animationFrameId = requestAnimationFrame(drawKeypoints);
        };

        drawKeypoints();

        return () => {
            window.removeEventListener("resize", setSize);
            window.removeEventListener("mousemove", handleMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, [theme, systemTheme]);

    return (
        <div className="fixed inset-0 z-[-1] overflow-hidden bg-bg pointer-events-none">
            {/* Background Grid Pattern (Visible mainly in light mode for texture) */}
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.12] dark:opacity-[0.02] pointer-events-none mix-blend-overlay" />

            {/* Background Gradient Orbs */}
            <motion.div
                style={{ y: y1 }}
                className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-primary/40 dark:bg-primary/5 rounded-full blur-[120px]"
            />
            <motion.div
                style={{ y: y2 }}
                className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-purple-600/40 dark:bg-purple/5 rounded-full blur-[120px]"
            />

            {/* Canvas for Particles */}
            <canvas
                ref={canvasRef}
                className="absolute inset-0 w-full h-full opacity-60"
            />

            {/* Scanline Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-[1] bg-[length:100%_2px,3px_100%] pointer-events-none opacity-20" />
        </div>
    );
}
