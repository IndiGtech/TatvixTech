"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

const HOME_HASH = /^\/(#[\w-]+)$/;

interface HomeSectionLinkProps {
    href: string;
    className?: string;
    children: ReactNode;
    onNavigate?: () => void;
}

export default function HomeSectionLink({
    href,
    className,
    children,
    onNavigate,
}: HomeSectionLinkProps) {
    const pathname = usePathname();
    const match = href.match(HOME_HASH);

    if (!match) {
        return (
            <Link href={href} className={className} onClick={onNavigate}>
                {children}
            </Link>
        );
    }

    const hash = match[1];
    const id = hash.slice(1);

    const scrollToSection = () => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
        window.history.replaceState(null, "", `/${hash}`);
    };

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        onNavigate?.();
        if (pathname === "/") {
            e.preventDefault();
            scrollToSection();
        }
    };

    return (
        <Link href={href} className={className} onClick={handleClick} scroll={false}>
            {children}
        </Link>
    );
}
