import { Metadata } from "next";
import CompanyClient from "./CompanyClient";

export const metadata: Metadata = {
  title: "Company",
  description:
    "Coreframe Technologies is an AI research and engineering company — research generates capability, engineering builds production systems, transformation integrates them into operations.",
};

export default function CompanyPage() {
  return <CompanyClient />;
}
