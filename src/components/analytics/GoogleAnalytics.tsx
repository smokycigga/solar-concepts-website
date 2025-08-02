"use client";
import { useEffect } from 'react';
import Script from 'next/script';

interface GoogleAnalyticsProps {
  measurementId: string;
}

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

export const GoogleAnalytics: React.FC<GoogleAnalyticsProps> = ({ measurementId }) => {
  useEffect(() => {
    // Initialize dataLayer
    window.dataLayer = window.dataLayer || [];
    
    // gtag function
    window.gtag = function gtag() {
      window.dataLayer.push(arguments);
    };
    
    // Configure Google Analytics with enhanced settings
    window.gtag('js', new Date());
    window.gtag('config', measurementId, {
      page_title: document.title,
      page_location: window.location.href,
      send_page_view: true,
      // Enhanced ecommerce and conversion tracking
      allow_google_signals: true,
      allow_ad_personalization_signals: true,
      // Privacy settings
      anonymize_ip: true,
      // Performance settings
      transport_type: 'beacon',
      // Custom dimensions for business insights
      custom_map: {
        'dimension1': 'user_type',
        'dimension2': 'service_interest',
        'dimension3': 'lead_source'
      }
    });

    // Track scroll depth for engagement
    let scrollDepth = 0;
    const trackScrollDepth = () => {
      const scrollPercent = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
      if (scrollPercent > scrollDepth && scrollPercent % 25 === 0) {
        scrollDepth = scrollPercent;
        window.gtag('event', 'scroll_depth', {
          event_category: 'engagement',
          event_label: `${scrollPercent}%`,
          value: scrollPercent
        });
      }
    };

    window.addEventListener('scroll', trackScrollDepth);
    return () => window.removeEventListener('scroll', trackScrollDepth);
  }, [measurementId]);

  return (
    <>
      {/* Google Analytics Script */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
        strategy="afterInteractive"
      />
      
      {/* Google Tag Manager (optional but recommended) */}
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${measurementId}', {
            page_title: document.title,
            page_location: window.location.href,
            send_page_view: true
          });
        `}
      </Script>
    </>
  );
};

// Analytics tracking functions
export const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, parameters);
  }
};

export const trackPageView = (url: string, title?: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID, {
      page_path: url,
      page_title: title,
    });
  }
};

export const trackConversion = (conversionId: string, value?: number) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'conversion', {
      send_to: conversionId,
      value: value,
      currency: 'USD',
    });
  }
};

// Business-specific tracking events
export const trackContactFormSubmit = (formData: Record<string, any>) => {
  trackEvent('contact_form_submit', {
    event_category: 'engagement',
    event_label: 'contact_form',
    value: 1,
    ...formData
  });
};

export const trackVideoPlay = (videoTitle: string) => {
  trackEvent('video_play', {
    event_category: 'engagement',
    event_label: videoTitle,
    value: 1
  });
};

export const trackServiceInterest = (serviceName: string) => {
  trackEvent('service_interest', {
    event_category: 'engagement',
    event_label: serviceName,
    value: 1
  });
};

export const trackPhoneClick = () => {
  trackEvent('phone_click', {
    event_category: 'contact',
    event_label: 'phone_number',
    value: 1
  });
};

// Advanced business tracking
export const trackQuoteRequest = (serviceType: string, estimatedValue?: number) => {
  trackEvent('quote_request', {
    event_category: 'lead_generation',
    event_label: serviceType,
    value: estimatedValue || 1,
    currency: 'USD'
  });
};

export const trackServicePageView = (serviceName: string) => {
  trackEvent('service_page_view', {
    event_category: 'engagement',
    event_label: serviceName,
    custom_map: {
      'dimension2': serviceName
    }
  });
};

export const trackButtonClick = (buttonName: string, location: string) => {
  trackEvent('button_click', {
    event_category: 'engagement',
    event_label: `${buttonName}_${location}`,
    value: 1
  });
};

export const trackFormStart = (formName: string) => {
  trackEvent('form_start', {
    event_category: 'engagement',
    event_label: formName,
    value: 1
  });
};

export const trackFormComplete = (formName: string, leadValue?: number) => {
  trackEvent('form_complete', {
    event_category: 'conversion',
    event_label: formName,
    value: leadValue || 100,
    currency: 'USD'
  });
};

// Enhanced conversion tracking for solar business
export const trackConsultationRequest = (serviceType: string) => {
  trackEvent('consultation_request', {
    event_category: 'high_intent_lead',
    event_label: serviceType,
    value: 500, // Estimated lead value
    currency: 'USD'
  });
};