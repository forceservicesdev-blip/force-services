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
 * Fires lead conversion event after successful form submission confirmation.
 * Strips any Personally Identifiable Information (PII) such as customer names, emails, phones.
 * Uses a single dispatch to avoid double counting between gtag.js and dataLayer.
 */
export function trackLeadConversion(payload: ConversionPayload = {}) {
  if (typeof window === "undefined") return;

  const eventName = payload.event || "generate_lead";

  // Strictly sanitize event parameters - Never send PII to GA4/GTM
  const eventParams: Record<string, any> = {
    currency: payload.currency || "EUR",
    value: typeof payload.value === "number" ? payload.value : 1,
    form_type: payload.form_type || "general_lead",
    service: payload.service || "general",
  };

  // Google Analytics 4 via gtag.js (canonical implementation from index.html)
  // gtag() automatically manages dataLayer. Sending to both gtag and dataLayer directly
  // can result in duplicate event tracking in GA4 / GTM containers.
  if (typeof window.gtag === "function") {
    window.gtag("event", eventName, eventParams);
  } else if (Array.isArray(window.dataLayer)) {
    // Fallback only if gtag function is not defined
    window.dataLayer.push({
      event: eventName,
      ...eventParams,
    });
  }

  if (import.meta.env.DEV) {
    console.log(`[Analytics] Tracked lead conversion (${eventName}):`, eventParams);
  }
}

export interface ClickTrackingContext {
  button_location?: string;
  page_path?: string;
}

/**
 * Tracks WhatsApp button/link clicks for dashboard reporting.
 * Event: whatsapp_click
 * Parameters: page_path, button_location (non-personal)
 */
export function trackWhatsAppClick(context: ClickTrackingContext = {}) {
  if (typeof window === "undefined") return;

  const eventParams = {
    page_path: context.page_path || window.location.pathname,
    button_location: context.button_location || "unknown",
  };

  if (typeof window.gtag === "function") {
    window.gtag("event", "whatsapp_click", eventParams);
  } else if (Array.isArray(window.dataLayer)) {
    window.dataLayer.push({
      event: "whatsapp_click",
      ...eventParams,
    });
  }

  if (import.meta.env.DEV) {
    console.log("[Analytics] Tracked whatsapp_click:", eventParams);
  }
}

/**
 * Tracks Direct Phone Call clicks for dashboard reporting.
 * Event: phone_click
 * Parameters: page_path, button_location (non-personal)
 */
export function trackPhoneClick(context: ClickTrackingContext = {}) {
  if (typeof window === "undefined") return;

  const eventParams = {
    page_path: context.page_path || window.location.pathname,
    button_location: context.button_location || "unknown",
  };

  if (typeof window.gtag === "function") {
    window.gtag("event", "phone_click", eventParams);
  } else if (Array.isArray(window.dataLayer)) {
    window.dataLayer.push({
      event: "phone_click",
      ...eventParams,
    });
  }

  if (import.meta.env.DEV) {
    console.log("[Analytics] Tracked phone_click:", eventParams);
  }
}

/**
 * Helper to determine button_location from element or its DOM context
 */
function resolveButtonLocation(element: HTMLElement): string {
  // 1. Check for explicit data-location on the element or any ancestor
  const explicit = element.closest("[data-location]");
  if (explicit) {
    const loc = explicit.getAttribute("data-location");
    if (loc) return loc;
  }

  // 2. Infer from semantic containers
  if (element.closest("header")) {
    return window.innerWidth < 1024 ? "header_mobile" : "header_desktop";
  }
  if (element.closest("footer")) return "footer";
  if (element.closest("#hero") || element.closest("section.hero-section") || element.closest(".pt-6, .pt-8, .pt-10, .pt-12, .pt-32")) {
    const path = window.location.pathname;
    if (path === "/" || path === "") return "hero";
  }
  if (element.closest("#cta") || element.closest("section.bg-primary")) return "cta_section";
  if (element.closest("#solutions")) return "solutions_section";
  if (element.closest("#about")) return "about_section";
  if (element.closest("aside") || element.closest(".sidebar")) return "sidebar";

  const path = window.location.pathname;
  if (path.includes("contact")) return "contact_page";
  if (path.includes("quote")) return "quote_page";
  if (path.includes("services")) return "service_page";
  if (path.includes("thank-you")) return "thank_you_page";

  return "page_content";
}

/**
 * Global click interceptor to automatically capture ANY WhatsApp or Phone clicks
 * across the entire website with deduplication protection.
 */
export function setupGlobalAnalyticsListeners() {
  if (typeof window === "undefined") return () => {};

  let lastClickTime = 0;
  let lastClickHref = "";

  const handleClick = (event: MouseEvent) => {
    const target = event.target as HTMLElement | null;
    if (!target) return;

    // Find closest anchor tag
    const anchor = target.closest ? target.closest("a") : null;
    if (!anchor) return;

    const hrefAttr = anchor.getAttribute("href") || "";
    const hrefProp = anchor.href || "";
    const fullHref = `${hrefAttr} ${hrefProp}`.toLowerCase();

    // Deduplication check: prevent multiple triggers from nested element clicks / rapid bubbles
    const now = Date.now();
    if (now - lastClickTime < 350 && lastClickHref === fullHref) {
      return;
    }

    const buttonLocation = resolveButtonLocation(anchor);
    const pagePath = window.location.pathname;

    // 1. Detect WhatsApp links
    if (fullHref.includes("wa.me") || fullHref.includes("whatsapp.com")) {
      lastClickTime = now;
      lastClickHref = fullHref;
      trackWhatsAppClick({
        button_location: buttonLocation,
        page_path: pagePath,
      });
      return;
    }

    // 2. Detect Phone links
    if (fullHref.includes("tel:")) {
      lastClickTime = now;
      lastClickHref = fullHref;
      trackPhoneClick({
        button_location: buttonLocation,
        page_path: pagePath,
      });
      return;
    }
  };

  document.addEventListener("click", handleClick, { capture: true });
  return () => {
    document.removeEventListener("click", handleClick, { capture: true });
  };
}
