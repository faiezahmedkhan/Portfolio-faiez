"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2, Layers, Zap, Palette, Globe } from "lucide-react";

export default function ProjectEstimator() {
  const [selectedModel, setSelectedModel] = useState("full-stack");

  const engagementModels = [
    {
      id: "full-stack",
      title: "End-to-End Design to Code",
      badge: "Most Comprehensive",
      icon: Layers,
      tagline: "Figma Prototyping → Next.js 16 Production Delivery",
      description:
        "Full lifecycle execution. I take your product concept from wireframes and tokenized Figma components all the way to responsive, high-performance Next.js & React production code.",
      deliverables: [
        "Interactive Figma Prototype & Design Tokens",
        "Modular React 19 / Next.js Component Architecture",
        "Fluid Responsive Layouts (Mobile, Tablet, Desktop)",
        "Core Web Vitals Optimization (Sub-second LCP)",
        "Formspree / REST API wiring & deployment ready",
      ],
      idealFor: "Founders & Teams launching a new product or MVP",
    },
    {
      id: "design-system",
      title: "Design System & UI Kit",
      badge: "Design Architecture",
      icon: Palette,
      tagline: "Scalable Figma Variables & Token Bridge",
      description:
        "Architecting comprehensive, multi-brand Figma design systems with strict contrast compliance, component variant matrices, auto-layout primitives, and clean token exports.",
      deliverables: [
        "60+ Reusable Auto-Layout Components",
        "Color, Spacing, and Typography Variable Tokens",
        "Interactive Micro-Flows & Hover State Specs",
        "Developer Handoff Documentation & Guidelines",
      ],
      idealFor: "Growing engineering teams needing design consistency",
    },
    {
      id: "frontend-perf",
      title: "Frontend Overhaul & Performance",
      badge: "Engineering Focus",
      icon: Zap,
      tagline: "Transforming Designs into 60fps Web Code",
      description:
        "Already have Figma mockups? I engineer pixel-perfect, accessible, and blazing-fast Next.js interfaces with tactile micro-interactions and zero layout shifts.",
      deliverables: [
        "Pixel-Perfect Figma-to-Code Translation",
        "Hardware-Accelerated CSS Transitions",
        "WCAG 2.1 AAA Accessibility & Semantic HTML5",
        "95+ Lighthouse Score & SEO Optimization",
      ],
      idealFor: "Designers & Agencies needing reliable frontend engineering",
    },
    {
      id: "web-portal",
      title: "Client & Healthcare Platforms",
      badge: "Enterprise & CMS",
      icon: Globe,
      tagline: "Custom Corporate & Medical Gateways",
      description:
        "Specialized institutional platforms like patient appointment gateways, luxury e-commerce, and corporate investor portals built for credibility and trust.",
      deliverables: [
        "Custom Theme Architecture & WordPress Engine",
        "Accessible Booking & Direct Contact Flows",
        "Fast Page Loads with Cross-Browser Testing",
        "Admin Training & Long-term Reliability",
      ],
      idealFor: "Healthcare institutions, luxury brands, and local businesses",
    },
  ];

  const applyEngagement = (model) => {
    setSelectedModel(model.id);
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });

      const prefillEvent = new CustomEvent("prefill-contact", {
        detail: {
          service: model.title,
          budget: "Discuss Scope",
          subject: `Inquiry: ${model.title}`,
          message: `Hi Faiez, I am interested in collaborating on the "${model.title}" model (${model.tagline}).\n\nTarget deliverables:\n${model.deliverables.map((d) => `- ${d}`).join("\n")}\n\nLet's discuss availability and timeline!`,
        },
      });
      window.dispatchEvent(prefillEvent);
    }
  };

  return (
    <section id="estimator" className="section" style={{ backgroundColor: "transparent" }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <span className="dot" />
            <span>Ways to Collaborate</span>
          </div>
          <h2 className="section-title">
            Structured Engagement Models <span className="gradient-text">Tailored to Your Needs</span>
          </h2>
          <p className="section-subtitle">
            Whether you need a full-cycle design-to-code sprint or specialized design systems architecture,
            I offer clear collaboration models with predictable deliverables.
          </p>
        </div>

        {/* Models Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(270px, 1fr))",
            gap: "24px",
          }}
        >
          {engagementModels.map((model) => {
            const Icon = model.icon;
            const isSelected = selectedModel === model.id;

            return (
              <div
                key={model.id}
                style={{
                  padding: "32px 26px",
                  borderRadius: "var(--radius-lg)",
                  backgroundColor: isSelected ? "rgba(22, 27, 36, 0.92)" : "rgba(15, 18, 24, 0.72)",
                  backdropFilter: "blur(20px)",
                  WebkitBackdropFilter: "blur(20px)",
                  border: isSelected ? "1.5px solid #818cf8" : "1px solid rgba(255, 255, 255, 0.08)",
                  boxShadow: isSelected
                    ? "0 0 35px rgba(129, 140, 248, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.2)"
                    : "inset 0 1px 0 rgba(255, 255, 255, 0.07), 0 10px 30px rgba(0, 0, 0, 0.5)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  transition: "all 0.22s ease",
                  position: "relative",
                }}
              >
                <div>
                  {/* Top Badge & Icon */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginBottom: "20px",
                    }}
                  >
                    <div
                      style={{
                        width: "42px",
                        height: "42px",
                        borderRadius: "8px",
                        backgroundColor: "rgba(255, 255, 255, 0.04)",
                        border: "1px solid rgba(255, 255, 255, 0.08)",
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
                        fontSize: "0.72rem",
                        color: "#38bdf8",
                        padding: "3px 8px",
                        borderRadius: "4px",
                        backgroundColor: "rgba(56, 189, 248, 0.1)",
                        border: "1px solid rgba(56, 189, 248, 0.2)",
                        fontWeight: 600,
                      }}
                    >
                      {model.badge}
                    </span>
                  </div>

                  <h3
                    style={{
                      fontSize: "1.2rem",
                      fontWeight: 700,
                      color: "#ffffff",
                      marginBottom: "6px",
                      letterSpacing: "-0.015em",
                    }}
                  >
                    {model.title}
                  </h3>

                  <div
                    style={{
                      fontSize: "0.82rem",
                      color: "#94a3b8",
                      fontFamily: "var(--font-geist-mono), monospace",
                      marginBottom: "16px",
                    }}
                  >
                    {model.tagline}
                  </div>

                  <p
                    style={{
                      fontSize: "0.9rem",
                      color: "#94a3b8",
                      lineHeight: 1.6,
                      marginBottom: "22px",
                    }}
                  >
                    {model.description}
                  </p>

                  {/* Deliverables List */}
                  <div style={{ marginBottom: "26px" }}>
                    <div
                      className="mono-accent"
                      style={{
                        fontSize: "0.72rem",
                        color: "#64748b",
                        textTransform: "uppercase",
                        marginBottom: "10px",
                        fontWeight: 600,
                      }}
                    >
                      Core Deliverables:
                    </div>
                    <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "8px" }}>
                      {model.deliverables.map((del, i) => (
                        <li
                          key={i}
                          style={{
                            display: "flex",
                            alignItems: "flex-start",
                            gap: "8px",
                            fontSize: "0.82rem",
                            color: "#f8fafc",
                            lineHeight: 1.45,
                          }}
                        >
                          <CheckCircle2 size={14} color="#10b981" style={{ flexShrink: 0, marginTop: "2px" }} />
                          <span>{del}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Footer Action */}
                <div>
                  <div
                    style={{
                      fontSize: "0.76rem",
                      color: "#94a3b8",
                      paddingBottom: "14px",
                      borderBottom: "1px solid rgba(255, 255, 255, 0.06)",
                      marginBottom: "14px",
                    }}
                  >
                    <strong style={{ color: "#ffffff" }}>Ideal for:</strong> {model.idealFor}
                  </div>

                  <button
                    onClick={() => applyEngagement(model)}
                    className={isSelected ? "btn btn-primary" : "btn btn-secondary"}
                    style={{ width: "100%", justifyContent: "space-between", padding: "10px 16px" }}
                  >
                    <span>Start This Engagement</span>
                    <ArrowRight size={15} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
