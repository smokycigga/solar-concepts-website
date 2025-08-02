"use client";
import { useEffect } from 'react';

export const PerformanceMonitoring = () => {
  useEffect(() => {
    // Core Web Vitals monitoring
    const observeWebVitals = () => {
      // Largest Contentful Paint (LCP)
      if ('PerformanceObserver' in window) {
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
          
          if (window.gtag) {
            window.gtag('event', 'web_vitals', {
              event_category: 'performance',
              event_label: 'LCP',
              value: Math.round(lastEntry.startTime),
              custom_parameter_1: lastEntry.startTime < 2500 ? 'good' : lastEntry.startTime < 4000 ? 'needs_improvement' : 'poor'
            });
          }
        });
        
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

        // First Input Delay (FID)
        const fidObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry) => {
            if (window.gtag) {
              window.gtag('event', 'web_vitals', {
                event_category: 'performance',
                event_label: 'FID',
                value: Math.round(entry.processingStart - entry.startTime),
                custom_parameter_1: entry.processingStart - entry.startTime < 100 ? 'good' : entry.processingStart - entry.startTime < 300 ? 'needs_improvement' : 'poor'
              });
            }
          });
        });
        
        fidObserver.observe({ entryTypes: ['first-input'] });

        // Cumulative Layout Shift (CLS)
        let clsValue = 0;
        const clsObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry: any) => {
            if (!entry.hadRecentInput) {
              clsValue += entry.value;
            }
          });
          
          if (window.gtag) {
            window.gtag('event', 'web_vitals', {
              event_category: 'performance',
              event_label: 'CLS',
              value: Math.round(clsValue * 1000),
              custom_parameter_1: clsValue < 0.1 ? 'good' : clsValue < 0.25 ? 'needs_improvement' : 'poor'
            });
          }
        });
        
        clsObserver.observe({ entryTypes: ['layout-shift'] });
      }

      // Page load performance
      window.addEventListener('load', () => {
        setTimeout(() => {
          const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
          
          if (navigation && window.gtag) {
            // DOM Content Loaded
            window.gtag('event', 'page_timing', {
              event_category: 'performance',
              event_label: 'DOM_Content_Loaded',
              value: Math.round(navigation.domContentLoadedEventEnd - navigation.navigationStart)
            });

            // Full page load
            window.gtag('event', 'page_timing', {
              event_category: 'performance', 
              event_label: 'Page_Load_Complete',
              value: Math.round(navigation.loadEventEnd - navigation.navigationStart)
            });

            // Time to First Byte
            window.gtag('event', 'page_timing', {
              event_category: 'performance',
              event_label: 'TTFB',
              value: Math.round(navigation.responseStart - navigation.navigationStart)
            });
          }
        }, 0);
      });
    };

    // Error tracking
    const trackErrors = () => {
      window.addEventListener('error', (event) => {
        if (window.gtag) {
          window.gtag('event', 'exception', {
            description: `${event.error?.message || event.message} at ${event.filename}:${event.lineno}`,
            fatal: false,
            event_category: 'javascript_error'
          });
        }
      });

      window.addEventListener('unhandledrejection', (event) => {
        if (window.gtag) {
          window.gtag('event', 'exception', {
            description: `Unhandled Promise Rejection: ${event.reason}`,
            fatal: false,
            event_category: 'promise_rejection'
          });
        }
      });
    };

    // User engagement tracking
    const trackEngagement = () => {
      let startTime = Date.now();
      let isActive = true;
      
      const trackTimeOnPage = () => {
        if (isActive && window.gtag) {
          const timeSpent = Math.round((Date.now() - startTime) / 1000);
          
          // Track engagement milestones
          if (timeSpent === 30 || timeSpent === 60 || timeSpent === 120 || timeSpent === 300) {
            window.gtag('event', 'engagement_time', {
              event_category: 'engagement',
              event_label: `${timeSpent}_seconds`,
              value: timeSpent
            });
          }
        }
      };

      // Track when user becomes inactive
      const handleVisibilityChange = () => {
        isActive = !document.hidden;
        if (!isActive && window.gtag) {
          const timeSpent = Math.round((Date.now() - startTime) / 1000);
          window.gtag('event', 'page_exit', {
            event_category: 'engagement',
            event_label: 'tab_hidden',
            value: timeSpent
          });
        } else if (isActive) {
          startTime = Date.now();
        }
      };

      document.addEventListener('visibilitychange', handleVisibilityChange);
      
      // Track every 30 seconds
      const engagementInterval = setInterval(trackTimeOnPage, 30000);
      
      return () => {
        clearInterval(engagementInterval);
        document.removeEventListener('visibilitychange', handleVisibilityChange);
      };
    };

    observeWebVitals();
    trackErrors();
    const cleanupEngagement = trackEngagement();

    return cleanupEngagement;
  }, []);

  return null;
};

// Utility functions for manual performance tracking
export const trackCustomTiming = (name: string, startTime: number) => {
  const duration = performance.now() - startTime;
  
  if (window.gtag) {
    window.gtag('event', 'custom_timing', {
      event_category: 'performance',
      event_label: name,
      value: Math.round(duration)
    });
  }
};

export const trackResourceLoad = (resourceName: string, loadTime: number) => {
  if (window.gtag) {
    window.gtag('event', 'resource_timing', {
      event_category: 'performance',
      event_label: resourceName,
      value: Math.round(loadTime)
    });
  }
};