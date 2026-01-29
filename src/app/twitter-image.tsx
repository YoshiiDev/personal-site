import { ImageResponse } from "next/og";
import { siteData } from "@/lib/siteData";

export const runtime = "edge";

export const alt = `${siteData.name} | ${siteData.title}`;
export const size = {
  width: 1200,
  height: 600,
};

export const contentType = "image/png";

export default function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 76,
          background: "#07080b",
          color: "#f4f4f5",
        }}
      >
        <div style={{ fontSize: 16, color: "rgba(244,244,245,0.78)" }}>
          {siteData.title}
        </div>
        <div
          style={{
            marginTop: 16,
            fontSize: 60,
            fontWeight: 750,
            letterSpacing: "-0.05em",
          }}
        >
          {siteData.name}
        </div>
        <div
          style={{
            marginTop: 18,
            fontSize: 24,
            lineHeight: 1.35,
            maxWidth: 980,
            color: "rgba(244,244,245,0.88)",
          }}
        >
          {siteData.tagline}
        </div>

        <div style={{ display: "flex", gap: 10, marginTop: 26, flexWrap: "wrap" }}>
          {["Web Platforms", "Automation", "Support", "Reliability"].map((t) => (
            <div
              key={t}
              style={{
                fontSize: 15,
                padding: "8px 12px",
                borderRadius: 999,
                border: "1px solid rgba(255,255,255,0.12)",
                background: "rgba(255,255,255,0.05)",
                color: "rgba(244,244,245,0.9)",
              }}
            >
              {t}
            </div>
          ))}
        </div>

        <div
          style={{
            marginTop: 34,
            height: 2,
            width: "100%",
            background:
              "linear-gradient(90deg, rgba(59,130,246,0.0), rgba(59,130,246,0.8), rgba(59,130,246,0.0))",
            opacity: 0.65,
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  );
}
