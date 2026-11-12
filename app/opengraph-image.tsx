import { ImageResponse } from "next/og";
import { region } from "@/lib/region";
import { siteConfig } from "@/lib/seo";

export const alt = siteConfig.name;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          backgroundColor: "#0a0a0b",
          backgroundImage:
            "radial-gradient(circle at 78% 22%, rgba(107,155,232,0.35), rgba(10,10,11,0) 55%)",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 34,
            fontWeight: 600,
            letterSpacing: "-0.02em",
            color: "#f5f5f7",
          }}
        >
          CoreFrame
        </div>
        <div style={{ display: "flex", flexDirection: "column", maxWidth: 920 }}>
          <div
            style={{
              display: "flex",
              fontSize: 58,
              fontWeight: 600,
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
              color: "#f5f5f7",
            }}
          >
            Enterprise AI Engineering
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 28,
              fontSize: 26,
              lineHeight: 1.5,
              color: "#a3a3ad",
            }}
          >
            {region.label} · Design, deploy and operate production AI.
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
