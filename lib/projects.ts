export type Category =
  | "all"
  | "ai-apps"
  | "ai-agents"
  | "ai-projects"
  | "iot-hardware"
  | "digital-transformation";

export interface Metric {
  value: string;
  label: string;
}

export interface Project {
  title: string;
  category: Exclude<Category, "all">;
  categoryLabel: string;
  client: string;
  description: string;
  metrics: Metric[];
  stack: string[];
  status: "live" | "development" | "ongoing";
  href?: string;
}

export const CATEGORIES: { key: Category; label: string }[] = [
  { key: "all", label: "Show all" },
  { key: "ai-apps", label: "AI Apps" },
  { key: "ai-agents", label: "AI Agents" },
  { key: "ai-projects", label: "AI Projects" },
  { key: "iot-hardware", label: "IoT & Hardware" },
  { key: "digital-transformation", label: "Transformation" },
];

export const PROJECTS: Project[] = [
  {
    title: "Wiral.ai — AI Lead Management System",
    category: "ai-apps",
    categoryLabel: "AI App",
    client: "Wiral · GCC market",
    description:
      "AI-powered lead management system that captures, qualifies, and nurtures leads across WhatsApp, Instagram, Facebook, and web chat — auto-following up, scoring intent, and booking qualified meetings in 100+ languages from a single unified inbox.",
    metrics: [
      { value: "20+", label: "Bookings / 30 days" },
      { value: "100+", label: "Languages supported" },
      { value: "24/7", label: "Always-on inbox" },
    ],
    stack: ["NLP", "WhatsApp API", "Voice AI", "CRM Integrations"],
    status: "live",
    href: "https://wiral.ai/",
  },
  {
    title: "Industrial Energy Monitoring Platform",
    category: "iot-hardware",
    categoryLabel: "IoT & Hardware",
    client: "Industrial facility · multi-site",
    description:
      "End-to-end energy monitoring system for industrial sites. Custom WiFi and LoRa gateways stream real-time meter readings from across the facility into a unified dashboard — with anomaly alerts, load analytics, and consumption reports that turn raw kilowatt-hours into operational decisions.",
    metrics: [
      { value: "Realtime", label: "Meter telemetry" },
      { value: "WiFi + LoRa", label: "Hybrid gateway" },
      { value: "Site-wide", label: "Single dashboard" },
    ],
    stack: ["LoRa", "ESP32", "MQTT", "Time-series DB", "Next.js"],
    status: "live",
  },
  {
    title: "Smart Video Recording System",
    category: "iot-hardware",
    categoryLabel: "IoT & Hardware",
    client: "Manufacturing operator",
    description:
      "Computer-vision platform deployed across a manufacturing floor. Tracks employee presence and activity in real time, and auto-compiles per-shift proof-of-work videos for supervisors and clients — replacing manual oversight with verifiable, searchable visual records.",
    metrics: [
      { value: "Realtime", label: "Floor tracking" },
      { value: "Auto", label: "Daily proof reels" },
      { value: "Search", label: "Video timeline" },
    ],
    stack: ["Computer Vision", "Python", "RTSP", "Edge AI"],
    status: "live",
  },
  {
    title: "Ecommerce Websites",
    category: "digital-transformation",
    categoryLabel: "Digital Transformation",
    client: "D2C & retail brands",
    description:
      "High-conversion ecommerce storefronts — fast, SEO-ready, mobile-first builds with payments, inventory sync, and analytics wired in from day one.",
    metrics: [
      { value: "Fast", label: "Core Web Vitals" },
      { value: "SEO", label: "Built-in optimization" },
      { value: "Pay", label: "Payments & shipping" },
    ],
    stack: ["Next.js", "Shopify", "Stripe", "Tailwind"],
    status: "ongoing",
  },
  {
    title: "AI Agents",
    category: "ai-agents",
    categoryLabel: "AI Agent",
    client: "Cross-industry",
    description:
      "Custom AI agents for sales, support, operations, and internal workflows — built on your data, integrated into your stack, and deployed across web, WhatsApp, and voice.",
    metrics: [
      { value: "24/7", label: "Always-on" },
      { value: "RAG", label: "Your data, grounded" },
      { value: "Multi", label: "Channel deployment" },
    ],
    stack: ["OpenAI", "LangChain", "Vector DB", "Webhooks"],
    status: "ongoing",
  },
];
