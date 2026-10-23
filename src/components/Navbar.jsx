"use client";

import { useState, useEffect } from "react";
import { personalInfo } from "@/data/portfolioData";
import { FileDown, Menu, X, ArrowUpRight } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const totalScroll = document.documentElement.scrollTop || document.body.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const percent = windowHeight > 0 ? (totalScroll / windowHeight) * 100 : 0;
      setScrollProgress(percent);

      const sections = ["home", "process", "projects", "skills", "about", "testimonials", "contact"];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#home", label: "Index", id: "home" },
    { href: "#process", label: "Standards", id: "process" },
    { href: "#projects", label: "Work", id: "projects" },
    { href: "#skills", label: "Stack", id: "skills" },
    { href: "#about", label: "About", id: "about" },
    { href: "#testimonials", label: "Endorsements", id: "testimonials" },
    { href: "#contact", label: "Contact", id: "contact" },
  ];

  return (
    <>
      <div id="reading-progress" style={{ width: `${scrollProgress}%` }} />
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          transition: "all 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
          padding: scrolled ? "12px 0" : "18px 0",
          backgroundColor: scrolled ? "rgba(5, 6, 8, 0.82)" : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(255, 255, 255, 0.08)" : "1px solid transparent",
        }}
      >
        <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          {/* Brand Monogram */}
          <a
            href="#home"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              textDecoration: "none",
            }}
          >
            <div
              style={{
                width: "34px",
                height: "34px",
                borderRadius: "6px",
                backgroundColor: "rgba(255, 255, 255, 0.08)",
                border: "1px solid rgba(255, 255, 255, 0.16)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 800,
                fontSize: "0.85rem",
                color: "#ffffff",
                boxShadow: "inset 0 1px 0 rgba(255, 255, 255, 0.15)",
              }}
            >
              FA
            </div>
            <div>
              <div
                style={{
                  fontSize: "0.98rem",
                  fontWeight: 700,
                  color: "#ffffff",
                  letterSpacing: "-0.02em",
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                }}
              >
                Faiez Ahmed
                <span
                  style={{
                    display: "inline-block",
                    width: "6px",
                    height: "6px",
                    borderRadius: "50%",
                    backgroundColor: "#10b981",
                    boxShadow: "0 0 8px rgba(16, 185, 129, 0.6)",
                  }}
                />
              </div>
              <div
                className="mono-accent"
                style={{
                  fontSize: "0.68rem",
                  color: "#94a3b8",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                }}
              >
                Design &bull; Frontend
              </div>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav
            style={{
              display: "none",
              alignItems: "center",
              gap: "2px",
              backgroundColor: "rgba(15, 18, 24, 0.75)",
              backdropFilter: "blur(16px)",
              WebkitBackdropFilter: "blur(16px)",
              padding: "4px 6px",
              borderRadius: "var(--radius-full)",
              border: "1px solid rgba(255, 255, 255, 0.09)",
              boxShadow: "0 8px 30px rgba(0, 0, 0, 0.5)",
            }}
            className="desktop-nav"
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  style={{
                    padding: "6px 14px",
                    borderRadius: "var(--radius-full)",
                    fontSize: "0.82rem",
                    fontWeight: isActive ? 600 : 500,
                    color: isActive ? "#ffffff" : "#94a3b8",
                    backgroundColor: isActive ? "rgba(255, 255, 255, 0.1)" : "transparent",
                    border: isActive ? "1px solid rgba(255, 255, 255, 0.16)" : "1px solid transparent",
                    transition: "all 0.18s ease",
                    textDecoration: "none",
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.color = "#ffffff";
                      e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.05)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.color = "#94a3b8";
                      e.currentTarget.style.backgroundColor = "transparent";
                    }
                  }}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Right Actions */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            {/* Status Badge */}
            <div
              style={{
                display: "none",
                alignItems: "center",
                gap: "8px",
                padding: "6px 12px",
                borderRadius: "var(--radius-full)",
                backgroundColor: "rgba(16, 185, 129, 0.08)",
                border: "1px solid rgba(16, 185, 129, 0.25)",
                fontSize: "0.76rem",
                fontWeight: 600,
                color: "#34d399",
              }}
              className="status-badge"
            >
              <span
                style={{
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  backgroundColor: "#10b981",
                  boxShadow: "0 0 6px rgba(16, 185, 129, 0.8)",
                }}
              />
              <span>Available for Work</span>
            </div>

            {/* Download CV */}
            <a
              href={personalInfo.resumePdf}
              download="Faiez_Ahmed_CV.pdf"
              className="btn btn-secondary"
              style={{
                padding: "8px 16px",
                fontSize: "0.84rem",
                display: "inline-flex",
              }}
            >
              <FileDown size={15} />
              <span>CV</span>
            </a>

            {/* Hire Me CTA */}
            <a
              href="#contact"
              className="btn btn-primary"
              style={{
                padding: "8px 18px",
                fontSize: "0.84rem",
                display: "inline-flex",
              }}
            >
              <span>Get in Touch</span>
              <ArrowUpRight size={15} />
            </a>

            {/* Mobile Menu Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              style={{
                width: "38px",
                height: "38px",
                borderRadius: "8px",
                backgroundColor: "rgba(255, 255, 255, 0.05)",
                border: "1px solid rgba(255, 255, 255, 0.12)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#ffffff",
              }}
              className="mobile-toggle"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Drawer */}
        {mobileMenuOpen && (
          <div
            style={{
              position: "fixed",
              top: "65px",
              left: 0,
              right: 0,
              backgroundColor: "rgba(10, 12, 16, 0.96)",
              backdropFilter: "blur(20px)",
              borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
              padding: "20px 20px 28px 20px",
              boxShadow: "0 16px 32px rgba(0, 0, 0, 0.7)",
              display: "flex",
              flexDirection: "column",
              gap: "8px",
              zIndex: 999,
            }}
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  style={{
                    padding: "10px 16px",
                    borderRadius: "8px",
                    fontSize: "0.95rem",
                    fontWeight: 600,
                    color: isActive ? "#ffffff" : "#94a3b8",
                    backgroundColor: isActive ? "rgba(255, 255, 255, 0.08)" : "transparent",
                    border: isActive ? "1px solid rgba(255, 255, 255, 0.15)" : "1px solid transparent",
                    textDecoration: "none",
                  }}
                >
                  {link.label}
                </a>
              );
            })}

            <div style={{ marginTop: "12px", display: "flex", flexDirection: "column", gap: "8px" }}>
              <a
                href={personalInfo.resumePdf}
                download="Faiez_Ahmed_CV.pdf"
                className="btn btn-secondary"
                style={{ width: "100%", justifyContent: "center" }}
                onClick={() => setMobileMenuOpen(false)}
              >
                <FileDown size={16} />
                <span>Download Resume (PDF)</span>
              </a>
              <a
                href="#contact"
                className="btn btn-primary"
                style={{ width: "100%", justifyContent: "center" }}
                onClick={() => setMobileMenuOpen(false)}
              >
                <span>Get in Touch</span>
                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        )}

        <style jsx>{`
          @media (min-width: 900px) {
            .desktop-nav {
              display: flex !important;
            }
            .status-badge {
              display: inline-flex !important;
            }
            .mobile-toggle {
              display: none !important;
            }
          }
        `}</style>
      </header>
    </>
  );
}
