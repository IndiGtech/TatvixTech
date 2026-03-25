import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import "../styles/accessibility.css";
import { Providers } from "./providers";
import { SITE_URL, SEO_CONFIG } from "@/lib/site";
import StructuredData, { getOrganizationSchema } from "@/components/StructuredData";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import SEOMonitoring from "@/components/SEOMonitoring";
// Import icon registry to prevent tree-shaking
import "@/lib/iconRegistry";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0a' },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SEO_CONFIG.defaultTitle,
    template: SEO_CONFIG.titleTemplate,
  },
  description: SEO_CONFIG.siteDescription,
  keywords: SEO_CONFIG.keywords,
  authors: [{ name: SEO_CONFIG.author }],
  creator: SEO_CONFIG.creator,
  publisher: SEO_CONFIG.publisher,
  robots: SEO_CONFIG.robots,
  verification: {
    google: SEO_CONFIG.googleSiteVerification,
    other: {
      'msvalidate.01': SEO_CONFIG.bingSiteVerification || '',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    siteName: SEO_CONFIG.siteName,
    title: SEO_CONFIG.defaultTitle,
    description: SEO_CONFIG.siteDescription,
    images: [
      {
        url: `${SITE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'Tatvix Technologies - Embedded Systems & IoT Development',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: SEO_CONFIG.defaultTitle,
    description: SEO_CONFIG.siteDescription,
    images: [`${SITE_URL}/og-image.jpg`],
    creator: '@tatvix',
    site: '@tatvix',
  },
  alternates: {
    canonical: SITE_URL,
  },
  category: 'Technology',
  classification: 'Business',
  referrer: 'origin-when-cross-origin',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} font-sans bg-bg text-text antialiased selection:bg-primary/30 selection:text-text`}
      >
        <GoogleAnalytics />
        <SEOMonitoring />
        <StructuredData data={getOrganizationSchema()} />
        <div className="noise-overlay" />
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
