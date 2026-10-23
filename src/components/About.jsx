"use client";

import Image from "next/image";
import { personalInfo, experienceTimeline } from "@/data/portfolioData";
import { FileDown, MessageSquare, MapPin } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="section" style={{ backgroundColor: "transparent" }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <span className="dot" />
            <span>Behind the Screen</span>
          </div>
          <h2 className="section-title">
            Rooted in Udaipur, <span className="gradient-text">Building for the Global Web</span>
          </h2>
          <p className="section-subtitle">
            An independent designer-engineer bridging the gap between high-taste interface design and
            resilient frontend code.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "50px",
            alignItems: "center",
          }}
          className="about-grid"
        >
          {/* Left Visual: Authentic Framed Portrait */}
          <div style={{ position: "relative" }}>
            <div
              style={{
                position: "relative",
                width: "100%",
                maxWidth: "440px",
                height: "500px",
                margin: "0 auto",
                borderRadius: "var(--radius-lg)",
                overflow: "hidden",
                border: "1px solid rgba(255, 255, 255, 0.12)",
                boxShadow: "0 25px 60px rgba(0, 0, 0, 0.8), inset 0 1px 0 rgba(255, 255, 255, 0.15)",
                backgroundColor: "#0d1016",
              }}
            >
              <Image
                src={personalInfo.aboutImage}
                alt="Faiez Ahmed in Udaipur"
                fill
                sizes="(max-width: 768px) 100vw, 440px"
                style={{ objectFit: "cover" }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(180deg, transparent 45%, #0d1016 100%)",
                }}
              />

              {/* Card Bottom Meta */}
              <div
                style={{
                  position: "absolute",
                  bottom: "22px",
                  left: "22px",
                  right: "22px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <div style={{ fontSize: "1.05rem", fontWeight: 700, color: "#ffffff" }}>
                    Faiez Ahmed
                  </div>
                  <div
                    style={{
                      fontSize: "0.8rem",
                      color: "#94a3b8",
                      display: "flex",
                      alignItems: "center",
                      gap: "4px",
                      marginTop: "2px",
                    }}
                  >
                    <MapPin size={13} color="#10b981" />
                    <span>Udaipur, Rajasthan, India</span>
                  </div>
                </div>

                <div
                  className="mono-accent"
                  style={{
                    padding: "4px 10px",
                    borderRadius: "4px",
                    backgroundColor: "rgba(56, 189, 248, 0.1)",
                    border: "1px solid rgba(56, 189, 248, 0.25)",
                    color: "#38bdf8",
                    fontSize: "0.72rem",
                    fontWeight: 600,
                  }}
                >
                  3+ YRS EXP
                </div>
              </div>
            </div>
          </div>

          {/* Right Details: Authentic Narrative */}
          <div>
            <h3
              style={{
                fontSize: "1.75rem",
                fontWeight: 800,
                color: "#ffffff",
                marginBottom: "18px",
                letterSpacing: "-0.025em",
                lineHeight: 1.25,
              }}
            >
              Where visual taste meets engineering discipline.
            </h3>

            <p
              style={{
                fontSize: "1.02rem",
                color: "#94a3b8",
                lineHeight: 1.75,
                marginBottom: "16px",
              }}
            >
              I am an independent UI/UX designer and frontend developer based in the lake city of Udaipur,
              Rajasthan. Over the last 3+ years, I have worked across international time zones with sustainability
              investors in the Netherlands, global nature restoration enterprises, and regional healthcare institutions.
            </p>

            <p
              style={{
                fontSize: "1.02rem",
                color: "#94a3b8",
                lineHeight: 1.75,
                marginBottom: "32px",
              }}
            >
              I believe that knowing code makes me a far more pragmatic designer: I design with real browser constraints,
              dynamic content, and responsive breakpoints in mind. Conversely, having an editorial eye for typography
              and spatial rhythm ensures that every React component I ship feels tactile, polished, and alive.
            </p>

            {/* Experience Timeline */}
            <div style={{ marginBottom: "36px" }}>
              <div
                className="mono-accent"
                style={{
                  fontSize: "0.76rem",
                  color: "#64748b",
                  textTransform: "uppercase",
                  marginBottom: "16px",
                }}
              >
                Experience &amp; Track Record:
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                {experienceTimeline.map((item, idx) => (
                  <div
                    key={idx}
                    style={{
                      padding: "18px 20px",
                      borderRadius: "var(--radius-md)",
                      backgroundColor: "rgba(15, 18, 24, 0.72)",
                      backdropFilter: "blur(16px)",
                      WebkitBackdropFilter: "blur(16px)",
                      border: "1px solid rgba(255, 255, 255, 0.08)",
                      boxShadow: "0 4px 18px rgba(0, 0, 0, 0.4)",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginBottom: "4px",
                        flexWrap: "wrap",
                        gap: "6px",
                      }}
                    >
                      <span style={{ fontSize: "0.98rem", fontWeight: 700, color: "#ffffff" }}>
                        {item.role}
                      </span>
                      <span
                        className="mono-accent"
                        style={{
                          fontSize: "0.72rem",
                          color: "#38bdf8",
                        }}
                      >
                        {item.period}
                      </span>
                    </div>

                    <div style={{ fontSize: "0.85rem", color: "#cbd5e1", marginBottom: "8px", fontWeight: 500 }}>
                      {item.organization}
                    </div>

                    <p style={{ fontSize: "0.88rem", color: "#94a3b8", lineHeight: 1.6 }}>
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
              <a href="#contact" className="btn btn-primary">
                <MessageSquare size={16} />
                <span>Start a Conversation</span>
              </a>

              <a
                href={personalInfo.resumePdf}
                download="Faiez_Ahmed_CV.pdf"
                className="btn btn-secondary"
              >
                <FileDown size={16} />
                <span>Download Resume</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (min-width: 960px) {
          .about-grid {
            grid-template-columns: 0.9fr 1.1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
