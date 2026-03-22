import Head from "next/head";
import { SITE_URL } from "@/lib/site";

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string[];
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  noindex?: boolean;
  structuredData?: any;
}

export default function SEOHead({
  title,
  description,
  keywords = [],
  canonical,
  ogImage,
  ogType = "website",
  noindex = false,
  structuredData
}: SEOHeadProps) {
  const fullTitle = title ? `${title} | Tatvix Technologies` : "Tatvix Technologies - Embedded Systems & IoT Development";
  const metaDescription = description || "Leading embedded systems and IoT development company specializing in hardware design, firmware development, and complete product solutions.";
  const canonicalUrl = canonical ? `${SITE_URL}${canonical}` : SITE_URL;
  const imageUrl = ogImage || `${SITE_URL}/og-image.jpg`;

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
      {keywords.length > 0 && <meta name="keywords" content={keywords.join(", ")} />}
      
      {noindex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      )}
      
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Tatvix Technologies" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={imageUrl} />
      <meta name="twitter:site" content="@tatvix" />
      <meta name="twitter:creator" content="@tatvix" />
      
      {/* Additional SEO tags */}
      <meta name="author" content="Tatvix Technologies" />
      <meta name="publisher" content="Tatvix Technologies" />
      <meta name="copyright" content="Tatvix Technologies" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="distribution" content="web" />
      <meta name="rating" content="general" />
      
      {/* Geo tags for local SEO */}
      <meta name="geo.region" content="US" />
      <meta name="geo.placename" content="United States" />
      
      {/* Structured Data */}
      {structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      )}
    </Head>
  );
}