"use client";

import { useEffect, useState } from "react";
import { personalInfo } from "@/data/portfolioData";
import { ArrowUp, Clock, MapPin, Mail, Phone, Download } from "lucide-react";
import { LinkedInIcon, FigmaIcon, WhatsAppIcon, FacebookIcon, GitHubIcon } from "@/components/Icons";

export default function Footer() {
  const [localTime, setLocalTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      try {
        const now = new Date();
        const timeString = new Intl.DateTimeFormat("en-IN", {
          timeZone: "Asia/Kolkata",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
        }).format(now);
        setLocalTime(timeString);
      } catch (e) {
        setLocalTime("IST (UTC+5:30)");
      }
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer
      style={{
        borderTop: "1px solid rgba(255, 255, 255, 0.08)",
        backgroundColor: "rgba(5, 6, 8, 0.96)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        paddingTop: "72px",
        paddingBottom: "40px",
        position: "relative",
        zIndex: 10,
        color: "#f8fafc",
      }}
    >
      <div className="container">
        {/* Top Highlight Banner */}
        <div
          style={{
            padding: "24px 28px",
            background: "rgba(15, 18, 24, 0.75)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            borderRadius: "16px",
            border: "1px solid rgba(255, 255, 255, 0.08)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "20px",
            marginBottom: "56px",
            boxShadow: "inset 0 1px 0 rgba(255, 255, 255, 0.07), 0 10px 30px rgba(0, 0, 0, 0.5)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
            <span
              style={{
                position: "relative",
                display: "inline-flex",
                width: "10px",
                height: "10px",
              }}
            >
              <span
                style={{
                  position: "absolute",
                  inset: 0,
                  borderRadius: "50%",
                  backgroundColor: "#10b981",
                  opacity: 0.75,
                  animation: "ping 1.8s cubic-bezier(0, 0, 0.2, 1) infinite",
                }}
              />
              <span
                style={{
                  position: "relative",
                  display: "inline-block",
                  width: "10px",
                  height: "10px",
                  borderRadius: "50%",
                  backgroundColor: "#059669",
                }}
              />
            </span>
            <div>
              <div style={{ fontSize: "0.88rem", fontWeight: 700, color: "#ffffff" }}>
                Currently Open for Selected Full-Time &amp; High-Impact Contract Work
              </div>
              <div style={{ fontSize: "0.8rem", color: "#94a3b8", display: "flex", alignItems: "center", gap: "6px", marginTop: "2px" }}>
                <Clock size={12} color="#818cf8" />
                <span>Udaipur, India (IST): <strong style={{ color: "#ffffff" }}>{localTime || "Loading..."}</strong></span>
              </div>
            </div>
          </div>

          <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
            <a
              href={`mailto:${personalInfo.email}`}
              className="btn btn-primary"
              style={{ padding: "10px 18px", fontSize: "0.85rem" }}
            >
              <Mail size={14} />
              <span>Email Faiez</span>
            </a>
            <a
              href={personalInfo.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
              style={{ padding: "10px 18px", fontSize: "0.85rem" }}
            >
              <WhatsAppIcon size={14} />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>

        {/* 4 Column Studio Layout */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "48px 32px",
            marginBottom: "56px",
          }}
        >
          {/* Brand & Studio Ethos */}
          <div style={{ maxWidth: "340px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
              <div
                style={{
                  width: "38px",
                  height: "38px",
                  borderRadius: "10px",
                  background: "#ffffff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 800,
                  color: "#050608",
                  fontSize: "0.95rem",
                  letterSpacing: "-0.03em",
                }}
              >
                FA
              </div>
              <div>
                <span style={{ fontSize: "1.08rem", fontWeight: 800, color: "#ffffff", letterSpacing: "-0.02em", display: "block" }}>
                  Faiez Ahmed
                </span>
                <span style={{ fontSize: "0.78rem", color: "#94a3b8", fontWeight: 500, letterSpacing: "0.02em" }}>
                  UI/UX &amp; Frontend Engineer
                </span>
              </div>
            </div>

            <p style={{ color: "#94a3b8", fontSize: "0.88rem", lineHeight: 1.6, marginBottom: "20px" }}>
              Crafting scalable web systems, clean interfaces, and robust client software from Udaipur, India. Grounded in systematic design and maintainable code.
            </p>

            <div style={{ display: "flex", gap: "8px" }}>
              <a
                href={personalInfo.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-icon btn-secondary"
                aria-label="LinkedIn"
                style={{ width: "36px", height: "36px", borderRadius: "8px" }}
              >
                <LinkedInIcon size={15} />
              </a>
              <a
                href={personalInfo.figmaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-icon btn-secondary"
                aria-label="Figma"
                style={{ width: "36px", height: "36px", borderRadius: "8px" }}
              >
                <FigmaIcon size={15} />
              </a>
              <a
                href={personalInfo.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-icon btn-secondary"
                aria-label="WhatsApp"
                style={{ width: "36px", height: "36px", borderRadius: "8px" }}
              >
                <WhatsAppIcon size={15} />
              </a>
              <a
                href={personalInfo.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-icon btn-secondary"
                aria-label="Facebook"
                style={{ width: "36px", height: "36px", borderRadius: "8px" }}
              >
                <FacebookIcon size={15} />
              </a>
            </div>
          </div>

          {/* Navigation Directory */}
          <div>
            <h4
              style={{
                fontSize: "0.8rem",
                fontWeight: 700,
                color: "#ffffff",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                marginBottom: "20px",
              }}
            >
              Navigation
            </h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "11px", padding: 0 }}>
              {[
                { label: "Overview", href: "#home" },
                { label: "Standards & Process", href: "#process" },
                { label: "Featured Work", href: "#projects" },
                { label: "Design vs Code Sandbox", href: "#playground" },
                { label: "Core Competencies", href: "#skills" },
                { label: "Background & Milestones", href: "#about" },
                { label: "Client Endorsements", href: "#testimonials" },
                { label: "Scope & Estimator", href: "#estimate" },
              ].map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    style={{
                      fontSize: "0.88rem",
                      color: "#94a3b8",
                      transition: "color 0.15s ease",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#ffffff")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#94a3b8")}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Featured Case Studies */}
          <div>
            <h4
              style={{
                fontSize: "0.8rem",
                fontWeight: 700,
                color: "#ffffff",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                marginBottom: "20px",
              }}
            >
              Selected Clients
            </h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "12px", padding: 0 }}>
              {[
                { name: "Corekees (Netherlands)", meta: "Investment & Impact Platform" },
                { name: "DGB Group (Netherlands)", meta: "Nature-Based Carbon Assets" },
                { name: "Alokik Hospital (India)", meta: "Healthcare & Patient Portal" },
                { name: "Creative Pulse Agency", meta: "B2B Design System" },
                { name: "Ruhi Veda Ayurvedic", meta: "Direct-to-Consumer Wellness" },
              ].map((item, idx) => (
                <li key={idx}>
                  <div style={{ fontSize: "0.88rem", fontWeight: 600, color: "#ffffff" }}>
                    {item.name}
                  </div>
                  <div style={{ fontSize: "0.78rem", color: "#64748b" }}>
                    {item.meta}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Channels */}
          <div>
            <h4
              style={{
                fontSize: "0.8rem",
                fontWeight: 700,
                color: "#ffffff",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                marginBottom: "20px",
              }}
            >
              Direct Contact
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "14px", fontSize: "0.88rem" }}>
              <div>
                <span style={{ display: "block", fontSize: "0.75rem", textTransform: "uppercase", color: "#64748b", letterSpacing: "0.05em", marginBottom: "3px" }}>Email</span>
                <a
                  href={`mailto:${personalInfo.email}`}
                  style={{ color: "#ffffff", fontWeight: 600, textDecoration: "underline", textUnderlineOffset: "3px" }}
                >
                  {personalInfo.email}
                </a>
              </div>

              <div>
                <span style={{ display: "block", fontSize: "0.75rem", textTransform: "uppercase", color: "#64748b", letterSpacing: "0.05em", marginBottom: "3px" }}>Direct Phone</span>
                <a
                  href={`tel:${personalInfo.phoneClean}`}
                  style={{ color: "#94a3b8" }}
                >
                  {personalInfo.phone}
                </a>
              </div>

              <div>
                <span style={{ display: "block", fontSize: "0.75rem", textTransform: "uppercase", color: "#64748b", letterSpacing: "0.05em", marginBottom: "3px" }}>Location</span>
                <span style={{ color: "#94a3b8", display: "flex", alignItems: "center", gap: "4px" }}>
                  <MapPin size={13} color="#10b981" />
                  {personalInfo.location}
                </span>
              </div>

              <div style={{ paddingTop: "8px" }}>
                <a
                  href={personalInfo.resumePdf}
                  download="Faiez_Ahmed_CV.pdf"
                  className="btn btn-secondary"
                  style={{ padding: "8px 14px", fontSize: "0.82rem", width: "100%", justifyContent: "center" }}
                >
                  <Download size={13} />
                  <span>Download Full CV (PDF)</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Sub-footer */}
        <div
          style={{
            paddingTop: "28px",
            borderTop: "1px solid rgba(255, 255, 255, 0.08)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "16px",
            fontSize: "0.82rem",
            color: "#64748b",
          }}
        >
          <div>
            &copy; 2026 Faiez Ahmed. Built with Next.js, React &amp; precision CSS tokens.
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
            <span style={{ color: "#64748b" }}>Crafted for fast load &amp; accessibility</span>
            <button
              onClick={scrollToTop}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                color: "#f8fafc",
                fontWeight: 600,
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: "4px 8px",
                borderRadius: "6px",
                fontSize: "0.82rem",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.08)")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
            >
              <span>Back to Top</span>
              <ArrowUp size={13} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
