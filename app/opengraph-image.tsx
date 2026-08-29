import { ImageResponse } from "next/og";

export const alt = "John Mitchell — AI Transformation Leader";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#f4efe6",
          color: "#161410",
          padding: "72px 80px",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 22,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "#1d3b32",
          }}
        >
          Portfolio
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div
            style={{
              display: "flex",
              fontSize: 72,
              lineHeight: 1.05,
              letterSpacing: -2,
            }}
          >
            John David Mitchell
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 28,
              color: "#4d473c",
              maxWidth: 920,
            }}
          >
            Seeking Director of Solutions Engineering or Principal AI
            Solution Architect roles.
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 22,
            color: "#4d473c",
          }}
        >
          <span>Lead AI Solution Architect, InvoiceCloud · 2025–present</span>
          <span>863-602-1732</span>
        </div>
      </div>
    ),
    size,
  );
}
