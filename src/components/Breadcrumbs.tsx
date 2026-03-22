"use client";

import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
    label: string;
    href?: string;
}

interface BreadcrumbsProps {
    items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
    return (
        <nav className="flex items-center space-x-2 text-sm text-slate-700 dark:text-muted mb-8" aria-label="Breadcrumb">
            <Link
                href="/"
                className="hover:text-slate-900 dark:hover:text-white transition-colors duration-200 flex items-center"
            >
                <Home className="w-4 h-4" />
                <span className="sr-only">Home</span>
            </Link>
            
            {items.map((item, index) => {
                const isLast = index === items.length - 1;
                
                return (
                    <div key={item.label} className="flex items-center space-x-2">
                        <ChevronRight className="w-4 h-4 text-slate-400 dark:text-white/20" />
                        {isLast || !item.href ? (
                            <span className="text-slate-900 dark:text-white font-medium" aria-current="page">
                                {item.label}
                            </span>
                        ) : (
                            <Link
                                href={item.href}
                                className="hover:text-slate-900 dark:hover:text-white transition-colors duration-200"
                            >
                                {item.label}
                            </Link>
                        )}
                    </div>
                );
            })}
        </nav>
    );
}
