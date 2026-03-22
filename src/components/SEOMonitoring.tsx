"use client";

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { trackPageView } from './GoogleAnalytics';

export default function SEOMonitoring() {
  const pathname = usePathname();

  useEffect(() => {
    // Track page views for analytics
    trackPageView(window.location.href, document.title);
    
    // Monitor Core Web Vitals
    if ('web-vital' in window) {
      import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
        getCLS(console.log);
        getFID(console.log);
        getFCP(console.log);
        getLCP(console.log);
        getTTFB(console.log);
      });
    }

    // Schema.org validation in development
    if (process.env.NODE_ENV === 'development') {
      const structuredDataElements = document.querySelectorAll('script[type="application/ld+json"]');
      structuredDataElements.forEach((element, index) => {
        try {
          const data = JSON.parse(element.textContent || '');
          console.log(`Structured Data ${index + 1}:`, data);
        } catch (error) {
          console.error(`Invalid JSON-LD at index ${index + 1}:`, error);
        }
      });
    }

    // Check for SEO issues
    const performSEOCheck = () => {
      const issues = [];
      
      // Check title
      const title = document.title;
      if (!title) issues.push('Missing page title');
      if (title.length > 60) issues.push('Title too long (>60 characters)');
      if (title.length < 30) issues.push('Title too short (<30 characters)');
      
      // Check meta description
      const metaDescription = document.querySelector('meta[name="description"]') as HTMLMetaElement;
      if (!metaDescription) {
        issues.push('Missing meta description');
      } else {
        const descLength = metaDescription.content.length;
        if (descLength > 160) issues.push('Meta description too long (>160 characters)');
        if (descLength < 120) issues.push('Meta description too short (<120 characters)');
      }
      
      // Check canonical URL
      const canonical = document.querySelector('link[rel="canonical"]');
      if (!canonical) issues.push('Missing canonical URL');
      
      // Check Open Graph tags
      const ogTitle = document.querySelector('meta[property="og:title"]');
      const ogDescription = document.querySelector('meta[property="og:description"]');
      const ogImage = document.querySelector('meta[property="og:image"]');
      if (!ogTitle) issues.push('Missing og:title');
      if (!ogDescription) issues.push('Missing og:description');
      if (!ogImage) issues.push('Missing og:image');
      
      // Check headings structure
      const h1s = document.querySelectorAll('h1');
      if (h1s.length === 0) issues.push('Missing H1 tag');
      if (h1s.length > 1) issues.push('Multiple H1 tags found');
      
      // Log issues in development
      if (process.env.NODE_ENV === 'development' && issues.length > 0) {
        console.warn('SEO Issues found:', issues);
      }
    };

    // Run SEO check after page load
    setTimeout(performSEOCheck, 1000);
  }, [pathname]);

  return null;
}

// Utility function to track custom events
export const trackSEOEvent = (action: string, category: string = 'SEO', label?: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      custom_parameter_1: window.location.pathname,
    });
  }
};

// Function to report Core Web Vitals to analytics
export const reportWebVitals = (metric: any) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', metric.name, {
      event_category: 'Web Vitals',
      value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
      event_label: metric.id,
      non_interaction: true,
    });
  }
};