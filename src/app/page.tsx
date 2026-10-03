import { Suspense } from "react";
import dynamic from "next/dynamic";
import AnimatedBackground from "@/components/AnimatedBackground";
import HashScroll from "@/components/HashScroll";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StructuredData, {
  getFAQSchema,
  getLocalBusinessSchema,
  getWebsiteSchema,
  getBreadcrumbSchema
} from "@/components/StructuredData";
import { faqData } from "@/data/faqData";
import { SITE_URL } from "@/lib/site";

// Below-the-fold, animation-heavy sections are code-split so their Framer Motion
// payload is not in the initial bundle. They still render on the server (no
// ssr:false) so content stays crawlable; only the client JS is deferred.
const ProductEcosystem = dynamic(() => import("@/components/ProductEcosystem"));
const ServicesGrid = dynamic(() => import("@/components/ServicesGrid"));
const IndustriesSection = dynamic(() => import("@/components/IndustriesSection"));
const TrustSection = dynamic(() => import("@/components/TrustSection"));
const BlogPreview = dynamic(() => import("@/components/BlogPreview"));
const AboutSection = dynamic(() => import("@/components/AboutSection"));
const CTASection = dynamic(() => import("@/components/CTASection"));
const Footer = dynamic(() => import("@/components/Footer"));

function SectionFallback() {
  return <div className="w-full min-h-[40vh]" aria-hidden />;
}

export default function Home() {
  const breadcrumbItems = [
    { name: "Home", url: SITE_URL }
  ];

  return (
    <main className="relative min-h-screen w-full max-w-full flex flex-col items-center overflow-x-hidden">
      <StructuredData data={getFAQSchema(faqData)} />
      <StructuredData data={getLocalBusinessSchema()} />
      <StructuredData data={getWebsiteSchema()} />
      <StructuredData data={getBreadcrumbSchema(breadcrumbItems)} />
      <Navbar />
      <HashScroll />
      <AnimatedBackground />

      {/* Hero is eager — it drives LCP. */}
      <Hero />

      <Suspense fallback={<SectionFallback />}>
        <ProductEcosystem />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <ServicesGrid />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <IndustriesSection />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <TrustSection />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <BlogPreview />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <AboutSection />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <CTASection />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <Footer />
      </Suspense>
    </main>
  );
}
