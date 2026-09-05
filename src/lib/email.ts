import { COMPANY } from "./config";

interface SendEmailOptions {
  subject: string;
  replyTo?: string;
  data: Record<string, string | number | undefined | null>;
}

/**
 * Sends form submission notification directly to the configured notification email.
 * Uses FormSubmit AJAX service which formats data into a clean email table.
 */
export async function sendFormEmail({
  subject,
  replyTo,
  data,
}: SendEmailOptions): Promise<{ success: boolean; message?: string }> {
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

    const result = await response.json().catch(() => null);

    if (result && result.message && result.message.includes("Activation")) {
      console.warn("FormSubmit requires one-time email activation link to be clicked at:", recipient);
    }

    return {
      success: response.ok,
      message: result?.message,
    };
  } catch (error) {
    console.error("Error sending form notification email:", error);
    return {
      success: false,
      message: error instanceof Error ? error.message : "Failed to send email",
    };
  }
}
