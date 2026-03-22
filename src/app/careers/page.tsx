import { Metadata } from "next";
import AnimatedBackground from "@/components/AnimatedBackground";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
    title: "Careers | Join the Engineering Team",
    description: "Explore career opportunities at Tatvix. We offer a great work-life balance, cutting-edge projects, and a culture of engineering excellence.",
    alternates: {
        canonical: "/careers",
    }
};

export default function CareersPage() {
    return (
        <main className="relative min-h-screen w-full flex flex-col items-center overflow-x-hidden">
            <Navbar />
            <AnimatedBackground />
            
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-32 pb-24 w-full">
                <Breadcrumbs items={[{ label: "Careers", href: "/careers" }]} />

                <div className="mb-16 max-w-3xl">
                    <h1 className="text-4xl md:text-6xl font-heading font-bold text-slate-800 dark:text-white mb-6">
                        Join Our Team
                    </h1>
                    <p className="text-xl text-slate-700 dark:text-muted leading-relaxed">
                        We are a team of passionate engineers building the next generation of embedded systems and IoT devices. At Tatvix, we value deep technical expertise, continuous learning, and a healthy work-life balance.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 mb-20">
                    <div className="bg-white/95 dark:bg-white/12 border border-white/70 dark:border-white/20 p-8 rounded-2xl backdrop-blur-xl shadow-xl shadow-slate-200/30 dark:shadow-none">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">Why Tatvix?</h2>
                        <ul className="space-y-4 text-slate-700 dark:text-muted">
                            <li className="flex items-start gap-3">
                                <span className="text-primary mt-1">✓</span>
                                <span><strong className="text-slate-800 dark:text-white">Cutting-edge Projects:</strong> Work on diverse projects from medical wearables to industrial automation.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-primary mt-1">✓</span>
                                <span><strong className="text-slate-800 dark:text-white">Engineering Excellence:</strong> Collaborate with senior engineers who care deeply about code quality and robust hardware design.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-primary mt-1">✓</span>
                                <span><strong className="text-slate-800 dark:text-white">Work-Life Balance:</strong> We believe in sustainable pacing. No heroic overtime, just consistent, high-quality output.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-primary mt-1">✓</span>
                                <span><strong className="text-slate-800 dark:text-white">Continuous Learning:</strong> Access to a fully equipped hardware lab and a culture that encourages experimentation.</span>
                            </li>
                        </ul>
                    </div>

                    <div className="flex flex-col justify-center bg-gradient-to-br from-primary/30 to-primary/10 border border-primary/40 p-8 rounded-2xl text-center backdrop-blur-lg shadow-lg shadow-primary/10">
                        <div className="w-16 h-16 bg-primary/20 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
                            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                            </svg>
                        </div>
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">Current Openings</h2>
                        <div className="inline-block bg-white/60 dark:bg-white/15 border border-white/60 dark:border-white/25 rounded-lg py-3 px-6 mx-auto backdrop-blur-md shadow-sm">
                            <p className="text-slate-800 dark:text-white font-medium">Currently, we are not hiring.</p>
                        </div>
                        <p className="text-slate-700 dark:text-muted mt-6 text-sm">
                            We're fully staffed at the moment, but we're always happy to connect with talented engineers. Feel free to follow us on LinkedIn for future updates.
                        </p>
                    </div>
                </div>
            </div>
            
            <CTASection />
            <Footer />
        </main>
    );
}
