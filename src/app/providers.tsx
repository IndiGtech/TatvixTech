"use client";

import { ContactModalProvider } from "@/context/ContactModalContext";
import { ThemeProvider } from "next-themes";
import { ReactNode } from "react";

export function Providers({ children }: { children: ReactNode }) {
    return (
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
            <ContactModalProvider>
                {children}
            </ContactModalProvider>
        </ThemeProvider>
    );
}
