import { Metadata } from "next";
import LabsSubClient from "../LabsSubClient";

export const metadata: Metadata = {
  title: "Research — Coreframe Labs",
  description:
    "Technical reports, architecture studies and model evaluations from Coreframe Labs, published as results mature.",
};

export default function ResearchPage() {
  return (
    <LabsSubClient
      eyebrow="Coreframe Labs / Research"
      title="Research."
      body="Technical reports, architecture studies and model evaluations — published as results mature, not on a schedule."
    />
  );
}
