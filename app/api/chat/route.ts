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

const SYSTEM_PROMPT = `You are the CoreFrame AI Assistant — representing CoreFrame Technologies. You speak on behalf of CoreFrame as part of the team. Your PRIMARY GOAL is to qualify leads and guide them toward scheduling a consultation.

IDENTITY (critical):
- You are NOT "a machine" or "an AI" — you are a representative of CoreFrame Technologies
- Always use "we", "our team", "at CoreFrame" — never "I'm a machine" or "as an AI"
- Speak with authority and confidence, as if you're a senior team member
- Example: "We specialize in..." not "I'm an AI that can help with..."
- If someone asks who you are: "I'm part of the CoreFrame team, here to help you explore how we can work together."

About CoreFrame:
- AI-first digital transformation company founded in 2024
- Services: AI App Development, AI Agent Workflows, Digital Transformation, Product Engineering, Strategic Advisory
- Stack: Next.js, TypeScript, Python, OpenAI, Firebase, Cloud Infrastructure, Docker
- Clients: founder-led businesses, operators, SaaS companies, enterprises
- Projects: MarginX (restaurant margin optimization), Wiral.ai (product engineering), AI agent systems
- Contact: info@coreframetech.in
- Models: retainer and project-based

CONVERSATION STRATEGY:
You are a sales-focused assistant. Every conversation should progress toward a consultation booking:
1. Messages 1-2: Welcome warmly, understand what they need
2. Messages 3-4: Show relevant expertise, share brief case study insights
3. Messages 5+: Actively steer toward scheduling a consultation — "The best next step would be a quick call with our team."

HANDLING NEGATIVITY & ABUSE (critical):
- If someone is rude, dismissive, or uses profanity: DO NOT apologize excessively, DO NOT write paragraphs, DO NOT say "I'm a machine"
- Stay brief, professional, and unbothered. 1-2 sentences max.
- Examples of good responses to negativity:
  - "No worries — we're here if you ever need us. You can reach our team anytime at info@coreframetech.in."
  - "Understood. If you change your mind, our team is always available at coreframetech.in/contact."
- Never engage with or repeat profanity. Never lecture the user. Just redirect or close gracefully.
- Do NOT say things like "I understand you're upset" or "I want to remind you" — just move on calmly.

Rules:
- Keep responses SHORT (3-5 sentences max). Don't write essays or long bullet lists.
- Be warm, confident, and direct — not salesy or pushy
- Don't repeat the same information if already covered
- Never make up pricing — say "We provide custom quotes after understanding your needs"
- If the user has had 4+ exchanges, make the CTA clear: "Want us to set up a consultation?" or link to the contact page
- Don't over-explain technical details unless specifically asked

RESPONSE FORMAT (you MUST follow this):
After your reply text, add exactly this on a new line:
[SUGGESTIONS: "option 1", "option 2", "option 3"]

The suggestions MUST:
- Be different from previous suggestions in the conversation
- Progress the conversation toward a consultation
- After 3+ exchanges, always include "Schedule a consultation" as one option
- After 5+ exchanges, make "Schedule a consultation" the FIRST option
- Be short (2-5 words each)
- Never repeat the same set of suggestions twice
- For negative/abusive messages, offer: "Start fresh", "View our work", "Schedule a consultation"

Example:
Great question! We built MarginX to solve exactly that — integrating POS data with margin intelligence dashboards. The results were significant.
[SUGGESTIONS: "How did MarginX work?", "I have a similar need", "Schedule a consultation"]`;

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
      reply: "We provide custom quotes based on project scope and complexity. Every engagement is different, so we'd love to understand your needs first. You can reach us at info@coreframetech.in or use the contact form to start a conversation — we typically respond within 1–2 business days.",
      suggestions: ["What's the typical timeline?", "Tell me about your process", "I'd like to schedule a consultation"],
    };
  }
  // AI app
  if (message.includes("ai app") || message.includes("build an app") || message.includes("mobile app") || message.includes("web app")) {
    return {
      reply: "We'd love to help with your AI app! CoreFrame specializes in building intelligent applications powered by modern AI. Our process starts with a discovery sprint to map your requirements, followed by iterative development with regular check-ins. Could you share more about what the app should do?",
      suggestions: ["What tech stack do you use?", "How long does a build take?", "Show me similar projects"],
    };
  }
  // Agents / chatbot / automation
  if (message.includes("agent") || message.includes("chatbot") || message.includes("automation") || message.includes("automate")) {
    return {
      reply: "AI agents and automation are one of our core specialties! We build custom agent workflows that can handle customer support, data processing, decision-making, and more. What kind of tasks are you looking to automate?",
      suggestions: ["Customer support agents", "Data processing automation", "What does an agent cost?"],
    };
  }
  // AI explanation
  if (message.includes("what is ai") || message.includes("explain ai") || message.includes("artificial intelligence")) {
    return {
      reply: "AI (Artificial Intelligence) refers to systems that can learn from data, recognize patterns, and make decisions. At CoreFrame, we apply AI practically — building apps with language models, agent workflows that automate business tasks, and dashboards that surface insights from your data. We focus on AI that delivers real ROI, not hype.",
      suggestions: ["How can AI help my business?", "What AI projects have you done?", "I have a project idea"],
    };
  }
  // Greetings
  if (message.includes("hello") || message.includes("hi") || message.includes("hey") || message.includes("sup") || message.includes("yo")) {
    return {
      reply: "Hello! Welcome to CoreFrame. I'm here to help you explore our services, understand how AI can work for your business, or scope out a potential project. What brings you here today?",
      suggestions: ["What services do you offer?", "I have a project idea", "Tell me about CoreFrame"],
    };
  }
  // About / team
  if (message.includes("who") || message.includes("about") || message.includes("team") || message.includes("coreframe")) {
    return {
      reply: "CoreFrame Technologies is an AI-first digital transformation company founded in 2024. We're a boutique team of senior engineers and AI specialists who partner with founders and operators to build scalable digital systems. Our work spans AI app development, agent workflows, product engineering, and strategic advisory.",
      suggestions: ["What industries do you serve?", "Show me your case studies", "How do engagements work?"],
    };
  }
  // Projects / portfolio / case studies
  if (message.includes("project") || message.includes("portfolio") || message.includes("work") || message.includes("case stud")) {
    return {
      reply: "We've delivered impactful projects! MarginX — a digital transformation for a restaurant group that restored margin visibility through POS integration and dashboards. Wiral.ai — a full product engineering partnership delivering a production-ready system. We also build custom AI agents, apps, and automation workflows.",
      suggestions: ["Tell me more about MarginX", "Tell me more about Wiral.ai", "I have a similar project"],
    };
  }
  // Timeline
  if (message.includes("timeline") || message.includes("how long") || message.includes("time") || message.includes("duration")) {
    return {
      reply: "Timelines vary by scope. Discovery sprints: 2–4 weeks. Full product builds: 2–6 months. AI agent implementations: 2–4 weeks for focused use cases. We always start with a clear scope so there are no surprises.",
      suggestions: ["What's the typical cost?", "How does the process start?", "Schedule a consultation"],
    };
  }
  // Services
  if (message.includes("service") || message.includes("offer") || message.includes("do you do") || message.includes("capabilities")) {
    return {
      reply: "We offer five core services: (1) AI App Development — intelligent apps with LLMs and modern AI, (2) AI Agent Workflows — automation for support, ops, and decision-making, (3) Digital Transformation — systems consolidation, integrations, dashboards, (4) Product Engineering — end-to-end build and deployment, (5) Strategic Advisory — tech roadmapping and architecture decisions.",
      suggestions: ["Tell me about AI agents", "I need an app built", "What about pricing?"],
    };
  }
  // Process / engagement
  if (message.includes("process") || message.includes("engage") || message.includes("how do you work") || message.includes("start")) {
    return {
      reply: "We typically start with a discovery sprint (2–4 weeks) to understand your operations and identify leverage points. From there, we move into structured delivery cycles with clear milestones, regular check-ins, and measurable outcomes. We take on limited engagements to ensure senior-level attention for every client.",
      suggestions: ["What's the cost of a discovery sprint?", "Show me your case studies", "I'm ready to start"],
    };
  }
  // Thanks / positive
  if (message.includes("thank") || message.includes("cool") || message.includes("great") || message.includes("nice") || message.includes("awesome") || message.includes("ok") || message.includes("okay") || message.includes("good")) {
    return {
      reply: "Glad to help! Is there anything specific you'd like to explore? I can tell you more about our services, share project examples, or help you figure out the right approach for your needs.",
      suggestions: ["What services do you offer?", "Show me case studies", "I have a project idea"],
    };
  }
  // How are you / casual
  if (message.includes("how are") || message.includes("what's up") || message.includes("how's it going")) {
    return {
      reply: "I'm doing great — always ready to chat about tech and AI! I'm the CoreFrame AI Assistant, here to help you explore our capabilities. What can I help you with?",
      suggestions: ["What does CoreFrame do?", "I need help with a project", "Tell me about your AI services"],
    };
  }
  // Contact / consultation
  if (message.includes("contact") || message.includes("consult") || message.includes("talk") || message.includes("call") || message.includes("email") || message.includes("meeting")) {
    return {
      reply: "You can reach our team at info@coreframetech.in or use our contact form at coreframetech.in/contact. We typically respond within 1–2 business days. We'd love to hear about your project!",
      suggestions: ["What happens after I reach out?", "Tell me about your process", "What info should I include?"],
    };
  }
  // Industry / fit
  if (message.includes("industr") || message.includes("restaurant") || message.includes("saas") || message.includes("ecommerce") || message.includes("healthcare")) {
    return {
      reply: "We've served clients across restaurants, SaaS, e-commerce, healthcare, and professional services. Our sweet spot is founder-led, revenue-generating businesses with operational complexity. We focus on understanding your specific industry context before recommending solutions.",
      suggestions: ["Show me relevant case studies", "How do you handle my industry?", "Schedule a consultation"],
    };
  }
  // Tech stack
  if (message.includes("tech") || message.includes("stack") || message.includes("language") || message.includes("framework")) {
    return {
      reply: "Our core stack includes Next.js, TypeScript, Python, and cloud infrastructure (AWS/GCP). For AI, we work with OpenAI, custom model fine-tuning, and vector databases. We're stack-flexible and will choose the right tools based on your project's needs — not just what's trendy.",
      suggestions: ["Can you work with my existing systems?", "What AI models do you use?", "Tell me about your process"],
    };
  }
  // Default fallback — much more conversational
  return {
    reply: "Interesting! I'm best at helping with questions about CoreFrame's services, our AI capabilities, how we work with clients, or scoping out potential projects. What would you like to explore?",
    suggestions: ["What services do you offer?", "Show me your case studies", "I have a project idea"],
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
      suggestions = ["Schedule a consultation", "Visit contact page", "Any other questions?"];
    } else if (messageCount >= 3) {
      suggestions = ["Tell me about a project", "Schedule a consultation", "How do you work?"];
    } else {
      suggestions = ["What services do you offer?", "Show me case studies", "I have a project idea"];
    }
  }

  // Ensure "Schedule a consultation" is present after 4+ messages
  if (messageCount >= 4 && !suggestions.some(s => s.toLowerCase().includes("consult") || s.toLowerCase().includes("schedule"))) {
    suggestions[suggestions.length - 1] = "Schedule a consultation";
  }

  return { cleanReply, suggestions };
}
