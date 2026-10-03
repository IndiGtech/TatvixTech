import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckCircle2, AlertTriangle, ArrowRight } from "lucide-react";
import AnimatedBackground from "@/components/AnimatedBackground";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";
import StructuredData, {
    getServiceSchema,
    getFAQSchema,
    getBreadcrumbSchema,
} from "@/components/StructuredData";
import { SITE_URL } from "@/lib/site";
import {
    getAllIndustrySlugs,
    getIndustryBySlug,
} from "@/data/industries";

type PageProps = {
    params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
    return getAllIndustrySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
    params,
}: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const industry = getIndustryBySlug(slug);
    if (!industry) {
        return { title: { absolute: "Industry not found | Tatvix" } };
    }
    const url = `${SITE_URL}/industries/${industry.slug}`;
    return {
        title: { absolute: industry.seoTitle },
        description: industry.metaDescription,
        keywords: industry.keywords,
        alternates: { canonical: url },
        openGraph: {
            title: industry.seoTitle,
            description: industry.metaDescription,
            type: "website",
            url,
        },
        twitter: {
            card: "summary_large_image",
            title: industry.seoTitle,
            description: industry.metaDescription,
        },
    };
}

export default async function IndustryDetailPage({ params }: PageProps) {
    const { slug } = await params;
    const industry = getIndustryBySlug(slug);
    if (!industry) {
        notFound();
    }

    const url = `${SITE_URL}/industries/${industry.slug}`;
    const Icon = industry.icon;

    const breadcrumbItems = [
        { name: "Home", url: SITE_URL },
        { name: "Industries", url: `${SITE_URL}/industries` },
        { name: industry.name, url },
    ];

    // Pair challenges with the solutions that address them for a comparison table.
    const rows = industry.challenges.map((challenge, i) => ({
        challenge,
        solution: industry.solutions[i] ?? "",
    }));

    return (
        <main className="relative min-h-screen w-full flex flex-col items-center overflow-x-hidden">
            <StructuredData data={getBreadcrumbSchema(breadcrumbItems)} />
            <StructuredData
                data={getServiceSchema(
                    `Embedded development for ${industry.name}`,
                    industry.metaDescription,
                    url
                )}
            />
            <StructuredData data={getFAQSchema(industry.faqs)} />

            <Navbar />
            <AnimatedBackground />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-32 pb-24 w-full">
                <Breadcrumbs
                    items={[
                        { label: "Industries", href: "/industries" },
                        { label: industry.name },
                    ]}
                />

                {/* Hero: H1 = the industry */}
                <header className="mb-12 max-w-3xl">
                    <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 bg-slate-100/80 dark:bg-white/8 border border-slate-300/60 dark:border-white/15 text-slate-800 dark:text-slate-300">
                        <Icon className="w-8 h-8" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-heading font-bold text-slate-800 dark:text-white mb-6">
                        Embedded & IoT Development for {industry.name}
                    </h1>
                    {/* Definition block — self-contained 40–60 word answer */}
                    <p className="text-xl text-slate-700 dark:text-muted leading-relaxed">
                        {industry.definition}
                    </p>
                </header>

                {/* Key stats */}
                {industry.stats.length > 0 && (
                    <section className="mb-16 grid grid-cols-1 sm:grid-cols-3 gap-4" aria-label="Key facts">
                        {industry.stats.map((stat) => (
                            <div
                                key={stat.label}
                                className="bg-white/95 dark:bg-white/12 border border-white/70 dark:border-white/20 rounded-2xl p-6 backdrop-blur-xl shadow-xl shadow-slate-200/30 dark:shadow-none"
                            >
                                <div className="text-sm font-bold text-slate-500 dark:text-muted uppercase tracking-wider mb-1">
                                    {stat.label}
                                </div>
                                <div className="text-lg font-semibold text-slate-900 dark:text-white">
                                    {stat.value}
                                </div>
                            </div>
                        ))}
                    </section>
                )}

                {/* Challenges vs solutions — comparison table */}
                <section className="mb-16 overflow-x-auto">
                    <h2 className="text-2xl font-heading font-bold text-slate-800 dark:text-white mb-6">
                        {industry.name} engineering challenges and how we solve them
                    </h2>
                    <table className="w-full text-left border-collapse bg-white/95 dark:bg-white/12 border border-white/70 dark:border-white/20 rounded-2xl overflow-hidden backdrop-blur-xl shadow-xl shadow-slate-200/30 dark:shadow-none">
                        <thead>
                            <tr className="border-b border-slate-200/60 dark:border-white/10">
                                <th scope="col" className="p-4 font-bold text-slate-800 dark:text-white w-1/2">
                                    <span className="inline-flex items-center gap-2">
                                        <AlertTriangle className="w-4 h-4 text-amber-500" />
                                        Challenge
                                    </span>
                                </th>
                                <th scope="col" className="p-4 font-bold text-slate-800 dark:text-white w-1/2">
                                    <span className="inline-flex items-center gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                                        Tatvix approach
                                    </span>
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-200/60 dark:divide-white/10">
                            {rows.map((row) => (
                                <tr key={row.challenge}>
                                    <td className="p-4 text-slate-700 dark:text-muted align-top">
                                        {row.challenge}
                                    </td>
                                    <td className="p-4 text-slate-900 dark:text-white align-top">
                                        {row.solution}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </section>

                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
                    {/* Software components */}
                    <section>
                        <h2 className="text-2xl font-heading font-bold text-slate-800 dark:text-white mb-6">
                            Software we build for {industry.name.toLowerCase()}
                        </h2>
                        <ul className="grid grid-cols-1 gap-3">
                            {industry.softwareComponents.map((item) => (
                                <li
                                    key={item}
                                    className="flex items-center text-slate-800 dark:text-white"
                                >
                                    <CheckCircle2 className="w-5 h-5 mr-2 text-emerald-500 flex-shrink-0" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </section>

                    {/* Standards */}
                    <section>
                        <h2 className="text-2xl font-heading font-bold text-slate-800 dark:text-white mb-6">
                            Standards & compliance
                        </h2>
                        <div className="flex flex-wrap gap-2">
                            {industry.standards.map((std) => (
                                <span
                                    key={std}
                                    className="px-3 py-1.5 bg-white/40 dark:bg-white/10 border border-white/50 dark:border-white/10 rounded-full text-sm text-slate-800 dark:text-white"
                                >
                                    {std}
                                </span>
                            ))}
                        </div>
                    </section>
                </div>

                {/* FAQ block */}
                <section className="mb-16 max-w-3xl">
                    <h2 className="text-2xl font-heading font-bold text-slate-800 dark:text-white mb-6">
                        Frequently asked questions
                    </h2>
                    <div className="space-y-4">
                        {industry.faqs.map((faq) => (
                            <div
                                key={faq.question}
                                className="bg-white/95 dark:bg-white/12 border border-white/70 dark:border-white/20 rounded-2xl p-6 backdrop-blur-xl shadow-xl shadow-slate-200/30 dark:shadow-none"
                            >
                                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                                    {faq.question}
                                </h3>
                                <p className="text-slate-700 dark:text-muted leading-relaxed">
                                    {faq.answer}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>

                <nav aria-label="Other industries" className="mb-4">
                    <Link
                        href="/industries"
                        className="inline-flex items-center text-sm font-medium text-primary hover:underline"
                    >
                        Explore all industries
                        <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                </nav>
            </div>

            <CTASection />
            <Footer />
        </main>
    );
}
