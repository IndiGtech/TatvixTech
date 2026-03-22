"use client";

import StatsTicker from "./StatsTicker";
import TechBadges from "./TechBadges";
import TestimonialCarousel from "./TestimonialCarousel";

export default function TrustSection() {
    return (
        <section className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 dark:text-white mb-4">
                        Trusted by Innovators
                    </h2>
                    <p className="text-lg text-slate-700 dark:text-muted max-w-2xl mx-auto">
                        Concrete delivery metrics, client validation, and the
                        kind of cross-domain work you expect from a serious
                        embedded partner.
                    </p>
                </div>

                <StatsTicker />

                <div className="mt-20 md:mt-24">
                    <TestimonialCarousel />
                </div>

                <div className="mt-20 md:mt-24">
                    <p className="text-center text-sm font-bold text-slate-800 dark:text-muted uppercase tracking-widest mb-8">
                        Built with Technologies from
                    </p>
                    <TechBadges />
                </div>
            </div>
        </section>
    );
}
