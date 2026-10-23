"use client";

import { useState } from "react";
import Image from "next/image";
import { personalInfo } from "@/data/portfolioData";
import {
  ArrowDown,
  FileDown,
  Copy,
  Check,
  MapPin,
  ExternalLink,
} from "lucide-react";
import { FigmaIcon, LinkedInIcon, WhatsAppIcon } from "@/components/Icons";
import TechStackMarquee from "@/components/TechStackMarquee";

export default function Hero() {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  return (
    <section id="home" className="section" style={{ paddingTop: "120px", paddingBottom: "50px" }}>
      <div className="container">
        {/* Top Architectural Meta Strip */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "14px",
            paddingBottom: "20px",
            marginBottom: "40px",
            borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
          }}
        >
          <div
            className="mono-accent"
            style={{
              color: "#94a3b8",
              display: "flex",
              alignItems: "center",
              gap: "10px",
              textTransform: "uppercase",
            }}
          >
            <span style={{ color: "#ffffff", fontWeight: 700 }}>Faiez Ahmed</span>
            <span style={{ color: "rgba(255, 255, 255, 0.2)" }}>/</span>
            <span>UI/UX Designer &amp; Frontend Engineer</span>
          </div>

          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "4px 12px",
              borderRadius: "var(--radius-full)",
              backgroundColor: "rgba(16, 185, 129, 0.08)",
              border: "1px solid rgba(16, 185, 129, 0.25)",
              fontSize: "0.78rem",
              fontFamily: "var(--font-geist-mono), monospace",
              color: "#34d399",
              fontWeight: 600,
            }}
          >
            <span
              style={{
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                backgroundColor: "#10b981",
                boxShadow: "0 0 8px rgba(16, 185, 129, 0.8)",
              }}
            />
            <span>Available for Select Client Work &bull; Udaipur (IST)</span>
          </div>
        </div>

        {/* Hero Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "48px",
            alignItems: "center",
          }}
          className="hero-grid"
        >
          {/* Left Details */}
          <div>
            <h1
              style={{
                fontSize: "clamp(2.6rem, 5.2vw, 4.4rem)",
                fontWeight: 800,
                lineHeight: 1.08,
                letterSpacing: "-0.035em",
                color: "#ffffff",
                marginBottom: "24px",
              }}
            >
              Designing with editorial taste. <br />
              <span
                style={{
                  background: "linear-gradient(180deg, #ffffff 20%, #94a3b8 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Building with engineering rigor.
              </span>
            </h1>

            <p
              style={{
                fontSize: "1.14rem",
                color: "#94a3b8",
                lineHeight: 1.7,
                maxWidth: "600px",
                marginBottom: "36px",
              }}
            >
              I am an independent UI/UX designer and frontend developer based in Udaipur, India.
              For over 3+ years, I have helped founders, healthcare providers, and international platforms bridge
              the gap between Figma design systems and production Next.js &amp; React code.
            </p>

            {/* Action Bar */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                gap: "12px",
                marginBottom: "40px",
              }}
            >
              <a href="#projects" className="btn btn-primary">
                <span>View Selected Work</span>
                <ArrowDown size={16} />
              </a>

              <button
                onClick={copyEmail}
                className="btn btn-secondary"
                title="Click to copy email address"
              >
                {copiedEmail ? <Check size={16} color="#34d399" /> : <Copy size={16} />}
                <span>{copiedEmail ? "Email Copied!" : "Copy Email"}</span>
              </button>

              <a
                href={personalInfo.resumePdf}
                download="Faiez_Ahmed_CV.pdf"
                className="btn btn-secondary"
              >
                <FileDown size={16} />
                <span>Resume (PDF)</span>
              </a>
            </div>

            {/* Direct Channels & Focus Metrics */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                gap: "28px",
                paddingTop: "24px",
                borderTop: "1px solid rgba(255, 255, 255, 0.08)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span className="mono-accent" style={{ color: "#64748b", textTransform: "uppercase" }}>
                  Direct:
                </span>
                <a
                  href={personalInfo.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-icon btn-secondary"
                  style={{ width: "36px", height: "36px" }}
                  aria-label="LinkedIn Profile"
                >
                  <LinkedInIcon size={16} />
                </a>
                <a
                  href={personalInfo.figmaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-icon btn-secondary"
                  style={{ width: "36px", height: "36px" }}
                  aria-label="Figma Workspace"
                >
                  <FigmaIcon size={16} />
                </a>
                <a
                  href={personalInfo.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-icon btn-secondary"
                  style={{ width: "36px", height: "36px" }}
                  aria-label="WhatsApp"
                >
                  <WhatsAppIcon size={16} />
                </a>
              </div>

              <div
                className="mono-accent"
                style={{
                  color: "#94a3b8",
                  display: "flex",
                  alignItems: "center",
                  gap: "18px",
                }}
              >
                <span>3+ YRS EXP</span>
                <span style={{ color: "rgba(255, 255, 255, 0.15)" }}>&bull;</span>
                <span>12+ PRODUCTION SHIPS</span>
                <span style={{ color: "rgba(255, 255, 255, 0.15)" }}>&bull;</span>
                <span>60FPS INTERACTION</span>
              </div>
            </div>
          </div>

          {/* Right Column: Sleek Hardware Framed Portrait */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
            }}
          >
            {/* Framed Container */}
            <div
              style={{
                position: "relative",
                zIndex: 1,
                width: "100%",
                maxWidth: "380px",
                borderRadius: "var(--radius-lg)",
                backgroundColor: "#0d1016",
                border: "1px solid rgba(255, 255, 255, 0.12)",
                boxShadow: "0 25px 60px rgba(0, 0, 0, 0.8), inset 0 1px 0 rgba(255, 255, 255, 0.15)",
                overflow: "hidden",
              }}
            >
              {/* Card Header Chrome */}
              <div
                style={{
                  padding: "12px 18px",
                  borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  backgroundColor: "rgba(255, 255, 255, 0.03)",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  <span style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "rgba(255, 255, 255, 0.2)" }} />
                  <span style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "rgba(255, 255, 255, 0.2)" }} />
                  <span style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "#10b981" }} />
                </div>
                <span
                  className="mono-accent"
                  style={{ fontSize: "0.72rem", color: "#94a3b8", textTransform: "uppercase" }}
                >
                  faiez-ahmed.design
                </span>
                <span
                  style={{
                    fontSize: "0.68rem",
                    padding: "2px 8px",
                    borderRadius: "4px",
                    backgroundColor: "rgba(255, 255, 255, 0.08)",
                    border: "1px solid rgba(255, 255, 255, 0.12)",
                    color: "#f8fafc",
                    fontWeight: 700,
                  }}
                >
                  NEXT.JS 16
                </span>
              </div>

              {/* Portrait Image Area */}
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  height: "410px",
                  backgroundColor: "#080a0e",
                  display: "flex",
                  alignItems: "flex-end",
                  justifyContent: "center",
                }}
              >
                {/* Subtle Grid Behind Portrait */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    backgroundImage: `
                      linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
                      linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)
                    `,
                    backgroundSize: "32px 32px",
                    zIndex: 0,
                  }}
                />

                <Image
                  src={personalInfo.profileImage}
                  alt="Faiez Ahmed"
                  fill
                  priority
                  sizes="(max-width: 768px) 340px, 380px"
                  style={{
                    objectFit: "contain",
                    objectPosition: "bottom center",
                    zIndex: 1,
                    filter: "drop-shadow(0 20px 30px rgba(0, 0, 0, 0.6))",
                  }}
                />

                {/* Bottom Overlay Gradient */}
                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: "80px",
                    background: "linear-gradient(180deg, transparent 0%, #0d1016 100%)",
                    zIndex: 2,
                  }}
                />
              </div>

              {/* Card Footer Meta */}
              <div
                style={{
                  padding: "16px 20px",
                  borderTop: "1px solid rgba(255, 255, 255, 0.08)",
                  backgroundColor: "#0d1016",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <div style={{ fontSize: "0.95rem", fontWeight: 700, color: "#ffffff" }}>
                    Faiez Ahmed
                  </div>
                  <div
                    style={{
                      fontSize: "0.78rem",
                      color: "#94a3b8",
                      display: "flex",
                      alignItems: "center",
                      gap: "4px",
                      marginTop: "2px",
                    }}
                  >
                    <MapPin size={12} color="#10b981" />
                    <span>Udaipur, Rajasthan, India</span>
                  </div>
                </div>

                <a
                  href={personalInfo.figmaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    fontSize: "0.76rem",
                    color: "#f8fafc",
                    padding: "6px 12px",
                    borderRadius: "6px",
                    backgroundColor: "rgba(255, 255, 255, 0.06)",
                    border: "1px solid rgba(255, 255, 255, 0.12)",
                    transition: "all 0.2s ease",
                  }}
                >
                  <FigmaIcon size={12} />
                  <span>Figma Work</span>
                  <ExternalLink size={11} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Client Roster Ribbon */}
        <TechStackMarquee />
      </div>

      <style jsx>{`
        @media (min-width: 960px) {
          .hero-grid {
            grid-template-columns: 1.25fr 0.85fr !important;
          }
        }
      `}</style>
    </section>
  );
}
