import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Zap, CheckCircle2, ArrowRight } from "lucide-react";
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
    getAllServiceSlugs,
    getServiceBySlug,
} from "@/data/services";

type PageProps = {
    params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
    return getAllServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
    params,
}: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const service = getServiceBySlug(slug);
    if (!service) {
        return { title: { absolute: "Service not found | Tatvix" } };
    }
    const url = `${SITE_URL}/services/${service.slug}`;
    return {
        title: { absolute: service.seoTitle },
        description: service.metaDescription,
        keywords: service.keywords,
        alternates: { canonical: url },
        openGraph: {
            title: service.seoTitle,
            description: service.metaDescription,
            type: "website",
            url,
        },
        twitter: {
            card: "summary_large_image",
            title: service.seoTitle,
            description: service.metaDescription,
        },
    };
}

export default async function ServiceDetailPage({ params }: PageProps) {
    const { slug } = await params;
    const service = getServiceBySlug(slug);
    if (!service) {
        notFound();
    }

    const url = `${SITE_URL}/services/${service.slug}`;
    const Icon = service.icon;

    const breadcrumbItems = [
        { name: "Home", url: SITE_URL },
        { name: "Services", url: `${SITE_URL}/services` },
        { name: service.title, url },
    ];

    return (
        <main className="relative min-h-screen w-full flex flex-col items-center overflow-x-hidden">
            <StructuredData data={getBreadcrumbSchema(breadcrumbItems)} />
            <StructuredData
                data={getServiceSchema(service.title, service.description, url)}
            />
            <StructuredData data={getFAQSchema(service.faqs)} />

            <Navbar />
            <AnimatedBackground />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-32 pb-24 w-full">
                <Breadcrumbs
                    items={[
                        { label: "Services", href: "/services" },
                        { label: service.title },
                    ]}
                />

                {/* Hero: H1 = the service */}
                <header className="mb-12 max-w-3xl">
                    <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 bg-slate-100/80 dark:bg-white/8 border border-slate-300/60 dark:border-white/15 text-slate-800 dark:text-slate-300">
                        <Icon className="w-8 h-8" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-heading font-bold text-slate-800 dark:text-white mb-6">
                        {service.title}
                    </h1>
                    {/* Definition block — self-contained 40–60 word answer */}
                    <p className="text-xl text-slate-700 dark:text-muted leading-relaxed">
                        {service.definition}
                    </p>
                </header>

                {/* Key stats */}
                {service.stats.length > 0 && (
                    <section className="mb-16 grid grid-cols-1 sm:grid-cols-3 gap-4" aria-label="Key facts">
                        {service.stats.map((stat) => (
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

                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
                    {/* How we deliver — numbered steps */}
                    <section>
                        <h2 className="text-2xl font-heading font-bold text-slate-800 dark:text-white mb-6 flex items-center">
                            <Zap className="w-6 h-6 mr-2 text-primary" />
                            How we deliver {service.title.toLowerCase()}
                        </h2>
                        <ol className="space-y-3">
                            {service.processSteps.map((step, i) => (
                                <li
                                    key={step}
                                    className="flex items-start text-slate-700 dark:text-muted"
                                >
                                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-slate-200 dark:bg-slate-700 text-slate-900 dark:text-slate-200 border border-slate-300 dark:border-slate-600 flex items-center justify-center text-xs font-bold mr-3 mt-0.5">
                                        {i + 1}
                                    </span>
                                    {step}
                                </li>
                            ))}
                        </ol>
                    </section>

                    {/* Deliverables */}
                    <section>
                        <h2 className="text-2xl font-heading font-bold text-slate-800 dark:text-white mb-6">
                            What you receive
                        </h2>
                        <ul className="grid grid-cols-1 gap-3">
                            {service.deliverables.map((item) => (
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
                </div>

                {/* Spec / comparison table */}
                <section className="mb-16 overflow-x-auto">
                    <h2 className="text-2xl font-heading font-bold text-slate-800 dark:text-white mb-6">
                        {service.title} at a glance
                    </h2>
                    <table className="w-full text-left border-collapse bg-white/95 dark:bg-white/12 border border-white/70 dark:border-white/20 rounded-2xl overflow-hidden backdrop-blur-xl shadow-xl shadow-slate-200/30 dark:shadow-none">
                        <tbody className="divide-y divide-slate-200/60 dark:divide-white/10">
                            <tr>
                                <th scope="row" className="p-4 font-semibold text-slate-700 dark:text-muted align-top w-1/3">
                                    Typical timeline
                                </th>
                                <td className="p-4 text-slate-900 dark:text-white">
                                    {service.timeline}
                                </td>
                            </tr>
                            <tr>
                                <th scope="row" className="p-4 font-semibold text-slate-700 dark:text-muted align-top">
                                    Core technologies
                                </th>
                                <td className="p-4 text-slate-900 dark:text-white">
                                    <div className="flex flex-wrap gap-2">
                                        {service.technologies.map((tech) => (
                                            <span
                                                key={tech}
                                                className="px-3 py-1.5 bg-white/40 dark:bg-white/10 border border-white/50 dark:border-white/10 rounded-full text-xs"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row" className="p-4 font-semibold text-slate-700 dark:text-muted align-top">
                                    Key deliverables
                                </th>
                                <td className="p-4 text-slate-900 dark:text-white">
                                    {service.deliverables.join(", ")}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </section>

                {/* FAQ block */}
                <section className="mb-16 max-w-3xl">
                    <h2 className="text-2xl font-heading font-bold text-slate-800 dark:text-white mb-6">
                        Frequently asked questions
                    </h2>
                    <div className="space-y-4">
                        {service.faqs.map((faq) => (
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

                {/* Related services */}
                <nav aria-label="Other services" className="mb-4">
                    <Link
                        href="/services"
                        className="inline-flex items-center text-sm font-medium text-primary hover:underline"
                    >
                        Explore all services
                        <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                </nav>
            </div>

            <CTASection />
            <Footer />
        </main>
    );
}
