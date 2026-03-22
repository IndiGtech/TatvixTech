import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedBackground from "@/components/AnimatedBackground";

export const metadata: Metadata = {
    description:
        "Embedded systems technical insights—firmware, ESP32 connectivity, IoT architecture, and product-grade practices from Tatvix.",
    openGraph: {
        title: "Embedded Systems Technical Insights | Tatvix",
        description:
            "Deep-dive articles on reliable firmware, scalable IoT, and smart consumer device development.",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Embedded Systems Technical Insights | Tatvix",
        description:
            "Deep-dive articles on reliable firmware, scalable IoT, and smart consumer device development.",
    },
};

export default function InsightsLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="relative min-h-screen w-full overflow-x-hidden">
            <Navbar />
            <AnimatedBackground />
            <div className="relative z-10 flex min-h-screen flex-col pt-24">
                <main className="flex-1">{children}</main>
                <Footer />
            </div>
        </div>
    );
}
