import { COMPANY } from "./config";

interface SendEmailOptions {
  subject: string;
  replyTo?: string;
  data: Record<string, string | number | undefined | null>;
}

export interface SendEmailResult {
  success: boolean;
  message: string;
  requiresActivation?: boolean;
}

/**
 * Sends form submission notification directly to the configured notification email.
 * Uses FormSubmit AJAX service which formats data into a clean email table.
 */
export async function sendFormEmail({
  subject,
  replyTo,
  data,
}: SendEmailOptions): Promise<SendEmailResult> {
  const recipient = (COMPANY as any).notificationEmail || "forceservicesie@gmail.com";

  // Filter out empty/null values and clean keys
  const cleanData: Record<string, string> = {};
  for (const [key, val] of Object.entries(data)) {
    if (val !== undefined && val !== null && String(val).trim() !== "") {
      cleanData[key] = String(val);
    }
  }

  const payload: Record<string, any> = {
    _subject: subject,
    _template: "table",
    _captcha: "false",
    ...cleanData,
  };

  if (replyTo && replyTo.includes("@")) {
    payload["_replyto"] = replyTo.trim();
  }

  try {
    const response = await fetch(`https://formsubmit.co/ajax/${recipient}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(payload),
    });

    let result: Record<string, any> | null = null;
    try {
      result = await response.json();
    } catch {
      result = null;
    }

    const message = typeof result?.message === "string" ? result.message : "";
    const isActivationNeeded =
      message.toLowerCase().includes("activation") ||
      message.toLowerCase().includes("activate") ||
      message.toLowerCase().includes("confirm your email");

    if (isActivationNeeded) {
      console.warn("[FormSubmit] Notification service requires one-time activation. Form not delivered.");
      return {
        success: false,
        requiresActivation: true,
        message: "Email notification service requires one-time activation. Please contact us via phone or WhatsApp.",
      };
    }

    // FormSubmit returns success as boolean true or string "true"
    const isSuccessJson = result?.success === true || result?.success === "true";

    if (!response.ok || !isSuccessJson) {
      const errorMsg = message || `Form submission failed (HTTP ${response.status}).`;
      console.error("[FormSubmit] Form delivery rejected:", {
        status: response.status,
        message: errorMsg,
      });
      return {
        success: false,
        message: errorMsg,
      };
    }

    return {
      success: true,
      message: message || "Form submitted successfully.",
    };
  } catch (error) {
    console.error("[FormSubmit] Network or transmission error:", error instanceof Error ? error.message : "Unknown error");
    return {
      success: false,
      message: "Network error occurred while sending your request. Please check your connection or contact us by phone.",
    };
  }
}
