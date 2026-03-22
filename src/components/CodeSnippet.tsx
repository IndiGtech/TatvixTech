"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

interface CodeSnippetProps {
    code: string;
    language: string;
    filename?: string;
    children: React.ReactNode;
}

export default function CodeSnippet({ code, filename, children }: CodeSnippetProps) {
    const [isCopied, setIsCopied] = useState(false);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(code);
            setIsCopied(true);
            setTimeout(() => setIsCopied(false), 2000);
        } catch (err) {
            console.error("Failed to copy code", err);
        }
    };

    return (
        <div className="rounded-xl overflow-hidden border border-white/10 bg-[#0d1117] shadow-2xl my-8">
            <div className="flex items-center justify-between px-4 py-3 bg-white/5 border-b border-white/5">
                <div className="flex items-center gap-2">
                    <div className="flex gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-red-500/80" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                        <div className="w-3 h-3 rounded-full bg-green-500/80" />
                    </div>
                    {filename && (
                        <span className="ml-4 text-xs font-mono text-muted">
                            {filename}
                        </span>
                    )}
                </div>
                <button
                    onClick={handleCopy}
                    className="p-1.5 rounded-md hover:bg-white/10 text-muted hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-1 focus:ring-offset-[#0d1117]"
                    aria-label="Copy code to clipboard"
                >
                    {isCopied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                </button>
            </div>
            <div className="p-4 overflow-x-auto text-sm">
                {children}
            </div>
        </div>
    );
}
