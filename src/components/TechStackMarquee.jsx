"use client";

import { FigmaIcon } from "./Icons";
import { Globe, ArrowUpRight, ShieldCheck, Zap } from "lucide-react";

export default function TechStackMarquee() {
  const clientsAndImpact = [
    { label: "Corekees (Netherlands)", tag: "Sustainable Investment", icon: Globe },
    { label: "DGB Group (Global)", tag: "Nature-Based Solutions", icon: ShieldCheck },
    { label: "Ruhi Veda", tag: "Luxury E-Commerce", icon: Globe },
    { label: "Alokik Multi-Specialty Hospital", tag: "Healthcare Portal", icon: Globe },
    { label: "Beach Wedding Goa", tag: "Hospitality & Luxury", icon: Globe },
    { label: "Nexus Design System", tag: "60+ UI Primitives", icon: FigmaIcon, isCustomIcon: true },
    { label: "Seamount Aviation", tag: "Aviation Logistics", icon: Globe },
    { label: "Eco Tourism Udaipur", tag: "Travel Platform", icon: Globe },
    { label: "Next.js 16 & Turbopack", tag: "Sub-Second LCP", icon: Zap },
    { label: "Figma Variables & Auto-Layout", tag: "Token Architecture", icon: FigmaIcon, isCustomIcon: true },
  ];

  const duplicated = [...clientsAndImpact, ...clientsAndImpact];

  return (
    <div
      style={{
        marginTop: "60px",
        paddingTop: "24px",
        borderTop: "1px solid rgba(255, 255, 255, 0.08)",
        position: "relative",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: "14px",
        }}
      >
        <span
          className="mono-accent"
          style={{
            color: "#64748b",
            fontSize: "0.72rem",
            textTransform: "uppercase",
            letterSpacing: "0.08em",
          }}
        >
          Select Client Collaborations &amp; Technical Standards
        </span>
        <span
          className="mono-accent"
          style={{
            color: "#64748b",
            fontSize: "0.72rem",
          }}
        >
          [ INDEX // 2023 - 2026 ]
        </span>
      </div>

      <div className="marquee-container">
        <div className="marquee-content">
          {duplicated.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  padding: "8px 18px",
                  margin: "0 6px",
                  borderRadius: "6px",
                  backgroundColor: "rgba(15, 18, 24, 0.85)",
                  backdropFilter: "blur(12px)",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                  fontSize: "0.84rem",
                  color: "#f8fafc",
                  whiteSpace: "nowrap",
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.4)",
                  transition: "all 0.2s ease",
                }}
              >
                <div style={{ color: "#38bdf8", display: "flex", alignItems: "center" }}>
                  <Icon size={14} />
                </div>
                <span style={{ fontWeight: 600 }}>{item.label}</span>
                <span
                  style={{
                    fontSize: "0.72rem",
                    color: "#94a3b8",
                    paddingLeft: "6px",
                    borderLeft: "1px solid rgba(255, 255, 255, 0.12)",
                  }}
                >
                  {item.tag}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
