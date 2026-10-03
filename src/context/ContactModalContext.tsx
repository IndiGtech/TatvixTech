"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import dynamic from "next/dynamic";

// The modal (271 lines + Framer Motion) is only loaded when first opened, so its
// JS stays out of the initial bundle. Once mounted it persists so AnimatePresence
// exit animations still play.
const ContactModal = dynamic(() => import("@/components/ContactModal"), {
    ssr: false,
});

interface ContactModalContextType {
    openContactModal: () => void;
    closeContactModal: () => void;
    isContactModalOpen: boolean;
}

const ContactModalContext = createContext<ContactModalContextType | undefined>(undefined);

export function ContactModalProvider({ children }: { children: ReactNode }) {
    const [isOpen, setIsOpen] = useState(false);
    const [hasOpened, setHasOpened] = useState(false);

    const openContactModal = () => {
        setHasOpened(true);
        setIsOpen(true);
    };
    const closeContactModal = () => setIsOpen(false);

    return (
        <ContactModalContext.Provider value={{ openContactModal, closeContactModal, isContactModalOpen: isOpen }}>
            {children}
            {hasOpened && <ContactModal isOpen={isOpen} onClose={closeContactModal} />}
        </ContactModalContext.Provider>
    );
}

export function useContactModal() {
    const context = useContext(ContactModalContext);
    if (context === undefined) {
        throw new Error("useContactModal must be used within a ContactModalProvider");
    }
    return context;
}
