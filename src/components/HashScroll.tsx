"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function HashScroll() {
    const pathname = usePathname();

    useEffect(() => {
        if (pathname !== "/") return;
        const hash = window.location.hash;
        if (!hash || hash.length < 2) return;
        const id = hash.slice(1);
        const run = () => {
            const el = document.getElementById(id);
            if (el) {
                el.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        };
        requestAnimationFrame(() => {
            setTimeout(run, 0);
        });
    }, [pathname]);

    return null;
}
