import { codeToHtml } from "shiki";

function escapeHtml(text: string): string {
    return text
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;");
}

const LANG_ALIASES: Record<string, string> = {
    c: "c",
    cpp: "cpp",
    cxx: "cpp",
    arduino: "cpp",
    python: "python",
    bash: "bash",
    shell: "bash",
    sh: "bash",
    typescript: "typescript",
    ts: "typescript",
    tsx: "tsx",
    json: "json",
    text: "txt",
    txt: "txt",
};

interface HighlightedCodeProps {
    code: string;
    language: string;
}

export default async function HighlightedCode({
    code,
    language,
}: HighlightedCodeProps) {
    const trimmed = code.replace(/\n$/, "");
    const lang =
        LANG_ALIASES[language.toLowerCase()] ?? language.toLowerCase();

    let html: string;
    try {
        html = await codeToHtml(trimmed, {
            lang: lang as never,
            theme: "github-dark",
        });
    } catch {
        html = `<pre class="shiki-fallback"><code>${escapeHtml(trimmed)}</code></pre>`;
    }

    return (
        <div
            className="my-6 overflow-x-auto rounded-xl border border-white/10 bg-[#0d1117] text-[13px] leading-relaxed shadow-lg shadow-black/20 [&_pre]:m-0 [&_pre]:overflow-x-auto [&_pre]:bg-transparent! [&_pre]:p-4 [&_pre]:font-mono"
            dangerouslySetInnerHTML={{ __html: html }}
        />
    );
}
