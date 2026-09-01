import { Metadata } from "next";
import AIAgentsClient from "./AIAgentsClient";

export const metadata: Metadata = {
  title: "AI Agents & Autonomous Workflows",
  description:
    "Tool-using AI agents, multi-agent systems and agentic workflow automation with human-in-the-loop oversight, MCP integrations and full auditability.",
};

export default function AIAgentsPage() {
  return <AIAgentsClient />;
}
