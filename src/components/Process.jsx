"use client";

import { Ruler, Layers, Sparkles, Gauge } from "lucide-react";

export default function Process() {
  const standards = [
    {
      num: "01",
      title: "Spatial Math & 8pt Rhythm",
      icon: Ruler,
      description:
        "Every margin, padding unit, line-height, and responsive breakpoint adheres to strict mathematical scales. Interfaces feel anchored and intuitive across every viewport without arbitrary guesswork.",
      highlight: "Harmonious proportions across 320px to 4K displays",
    },
    {
      num: "02",
      title: "Tokens as the Single Source of Truth",
      icon: Layers,
      description:
        "Figma variables map 1:1 to CSS custom properties and React component primitives. Color roles, typography scales, and surface elevations stay strictly in sync between design and code.",
      highlight: "Zero visual regression during development handoff",
    },
    {
      num: "03",
      title: "60fps Micro-Interactions & Tactile Feel",
      icon: Sparkles,
      description:
        "Software should feel physical and responsive. I craft hardware-accelerated transforms, spring-based motion curves, and active press feedback that make interactions feel immediate.",
      highlight: "Sub-100ms response feel with zero bundle bloat",
    },
    {
      num: "04",
      title: "Sub-Second Web Vitals & Clean Semantics",
      icon: Gauge,
      description:
        "Aesthetic interfaces must perform flawlessly under real-world network conditions. I optimize Largest Contentful Paint (LCP), enforce zero CLS, and deliver semantic, accessible markup.",
      highlight: "95+ Core Web Vitals score on production builds",
    },
  ];

  return (
    <section id="process" className="section" style={{ backgroundColor: "transparent" }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <span className="dot" />
            <span>Design &amp; Engineering Standards</span>
          </div>
          <h2 className="section-title">
            The Craft Behind <span className="gradient-text">Every Pixel I Ship</span>
          </h2>
          <p className="section-subtitle">
            Rather than treating design and development as separate silos, I build interfaces with strict
            engineering principles from day one.
          </p>
        </div>

        {/* Standards Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "20px",
          }}
        >
          {standards.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                style={{
                  padding: "32px 26px",
                  borderRadius: "var(--radius-lg)",
                  backgroundColor: "rgba(15, 18, 24, 0.72)",
                  backdropFilter: "blur(20px)",
                  WebkitBackdropFilter: "blur(20px)",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                  boxShadow: "inset 0 1px 0 rgba(255, 255, 255, 0.07), 0 10px 30px rgba(0, 0, 0, 0.5)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  transition: "all 0.22s ease",
                  position: "relative",
                  overflow: "hidden",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "rgba(129, 140, 248, 0.35)";
                  e.currentTarget.style.boxShadow = "inset 0 1px 0 rgba(255, 255, 255, 0.12), 0 16px 45px rgba(0, 0, 0, 0.65)";
                  e.currentTarget.style.transform = "translateY(-3px)";
                  e.currentTarget.style.backgroundColor = "rgba(20, 24, 32, 0.85)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.08)";
                  e.currentTarget.style.boxShadow = "inset 0 1px 0 rgba(255, 255, 255, 0.07), 0 10px 30px rgba(0, 0, 0, 0.5)";
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.backgroundColor = "rgba(15, 18, 24, 0.72)";
                }}
              >
                <div>
                  {/* Top Bar: Icon and Index */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginBottom: "22px",
                    }}
                  >
                    <div
                      style={{
                        width: "42px",
                        height: "42px",
                        borderRadius: "8px",
                        backgroundColor: "rgba(255, 255, 255, 0.04)",
                        border: "1px solid rgba(255, 255, 255, 0.1)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#38bdf8",
                      }}
                    >
                      <Icon size={20} />
                    </div>

                    <span
                      className="mono-accent"
                      style={{
                        fontSize: "1.2rem",
                        fontWeight: 700,
                        color: "rgba(255, 255, 255, 0.25)",
                      }}
                    >
                      [{item.num}]
                    </span>
                  </div>

                  {/* Title */}
                  <h3
                    style={{
                      fontSize: "1.2rem",
                      fontWeight: 700,
                      color: "#ffffff",
                      marginBottom: "12px",
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p
                    style={{
                      fontSize: "0.92rem",
                      color: "#94a3b8",
                      lineHeight: 1.65,
                      marginBottom: "20px",
                    }}
                  >
                    {item.description}
                  </p>
                </div>

                {/* Bottom Highlight Tag */}
                <div
                  style={{
                    paddingTop: "16px",
                    borderTop: "1px solid rgba(255, 255, 255, 0.06)",
                    fontSize: "0.78rem",
                    color: "#38bdf8",
                    fontFamily: "var(--font-geist-mono), monospace",
                  }}
                >
                  &rarr; {item.highlight}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
