import { Metadata } from "next";
import PrivateAIClient from "./PrivateAIClient";

export const metadata: Metadata = {
  title: "Private AI & On-Premise LLM Deployment",
  description:
    "On-premise, private-cloud, hybrid and air-gapped LLM deployment. Small language models, local inference and data-sovereignty architecture — AI that runs where your data lives.",
};

export default function PrivateAIPage() {
  return <PrivateAIClient />;
}
