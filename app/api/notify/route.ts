import { NextResponse } from "next/server";
import { Resend } from "resend";

/**
 * Notification API — forwards important events to the host
 * (e.g., new chat sessions, contact form submissions, urgent queries)
 * 
 * Configure WEBHOOK_URL, NOTIFICATION_EMAIL, and RESEND_API_KEY in environment variables.
 */

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { type, data } = body;

    if (!type || !data) {
      return NextResponse.json(
        { error: "Type and data are required." },
        { status: 400 }
      );
    }

    const notification = {
      type,
      data,
      timestamp: new Date().toISOString(),
      source: "coreframe-landing",
    };

    // Log locally
    console.log("[Notification]", JSON.stringify(notification, null, 2));

    // Forward to webhook (Slack, Discord, custom endpoint, etc.)
    const webhookUrl = process.env.WEBHOOK_URL;
    if (webhookUrl) {
      await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(notification),
      }).catch((err) => {
        console.error("[Notification] Webhook failed:", err);
      });
    }

    // Forward via email using Resend
    const notificationEmail = process.env.NOTIFICATION_EMAIL;
    const resendApiKey = process.env.RESEND_API_KEY;
    if (notificationEmail && resendApiKey) {
      try {
        const resend = new Resend(resendApiKey);
        const summary = typeof data === "object" ? JSON.stringify(data, null, 2) : String(data);
        await resend.emails.send({
          from: "CoreFrame Website <onboarding@resend.dev>",
          to: notificationEmail,
          subject: `[CoreFrame] Notification: ${type}`,
          html: `
            <h2>Notification: ${type}</h2>
            <pre style="background: #f4f4f4; padding: 16px; border-radius: 8px; overflow-x: auto;">${summary}</pre>
            <p style="color: #888; font-size: 12px;">Source: coreframe-landing | ${new Date().toISOString()}</p>
          `,
        });
        console.log(`[Notification] Email sent to ${notificationEmail}: ${type}`);
      } catch (err) {
        console.error("[Notification] Email failed:", err);
      }
    }

    return NextResponse.json({ success: true, notificationId: crypto.randomUUID() });
  } catch {
    return NextResponse.json(
      { error: "Notification failed." },
      { status: 500 }
    );
  }
}
