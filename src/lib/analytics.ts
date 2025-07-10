import { gtag } from 'ga-gtag';

export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID;

// Track page views
export const pageview = (url: string) => {
  if (GA_TRACKING_ID) {
    gtag('config', GA_TRACKING_ID, {
      page_path: url,
    });
  } else {
    console.error('GA_TRACKING_ID is not defined');
  }
};



// Track custom events
export const event = ({ action, category, label, value }: {
  action: string;
  category: string;
  label?: string;
  value?: number;
}) => {
  gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};

// Track contact form submissions
export const trackContactForm = (eventType: string) => {
  event({
    action: 'contact_form_submit',
    category: 'engagement',
    label: eventType,
  });
};

// Track phone calls
export const trackPhoneCall = () => {
  event({
    action: 'phone_call',
    category: 'engagement',
    label: 'header_phone_click',
  });
};
