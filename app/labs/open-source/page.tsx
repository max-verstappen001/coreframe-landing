import { Metadata } from "next";
import LabsSubClient from "../LabsSubClient";

export const metadata: Metadata = {
  title: "Open Source — Coreframe Labs",
  description: "Reusable tooling and libraries released publicly by Coreframe Labs.",
};

export default function OpenSourcePage() {
  return (
    <LabsSubClient
      eyebrow="Coreframe Labs / Open Source"
      title="Open source."
      body="Reusable tooling and libraries we release publicly, as they're ready."
    />
  );
}
