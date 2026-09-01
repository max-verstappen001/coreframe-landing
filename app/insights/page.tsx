import { Metadata } from "next";
import InsightsClient from "./InsightsClient";

export const metadata: Metadata = {
  title: "Insights — Private & Enterprise AI Engineering",
  description:
    "Technical writing on private AI, on-premise LLMs, enterprise RAG, AI infrastructure and governance — from Coreframe's engineers and researchers.",
};

export default function InsightsPage() {
  return <InsightsClient />;
}
