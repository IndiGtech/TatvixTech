import AnimatedBackground from "@/components/AnimatedBackground";
import HashScroll from "@/components/HashScroll";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProductEcosystem from "@/components/ProductEcosystem";
import ServicesGrid from "@/components/ServicesGrid";
import IndustriesSection from "@/components/IndustriesSection";
import AboutSection from "@/components/AboutSection";
import TrustSection from "@/components/TrustSection";
import BlogPreview from "@/components/BlogPreview";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import StructuredData, { 
  getFAQSchema, 
  getLocalBusinessSchema, 
  getWebsiteSchema,
  getBreadcrumbSchema 
} from "@/components/StructuredData";
import CertificationBadges from "@/components/CertificationBadges";
import { faqData } from "@/data/faqData";
import { SITE_URL } from "@/lib/site";

export default function Home() {
  const breadcrumbItems = [
    { name: "Home", url: SITE_URL }
  ];

  return (
    <main className="relative min-h-screen w-full flex flex-col items-center overflow-x-hidden">
      <StructuredData data={getFAQSchema(faqData)} />
      <StructuredData data={getLocalBusinessSchema()} />
      <StructuredData data={getWebsiteSchema()} />
      <StructuredData data={getBreadcrumbSchema(breadcrumbItems)} />
      <Navbar />
      <HashScroll />
      <AnimatedBackground />

      <Hero />
      <ProductEcosystem />
      <ServicesGrid />
      <IndustriesSection />
      <TrustSection />
      <BlogPreview />
      <AboutSection />
      <CTASection />
      <Footer />

    </main>
  );
}
