import { ImageResponse } from "next/og";
import { siteData } from "@/lib/siteData";

export const runtime = "edge";

export const alt = `${siteData.name} | ${siteData.title}`;
export const size = {
  width: 1200,
  height: 630,
};

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
          justifyContent: "center",
          padding: 80,
          background: "#07080b",
          color: "#f4f4f5",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 40,
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            <div style={{ fontSize: 18, color: "rgba(244,244,245,0.78)" }}>
              {siteData.title}
            </div>
            <div style={{ fontSize: 64, fontWeight: 700, letterSpacing: "-0.04em" }}>
              {siteData.name}
            </div>
            <div
              style={{
                fontSize: 26,
                maxWidth: 860,
                lineHeight: 1.35,
                color: "rgba(244,244,245,0.86)",
              }}
            >
              {siteData.tagline}
            </div>
            <div style={{ display: "flex", gap: 10, marginTop: 10, flexWrap: "wrap" }}>
              {[
                "Web Platforms",
                "Automation",
                "Discord Bots",
                "Technical Support",
                "Customer Experience",
              ].map((t) => (
                <div
                  key={t}
                  style={{
                    fontSize: 16,
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
          </div>

          <div
            style={{
              width: 120,
              height: 120,
              borderRadius: 28,
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.12)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                fontSize: 48,
                fontWeight: 800,
                letterSpacing: "-0.04em",
              }}
            >
              RG
            </div>
          </div>
        </div>

        <div
          style={{
            marginTop: 40,
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
