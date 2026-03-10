import { NextResponse } from "next/server";

/**
 * Notification API — forwards important events to the host
 * (e.g., new chat sessions, contact form submissions, urgent queries)
 * 
 * Configure WEBHOOK_URL and NOTIFICATION_EMAIL in environment variables.
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

    // Forward via email notification service if configured
    const notificationEmail = process.env.NOTIFICATION_EMAIL;
    if (notificationEmail && process.env.EMAIL_API_KEY) {
      // Integration point for SendGrid, Resend, or similar
      console.log(`[Notification] Would email ${notificationEmail}: ${type}`);
    }

    return NextResponse.json({ success: true, notificationId: crypto.randomUUID() });
  } catch {
    return NextResponse.json(
      { error: "Notification failed." },
      { status: 500 }
    );
  }
}
