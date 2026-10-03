"use client";

import Breadcrumbs from "@/components/Breadcrumbs";
import IndustryShowcase from "@/components/IndustryShowcase";
import SoftwareTestimonials from "@/components/SoftwareTestimonials";
import SoftwareCaseStudy from "@/components/SoftwareCaseStudy";
import { industries as industriesData } from "@/data/industries";

export default function IndustriesClientWrapper() {
    return (
        <main className="min-h-screen pt-32 pb-24 bg-bg relative">
            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-20 pointer-events-none" />
            
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <Breadcrumbs items={[{ label: "Industries", href: "/industries" }]} />

                <div className="mb-24 max-w-3xl">
                    <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6">
                        Domain-Specific Expertise
                    </h1>
                    <p className="text-xl text-muted leading-relaxed">
                        Different industries demand vastly different engineering approaches. We apply deep domain knowledge to navigate regulatory landscapes and technical constraints unique to your sector.
                    </p>
                </div>

                <div className="space-y-32">
                    {industriesData.map((industry, index) => {
                        const Icon = industry.icon;
                        
                        return (
                            <IndustryShowcase
                                key={industry.id}
                                id={industry.id}
                                name={industry.name}
                                description={industry.description}
                                icon={Icon}
                                image={industry.image}
                                challenges={industry.challenges}
                                solutions={industry.solutions}
                                softwareComponents={industry.softwareComponents}
                                standards={industry.standards}
                                isLeft={index % 2 === 0}
                                href={`/industries/${industry.slug}`}
                            />
                        );
                    })}
                </div>

                <div className="mt-32">
                    <SoftwareCaseStudy />
                </div>

                <div className="mt-32">
                    <SoftwareTestimonials />
                </div>
            </div>
        </main>
    );
}
