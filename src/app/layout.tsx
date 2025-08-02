import React from 'react';
import '../styles/index.css';
import { GoogleAnalytics } from '@/components/analytics/GoogleAnalytics';

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ff8400',
};

export const metadata = {
  title: 'Solar Concepts - Arizona Premier Solar Tube & Skylight Installation',
  description: 'Solar Concepts is Arizona\'s premier dealer for solar tubes, skylights, attic fans, and roofing solutions. 40 years of master craftsmanship and certified installation expertise.',
  keywords: 'solar tubes Arizona, skylights installation, attic fans, roofing services, natural lighting, solar concepts, Arizona premier dealer, master carpenter, master roofer, certified installer',
  authors: [{ name: 'Solar Concepts' }],
  creator: 'Solar Concepts',
  publisher: 'Solar Concepts',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://solarconceptsaz.com',
    siteName: 'Solar Concepts AZ',
    title: 'Solar Concepts AZ - Arizona Premier Solar Tube & Skylight Installation',
    description: 'Arizona\'s premier dealer for solar tubes, skylights, attic fans, and roofing solutions. 40 years of master craftsmanship.',
    images: [
      {
        url: '/images/solar-concepts-og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Solar Concepts AZ - Arizona Premier Solar Dealer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Solar Concepts - Arizona Premier Solar Tube & Skylight Installation',
    description: 'Arizona\'s premier dealer for solar tubes, skylights, attic fans, and roofing solutions. 40 years of master craftsmanship.',
    images: ['/images/solar-concepts-og-image.jpg'],
    creator: '@SolarConcepts',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', type: 'image/x-icon' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
  alternates: {
    canonical: 'https://solarconceptsaz.com',
  },
};

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
        {children}
      </body>
    </html>
  );
}