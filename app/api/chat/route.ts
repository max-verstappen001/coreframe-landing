import { NextResponse } from "next/server";

/**
 * CoreFrame AI Agent Chat API
 * 
 * Processes user messages through the internal AI agent
 * and forwards conversations to the main system for review.
 * 
 * In production, replace the OPENAI_API_KEY env var and 
 * WEBHOOK_URL with your actual OpenAI key and notification endpoint.
 */

const SYSTEM_PROMPT = `You are the CoreFrame AI Assistant — the intelligent front-end agent for CoreFrame Technologies. Your role is to help potential clients understand what CoreFrame does, how we work, and whether we're a good fit for their needs.

About CoreFrame:
- CoreFrame is an AI-first digital transformation company founded in 2024
- We specialize in: AI App Development, AI Agent Workflows, Digital Transformation, Product Engineering, and Strategic Advisory
- Our stack: Next.js, TypeScript, Python, OpenAI, Firebase, Cloud Infrastructure, Docker
- We serve founder-led businesses, operators, SaaS companies, and enterprises
- We have completed projects including MarginX (restaurant margin optimization), Wiral.ai (product engineering), and various AI agent systems
- Contact: info@coreframetech.in
- We operate on retainer and project-based models

Your behavior:
1. Be helpful, professional, and concise
2. If a user describes their project needs, help them understand how CoreFrame can help
3. If they want a custom AI solution, collect their requirements (project type, timeline, budget range, key features)
4. Generate a preliminary project plan when you have enough information
5. Always encourage them to schedule a consultation for detailed planning
6. If you don't know something specific, be honest and direct them to contact the team
7. Never make up pricing — say "We'll provide a custom quote after understanding your needs"
8. Be enthusiastic about AI possibilities but realistic about timelines

Key services to recommend based on user needs:
- Need an AI chatbot/assistant → AI Agent Development
- Need data analysis/dashboards → Digital Transformation + Applied AI
- Need a mobile/web app with AI → AI App Development
- Need system modernization → Digital Transformation
- Need strategic tech guidance → Strategic Advisory Partnership`;

interface ChatMessage {
  role: "user" | "assistant" | "system";
  content: string;
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { messages, sessionId } = body;

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json(
        { error: "Messages array is required." },
        { status: 400 }
      );
    }

    // Sanitize messages
    const sanitizedMessages: ChatMessage[] = messages.map((m: ChatMessage) => ({
      role: m.role === "user" ? "user" : "assistant",
      content: String(m.content).slice(0, 2000),
    }));

    const fullMessages: ChatMessage[] = [
      { role: "system", content: SYSTEM_PROMPT },
      ...sanitizedMessages,
    ];

    // Forward to notification webhook (async, non-blocking)
    const webhookUrl = process.env.WEBHOOK_URL;
    if (webhookUrl) {
      fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "chat_message",
          sessionId: sessionId || "anonymous",
          latestMessage: sanitizedMessages[sanitizedMessages.length - 1]?.content,
          messageCount: sanitizedMessages.length,
          timestamp: new Date().toISOString(),
        }),
      }).catch(() => {
        // Non-blocking — don't fail the chat if webhook fails
      });
    }

    // Log conversation for review
    console.log(`[AI Chat] Session: ${sessionId || "anonymous"} | Messages: ${sanitizedMessages.length}`);
    console.log(`[AI Chat] Latest: ${sanitizedMessages[sanitizedMessages.length - 1]?.content?.slice(0, 100)}`);

    // Check for OpenAI API key
    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
      // Fallback: intelligent rule-based response when no API key is configured
      const lastMessage = sanitizedMessages[sanitizedMessages.length - 1]?.content.toLowerCase() || "";
      let reply = getFallbackResponse(lastMessage);

      return NextResponse.json({
        reply,
        sessionId: sessionId || crypto.randomUUID(),
      });
    }

    // Call OpenAI API
    const openaiResponse = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: process.env.OPENAI_MODEL || "gpt-4o-mini",
        messages: fullMessages,
        max_tokens: 500,
        temperature: 0.7,
      }),
    });

    if (!openaiResponse.ok) {
      console.error("[AI Chat] OpenAI error:", openaiResponse.status);
      return NextResponse.json({
        reply: "I'm having a moment — please try again shortly, or reach out directly at info@coreframetech.in.",
        sessionId: sessionId || crypto.randomUUID(),
      });
    }

    const data = await openaiResponse.json();
    const reply = data.choices?.[0]?.message?.content || "I couldn't generate a response. Please try again.";

    return NextResponse.json({
      reply,
      sessionId: sessionId || crypto.randomUUID(),
    });
  } catch {
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}

function getFallbackResponse(message: string): string {
  if (message.includes("price") || message.includes("cost") || message.includes("budget") || message.includes("how much")) {
    return "We provide custom quotes based on project scope and complexity. Every engagement is different, so we'd love to understand your needs first. You can reach us at info@coreframetech.in or use the contact form to start a conversation — we typically respond within 1–2 business days.";
  }
  if (message.includes("ai app") || message.includes("build an app") || message.includes("mobile app")) {
    return "We'd love to help with your AI app! CoreFrame specializes in building intelligent applications powered by modern AI. Our process starts with a discovery sprint to map your requirements, followed by iterative development with regular check-ins. Could you share more about what the app should do? I'll help outline a preliminary approach.";
  }
  if (message.includes("agent") || message.includes("chatbot") || message.includes("automation")) {
    return "AI agents and automation are one of our core specialties! We build custom agent workflows that can handle customer support, data processing, decision-making, and more. What kind of tasks are you looking to automate? The more detail you share, the better I can guide you toward the right solution.";
  }
  if (message.includes("hello") || message.includes("hi") || message.includes("hey")) {
    return "Hello! Welcome to CoreFrame Technologies. I'm the CoreFrame AI Assistant — I can help you understand our services, explore how AI can benefit your business, or help you scope out a project. What brings you here today?";
  }
  if (message.includes("who") || message.includes("about") || message.includes("team")) {
    return "CoreFrame Technologies is an AI-first digital transformation company. We're a boutique team of senior engineers and AI specialists who partner with founders and operators to build scalable digital systems. Our work spans AI app development, agent workflows, product engineering, and strategic advisory. Would you like to know more about any specific area?";
  }
  if (message.includes("project") || message.includes("portfolio") || message.includes("work")) {
    return "We've delivered some exciting projects! MarginX — a digital transformation for a restaurant group that restored margin visibility through POS integration and intelligent dashboards. Wiral.ai — a full product engineering partnership delivering a stable, production-ready system. We also build custom AI agents, apps, and automation workflows. Check out our Case Studies page for details, or tell me about your project and I'll help assess how we can help!";
  }
  if (message.includes("timeline") || message.includes("how long") || message.includes("time")) {
    return "Timelines vary by project scope. A discovery sprint typically takes 2–4 weeks. Full product builds range from 2–6 months depending on complexity. AI agent implementations can be as quick as 2–4 weeks for focused use cases. Share your project details and I can give you a better estimate!";
  }
  return "Thanks for reaching out! I'm the CoreFrame AI Assistant. I can help you explore our AI development services, understand our process, or discuss your project needs. You can ask me about our capabilities in AI apps, agent workflows, digital transformation, or product engineering. What would you like to know?";
}
