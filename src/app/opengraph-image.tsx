import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

export const alt = `${siteConfig.name} — ${siteConfig.fullName}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Default social share card for the site.
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #1a1a1a 0%, #4d3f36 100%)",
          color: "#faf8f3",
        }}
      >
        <svg width="120" height="120" viewBox="0 0 32 32" style={{ marginBottom: 40 }}>
          <g fill="none" stroke="#c87a1e" strokeWidth="1.6">
            <circle cx="16" cy="16" r="3.2" />
            <circle cx="16" cy="16" r="7" />
            <circle cx="16" cy="16" r="10.8" />
          </g>
          <circle cx="16" cy="16" r="1.3" fill="#c87a1e" />
        </svg>
        <div style={{ fontSize: 64, fontWeight: 700, lineHeight: 1.1 }}>
          {siteConfig.fullName}
        </div>
        <div style={{ height: 4, width: 120, background: "#c87a1e", margin: "32px 0" }} />
        <div style={{ fontSize: 30, color: "#d3c9b6", maxWidth: 900, lineHeight: 1.4 }}>
          {siteConfig.description}
        </div>
      </div>
    ),
    { ...size }
  );
}
