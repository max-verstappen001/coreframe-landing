import { NextResponse } from "next/server";

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

  return NextResponse.json({ success: true });
}
