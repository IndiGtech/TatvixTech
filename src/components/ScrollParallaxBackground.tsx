"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function ScrollParallaxBackground() {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
    const y2 = useTransform(scrollY, [0, 1000], [0, -150]);
    const opacity = useTransform(scrollY, [0, 300], [0.2, 0.05]);

    return (
        <>
            <motion.div 
                className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] pointer-events-none" 
                style={{ y: y1, opacity }}
            />
            
            {/* Ambient Background Elements tied to scroll */}
            <motion.div 
                className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px] -translate-x-1/2 pointer-events-none" 
                style={{ y: y2 }}
            />
            
            <motion.div 
                className="absolute top-2/3 right-0 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[150px] translate-x-1/2 pointer-events-none" 
                style={{ y: y1 }}
            />
        </>
    );
}