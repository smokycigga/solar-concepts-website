import { Metadata } from 'next';

interface AdvancedSEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  canonicalUrl?: string;
  ogImage?: string;
  structuredData?: any;
  noIndex?: boolean;
  alternateLanguages?: { [key: string]: string };
}

export function generateAdvancedMetadata({
  title = "Solar Concepts AZ - Arizona Premier Solar Tube & Skylight Installation",
  description = "Arizona's premier dealer for solar tubes, skylights, attic fans, and roofing solutions. 40 years of master craftsmanship and certified installation expertise. Transform your home with natural lighting solutions.",
  keywords = [
    "solar tubes Arizona",
    "skylights installation Phoenix",
    "attic fans Tempe", 
    "roofing services Arizona",
    "natural lighting solutions",
    "solar concepts AZ",
    "Arizona premier dealer",
    "master carpenter Arizona",
    "certified installer",
    "energy efficient lighting",
    "home improvement Arizona",
    "solar tube installation cost",
    "skylight repair Phoenix",
    "attic ventilation solutions"
  ],
  canonicalUrl = "https://solarconceptsaz.com",
  ogImage = "/images/solar-concepts-og-image.jpg",
  structuredData,
  noIndex = false,
  alternateLanguages = {}
}: AdvancedSEOProps = {}): Metadata {
  
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://solarconceptsaz.com';
  const fullCanonicalUrl = canonicalUrl.startsWith('http') ? canonicalUrl : `${baseUrl}${canonicalUrl}`;
  const fullOgImage = ogImage.startsWith('http') ? ogImage : `${baseUrl}${ogImage}`;

  return {
    title,
    description,
    keywords: keywords.join(', '),
    authors: [{ name: 'Solar Concepts AZ', url: baseUrl }],
    creator: 'Solar Concepts AZ',
    publisher: 'Solar Concepts AZ',
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: fullCanonicalUrl,
      languages: alternateLanguages,
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      nocache: false,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        noimageindex: false,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: fullCanonicalUrl,
      siteName: 'Solar Concepts AZ',
      title,
      description,
      images: [
        {
          url: fullOgImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [fullOgImage],
      creator: '@SolarConceptsAZ',
    },
    verification: {
      google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
      yandex: process.env.NEXT_PUBLIC_YANDEX_VERIFICATION,
      yahoo: process.env.NEXT_PUBLIC_YAHOO_VERIFICATION,
      other: {
        'msvalidate.01': process.env.NEXT_PUBLIC_BING_VERIFICATION || '',
      },
    },
    category: 'Home Improvement',
    classification: 'Solar Installation Services',
    referrer: 'origin-when-cross-origin',

    icons: {
      icon: [
        { url: '/favicon.ico', type: 'image/x-icon' },
        { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
        { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      ],
      apple: [
        { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
      ],
      other: [
        {
          rel: 'mask-icon',
          url: '/safari-pinned-tab.svg',
          color: '#ff8400',
        },
      ],
    },
    manifest: '/site.webmanifest',
    appleWebApp: {
      capable: true,
      statusBarStyle: 'default',
      title: 'Solar Concepts AZ',
    },
    applicationName: 'Solar Concepts AZ',
    appLinks: {
      web: {
        url: fullCanonicalUrl,
        should_fallback: true,
      },
    },
    archives: [`${baseUrl}/sitemap.xml`],
    bookmarks: [`${baseUrl}/services`, `${baseUrl}/contact`],
    category: 'business',
  };
}

// Structured data generators
export const generateLocalBusinessSchema = () => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://solarconceptsaz.com/#organization",
  "name": "Solar Concepts AZ",
  "alternateName": "Solar Concepts Arizona",
  "description": "Arizona's premier dealer for solar tubes, skylights, attic fans, and roofing solutions. 40 years of master craftsmanship.",
  "url": "https://solarconceptsaz.com",
  "telephone": "(480) 968-1777",
  "faxNumber": "(480) 968-0991",
  "email": "sales@solarconceptsaz.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "916 S 52nd Suite # 100",
    "addressLocality": "Tempe",
    "addressRegion": "AZ",
    "postalCode": "85281",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 33.4147,
    "longitude": -111.9731
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "08:00",
      "closes": "17:00"
    }
  ],
  "priceRange": "$",
  "currenciesAccepted": "USD",
  "paymentAccepted": "Cash, Credit Card, Check, Financing",
  "serviceArea": {
    "@type": "State",
    "name": "Arizona"
  },
  "areaServed": [
    {
      "@type": "City",
      "name": "Phoenix",
      "sameAs": "https://en.wikipedia.org/wiki/Phoenix,_Arizona"
    },
    {
      "@type": "City", 
      "name": "Tempe",
      "sameAs": "https://en.wikipedia.org/wiki/Tempe,_Arizona"
    },
    {
      "@type": "City",
      "name": "Scottsdale", 
      "sameAs": "https://en.wikipedia.org/wiki/Scottsdale,_Arizona"
    },
    {
      "@type": "City",
      "name": "Mesa",
      "sameAs": "https://en.wikipedia.org/wiki/Mesa,_Arizona"
    }
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Solar & Roofing Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Solar Tube Installation",
          "description": "Professional Solatube daylighting system installation for natural lighting",
          "provider": {
            "@id": "https://solarconceptsaz.com/#organization"
          },
          "areaServed": {
            "@type": "State",
            "name": "Arizona"
          }
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Skylight Installation",
          "description": "Expert skylight installation and repair services",
          "provider": {
            "@id": "https://solarconceptsaz.com/#organization"
          }
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Solar Star Attic Fan Installation",
          "description": "Solar-powered attic ventilation solutions and fan installation",
          "provider": {
            "@id": "https://solarconceptsaz.com/#organization"
          }
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Roofing Services",
          "description": "Complete roofing solutions including tile, clay tile, shingles, and shake wood",
          "provider": {
            "@id": "https://solarconceptsaz.com/#organization"
          }
        }
      }
    ]
  },
  "foundingDate": "1984",
  "slogan": "Arizona Premier Dealer for Natural Lighting Solutions",
  "logo": {
    "@type": "ImageObject",
    "url": "https://solarconceptsaz.com/images/solar-concepts-logo.png",
    "width": 500,
    "height": 200
  },
  "image": [
    "https://solarconceptsaz.com/images/solar-concepts-og-image.jpg"
  ],
  "sameAs": [
    "https://www.facebook.com/SolarConceptsAZ",
    "https://www.linkedin.com/company/solar-concepts-az",
    "https://www.yelp.com/biz/solar-concepts-tempe"
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "150",
    "bestRating": "5",
    "worstRating": "1"
  }
});

export const generateWebsiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://solarconceptsaz.com/#website",
  "url": "https://solarconceptsaz.com",
  "name": "Solar Concepts AZ",
  "description": "Arizona's premier dealer for solar tubes, skylights, attic fans, and roofing solutions.",
  "publisher": {
    "@id": "https://solarconceptsaz.com/#organization"
  },
  "potentialAction": [
    {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://solarconceptsaz.com/search?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  ],
  "inLanguage": "en-US"
});

export const generateBreadcrumbSchema = (items: Array<{name: string, url: string}>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url
  }))
});