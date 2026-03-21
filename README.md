# CoreFrame Technologies — Landing Website

A premium dark-themed AI-first landing website for **CoreFrame Technologies**, built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion. Features an integrated AI chatbot agent, project portfolio, team profiles, and a real-time notification system.

---

## Table of Contents

- [Features](#features)
- [Architecture](#architecture)
- [Pages & Routes](#pages--routes)
- [AI Chat Agent](#ai-chat-agent)
- [Notification System](#notification-system)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Project Structure](#project-structure)
- [Tech Stack](#tech-stack)
- [Customization](#customization)

---

## Features

### Core Website
- **Dark Premium UI** — Sophisticated dark theme with lime green (#c8ff00) accent, noise texture, glass effects
- **Responsive Design** — Mobile-first with adaptive layouts for all screen sizes
- **Smooth Animations** — Framer Motion scroll-triggered reveals, stagger effects, parallax, 3D card tilt
- **Smooth Scrolling** — Lenis-powered butter-smooth scroll experience

### AI Chat Agent
- **Floating AI Assistant** — Persistent chat widget on every page for instant user interaction
- **Intelligent Responses** — Connects to OpenAI GPT-4 for context-aware conversations about CoreFrame's services
- **Smart Fallback** — Rule-based responses when no API key is configured
- **Quick Actions** — Pre-built conversation starters for common questions
- **Session Tracking** — Maintains conversation context across messages
- **Real-time Notifications** — Forwards all conversations to the host via webhooks

### Project Portfolio
- **Category Filtering** — Browse projects by: AI Apps, AI Agents, AI Projects, Digital Transformation
- **Status Indicators** — Completed, In Progress, Ongoing status badges
- **Tech Stack Tags** — Visual technology stack for each project
- **Direct Links** — Case study links for detailed project breakdowns

### Team & Experience
- **Team Profiles** — Founder, CTO, and AI Lead with direct contact info
- **AI Expertise Cards** — LLMs, Agent Development, Computer Vision, Data Analytics
- **Company Timeline** — Visual journey from founding to current growth
- **Experience Stats** — Animated counters for key metrics

### Contact System
- **Enhanced Contact Form** — Name, email, company, and message fields with validation
- **Team Directory** — Direct email contacts for every team member
- **Webhook Integration** — All submissions forwarded to owner in real-time
- **Success States** — Animated confirmation with Framer Motion

### Partners & Investors
- **Technology Partners** — OpenAI, Google Cloud, Vercel, Anthropic
- **Investor Info** — Bootstrapped status and advisory board
- **Trust Signals** — Logo marquee of 13 technology brands

---

## Architecture

```
┌─────────────────────────────────────────────────┐
│                    Client                        │
│  ┌───────────┐  ┌──────────┐  ┌──────────────┐  │
│  │  Pages &   │  │ AI Chat  │  │   Contact    │  │
│  │  Sections  │  │  Widget  │  │    Forms     │  │
│  └─────┬─────┘  └────┬─────┘  └──────┬───────┘  │
│        │              │               │          │
└────────┼──────────────┼───────────────┼──────────┘
         │              │               │
    ┌────▼────┐   ┌─────▼─────┐  ┌──────▼──────┐
    │  Static │   │ /api/chat │  │/api/contact  │
    │  Pages  │   │  (AI API) │  │  (Form API)  │
    └─────────┘   └─────┬─────┘  └──────┬───────┘
                        │               │
                  ┌─────▼─────┐  ┌──────▼──────┐
                  │  OpenAI   │  │  Webhook/    │
                  │  GPT-4    │  │  Notification│
                  └───────────┘  └─────────────┘
                                       │
                              ┌────────▼────────┐
                              │  Host Receives  │
                              │  (Slack/Discord/ │
                              │   Custom URL)   │
                              └─────────────────┘
```

---

## Pages & Routes

| Path | Description |
|------|-------------|
| `/` | Homepage — Hero, services, experience, projects showcase, investors, FAQ, CTA |
| `/about` | About page — Team profiles, AI expertise, experience stats, company timeline |
| `/projects` | Projects portfolio — Filterable grid of AI apps, agents, projects |
| `/case-studies` | Case studies listing — implementation partnership overview |
| `/case-studies/wiral` | Implementation partnership deep dive — Product engineering case study |
| `/contact` | Contact form — Enhanced with team directory and direct contacts |

### API Routes

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/chat` | POST | AI chat agent — processes messages, returns intelligent responses |
| `/api/contact` | POST | Contact form — validates and forwards submissions |
| `/api/notify` | POST | Notification hub — forwards events to webhooks/email |

---

## AI Chat Agent

The AI chat agent is a floating widget that appears on every page. It provides instant, intelligent responses to user queries about CoreFrame's services.

### How It Works

1. **User sends a message** → Widget POSTs to `/api/chat`
2. **Server processes** → Prepends system prompt with CoreFrame context
3. **OpenAI generates response** → Contextual, helpful reply returned
4. **Notification sent** → Webhook fires to alert the host
5. **User sees response** → Animated message appears in chat

### Capabilities

- Explains CoreFrame's services and working methodology
- Collects project requirements from potential clients
- Generates preliminary project scope assessments
- Directs users to appropriate team contact
- Handles common questions (pricing, timelines, process)

### Fallback Mode

When no OpenAI API key is configured, the agent uses a rule-based system that handles:
- Greetings and introductions
- Service inquiries (AI apps, agents, automation)
- Pricing and timeline questions
- Team and project information
- General information requests

### Configuration

Set `OPENAI_API_KEY` in `.env.local` to enable full GPT-powered responses. Without it, the fallback system handles conversations gracefully.

---

## Notification System

All user interactions are forwarded to the host:

### Contact Form Submissions
- Logged server-side
- Forwarded to `WEBHOOK_URL` with: name, email, company, message, timestamp

### Chat Conversations
- Each message forwarded to `WEBHOOK_URL`
- Includes: session ID, latest message, message count, timestamp

### Setting Up Notifications

**Slack:**
1. Create an Incoming Webhook in your Slack workspace
2. Set `WEBHOOK_URL` to the webhook URL

**Discord:**
1. Create a webhook in your Discord channel settings
2. Set `WEBHOOK_URL` to the webhook URL

**Custom Endpoint:**
1. Set `WEBHOOK_URL` to any HTTP POST endpoint
2. Messages arrive as JSON with `type`, `data`, `timestamp`, `source` fields

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, or pnpm

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd coreframe-landing

# Install dependencies
npm install

# Copy environment variables
cp .env.example .env.local

# (Optional) Add your OpenAI API key for full AI chat
# Edit .env.local and set OPENAI_API_KEY

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build for Production

```bash
npm run build
npm start
```

---

## Environment Variables

Create a `.env.local` file (see `.env.example`):

| Variable | Required | Description |
|----------|----------|-------------|
| `OPENAI_API_KEY` | No | OpenAI API key for AI chat (falls back to rule-based without it) |
| `OPENAI_MODEL` | No | Model to use (default: `gpt-4o-mini`) |
| `WEBHOOK_URL` | No | Webhook to forward notifications (Slack, Discord, custom) |
| `NOTIFICATION_EMAIL` | No | Email for notifications (requires EMAIL_API_KEY) |
| `EMAIL_API_KEY` | No | API key for email service |

---

## Project Structure

```
coreframe-landing/
├── app/
│   ├── layout.tsx              # Root layout (Navbar, Footer, AI Chat Widget)
│   ├── page.tsx                # Homepage server component
│   ├── HomeClient.tsx          # Homepage client (Hero, Services, Experience, 
│   │                           #   Projects, Investors, FAQ, CTA)
│   ├── globals.css             # Global styles & CSS variables
│   ├── about/
│   │   ├── layout.tsx          # About metadata
│   │   ├── page.tsx            # About server component
│   │   └── AboutClient.tsx     # Team, AI expertise, timeline, stats
│   ├── projects/
│   │   ├── layout.tsx          # Projects metadata
│   │   ├── page.tsx            # Projects server component
│   │   └── ProjectsClient.tsx  # Filterable project grid
│   ├── case-studies/
│   │   ├── page.tsx            # Case studies listing
│   │   ├── CaseStudiesClient.tsx
│   │   └── wiral/              # Implementation partnership case study
│   ├── contact/
│   │   ├── layout.tsx          # Contact metadata
│   │   └── page.tsx            # Contact form + team directory
│   └── api/
│       ├── chat/
│       │   └── route.ts        # AI chat agent endpoint
│       ├── contact/
│       │   └── route.ts        # Contact form endpoint
│       └── notify/
│           └── route.ts        # Notification hub endpoint
├── components/
│   ├── AIChatWidget.tsx        # Floating AI chat widget
│   ├── Button.tsx              # Button component (primary, secondary, ghost)
│   ├── Card.tsx                # 3D tilt card with hover effects
│   ├── Container.tsx           # Responsive container wrapper
│   ├── Footer.tsx              # Site footer
│   ├── LogoMarquee.tsx         # Scrolling tech logo marquee
│   ├── Navbar.tsx              # Fixed navigation (desktop + mobile)
│   ├── Section.tsx             # Section wrapper with variants
│   ├── SectionQuery.tsx        # Inline question form
│   └── TechLogosBackground.tsx # Floating background logos
├── lib/
│   ├── animations.tsx          # Animation primitives (Reveal, Stagger, etc.)
│   ├── fonts.ts                # Font configuration
│   └── smooth-scroll.tsx       # Lenis smooth scrolling
├── .env.example                # Environment variable template
├── tailwind.config.ts          # Tailwind configuration
├── next.config.js              # Next.js configuration
├── tsconfig.json               # TypeScript configuration
└── package.json                # Dependencies
```

---

## Tech Stack

| Technology | Purpose |
|-----------|---------|
| **Next.js 14** | React framework with App Router, API routes |
| **TypeScript** | Type safety across the entire codebase |
| **Tailwind CSS 3** | Utility-first styling with custom design system |
| **Framer Motion** | Scroll-triggered animations, gestures, layout |
| **Lenis** | Smooth momentum scrolling |
| **OpenAI GPT-4** | AI chat agent intelligence |
| **Vercel** | Recommended deployment platform |

---

## Customization

### Updating Team Info
Edit the `TEAM` array in `app/about/AboutClient.tsx` and the team section in `app/contact/page.tsx`.

### Adding Projects
Add entries to the `PROJECTS` array in `app/projects/ProjectsClient.tsx`. Supported categories: `ai-apps`, `ai-agents`, `ai-projects`, `digital-transformation`.

### Changing Partners/Investors
Edit the `partners` and `investors` arrays in the `InvestorsPartners` function in `app/HomeClient.tsx`.

### Modifying the AI Agent
- **System prompt**: Edit `SYSTEM_PROMPT` in `app/api/chat/route.ts`
- **Fallback responses**: Edit `getFallbackResponse()` in the same file
- **Quick actions**: Edit the quick action buttons in `components/AIChatWidget.tsx`

### Theming
All colors are CSS variables in `app/globals.css`. Change the accent color by updating `--color-accent`.

---

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import in Vercel
3. Add environment variables in Vercel dashboard
4. Deploy

### Self-Hosted

```bash
npm run build
npm start
```

Runs on port 3000 by default. Use a reverse proxy (nginx, Caddy) for production.

---

Built with precision by **CoreFrame Technologies**.
