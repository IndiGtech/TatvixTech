import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import ProcessTimeline from "@/components/ProcessTimeline";
import TechnologyStack from "@/components/TechnologyStack";
import ScrollParallaxBackground from "@/components/ScrollParallaxBackground";

export const metadata: Metadata = {
    title: "Embedded Product Development Process | Concept to Production in 12-16 Weeks",
    description: "Learn about our rigorous engineering process for embedded systems and IoT, from discovery to validation and mass production.",
    alternates: {
        canonical: "/process",
    }
};

export default function ProcessPage() {
    return (
        <main className="min-h-screen pt-32 pb-24 bg-bg relative overflow-hidden">
            <ScrollParallaxBackground />
            
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <Breadcrumbs items={[{ label: "Process", href: "/process" }]} />

                <div className="mb-16 max-w-3xl">
                    <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6">
                        A Methodical Approach to Engineering
                    </h1>
                    <p className="text-xl text-muted leading-relaxed">
                        Building hardware and embedded software is unforgiving. We minimize risk and accelerate time-to-market through a transparent, iterative, and deeply disciplined engineering process.
                    </p>
                </div>

                <ProcessTimeline />
                
                <div className="my-16 border-t border-white/10" />

                <TechnologyStack />
            </div>
        </main>
    );
}
