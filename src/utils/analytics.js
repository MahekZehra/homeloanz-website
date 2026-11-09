// Send GA4 events safely, including before the delayed gtag script loads.
export const trackGA4Event = (eventName, params = {}) => {
  if (typeof window === "undefined") return;

  window.dataLayer = window.dataLayer || [];
  const gtag = window.gtag || function () {
    window.dataLayer.push(arguments);
  };

  gtag("event", eventName, params);
};
