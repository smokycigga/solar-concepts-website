import React from 'react';
import '../styles/index.css';
import { GoogleAnalytics } from '@/components/analytics/GoogleAnalytics';
import { PerformanceMonitoring } from '@/components/analytics/PerformanceMonitoring';
import { generateAdvancedMetadata, generateLocalBusinessSchema, generateWebsiteSchema } from '@/components/seo/AdvancedSEO';

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ff8400' },
    { media: '(prefers-color-scheme: dark)', color: '#ff8400' },
  ],
  colorScheme: 'light',
};

export const metadata = generateAdvancedMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Structured Data for Local Business */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Solar Concepts AZ",
              "description": "Arizona's premier dealer for solar tubes, skylights, attic fans, and roofing solutions. 40 years of master craftsmanship.",
              "url": "https://solarconceptsaz.com",
              "telephone": "(480) 968-1777",
              "faxNumber": "(480) 968-0991",
              "email": "sales@solarconceptsaz.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "916 S 52nd Suite # 100",
                "addressLocality": "Tempe",
                "addressRegion": "Arizona",
                "postalCode": "85281",
                "addressCountry": "US"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "33.4147",
                "longitude": "-111.9731"
              },
              "openingHours": "Mo-Fr 08:00-17:00",
              "priceRange": "$$",
              "serviceArea": {
                "@type": "State",
                "name": "Arizona"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Solar & Roofing Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Solar Tube Installation",
                      "description": "Professional solar tube installation for natural lighting"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Skylight Installation", 
                      "description": "Expert skylight installation and repair services"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Attic Fan Installation",
                      "description": "Attic ventilation solutions and fan installation"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Roofing Services",
                      "description": "Complete roofing solutions including tile, shingles, and shake wood"
                    }
                  }
                ]
              },
              "foundingDate": "1984",
              "slogan": "Arizona Premier Dealer for Natural Lighting Solutions"
            })
          }}
        />
      </head>
      <body>
        <GoogleAnalytics measurementId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || 'G-XXXXXXXXXX'} />
        <PerformanceMonitoring />
        {children}
      </body>
    </html>
  );
}