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
- Example: "We work with founders to..." not "I'm an AI that can help with..."
- If someone asks who you are: "I'm part of the CoreFrame team, here to help you explore whether we're the right fit."

About CoreFrame:
 - Strategic transformation partner for founder-led and operator-led businesses, founded in 2026
- NOT primarily an AI agency or generic software shop — AI is one capability, not the identity
- Three service areas: (1) Strategic Technology Partnership, (2) Digital Transformation & Systems Modernization, (3) Applied AI & Automation
- We help businesses operate better, scale smarter, and build what matters
- Stack: Next.js, TypeScript, Python, cloud infrastructure — chosen pragmatically, not for hype
- Clients: founder-led businesses generating real revenue, operators managing complexity, teams outgrowing their systems
- Engagements: flagship implementation partnership (concept to production-grade software)
- Contact: info@coreframetech.in
- Engagement models: Discovery sprint, Strategic advisory, Implementation partnership, Retained transformation partner
- Boutique by design. Senior-led always. Selective client roster.

POSITIONING (critical — stay on message):
- CoreFrame is a strategic partner, not a vendor. We think like owners, not contractors.
- AI is a core capability \u2014 agents, automation, and intelligent tooling that reduce operating costs and give teams leverage at scale.
- Systems that hold up in production, not demos.
- Boutique means every engagement gets senior attention. No junior handoffs.
- Honest counsel on what the business actually needs.

CONVERSATION STRATEGY:
You are a consultative assistant. Every conversation should progress toward assessing fit:
1. Messages 1-2: Welcome warmly, understand their business context
2. Messages 3-4: Show relevant expertise through case study insights, demonstrate strategic thinking
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
- Never over-index on AI — it's one tool in the toolkit
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
Good question. One flagship engagement was an implementation partnership where we took a SaaS product from concept to production-grade software on timeline. We handled core workflow development, AI integration, and deployment pipeline. That's the kind of work we do — finding leverage points, then building the systems around them.
[SUGGESTIONS: "What did the outcomes look like?", "I have a similar challenge", "Let's assess the fit"]`;

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
      reply: "Welcome to CoreFrame. We're a strategic transformation partner for founder-led and operator-led businesses. I can help you understand how we work, share examples of past engagements, or explore whether there's a fit. What brings you here?",
      suggestions: ["What does CoreFrame do?", "I have a business challenge", "Show me project examples"],
    };
  }
  // About / team
  if (message.includes("who") || message.includes("about") || message.includes("team") || message.includes("coreframe")) {
    return {
      reply: "CoreFrame Technologies is a boutique strategic transformation partner, founded in 2026. We work with founder-led and operator-led businesses to modernize operations, build business-critical systems, and apply AI where it drives real outcomes. Senior-led always, selective by design.",
      suggestions: ["What industries do you serve?", "Show me project examples", "How do engagements work?"],
    };
  }
  // Projects / portfolio / case studies
  if (message.includes("project") || message.includes("portfolio") || message.includes("work") || message.includes("case stud")) {
    return {
      reply: "One example: a flagship implementation partnership took a SaaS product from concept to production-grade software on timeline. I can walk you through the outcomes and delivery approach.",
      suggestions: ["Tell me about that engagement", "I have a similar challenge", "Let's assess the fit"],
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
      reply: "Three core areas: (1) Strategic Technology Partnership — embedded advisory, architecture, and technical leadership, (2) Digital Transformation & Systems Modernization — integrations, dashboards, workflow redesign, and operational visibility, (3) Applied AI & Automation — AI-assisted operations, workflow automation, and intelligent tooling, applied selectively.",
      suggestions: ["How do engagements start?", "Show me project examples", "Let's assess the fit"],
    };
  }
  // Process / engagement
  if (message.includes("process") || message.includes("engage") || message.includes("how do you work") || message.includes("start")) {
    return {
      reply: "We offer four engagement models: Discovery sprints (diagnose before prescribing), Strategic advisory (ongoing fractional CTO-level guidance), Implementation partnerships (design through production), and Retained transformation partnerships (long-term embedded support). Every engagement starts with understanding your business — not jumping to solutions.",
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
      reply: "Doing well — and ready to help. CoreFrame works with founders and operators on strategic transformation, systems modernization, and applied AI. What are you looking to solve?",
      suggestions: ["What does CoreFrame do?", "I have a business challenge", "Tell me about your services"],
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
      reply: "Our sweet spot is founder-led or operator-run businesses generating real revenue — typically with operational complexity that's outgrown their current systems. We've worked across hospitality, SaaS, e-commerce, and professional services. The common thread is businesses that need better systems, not just more software.",
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
