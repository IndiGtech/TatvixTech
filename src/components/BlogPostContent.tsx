import type { ReactNode } from "react";
import Image from "next/image";
import HighlightedCode from "./HighlightedCode";
import type { BlogSection } from "@/data/blogPosts";

interface BlogPostContentProps {
    sections: BlogSection[];
}

export default async function BlogPostContent({
    sections,
}: BlogPostContentProps) {
    const nodes: ReactNode[] = [];

    for (let i = 0; i < sections.length; i++) {
        const section = sections[i];
        const key = `s-${i}`;

        switch (section.type) {
            case "p":
                nodes.push(
                    <p
                        key={key}
                        className="mb-6 text-base leading-relaxed text-slate-700 dark:text-muted md:text-lg"
                    >
                        {section.text}
                    </p>
                );
                break;
            case "h2":
                nodes.push(
                    <h2
                        key={key}
                        className="mb-4 mt-12 scroll-mt-28 font-heading text-2xl font-bold text-slate-800 dark:text-white first:mt-0 md:text-3xl"
                    >
                        {section.text}
                    </h2>
                );
                break;
            case "h3":
                nodes.push(
                    <h3
                        key={key}
                        className="mb-3 mt-10 scroll-mt-28 font-heading text-xl font-semibold text-slate-800 dark:text-white md:text-2xl"
                    >
                        {section.text}
                    </h3>
                );
                break;
            case "ul":
                nodes.push(
                    <ul
                        key={key}
                        className="mb-8 list-disc space-y-3 pl-6 text-slate-700 dark:text-muted marker:text-primary"
                    >
                        {section.items.map((item, j) => (
                            <li key={j} className="leading-relaxed">
                                {item}
                            </li>
                        ))}
                    </ul>
                );
                break;
            case "blockquote":
                nodes.push(
                    <blockquote
                        key={key}
                        className="mb-8 border-l-4 border-primary/50 bg-white/40 dark:bg-white/[0.06] py-4 pl-6 pr-4 text-lg italic text-slate-800 dark:text-text/90 backdrop-blur-sm"
                    >
                        {section.text}
                    </blockquote>
                );
                break;
            case "diagram":
                nodes.push(
                    <figure key={key} className="mb-10">
                        <figcaption className="mb-3 font-mono text-sm font-medium uppercase tracking-wide text-primary/90">
                            {section.title}
                        </figcaption>
                        <pre
                            className="overflow-x-auto rounded-xl border border-white/10 bg-black/40 p-4 font-mono text-xs leading-relaxed text-accent/95 md:text-sm"
                            role="img"
                            aria-label={section.title}
                        >
                            {section.lines.join("\n")}
                        </pre>
                    </figure>
                );
                break;
            case "table":
                nodes.push(
                    <figure key={key} className="mb-10 overflow-x-auto">
                        {section.caption && (
                            <figcaption className="mb-3 text-sm text-muted">
                                {section.caption}
                            </figcaption>
                        )}
                        <table className="w-full min-w-[520px] border-collapse text-left text-sm">
                            <thead>
                                <tr className="border-b border-white/15">
                                    {section.headers.map((h, j) => (
                                        <th
                                            key={j}
                                            className="bg-white/40 dark:bg-white/[0.08] px-4 py-3 font-heading font-semibold text-slate-800 dark:text-white"
                                        >
                                            {h}
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {section.rows.map((row, ri) => (
                                    <tr
                                        key={ri}
                                        className="border-b border-white/5 odd:bg-white/[0.02]"
                                    >
                                        {row.map((cell, ci) => (
                                            <td
                                                key={ci}
                                                className="px-4 py-3 text-slate-700 dark:text-muted"
                                            >
                                                {cell}
                                            </td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </figure>
                );
                break;
            case "checklist":
                nodes.push(
                    <div key={key} className="mb-10">
                        {section.title && (
                            <h3 className="mb-4 font-heading text-xl font-semibold text-slate-800 dark:text-white">
                                {section.title}
                            </h3>
                        )}
                        <ul className="space-y-4">
                            {section.items.map((item, j) => (
                                <li
                                    key={j}
                                    className="flex gap-3 rounded-xl border border-accent/20 bg-accent/[0.06] p-4"
                                >
                                    <span
                                        className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-accent/40 text-xs font-bold text-accent"
                                        aria-hidden
                                    >
                                        ✓
                                    </span>
                                    <div>
                                        <p className="font-medium text-slate-800 dark:text-white">
                                            {item.title}
                                        </p>
                                        <p className="mt-1 text-sm text-slate-700 dark:text-muted">
                                            {item.detail}
                                        </p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                );
                break;
            case "figure":
                nodes.push(
                    <figure key={key} className="mb-10">
                        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02]">
                            <Image
                                src={section.src}
                                alt={section.alt}
                                width={800}
                                height={480}
                                loading="lazy"
                                sizes="(max-width: 768px) 100vw, 800px"
                                className="h-auto w-full object-cover"
                            />
                        </div>
                        {section.caption && (
                            <figcaption className="mt-3 text-center text-sm text-slate-700 dark:text-muted">
                                {section.caption}
                            </figcaption>
                        )}
                    </figure>
                );
                break;
            case "code":
                nodes.push(
                    <div key={key} className="mb-2">
                        {section.caption && (
                            <p className="mb-2 font-mono text-xs uppercase tracking-wider text-slate-700 dark:text-muted">
                                {section.caption}
                            </p>
                        )}
                        <HighlightedCode
                            code={section.code}
                            language={section.language}
                        />
                    </div>
                );
                break;
            default:
                break;
        }
    }

    return (
        <div className="w-full">
            <article className="pb-8">{nodes}</article>
        </div>
    );
}
