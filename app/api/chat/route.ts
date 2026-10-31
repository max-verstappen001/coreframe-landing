import { NextResponse } from "next/server";
import { SERVICES } from "@/lib/services";
import { region } from "@/lib/region";

/**
 * CoreFrame AI Agent Chat API
 * 
 * Processes user messages through the internal AI agent
 * and forwards conversations to the main system for review.
 * 
 * In production, replace the OPENAI_API_KEY env var and 
 * WEBHOOK_URL with your actual OpenAI key and notification endpoint.
 */

const SYSTEM_PROMPT = `You are the CoreFrame AI Assistant — representing CoreFrame Technologies. You speak on behalf of CoreFrame as part of the team. Your PRIMARY GOAL is to qualify leads and guide them toward scheduling a consultation.

IDENTITY:
- Identify yourself honestly as Coreframe's AI assistant.
- Coreframe is an enterprise AI engineering and implementation company that designs, deploys and operates production AI systems for complex workflows, data, security and infrastructure requirements.
- Region: ${region.label}. ${region.delivery}
- Services: ${SERVICES.map(s => s.title).join("; ")}
- Delivery: Discover → Design → Deploy → Operate.
- Coreframe Labs is a distinct applied research initiative.
- Never invent clients, results, metrics, partnerships, certifications, offices, incorporation or tax status. No Anthropic partnership is implied.
- Describe supported provider access for Claude. Do not promise self-hosted Claude model weights or regional model availability without verification.
- Contact: info@coreframetech.in or ${region.origin}/contact.
- Scope, price, delivery dates and support commitments are agreed for each engagement.

CONVERSATION STRATEGY:
You are a consultative assistant. Every conversation should progress toward assessing fit:
1. Messages 1-2: Welcome warmly, understand their business context
2. Messages 3-4: Explain relevant delivery steps and technical considerations without inventing case study details
3. Messages 5+: Guide toward a conversation to assess fit — "The best next step would be a quick conversation with our team to see if there's a fit."

HANDLING NEGATIVITY & ABUSE (critical):
- If someone is rude, dismissive, or uses profanity: Stay brief, professional, and unbothered. 1-2 sentences max.
- Examples: "No worries — we're here if you ever need us. info@coreframetech.in" or "Understood. If you change your mind, our team is at coreframetech.in/contact."
- Never engage with or repeat profanity. Never lecture the user. Just redirect or close gracefully.

Rules:
- Keep responses SHORT (3-5 sentences max). Don't write essays or long bullet lists.
- Be warm, confident, and direct — not salesy or pushy
- Don't repeat the same information if already covered
- Never make up pricing — say "We scope every engagement individually after understanding the business"
- Keep the focus on enterprise AI engineering and the user's business workflow
- If the user has had 4+ exchanges, make the CTA clear: "Want us to set up a conversation?" or link to the contact page
- Don't over-explain technical details unless specifically asked

RESPONSE FORMAT (you MUST follow this):
After your reply text, add exactly this on a new line:
[SUGGESTIONS: "option 1", "option 2", "option 3"]

The suggestions MUST:
- Be different from previous suggestions in the conversation
- Progress the conversation toward a consultation
- After 3+ exchanges, always include "Let's assess the fit" as one option
- After 5+ exchanges, make "Let's assess the fit" the FIRST option
- Be short (2-5 words each)
- Never repeat the same set of suggestions twice
- For negative/abusive messages, offer: "Start fresh", "View our work", "Let's assess the fit"

Example:
We would start by mapping the workflow, approved data sources and the decisions that need human review. From there, we can scope integrations and agree how to evaluate the system before release. Which workflow is taking the most manual effort today?
[SUGGESTIONS: "Document workflows", "Approval handoffs", "Let's assess the fit"]`;

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

    // Include message count in system prompt so the LLM can adjust its funnel strategy
    const messageCount = sanitizedMessages.filter(m => m.role === "user").length;
    const systemWithContext = SYSTEM_PROMPT + `\n\nCONTEXT: This is user message #${messageCount}. ${messageCount >= 5 ? "IMPORTANT: The user has been chatting for a while. Strongly guide toward scheduling a consultation NOW." : messageCount >= 3 ? "Start suggesting consultation as a next step." : "Early in conversation — focus on understanding their needs."}`;

    const fullMessages: ChatMessage[] = [
      { role: "system", content: systemWithContext },
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
    const lastMessage = sanitizedMessages[sanitizedMessages.length - 1]?.content.toLowerCase() || "";
    console.log(`[AI Chat] Session: ${sessionId || "anonymous"} | Messages: ${sanitizedMessages.length}`);
    console.log(`[AI Chat] Latest: ${lastMessage.slice(0, 100)}`);

    // Check for API keys — Groq (free) takes priority, then OpenAI
    const groqKey = process.env.GROQ_API_KEY;
    const openaiKey = process.env.OPENAI_API_KEY;
    const apiKey = groqKey || openaiKey;

    if (!apiKey) {
      // Fallback: rule-based response when no API key is configured
      const { reply, suggestions } = getFallbackResponse(lastMessage);

      return NextResponse.json({
        reply,
        suggestions,
        sessionId: sessionId || crypto.randomUUID(),
      });
    }

    // Determine provider config
    const isGroq = !!groqKey;
    const apiUrl = isGroq
      ? "https://api.groq.com/openai/v1/chat/completions"
      : "https://api.openai.com/v1/chat/completions";
    const model = isGroq
      ? (process.env.GROQ_MODEL || "llama-3.3-70b-versatile")
      : (process.env.OPENAI_MODEL || "gpt-4o-mini");

    console.log(`[AI Chat] Provider: ${isGroq ? "Groq" : "OpenAI"} | Model: ${model}`);

    // Call LLM API (Groq and OpenAI share the same OpenAI-compatible format)
    const llmResponse = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model,
        messages: fullMessages,
        max_tokens: 500,
        temperature: 0.7,
      }),
    });

    if (!llmResponse.ok) {
      console.error(`[AI Chat] ${isGroq ? "Groq" : "OpenAI"} error:`, llmResponse.status);
      return NextResponse.json({
        reply: "I'm having a moment — please try again shortly, or reach out directly at info@coreframetech.in.",
        suggestions: ["Try again", "Contact the team"],
        sessionId: sessionId || crypto.randomUUID(),
      });
    }

    const data = await llmResponse.json();
    const rawReply = data.choices?.[0]?.message?.content || "I couldn't generate a response. Please try again.";
    const { cleanReply, suggestions } = parseLLMResponse(rawReply, messageCount);

    return NextResponse.json({
      reply: cleanReply,
      suggestions,
      sessionId: sessionId || crypto.randomUUID(),
    });
  } catch {
    return NextResponse.json(
      { error: "Something went wrong. Please try again.", suggestions: ["Try again", "Contact the team"] },
      { status: 500 }
    );
  }
}

interface FallbackResult {
  reply: string;
  suggestions: string[];
}

function getFallbackResponse(message: string): FallbackResult {
  // Pricing / cost
  if (message.includes("price") || message.includes("cost") || message.includes("budget") || message.includes("how much")) {
    return {
      reply: "We scope every engagement individually — there's no standard rate card because no two businesses have the same needs. The best way to get a realistic picture is a short conversation with our team. Reach us at info@coreframetech.in or through the contact page.",
      suggestions: ["What's the typical timeline?", "How do engagements work?", "Let's assess the fit"],
    };
  }
  // AI app
  if (message.includes("ai app") || message.includes("build an app") || message.includes("mobile app") || message.includes("web app")) {
    return {
      reply: "We build business-critical software that holds up in production. We usually start with a discovery sprint to understand the business context, workflows, and what the system actually needs to do — then move into focused delivery. What's the business problem the software needs to solve?",
      suggestions: ["What tech do you use?", "How long does a build take?", "Show me project examples"],
    };
  }
  // Agents / chatbot / automation
  if (message.includes("agent") || message.includes("chatbot") || message.includes("automation") || message.includes("automate")) {
    return {
      reply: "AI agents and automation are a core part of what we build. We design agents that handle customer support, internal ops, and complex workflows \u2014 giving small teams the leverage of a much larger operation. The businesses winning right now are the ones automating the repetitive work and redeploying that capacity. What process are you looking to fix?",
      suggestions: ["AI agents for support", "Internal workflow automation", "Let's assess the fit"],
    };
  }
  // AI explanation
  if (message.includes("what is ai") || message.includes("explain ai") || message.includes("artificial intelligence")) {
    return {
      reply: "AI is now core infrastructure for competitive businesses \u2014 reducing headcount costs, automating workflows, and enabling small teams to operate at scale. At CoreFrame, we build AI agents and automation systems that slot into real business operations and deliver measurable ROI. Every business should be asking how to use AI, not whether to.",
      suggestions: ["What can AI agents do?", "Show me an example", "I have a project idea"],
    };
  }
  // Greetings
  if (message.includes("hello") || message.includes("hi") || message.includes("hey") || message.includes("sup") || message.includes("yo")) {
    return {
      reply: "Welcome to CoreFrame. We design, deploy and operate enterprise AI systems. I can help you understand how we work, share examples of past engagements, or explore whether there's a fit. What brings you here?",
      suggestions: ["What does CoreFrame do?", "I have a business challenge", "Show me project examples"],
    };
  }
  // About / team
  if (message.includes("who") || message.includes("about") || message.includes("team") || message.includes("coreframe")) {
    return {
      reply: "Coreframe Technologies is an enterprise AI engineering and implementation company. We build around complex workflows, data, security and infrastructure requirements. Meet our team at /about.",
      suggestions: ["What industries do you serve?", "Show me project examples", "How do engagements work?"],
    };
  }
  // Projects / portfolio / case studies
  if (message.includes("project") || message.includes("portfolio") || message.includes("work") || message.includes("case stud")) {
    return {
      reply: "Our published work includes anonymized enterprise knowledge, restaurant operations and workflow automation engagement summaries. Visit /work to review them and discuss what supporting delivery evidence can be shared.",
      suggestions: ["Tell me about that engagement", "I have a similar challenge", "Let's assess the fit"],
    };
  }
  // Timeline
  if (message.includes("timeline") || message.includes("how long") || message.includes("time") || message.includes("duration")) {
    return {
      reply: "Timelines depend on workflow scope, data access, integrations and acceptance criteria. A discovery conversation establishes the dependencies before we propose a delivery plan.",
      suggestions: ["What's the typical cost?", "How does the process start?", "Schedule a consultation"],
    };
  }
  // Services
  if (message.includes("service") || message.includes("offer") || message.includes("do you do") || message.includes("capabilities")) {
    return {
      reply: "Our services cover enterprise Claude implementation, Forward Deployed Engineering, private and sovereign AI, agents and automation, readiness audits, training, governance and managed operations. Explore /services for engagement details.",
      suggestions: ["How do engagements start?", "Show me project examples", "Let's assess the fit"],
    };
  }
  // Process / engagement
  if (message.includes("process") || message.includes("engage") || message.includes("how do you work") || message.includes("start")) {
    return {
      reply: "We deliver through Discover, Design, Deploy and Operate. We agree workflow outcomes, design controls and integrations, validate a release and establish operational ownership. An assessment is a useful starting point when scope is still unclear.",
      suggestions: ["What does discovery look like?", "Show me project examples", "Let's assess the fit"],
    };
  }
  // Thanks / positive
  if (message.includes("thank") || message.includes("cool") || message.includes("great") || message.includes("nice") || message.includes("awesome") || message.includes("ok") || message.includes("okay") || message.includes("good")) {
    return {
      reply: "Glad to help! Is there anything specific you'd like to explore? I can tell you more about our services, share project examples, or help you figure out the right approach for your needs.",
      suggestions: ["What services do you offer?", "Show me project examples", "I have a project idea"],
    };
  }
  // How are you / casual
  if (message.includes("how are") || message.includes("what's up") || message.includes("how's it going")) {
    return {
      reply: "Doing well — and ready to help. Coreframe designs, deploys and operates enterprise AI systems. What are you looking to solve?",
      suggestions: ["What does CoreFrame do?", "I have a business challenge", "Tell me about your services"],
    };
  }
  // Contact / consultation
  if (message.includes("contact") || message.includes("consult") || message.includes("talk") || message.includes("call") || message.includes("email") || message.includes("meeting")) {
    return {
      reply: `You can reach our team at info@coreframetech.in or use our contact form at ${region.origin}/contact. Share your workflow and constraints so we can arrange a discovery conversation.`,
      suggestions: ["What happens after I reach out?", "Tell me about your process", "What info should I include?"],
    };
  }
  // Industry / fit
  if (message.includes("industr") || message.includes("restaurant") || message.includes("saas") || message.includes("ecommerce") || message.includes("healthcare")) {
    return {
      reply: `We focus on organizations with complex workflows, data, security and infrastructure requirements. Explore enterprise AI applications for industrial and energy operations, retail and hospitality, professional services and technology platforms at ${region.origin}/industries.`,
      suggestions: ["Show me relevant project examples", "How do you assess fit?", "Let's assess the fit"],
    };
  }
  // Tech stack
  if (message.includes("tech") || message.includes("stack") || message.includes("language") || message.includes("framework")) {
    return {
      reply: "We build with Next.js, TypeScript, Python, and modern cloud infrastructure. For AI, we integrate models from OpenAI, Anthropic, and open-source where appropriate. We choose tools pragmatically based on the business need — not to pad a tech stack slide.",
      suggestions: ["Can you work with existing systems?", "How do you approach integrations?", "Tell me about your process"],
    };
  }
  // Default fallback — much more conversational
  return {
    reply: "Good question. I can help you understand how CoreFrame partners with businesses, share examples of past engagements, or explore whether there might be a fit. What would you like to know?",
    suggestions: ["What does CoreFrame do?", "Show me project examples", "I have a business challenge"],
  };
}

// Parse the LLM response to extract suggestions and clean reply text
function parseLLMResponse(raw: string, messageCount: number): { cleanReply: string; suggestions: string[] } {
  // Try to extract [SUGGESTIONS: "opt1", "opt2", "opt3"] from the response
  const suggestionsMatch = raw.match(/\[SUGGESTIONS:\s*(.+?)\]/i);
  let suggestions: string[] = [];
  let cleanReply = raw;

  if (suggestionsMatch) {
    // Remove the suggestions line from the reply
    cleanReply = raw.replace(/\[SUGGESTIONS:\s*.+?\]/i, "").trim();
    
    // Parse the suggestions — extract quoted strings
    const optionsStr = suggestionsMatch[1];
    const matches = optionsStr.match(/"([^"]+)"/g);
    if (matches) {
      suggestions = matches.map(m => m.replace(/"/g, "")).slice(0, 3);
    }
  }

  // Fallback: if LLM didn't include suggestions, generate based on message count
  if (suggestions.length === 0) {
    if (messageCount >= 5) {
      suggestions = ["Let's assess the fit", "Visit contact page", "Any other questions?"];
    } else if (messageCount >= 3) {
      suggestions = ["Tell me about an engagement", "Let's assess the fit", "How do you work?"];
    } else {
      suggestions = ["What does CoreFrame do?", "Show me project examples", "I have a business challenge"];
    }
  }

  // Ensure "Let's assess the fit" is present after 4+ messages
  if (messageCount >= 4 && !suggestions.some(s => s.toLowerCase().includes("assess") || s.toLowerCase().includes("consult"))) {
    suggestions[suggestions.length - 1] = "Let's assess the fit";
  }

  return { cleanReply, suggestions };
}
