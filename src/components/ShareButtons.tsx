"use client";

import { useCallback, useState } from "react";
import { Check, Link2, Linkedin } from "lucide-react";
import { cn } from "@/lib/utils";

interface ShareButtonsProps {
    url: string;
    title: string;
    description: string;
    className?: string;
}

function buildLinkedInUrl(url: string, title: string, summary: string): string {
    const u = new URL("https://www.linkedin.com/sharing/share-offsite/");
    u.searchParams.set("url", url);
    u.searchParams.set("title", title);
    u.searchParams.set("summary", summary.slice(0, 200));
    return u.toString();
}

export default function ShareButtons({
    url,
    title,
    description,
    className,
}: ShareButtonsProps) {
    const [copied, setCopied] = useState(false);

    const copy = useCallback(async () => {
        try {
            await navigator.clipboard.writeText(url);
            setCopied(true);
            window.setTimeout(() => setCopied(false), 2000);
        } catch {
            setCopied(false);
        }
    }, [url]);

    return (
        <div
            className={cn("flex flex-wrap items-center gap-2", className)}
            role="group"
            aria-label="Share article"
        >
            <a
                href={buildLinkedInUrl(url, title, description)}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                    "inline-flex h-10 items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-4 text-sm font-medium text-muted transition-colors",
                    "hover:border-[#0A66C2]/50 hover:text-[#70b5f9] hover:bg-[#0A66C2]/10",
                    "focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                )}
            >
                <Linkedin className="h-4 w-4" aria-hidden />
                LinkedIn
            </a>
            <button
                type="button"
                onClick={copy}
                className={cn(
                    "inline-flex h-10 items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-4 text-sm font-medium text-muted transition-colors",
                    "hover:border-primary/40 hover:text-primary",
                    "focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                )}
            >
                {copied ? (
                    <Check className="h-4 w-4 text-accent" aria-hidden />
                ) : (
                    <Link2 className="h-4 w-4" aria-hidden />
                )}
                {copied ? "Copied" : "Copy link"}
            </button>
        </div>
    );
}
