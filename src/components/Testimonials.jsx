"use client";

import { testimonials } from "@/data/portfolioData";
import { CheckCircle2, Quote } from "lucide-react";

export default function Testimonials() {
  const verifiedProjects = [
    { client: "Corekees (Netherlands)", domain: "corekees.com", tag: "Sustainable Agroforestry Investment" },
    { client: "DGB Group", domain: "green.earth", tag: "Global Carbon Restoration" },
    { client: "Alokik Hospital", domain: "alokikhospital.com", tag: "Healthcare Provider Portal" },
    { client: "Creative Pulse Agency", domain: "Client Delivery", tag: "Product Prototyping" },
  ];

  return (
    <section id="testimonials" className="section" style={{ backgroundColor: "transparent" }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <span className="dot" />
            <span>Client Endorsements</span>
          </div>
          <h2 className="section-title">
            Trusted by Product Leaders &amp; <span className="gradient-text">Founders</span>
          </h2>
          <p className="section-subtitle">
            Direct feedback from teams across Europe and India on delivery velocity, design systems discipline,
            and production code quality.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "24px",
          }}
        >
          {testimonials.map((item, index) => {
            const meta = verifiedProjects[index] || { tag: "Client Deployment" };

            return (
              <div
                key={index}
                style={{
                  padding: "34px 28px",
                  borderRadius: "var(--radius-lg)",
                  backgroundColor: "rgba(15, 18, 24, 0.72)",
                  backdropFilter: "blur(20px)",
                  WebkitBackdropFilter: "blur(20px)",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                  boxShadow: "inset 0 1px 0 rgba(255, 255, 255, 0.07), 0 10px 30px rgba(0, 0, 0, 0.5)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  position: "relative",
                  transition: "all 0.22s ease",
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
                  {/* Top Meta Tag */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginBottom: "20px",
                    }}
                  >
                    <span
                      className="mono-accent"
                      style={{
                        fontSize: "0.72rem",
                        color: "#38bdf8",
                        textTransform: "uppercase",
                      }}
                    >
                      {meta.tag}
                    </span>

                    <Quote size={20} color="rgba(255, 255, 255, 0.15)" />
                  </div>

                  {/* Quote Body */}
                  <p
                    style={{
                      fontSize: "0.98rem",
                      color: "#f8fafc",
                      lineHeight: 1.7,
                      marginBottom: "26px",
                      fontStyle: "normal",
                    }}
                  >
                    &ldquo;{item.quote}&rdquo;
                  </p>
                </div>

                {/* Author Info */}
                <div
                  style={{
                    paddingTop: "18px",
                    borderTop: "1px solid rgba(255, 255, 255, 0.06)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <div>
                    <div
                      style={{
                        fontSize: "0.95rem",
                        fontWeight: 700,
                        color: "#ffffff",
                        display: "flex",
                        alignItems: "center",
                        gap: "6px",
                      }}
                    >
                      <span>{item.author}</span>
                      <CheckCircle2 size={13} color="#10b981" />
                    </div>
                    <div style={{ fontSize: "0.8rem", color: "#94a3b8", marginTop: "2px" }}>
                      {item.role} &bull; <strong style={{ color: "#ffffff" }}>{item.company}</strong>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
