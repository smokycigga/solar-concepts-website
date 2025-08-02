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
    
    // Configure Google Analytics
    window.gtag('js', new Date());
    window.gtag('config', measurementId, {
      page_title: document.title,
      page_location: window.location.href,
    });
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