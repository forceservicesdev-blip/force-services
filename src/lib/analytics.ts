/**
 * Google Analytics 4 (gtag.js) & Google Tag Manager tracking utility
 * Measurement ID: G-912RGH4E9K
 */

export const GA_MEASUREMENT_ID = "G-912RGH4E9K";

declare global {
  interface Window {
    dataLayer?: Record<string, any>[];
    gtag?: (...args: any[]) => void;
  }
}

export interface ConversionPayload {
  event?: string;
  form_type?: string;
  customer_name?: string;
  service?: string;
  value?: number;
  currency?: string;
  [key: string]: any;
}

/**
 * Tracks a page view for Single Page Application route navigation
 */
export function trackPageView(pagePath?: string, pageTitle?: string) {
  if (typeof window === "undefined") return;

  const path = pagePath || window.location.pathname + window.location.search;
  const title = pageTitle || document.title;

  if (typeof window.gtag === "function") {
    window.gtag("config", GA_MEASUREMENT_ID, {
      page_path: path,
      page_title: title,
      page_location: window.location.href,
    });
  }

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: "page_view",
    page_path: path,
    page_title: title,
    page_location: window.location.href,
  });

  if (import.meta.env.DEV) {
    console.log(`[Analytics] Pageview tracked: ${path}`);
  }
}

/**
 * Fires lead conversion event after successful form submission
 */
export function trackLeadConversion(payload: ConversionPayload = {}) {
  if (typeof window === "undefined") return;

  const eventName = payload.event || "generate_lead";
  const eventData = {
    event: eventName,
    page_location: window.location.href,
    page_path: window.location.pathname,
    timestamp: new Date().toISOString(),
    ...payload,
  };

  // 1. Google Tag Manager / DataLayer
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(eventData);

  // 2. Google Analytics 4 gtag.js
  if (typeof window.gtag === "function") {
    window.gtag("event", eventName, {
      currency: payload.currency || "EUR",
      value: payload.value || 1,
      form_type: payload.form_type || "general_lead",
      service: payload.service || "general",
    });

    // Also dispatch form_submit event for additional tracking flexibility
    window.gtag("event", "form_submit", {
      form_type: payload.form_type || "general_lead",
      service: payload.service || "general",
    });
  }

  if (import.meta.env.DEV) {
    console.log(`[Analytics] Tracked lead conversion:`, eventData);
  }
}

/**
 * Tracks WhatsApp button clicks
 */
export function trackWhatsAppClick(context: {
  button_text?: string;
  page_location?: string;
  destination_url?: string;
} = {}) {
  if (typeof window === "undefined") return;

  const eventData = {
    event: "click_whatsapp",
    button_text: context.button_text || "WhatsApp Button",
    page_location: context.page_location || window.location.pathname,
    destination_url: context.destination_url || "",
    timestamp: new Date().toISOString(),
  };

  // Push to dataLayer
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(eventData);

  // Dispatch gtag events
  if (typeof window.gtag === "function") {
    // Custom event: click_whatsapp
    window.gtag("event", "click_whatsapp", {
      event_category: "Engagement",
      event_label: context.button_text || "WhatsApp Button",
      page_location: context.page_location || window.location.pathname,
      transport_type: "beacon",
    });

    // Standard GA4 contact event
    window.gtag("event", "contact", {
      method: "WhatsApp",
      event_category: "Lead Generation",
      event_label: context.button_text || "WhatsApp Button",
      transport_type: "beacon",
    });
  }

  if (import.meta.env.DEV) {
    console.log("[Analytics] Tracked WhatsApp click:", eventData);
    if (!window.gtag) {
      console.warn("[Analytics] Warning: window.gtag is not defined! Check if an ad-blocker is active.");
    }
  }
}

/**
 * Tracks Direct Phone Call clicks
 */
export function trackPhoneClick(context: {
  button_text?: string;
  phone_number?: string;
  page_location?: string;
} = {}) {
  if (typeof window === "undefined") return;

  const eventData = {
    event: "click_phone",
    button_text: context.button_text || "Phone Call",
    phone_number: context.phone_number || "",
    page_location: context.page_location || window.location.pathname,
  };

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(eventData);

  if (typeof window.gtag === "function") {
    window.gtag("event", "click_phone", eventData);
    window.gtag("event", "contact", {
      method: "Phone",
      event_category: "Lead Generation",
    });
  }

  if (import.meta.env.DEV) {
    console.log("[Analytics] Tracked Phone call click:", eventData);
  }
}

/**
 * Global click interceptor to automatically capture ANY WhatsApp or Phone clicks
 * anywhere across the entire website without having to manually wire up every component.
 */
export function setupGlobalAnalyticsListeners() {
  if (typeof window === "undefined") return () => {};

  const handleClick = (event: MouseEvent) => {
    const target = event.target as HTMLElement | null;
    if (!target) return;

    // Find closest anchor tag
    const anchor = target.closest ? target.closest("a") : null;
    if (!anchor) return;

    const hrefAttr = anchor.getAttribute("href") || "";
    const hrefProp = anchor.href || "";
    const fullHref = `${hrefAttr} ${hrefProp}`.toLowerCase();

    // 1. Detect WhatsApp links
    if (fullHref.includes("wa.me") || fullHref.includes("whatsapp.com")) {
      const buttonText = anchor.innerText?.trim() || anchor.getAttribute("aria-label") || "WhatsApp Link";
      trackWhatsAppClick({
        button_text: buttonText,
        page_location: window.location.pathname,
        destination_url: hrefAttr || hrefProp,
      });
    }

    // 2. Detect Phone links
    if (fullHref.includes("tel:")) {
      const buttonText = anchor.innerText?.trim() || anchor.getAttribute("aria-label") || "Phone Link";
      trackPhoneClick({
        button_text: buttonText,
        phone_number: hrefAttr.replace("tel:", "").trim(),
        page_location: window.location.pathname,
      });
    }
  };

  document.addEventListener("click", handleClick, { capture: true });
  return () => {
    document.removeEventListener("click", handleClick, { capture: true });
  };
}
