import Head from 'next/head';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  structuredData?: object;
}

export const SEOHead: React.FC<SEOHeadProps> = ({
  title = "Solar Concepts - Arizona Premier Solar Tube & Skylight Installation",
  description = "Solar Concepts is Arizona's premier dealer for solar tubes, skylights, attic fans, and roofing solutions. 40 years of master craftsmanship and certified installation expertise. Transform your home with natural lighting solutions.",
  keywords = "solar tubes Arizona, skylights installation, attic fans, roofing services, natural lighting, solar concepts, Arizona premier dealer, master carpenter, master roofer, certified installer, solar tube installation, skylight repair, attic ventilation, energy savings, natural light solutions",
  canonicalUrl = "https://solarconcepts.com",
  ogImage = "/images/solar-concepts-og-image.jpg",
  ogType = "website",
  twitterCard = "summary_large_image",
  structuredData
}) => {
  const jsonLd = structuredData || {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Solar Concepts",
    "description": description,
    "url": canonicalUrl,
    "telephone": "(602) 555-SOLAR",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Phoenix",
      "addressRegion": "Arizona",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "33.4484",
      "longitude": "-112.0740"
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
    "founder": {
      "@type": "Person",
      "name": "Solar Concepts Team"
    },
    "foundingDate": "1984",
    "slogan": "Arizona Premier Dealer for Natural Lighting Solutions"
  };

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="author" content="Solar Concepts" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content="Solar Concepts" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:site" content="@SolarConcepts" />
      <meta name="twitter:creator" content="@SolarConcepts" />
      
      {/* Additional SEO Meta Tags */}
      <meta name="theme-color" content="#ff8400" />
      <meta name="msapplication-TileColor" content="#ff8400" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="Solar Concepts" />
      
      {/* Favicon and Icons */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
      
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* Preconnect for Performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://www.google-analytics.com" />
      <link rel="preconnect" href="https://www.googletagmanager.com" />
    </Head>
  );
};