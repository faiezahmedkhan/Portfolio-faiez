"use client";

import { useState } from "react";
import { FigmaIcon } from "./Icons";
import { Code2, Copy, Check, Eye } from "lucide-react";

export default function DesignVsCodePlayground() {
  const [activeTab, setActiveTab] = useState("preview"); // preview | figma | code
  const [componentState, setComponentState] = useState("active");
  const [accentColor, setAccentColor] = useState("#4f46e5");
  const [copiedCode, setCopiedCode] = useState(false);

  const colors = [
    { name: "Indigo", hex: "#4f46e5" },
    { name: "Cyan", hex: "#0284c7" },
    { name: "Emerald", hex: "#059669" },
    { name: "Amber", hex: "#d97706" },
    { name: "Rose", hex: "#e11d48" },
  ];

  const codeSnippet = `// Production Next.js Component by Faiez Ahmed
export function InteractiveMetricsCard({ title, metric, change, accent = "${accentColor}" }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div 
      className="metrics-card"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        borderRadius: "16px",
        backgroundColor: "#0d1017",
        border: \`1.5px solid \${hovered ? accent : 'rgba(255, 255, 255, 0.08)'}\`,
        boxShadow: hovered ? \`0 16px 36px \${accent}30\` : '0 4px 20px rgba(0,0,0,0.4)',
        transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)'
      }}
    >
      <div className="card-header">
        <span className="title">{title}</span>
        <span className="badge" style={{ color: accent }}>Live Telemetry</span>
      </div>
      <div className="metric-value">{metric}</div>
      <div className="trend-stat positive">+{change}% this quarter</div>
    </div>
  );
}`;

  const copyCode = () => {
    navigator.clipboard.writeText(codeSnippet);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <section className="section" id="playground">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <div className="section-badge">
            <span className="dot" />
            <span>Interactive Component Lab</span>
          </div>
          <h2 className="section-title">
            Figma Design Tokens to <span className="gradient-text">Production Code</span>
          </h2>
          <p className="section-subtitle">
            Test how atomic design variables defined in Figma seamlessly map to typed, responsive React primitives.
          </p>
        </div>

        {/* Sandbox Window */}
        <div
          style={{
            maxWidth: "960px",
            margin: "0 auto",
            borderRadius: "var(--radius-xl)",
            overflow: "hidden",
            boxShadow: "inset 0 1px 0 rgba(255, 255, 255, 0.08), 0 20px 50px rgba(0, 0, 0, 0.6)",
            backgroundColor: "rgba(15, 18, 24, 0.72)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            border: "1px solid rgba(255, 255, 255, 0.08)",
          }}
        >
          {/* Mac-style Window Title Bar */}
          <div
            style={{
              padding: "14px 22px",
              backgroundColor: "rgba(10, 12, 16, 0.85)",
              borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "14px",
            }}
          >
            {/* Window Dots */}
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span style={{ width: "11px", height: "11px", borderRadius: "50%", backgroundColor: "#ef4444" }} />
              <span style={{ width: "11px", height: "11px", borderRadius: "50%", backgroundColor: "#eab308" }} />
              <span style={{ width: "11px", height: "11px", borderRadius: "50%", backgroundColor: "#10b981" }} />
              <span style={{ marginLeft: "10px", fontSize: "0.8rem", color: "#94a3b8", fontWeight: 600 }}>
                NexusCard.component.tsx — Figma Tokens &bull; Next.js 16
              </span>
            </div>

            {/* View Switcher Tabs */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "2px",
                backgroundColor: "rgba(255, 255, 255, 0.04)",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                padding: "3px",
                borderRadius: "var(--radius-md)",
              }}
            >
              <button
                onClick={() => setActiveTab("preview")}
                style={{
                  padding: "5px 12px",
                  borderRadius: "6px",
                  fontSize: "0.8rem",
                  fontWeight: 600,
                  color: activeTab === "preview" ? "#ffffff" : "#94a3b8",
                  backgroundColor: activeTab === "preview" ? "rgba(255, 255, 255, 0.12)" : "transparent",
                  boxShadow: activeTab === "preview" ? "0 1px 3px rgba(0,0,0,0.3)" : "none",
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  transition: "all 0.15s ease",
                  cursor: "pointer",
                  border: "none",
                }}
              >
                <Eye size={13} />
                <span>Live Component</span>
              </button>

              <button
                onClick={() => setActiveTab("figma")}
                style={{
                  padding: "5px 12px",
                  borderRadius: "6px",
                  fontSize: "0.8rem",
                  fontWeight: 600,
                  color: activeTab === "figma" ? "#ffffff" : "#94a3b8",
                  backgroundColor: activeTab === "figma" ? "rgba(255, 255, 255, 0.12)" : "transparent",
                  boxShadow: activeTab === "figma" ? "0 1px 3px rgba(0,0,0,0.3)" : "none",
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  transition: "all 0.15s ease",
                  cursor: "pointer",
                  border: "none",
                }}
              >
                <FigmaIcon size={13} />
                <span>Design Tokens</span>
              </button>

              <button
                onClick={() => setActiveTab("code")}
                style={{
                  padding: "5px 12px",
                  borderRadius: "6px",
                  fontSize: "0.8rem",
                  fontWeight: 600,
                  color: activeTab === "code" ? "#ffffff" : "#94a3b8",
                  backgroundColor: activeTab === "code" ? "rgba(255, 255, 255, 0.12)" : "transparent",
                  boxShadow: activeTab === "code" ? "0 1px 3px rgba(0,0,0,0.3)" : "none",
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  transition: "all 0.15s ease",
                  cursor: "pointer",
                  border: "none",
                }}
              >
                <Code2 size={13} />
                <span>React JSX</span>
              </button>
            </div>
          </div>

          {/* Sandbox Body */}
          <div style={{ padding: "36px 32px", minHeight: "360px" }}>
            {activeTab === "preview" && (
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr",
                  gap: "30px",
                  alignItems: "center",
                }}
                className="sandbox-grid"
              >
                {/* Left: Controls */}
                <div>
                  <h4 style={{ fontSize: "1.05rem", fontWeight: 700, color: "#ffffff", marginBottom: "6px" }}>
                    Interactive Component Controls
                  </h4>
                  <p style={{ color: "#94a3b8", fontSize: "0.88rem", marginBottom: "22px" }}>
                    Interact with the design tokens below to test live reactive re-rendering.
                  </p>

                  {/* Accent Color Picker */}
                  <div style={{ marginBottom: "20px" }}>
                    <label style={{ display: "block", fontSize: "0.78rem", color: "#64748b", textTransform: "uppercase", marginBottom: "8px", fontWeight: 600 }}>
                      Dynamic Token Color:
                    </label>
                    <div style={{ display: "flex", gap: "10px" }}>
                      {colors.map((c) => (
                        <button
                          key={c.hex}
                          onClick={() => setAccentColor(c.hex)}
                          style={{
                            width: "30px",
                            height: "30px",
                            borderRadius: "50%",
                            backgroundColor: c.hex,
                            border: accentColor === c.hex ? "3px solid #ffffff" : "2px solid transparent",
                            boxShadow: accentColor === c.hex ? `0 0 0 2px rgba(255, 255, 255, 0.4), 0 2px 10px ${c.hex}80` : "none",
                            transition: "all 0.2s ease",
                            cursor: "pointer",
                          }}
                          title={c.name}
                        />
                      ))}
                    </div>
                  </div>

                  {/* State buttons */}
                  <div>
                    <label style={{ display: "block", fontSize: "0.78rem", color: "#64748b", textTransform: "uppercase", marginBottom: "8px", fontWeight: 600 }}>
                      Component State:
                    </label>
                    <div style={{ display: "flex", gap: "8px" }}>
                      {["active", "success", "elevated"].map((s) => (
                        <button
                          key={s}
                          onClick={() => setComponentState(s)}
                          style={{
                            padding: "6px 14px",
                            borderRadius: "6px",
                            fontSize: "0.82rem",
                            fontWeight: 600,
                            backgroundColor: componentState === s ? "#ffffff" : "rgba(255, 255, 255, 0.04)",
                            border: componentState === s ? "1px solid #ffffff" : "1px solid rgba(255, 255, 255, 0.08)",
                            color: componentState === s ? "#050608" : "#94a3b8",
                            textTransform: "capitalize",
                            cursor: "pointer",
                          }}
                        >
                          {s}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right: The Live Rendered Component */}
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <div
                    style={{
                      width: "100%",
                      maxWidth: "340px",
                      padding: "26px",
                      borderRadius: "18px",
                      backgroundColor: "#0d1017",
                      border: `1.5px solid ${accentColor}`,
                      boxShadow: `0 16px 36px -5px ${accentColor}35`,
                      transition: "all 0.25s ease",
                    }}
                  >
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "14px" }}>
                      <span style={{ fontSize: "0.85rem", color: "#94a3b8", fontWeight: 600 }}>Active Portfolio Yield</span>
                      <span
                        style={{
                          fontSize: "0.72rem",
                          fontWeight: 700,
                          padding: "3px 8px",
                          borderRadius: "var(--radius-full)",
                          backgroundColor: `${accentColor}20`,
                          color: accentColor,
                          border: `1px solid ${accentColor}40`,
                        }}
                      >
                        {componentState}
                      </span>
                    </div>

                    <div style={{ fontSize: "2rem", fontWeight: 800, color: "#ffffff", letterSpacing: "-0.03em", marginBottom: "6px" }}>
                      $248,920.40
                    </div>

                    <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "0.85rem", color: "#10b981", fontWeight: 600 }}>
                      <span>&uarr; +14.2%</span>
                      <span style={{ color: "#64748b", fontWeight: 400 }}>vs previous quarter</span>
                    </div>

                    <div style={{ marginTop: "20px", paddingTop: "14px", borderTop: "1px solid rgba(255, 255, 255, 0.08)", display: "flex", justifyContent: "space-between", fontSize: "0.76rem", color: "#64748b" }}>
                      <span>Figma Tokens &bull; Auto-Layout</span>
                      <span style={{ color: accentColor, fontWeight: 600 }}>100% Pixel Match</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "figma" && (
              <div>
                <h4 style={{ fontSize: "1.05rem", fontWeight: 700, color: "#ffffff", marginBottom: "6px" }}>
                  Figma Design System Specifications
                </h4>
                <p style={{ color: "#94a3b8", fontSize: "0.88rem", marginBottom: "20px" }}>
                  Tokens extracted automatically from Figma frames for production handoff.
                </p>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                    gap: "14px",
                  }}
                >
                  <div style={{ padding: "16px", borderRadius: "10px", backgroundColor: "rgba(255, 255, 255, 0.03)", border: "1px solid rgba(255, 255, 255, 0.08)" }}>
                    <div style={{ fontSize: "0.74rem", color: "#64748b", textTransform: "uppercase", fontWeight: 600 }}>Primary Brand Token</div>
                    <div style={{ fontSize: "0.95rem", fontWeight: 700, color: accentColor, marginTop: "4px" }}>{accentColor}</div>
                    <div style={{ fontSize: "0.74rem", color: "#94a3b8", marginTop: "2px" }}>CSS Variable: --accent-primary</div>
                  </div>

                  <div style={{ padding: "16px", borderRadius: "10px", backgroundColor: "rgba(255, 255, 255, 0.03)", border: "1px solid rgba(255, 255, 255, 0.08)" }}>
                    <div style={{ fontSize: "0.74rem", color: "#64748b", textTransform: "uppercase", fontWeight: 600 }}>Border Radius</div>
                    <div style={{ fontSize: "0.95rem", fontWeight: 700, color: "#ffffff", marginTop: "4px" }}>18px (Smooth)</div>
                    <div style={{ fontSize: "0.74rem", color: "#94a3b8", marginTop: "2px" }}>CSS Variable: --radius-lg</div>
                  </div>

                  <div style={{ padding: "16px", borderRadius: "10px", backgroundColor: "rgba(255, 255, 255, 0.03)", border: "1px solid rgba(255, 255, 255, 0.08)" }}>
                    <div style={{ fontSize: "0.74rem", color: "#64748b", textTransform: "uppercase", fontWeight: 600 }}>Layout Geometry</div>
                    <div style={{ fontSize: "0.95rem", fontWeight: 700, color: "#ffffff", marginTop: "4px" }}>Auto-Layout 24px</div>
                    <div style={{ fontSize: "0.74rem", color: "#94a3b8", marginTop: "2px" }}>Padding: 26px / Gap: 14px</div>
                  </div>

                  <div style={{ padding: "16px", borderRadius: "10px", backgroundColor: "rgba(255, 255, 255, 0.03)", border: "1px solid rgba(255, 255, 255, 0.08)" }}>
                    <div style={{ fontSize: "0.74rem", color: "#64748b", textTransform: "uppercase", fontWeight: 600 }}>Elevation Surface</div>
                    <div style={{ fontSize: "0.95rem", fontWeight: 700, color: "#ffffff", marginTop: "4px" }}>Hardware Dark Glass</div>
                    <div style={{ fontSize: "0.74rem", color: "#94a3b8", marginTop: "2px" }}>#0d1017 with 1px border</div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "code" && (
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "14px" }}>
                  <span style={{ fontSize: "0.85rem", color: "#94a3b8" }}>React (Next.js App Router) Implementation</span>
                  <button
                    onClick={copyCode}
                    className="btn btn-secondary"
                    style={{ padding: "6px 14px", fontSize: "0.8rem", display: "inline-flex" }}
                  >
                    {copiedCode ? <Check size={14} color="#10b981" /> : <Copy size={14} />}
                    <span>{copiedCode ? "Copied!" : "Copy Code"}</span>
                  </button>
                </div>

                <pre
                  style={{
                    padding: "18px",
                    borderRadius: "10px",
                    backgroundColor: "#080a0f",
                    border: "1px solid rgba(255, 255, 255, 0.08)",
                    color: "#f8fafc",
                    fontSize: "0.84rem",
                    lineHeight: 1.6,
                    overflowX: "auto",
                    fontFamily: "var(--font-geist-mono), monospace",
                  }}
                >
                  <code>{codeSnippet}</code>
                </pre>
              </div>
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (min-width: 768px) {
          .sandbox-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
