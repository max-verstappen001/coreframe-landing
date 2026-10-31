import { NextResponse } from "next/server";
import { Resend } from "resend";
import { region } from "@/lib/region";

const escapeHtml = (value: string) => value.replace(/[&<>"']/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[char]!));
const text = (value: unknown, max: number) => typeof value === "string" ? value.trim().slice(0, max) : "";

export async function POST(request: Request) {
  if (Number(request.headers.get("content-length") || 0) > 20000) {
    return NextResponse.json({ success: false, error: "Enquiry is too long." }, { status: 413 });
  }
  let body;
  try {
    const raw = await request.text();
    if (raw.length > 20000) return NextResponse.json({ success: false, error: "Enquiry is too long." }, { status: 413 });
    body = JSON.parse(raw);
    if (!body || typeof body !== "object" || Array.isArray(body)) throw new Error("Invalid body");
  } catch {
    return NextResponse.json({ success: false, error: "Please send a valid enquiry." }, { status: 400 });
  }
  // Reject oversized fields instead of silently changing an email or losing a brief.
  // The client prepends the selected service and timeline to its 10,000-character brief.
  for (const [key, max] of [["name", 150], ["email", 254], ["company", 200], ["message", 12000]] as const) {
    if (typeof body[key] === "string" && body[key].trim().length > max) {
      return NextResponse.json({ success: false, error: `The ${key} field is too long.` }, { status: 400 });
    }
  }
  const name = text(body.name, 150);
  const email = text(body.email, 254);
  const company = text(body.company, 200);
  const message = text(body.message, 12000);
  if (!name || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || !message) {
    return NextResponse.json({ success: false, error: "Name, valid email and message are required." }, { status: 400 });
  }
  const supplied = body.attribution && typeof body.attribution === "object" ? body.attribution : {};
  const attribution = {
    region: region.id, domain: region.origin,
    intent: text(supplied.intent, 100), source: text(supplied.source, 200),
    landingPath: text(supplied.landingPath, 300),
    ...Object.fromEntries(["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"].map(key => [key, text(supplied[key], 200)])),
  };
  let emailSent = false;
  let webhookSent = false;
  if (process.env.RESEND_API_KEY && process.env.NOTIFICATION_EMAIL) {
    try {
      const resend = new Resend(process.env.RESEND_API_KEY);
      const { error } = await resend.emails.send({
        from: process.env.CONTACT_FROM_EMAIL || "Coreframe Website <send@coreframetech.in>",
        to: process.env.NOTIFICATION_EMAIL,
        replyTo: email,
        subject: `[${region.label}] New AI enquiry: ${name.replace(/[\r\n]/g, " ")}`,
        html: `<h2>Enterprise AI enquiry</h2><p>Name: ${escapeHtml(name)}</p><p>Email: ${escapeHtml(email)}</p><p>Company: ${escapeHtml(company)}</p><pre>${escapeHtml(message)}</pre><h3>Attribution</h3><pre>${escapeHtml(JSON.stringify(attribution, null, 2))}</pre>`,
      });
      emailSent = !error;
      if (error) console.error("[Contact] Email delivery failed");
    } catch { console.error("[Contact] Email service unavailable"); }
  }
  if (process.env.WEBHOOK_URL) {
    try {
      const response = await fetch(process.env.WEBHOOK_URL, {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "contact_form", data: { name, email, company, message, attribution }, timestamp: new Date().toISOString(), source: "coreframe-landing" }),
        signal: AbortSignal.timeout(8000),
      });
      webhookSent = response.ok;
    } catch { console.error("[Contact] Webhook delivery failed"); }
  }
  if (!emailSent && !webhookSent) {
    return NextResponse.json({ success: false, error: "We could not deliver your enquiry. Please email info@coreframetech.in." }, { status: 503 });
  }
  return NextResponse.json({ success: true, emailSent });
}
