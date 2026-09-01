import { Metadata } from "next";
import CapabilitiesClient from "./CapabilitiesClient";

export const metadata: Metadata = {
  title: "Capabilities — Enterprise & Private AI Engineering",
  description:
    "Private AI, enterprise knowledge systems, AI agents, AI infrastructure, software engineering and AI governance — Coreframe's capabilities across the full AI engineering lifecycle.",
};

export default function CapabilitiesPage() {
  return <CapabilitiesClient />;
}
