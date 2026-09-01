import { Metadata } from "next";
import LabsSubClient from "../LabsSubClient";

export const metadata: Metadata = {
  title: "Publications — Coreframe Labs",
  description: "Formal write-ups and preprints from Coreframe Labs, with honest status labels.",
};

export default function PublicationsPage() {
  return (
    <LabsSubClient
      eyebrow="Coreframe Labs / Publications"
      title="Publications."
      body="Formal write-ups and preprints, published as results warrant."
    />
  );
}
