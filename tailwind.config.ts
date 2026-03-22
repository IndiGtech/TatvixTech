import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                bg: "var(--bg)",
                surface: "var(--surface)",
                glass: "var(--glass)",
                border: "var(--border)",
                primary: "var(--primary)",
                accent: "var(--accent)",
                purple: "var(--purple)",
                orange: "var(--orange)",
                text: "var(--text)",
                muted: "var(--muted)",
                white: "rgb(var(--white-rgb) / <alpha-value>)",
                black: "rgb(var(--black-rgb) / <alpha-value>)",
            },
            fontFamily: {
                sans: ["var(--font-inter)", "sans-serif"],
                heading: ["var(--font-space-grotesk)", "sans-serif"],
                mono: ["var(--font-jetbrains-mono)", "monospace"],
            },
            borderRadius: {
                "2xl": "1rem",
                "3xl": "1.5rem",
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
            },
            animation: {
                "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
                "spin-slow": "spin 20s linear infinite",
            },
        },
    },
    plugins: [],
};
export default config;
