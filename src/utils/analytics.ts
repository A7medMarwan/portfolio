/**
 * Analytics utilities for tracking user interactions
 * In production, integrate with Google Analytics, Mixpanel, etc.
 */

export enum AnalyticsEvent {
    PAGE_VIEW = 'page_view',
    SECTION_VIEW = 'section_view',
    BUTTON_CLICK = 'button_click',
    FORM_SUBMIT = 'form_submit',
    EXTERNAL_LINK_CLICK = 'external_link_click',
}

interface EventData {
    category?: string;
    label?: string;
    value?: number;
    [key: string]: any;
}

/**
 * Track analytics event
 */
export const trackEvent = (
    event: AnalyticsEvent,
    data?: EventData
): void => {
    // In production, send to analytics service
    if (import.meta.env.MODE === 'development') {
        console.log('Analytics Event:', event, data);
    }

    // Example: Google Analytics
    // if (window.gtag) {
    //   window.gtag('event', event, data);
    // }
};

/**
 * Track page view
 */
export const trackPageView = (path: string): void => {
    trackEvent(AnalyticsEvent.PAGE_VIEW, { path });
};

/**
 * Track section view
 */
export const trackSectionView = (sectionId: string): void => {
    trackEvent(AnalyticsEvent.SECTION_VIEW, {
        category: 'Navigation',
        label: sectionId,
    });
};

/**
 * Track button click
 */
export const trackButtonClick = (buttonName: string): void => {
    trackEvent(AnalyticsEvent.BUTTON_CLICK, {
        category: 'Engagement',
        label: buttonName,
    });
};

/**
 * Track form submission
 */
export const trackFormSubmit = (formName: string, success: boolean): void => {
    trackEvent(AnalyticsEvent.FORM_SUBMIT, {
        category: 'Form',
        label: formName,
        value: success ? 1 : 0,
    });
};
