"use client";

import { Code, Palette, Layers, CheckCircle2 } from "lucide-react";

export default function Skills() {
  const skillClusters = [
    {
      category: "Frontend Architecture",
      icon: Code,
      description: "Modular, performant component engineering with modern React and Next.js paradigms.",
      items: [
        { name: "Next.js 16 (App Router)", focus: "Server/Client Boundaries, Turbopack, SSR/SSG", tier: "Daily Driver" },
        { name: "React 19 Primitives", focus: "Component Architecture, Custom Hooks, Suspense", tier: "Daily Driver" },
        { name: "Modern JavaScript (ES6+)", focus: "Async Patterns, DOM Lifecycle, Clean Architecture", tier: "Core Foundation" },
        { name: "Modern CSS & CSS Modules", focus: "Custom Properties, Flexbox, Grid, Fluid Type", tier: "Daily Driver" },
        { name: "Tailwind CSS & Utility Systems", focus: "Design Token Mapping, Rapid Prototyping", tier: "Proficient" },
        { name: "Responsive & Adaptive Layouts", focus: "Fluid Viewports from 320px to 4K Ultrawide", tier: "Core Standard" },
      ],
    },
    {
      category: "UI/UX & Design Systems",
      icon: Palette,
      description: "Mathematical design tokens, auto-layout variants, and high-fidelity interaction flows in Figma.",
      items: [
        { name: "Figma Variables & Tokens", focus: "Semantic Color Scales, Spacing Rhythms, Radii", tier: "Daily Driver" },
        { name: "Auto-Layout & Variant Matrices", focus: "Responsive Component Systems with Zero Broken States", tier: "Specialist" },
        { name: "Interactive Smart Prototypes", focus: "Micro-Interactions, Easing Curves, User Flows", tier: "Specialist" },
        { name: "Design-to-Code Handoff", focus: "Eliminating Ambiguity between Design & Engineering", tier: "Core Workflow" },
        { name: "Wireframing & Information Architecture", focus: "User Journey Maps, High-Converting Funnels", tier: "Proficient" },
        { name: "Adobe Photoshop & Illustrator", focus: "Asset Optimization, Vector Export, SVG Sprites", tier: "Asset Tooling" },
      ],
    },
    {
      category: "Platforms & Web Delivery",
      icon: Layers,
      description: "Production deployments, CMS customization, and strict web performance auditing.",
      items: [
        { name: "WordPress Custom Themes", focus: "PHP, WooCommerce Integration, Bespoke Styling", tier: "Client Deployments" },
        { name: "Core Web Vitals Optimization", focus: "Sub-Second LCP, CLS Elimination, Efficient Asset Loading", tier: "Performance" },
        { name: "Cross-Browser Hardening", focus: "Pixel-Perfect Consistency on Safari, Chrome, Firefox, Edge", tier: "Quality Assurance" },
        { name: "Accessibility (WCAG 2.1)", focus: "Keyboard Navigation, Contrast AA/AAA, Semantic Tags", tier: "Standard" },
        { name: "Headless APIs & Formspree", focus: "Serverless Endpoints, Async Webhooks, Dynamic Validation", tier: "Integration" },
        { name: "Git & Version Control", focus: "Trunk-Based Delivery, Clean Branching, CI/CD", tier: "Workflow" },
      ],
    },
  ];

  return (
    <section id="skills" className="section" style={{ backgroundColor: "transparent" }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <span className="dot" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="section-title">
            Engineering Toolkit &amp; <span className="gradient-text">Design Stack</span>
          </h2>
          <p className="section-subtitle">
            A comprehensive matrix of the frameworks, design tools, and production standards I use daily
            to build robust digital experiences.
          </p>
        </div>

        {/* Clusters Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "24px",
          }}
        >
          {skillClusters.map((cluster, idx) => {
            const Icon = cluster.icon;
            return (
              <div
                key={idx}
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
                }}
              >
                <div>
                  {/* Category Title Bar */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                      marginBottom: "10px",
                    }}
                  >
                    <div
                      style={{
                        width: "36px",
                        height: "36px",
                        borderRadius: "8px",
                        backgroundColor: "rgba(255, 255, 255, 0.05)",
                        border: "1px solid rgba(255, 255, 255, 0.1)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#38bdf8",
                      }}
                    >
                      <Icon size={18} />
                    </div>
                    <h3 style={{ fontSize: "1.15rem", fontWeight: 700, color: "#ffffff" }}>
                      {cluster.category}
                    </h3>
                  </div>

                  <p
                    style={{
                      fontSize: "0.88rem",
                      color: "#94a3b8",
                      lineHeight: 1.6,
                      marginBottom: "24px",
                    }}
                  >
                    {cluster.description}
                  </p>

                  {/* Skills List */}
                  <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                    {cluster.items.map((item, itemIdx) => (
                      <div
                        key={itemIdx}
                        style={{
                          padding: "10px 14px",
                          borderRadius: "8px",
                          backgroundColor: "rgba(255, 255, 255, 0.03)",
                          border: "1px solid rgba(255, 255, 255, 0.06)",
                          display: "flex",
                          flexDirection: "column",
                          gap: "3px",
                          transition: "all 0.15s ease",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.06)";
                          e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.14)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.03)";
                          e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.06)";
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                          }}
                        >
                          <span style={{ fontSize: "0.88rem", fontWeight: 600, color: "#f8fafc" }}>
                            {item.name}
                          </span>
                          <span
                            className="mono-accent"
                            style={{
                              fontSize: "0.68rem",
                              color: "#38bdf8",
                              textTransform: "uppercase",
                              padding: "2px 6px",
                              borderRadius: "4px",
                              backgroundColor: "rgba(56, 189, 248, 0.1)",
                              border: "1px solid rgba(56, 189, 248, 0.2)",
                              fontWeight: 600,
                            }}
                          >
                            {item.tier}
                          </span>
                        </div>
                        <div style={{ fontSize: "0.78rem", color: "#94a3b8", lineHeight: 1.4 }}>
                          {item.focus}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div
                  className="mono-accent"
                  style={{
                    marginTop: "24px",
                    paddingTop: "14px",
                    borderTop: "1px solid rgba(255, 255, 255, 0.06)",
                    fontSize: "0.72rem",
                    color: "#94a3b8",
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                  }}
                >
                  <CheckCircle2 size={13} color="#10b981" />
                  <span>Vetted in production codebases</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
