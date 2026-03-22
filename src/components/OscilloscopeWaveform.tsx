"use client";

import { useEffect, useRef } from "react";

export default function OscilloscopeWaveform() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animationId: number;
        let time = 0;

        const resize = () => {
            // Setup canvas size based on its display size
            const rect = canvas.getBoundingClientRect();
            canvas.width = rect.width * window.devicePixelRatio;
            canvas.height = rect.height * window.devicePixelRatio;
            ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
        };

        window.addEventListener("resize", resize);
        resize();

        const draw = () => {
            const width = canvas.width / window.devicePixelRatio;
            const height = canvas.height / window.devicePixelRatio;
            
            ctx.clearRect(0, 0, width, height);
            
            // Draw grid
            ctx.strokeStyle = "rgba(0, 217, 255, 0.1)";
            ctx.lineWidth = 1;
            ctx.beginPath();
            for (let x = 0; x < width; x += 40) {
                ctx.moveTo(x, 0);
                ctx.lineTo(x, height);
            }
            for (let y = 0; y < height; y += 40) {
                ctx.moveTo(0, y);
                ctx.lineTo(width, y);
            }
            ctx.stroke();

            // Center line
            ctx.strokeStyle = "rgba(0, 217, 255, 0.3)";
            ctx.beginPath();
            ctx.moveTo(0, height / 2);
            ctx.lineTo(width, height / 2);
            ctx.stroke();

            // Draw primary waveform (Sine with noise)
            ctx.beginPath();
            ctx.strokeStyle = "#00d9ff";
            ctx.lineWidth = 2;
            ctx.shadowBlur = 10;
            ctx.shadowColor = "#00d9ff";

            for (let x = 0; x < width; x++) {
                const noise = (Math.random() - 0.5) * 5; // HF Noise
                const y = height / 2 + Math.sin(x * 0.05 + time) * 60 + Math.sin(x * 0.01) * 20 + noise;
                
                if (x === 0) ctx.moveTo(x, y);
                else ctx.lineTo(x, y);
            }
            ctx.stroke();
            
            // Reset shadow
            ctx.shadowBlur = 0;

            time += 0.1;
            animationId = requestAnimationFrame(draw);
        };

        draw();

        return () => {
            window.removeEventListener("resize", resize);
            cancelAnimationFrame(animationId);
        };
    }, []);

    return (
        <div className="relative w-full h-[300px] bg-bg rounded-2xl border border-white/10 overflow-hidden shadow-[inset_0_0_50px_rgba(0,0,0,0.5)]">
            <div className="absolute top-4 left-4 flex flex-col">
                <span className="text-cyan-400 font-mono text-xs font-bold">CH1 1.00V</span>
                <span className="text-cyan-400/60 font-mono text-[10px]">M 1.00ms</span>
            </div>
            <div className="absolute top-4 right-4 flex gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-green-500 font-mono text-[10px] tracking-widest uppercase">Trig</span>
            </div>
            <canvas 
                ref={canvasRef} 
                className="w-full h-full block" 
                aria-label="Animated oscilloscope waveform showing signal integrity"
                role="img"
            />
            <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%)] bg-[length:100%_4px] pointer-events-none opacity-20 mix-blend-overlay" />
        </div>
    );
}
