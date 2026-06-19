import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

// Apple touch icon — concentric "meeting place" motif on brand ochre.
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#c87a1e",
        }}
      >
        <svg width="180" height="180" viewBox="0 0 32 32">
          <g fill="none" stroke="#faf8f3" strokeWidth="1.6">
            <circle cx="16" cy="16" r="3.2" />
            <circle cx="16" cy="16" r="7" />
            <circle cx="16" cy="16" r="10.8" />
          </g>
          <circle cx="16" cy="16" r="1.3" fill="#faf8f3" />
        </svg>
      </div>
    ),
    { ...size }
  );
}
