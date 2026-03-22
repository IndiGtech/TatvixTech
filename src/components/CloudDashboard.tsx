"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Cloud } from "lucide-react";

interface CloudDashboardProps {
    isActive: boolean;
}

export default function CloudDashboard({ isActive }: CloudDashboardProps) {
    const [logs, setLogs] = useState<string[]>([]);
    const scrollRef = useRef<HTMLDivElement>(null);
    const [dataPoints, setDataPoints] = useState<number[]>(Array(20).fill(20));

    useEffect(() => {
        if (!isActive) {
            const timer = setTimeout(() => {
                setLogs([]);
                setDataPoints(Array(20).fill(20));
            }, 0);
            return () => clearTimeout(timer);
        }

        const interval = setInterval(() => {
            const now = new Date();
            const time = now.toLocaleTimeString('en-US', { hour12: false, hour: "2-digit", minute: "2-digit", second: "2-digit" });

            const temp = (24 + Math.random() * 2).toFixed(1);
            const isMotion = Math.random() > 0.8;

            const newLogs = [
                `[${time}] Receiving payload... OK`,
                `[${time}] Temp: ${temp}°C | Motion: ${isMotion ? "DETECTED" : "None"}`,
                `[${time}] Synced to AWS IoT Core ✓`
            ];

            setLogs(prev => [...prev.slice(-8), ...newLogs]);

            // Update graph data
            setDataPoints(prev => [...prev.slice(1), parseFloat(temp)]);

        }, 1500);

        return () => clearInterval(interval);
    }, [isActive]);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [logs]);

    return (
        <div className="relative w-full h-[400px] bg-bg border border-white/10 rounded-2xl flex flex-col overflow-hidden shadow-2xl">
            {/* Header */}
            <div className="h-10 border-b border-white/10 bg-white/5 flex items-center px-4 justify-between">
                <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/50" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                    <div className="w-3 h-3 rounded-full bg-green-500/50" />
                </div>
                <div className="text-xs font-mono text-gray-500">cloud_dashboard.exe</div>
            </div>

            {/* Content */}
            <div className="flex-1 p-4 font-mono text-xs md:text-sm flex flex-col gap-4">

                {/* Status Bar */}
                <div className="flex items-center justify-between p-3 rounded-lg bg-blue-500/5 border border-blue-500/10">
                    <div className="flex items-center gap-2 text-blue-400">
                        <Cloud className="w-4 h-4" />
                        <span className="font-semibold">AWS IoT Core</span>
                    </div>
                    <div className={`flex items-center gap-2 ${isActive ? "text-emerald-400" : "text-gray-500"}`}>
                        <span className="w-2 h-2 rounded-full bg-current animate-pulse" />
                        {isActive ? "Connected (12ms)" : "Disconnect"}
                    </div>
                </div>

                {/* Graph Area */}
                <div className="h-24 w-full bg-black/30 rounded border border-white/5 relative flex items-end gap-1 px-1 pb-1 overflow-hidden">
                    {dataPoints.map((val, i) => (
                        <motion.div
                            key={i}
                            initial={{ height: 0 }}
                            animate={{ height: `${(val - 15) * 5}%` }}
                            className="flex-1 bg-gradient-to-t from-primary/20 to-primary rounded-t-[1px]"
                        />
                    ))}
                </div>

                {/* Log Terminal */}
                <div
                    ref={scrollRef}
                    className="flex-1 bg-black/50 rounded p-3 overflow-y-auto space-y-1 scrollbar-hide text-gray-300"
                >
                    {!isActive && <div className="text-gray-600 italic">{/* Waiting for device connection... */}</div>}

                    {logs.map((log, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="flex items-start gap-2"
                        >
                            <span className="text-emerald-500">➜</span>
                            {log}
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
