import { Metadata } from "next";
import SecurityClient from "./SecurityClient";

export const metadata: Metadata = {
  title: "Security",
  description:
    "Coreframe's security practices and principles — encryption, access control, environment isolation, customer-controlled deployments and incident response, matched to each engagement's threat model.",
};

export default function SecurityPage() {
  return <SecurityClient />;
}
