import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { setupGlobalAnalyticsListeners, trackPageView } from "@/lib/analytics";

/**
 * Automatically tracks page views on route changes
 * and sets up global click listeners for WhatsApp and Phone buttons.
 */
export default function AnalyticsTracker() {
  const location = useLocation();

  // Setup global click listeners once on mount
  useEffect(() => {
    const cleanup = setupGlobalAnalyticsListeners();
    return cleanup;
  }, []);

  // Track page view whenever route / pathname / search changes
  useEffect(() => {
    const fullPath = location.pathname + location.search;
    trackPageView(fullPath, document.title);
  }, [location.pathname, location.search]);

  return null;
}
