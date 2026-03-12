import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
  const body = await request.json();

  const { name, email, company, message } = body;

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Name, email, and message are required." },
      { status: 400 }
    );
  }

  console.log("--- Contact Form Submission ---");
  console.log("Name:", name);
  console.log("Email:", email);
  console.log("Company:", company || "(not provided)");
  console.log("Message:", message);
  console.log("-------------------------------");

  // Send email via Resend
  const resendApiKey = process.env.RESEND_API_KEY;
  const notificationEmail = process.env.NOTIFICATION_EMAIL;

  if (resendApiKey && notificationEmail) {
    try {
      const resend = new Resend(resendApiKey);
      await resend.emails.send({
        from: "CoreFrame Website <onboarding@resend.dev>",
        to: notificationEmail,
        subject: `New Contact Form: ${name}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Company:</strong> ${company || "(not provided)"}</p>
          <hr />
          <p><strong>Message:</strong></p>
          <p>${message}</p>
          <hr />
          <p style="color: #888; font-size: 12px;">Sent from coreframetech.in contact form at ${new Date().toISOString()}</p>
        `,
        replyTo: email,
      });
      console.log("[Contact] Email sent to", notificationEmail);
    } catch (err) {
      console.error("[Contact] Email failed:", err);
    }
  }

  // Forward to webhook if configured
  const webhookUrl = process.env.WEBHOOK_URL;
  if (webhookUrl) {
    fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        type: "contact_form",
        data: { name, email, company, message },
        timestamp: new Date().toISOString(),
        source: "coreframe-landing",
      }),
    }).catch(() => {
      // Non-blocking
    });
  }

  return NextResponse.json({ success: true });
}
