"use client";

import { useState, useEffect } from "react";
import { personalInfo } from "@/data/portfolioData";
import {
  Send,
  Mail,
  Phone,
  MapPin,
  MessageSquare,
  CheckCircle,
  Copy,
  Check,
  ExternalLink,
  AlertCircle,
  Loader2,
  Zap,
} from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "UI/UX & Frontend Development",
    budget: "$1,000 - $3,000",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("idle"); // idle | submitting | success | error
  const [errorMessage, setErrorMessage] = useState("");
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_ID || "faiezahmed844";

  // Listen to prefill event from ProjectEstimator
  useEffect(() => {
    const handlePrefill = (e) => {
      if (e.detail) {
        setFormData((prev) => ({
          ...prev,
          service: e.detail.service || prev.service,
          budget: e.detail.budget || prev.budget,
          subject: e.detail.subject || prev.subject,
          message: e.detail.message || prev.message,
        }));
      }
    };
    window.addEventListener("prefill-contact", handlePrefill);
    return () => window.removeEventListener("prefill-contact", handlePrefill);
  }, []);

  const quickPrompts = [
    {
      label: "Next.js Web App",
      service: "Next.js Web Application",
      subject: "Inquiry: Next.js Web App Development",
      message: "Hi Faiez, I am looking to build a high-performance Next.js web application. I'd love to discuss timelines and design architecture.",
    },
    {
      label: "Figma UI/UX Kit",
      service: "Figma Design System / Prototyping",
      subject: "Inquiry: Figma UI/UX Design System",
      message: "Hi Faiez, We need an intuitive, pixel-perfect Figma design system with components and interactive prototypes for our product team.",
    },
    {
      label: "Full Design-to-Code",
      service: "UI/UX & Frontend Development",
      subject: "Inquiry: Complete Design-to-Code Project",
      message: "Hi Faiez, We have an idea that needs both user interface design in Figma and complete frontend implementation in Next.js/React.",
    },
  ];

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    if (type === "email") {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const dynamicWhatsappUrl = `https://wa.me/9166468807?text=${encodeURIComponent(
    formData.message.trim()
      ? `Hi Faiez, I'm reaching out from your portfolio:\n\nName: ${formData.name || "Client"}\nService: ${formData.service}\nBudget: ${formData.budget}\n\n${formData.message}`
      : "Hi Faiez, I reviewed your portfolio and would love to discuss a project!"
  )}`;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          service: formData.service,
          budget: formData.budget,
          subject: formData.subject || `New Project Inquiry from ${formData.name}`,
          message: formData.message,
          _replyto: formData.email,
        }),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          service: "UI/UX & Frontend Development",
          budget: "$1,000 - $3,000",
          subject: "",
          message: "",
        });
      } else {
        const data = await response.json().catch(() => ({}));
        if (data.errors && data.errors.length > 0) {
          setErrorMessage(data.errors.map((err) => err.message).join(", "));
        } else {
          setErrorMessage("Formspree form endpoint pending setup. You can also reach out directly via WhatsApp or Email below!");
        }
        setStatus("error");
      }
    } catch (err) {
      console.error("Submission error:", err);
      setErrorMessage("Network issue connecting to Formspree. Please feel free to email or WhatsApp directly!");
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="section" style={{ backgroundColor: "transparent" }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <span className="dot" />
            <span>Initiate Collaboration</span>
          </div>
          <h2 className="section-title">
            Let&apos;s Build Something <span className="gradient-text">Memorable Together</span>
          </h2>
          <p className="section-subtitle">
            Whether you need an end-to-end design sprint, Next.js engineering, or design system tokens,
            send an inquiry below or reach out directly on WhatsApp or Email.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "36px",
            alignItems: "start",
          }}
          className="contact-grid"
        >
          {/* Left: Contact Info & Quick Actions */}
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            {/* Direct Connect Card */}
            <div
              className="glass-card"
              style={{
                padding: "36px 30px",
                backgroundColor: "rgba(15, 18, 24, 0.72)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                boxShadow: "inset 0 1px 0 rgba(255, 255, 255, 0.07), 0 10px 30px rgba(0, 0, 0, 0.5)",
              }}
            >
              <h3 style={{ fontSize: "1.3rem", fontWeight: 800, color: "#ffffff", marginBottom: "6px" }}>
                Direct Contact Channels
              </h3>
              <p style={{ color: "#94a3b8", fontSize: "0.92rem", marginBottom: "26px" }}>
                I typically respond within 2-4 hours on weekdays.
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                {/* Email Item */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "14px 16px",
                    borderRadius: "var(--radius-md)",
                    backgroundColor: "rgba(255, 255, 255, 0.03)",
                    border: "1px solid rgba(255, 255, 255, 0.08)",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    <div
                      style={{
                        width: "38px",
                        height: "38px",
                        borderRadius: "8px",
                        backgroundColor: "rgba(255, 255, 255, 0.06)",
                        color: "#f8fafc",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Mail size={18} />
                    </div>
                    <div>
                      <div style={{ fontSize: "0.72rem", color: "#64748b", textTransform: "uppercase", fontWeight: 600 }}>
                        Email Address
                      </div>
                      <a
                        href={`mailto:${personalInfo.email}`}
                        style={{ fontSize: "0.92rem", fontWeight: 600, color: "#ffffff" }}
                      >
                        {personalInfo.email}
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={() => copyToClipboard(personalInfo.email, "email")}
                    className="btn-icon btn-secondary"
                    style={{ width: "34px", height: "34px" }}
                    title="Copy Email"
                  >
                    {copiedEmail ? <Check size={15} color="#10b981" /> : <Copy size={15} />}
                  </button>
                </div>

                {/* Phone Item */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "14px 16px",
                    borderRadius: "var(--radius-md)",
                    backgroundColor: "rgba(255, 255, 255, 0.03)",
                    border: "1px solid rgba(255, 255, 255, 0.08)",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    <div
                      style={{
                        width: "38px",
                        height: "38px",
                        borderRadius: "8px",
                        backgroundColor: "rgba(255, 255, 255, 0.06)",
                        color: "#f8fafc",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Phone size={18} />
                    </div>
                    <div>
                      <div style={{ fontSize: "0.72rem", color: "#64748b", textTransform: "uppercase", fontWeight: 600 }}>
                        Phone / Call
                      </div>
                      <a
                        href={`tel:${personalInfo.phoneClean}`}
                        style={{ fontSize: "0.92rem", fontWeight: 600, color: "#ffffff" }}
                      >
                        {personalInfo.phone}
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={() => copyToClipboard(personalInfo.phone, "phone")}
                    className="btn-icon btn-secondary"
                    style={{ width: "34px", height: "34px" }}
                    title="Copy Phone"
                  >
                    {copiedPhone ? <Check size={15} color="#10b981" /> : <Copy size={15} />}
                  </button>
                </div>

                {/* Location Item */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    padding: "14px 16px",
                    borderRadius: "var(--radius-md)",
                    backgroundColor: "rgba(255, 255, 255, 0.03)",
                    border: "1px solid rgba(255, 255, 255, 0.08)",
                  }}
                >
                  <div
                    style={{
                      width: "38px",
                      height: "38px",
                      borderRadius: "8px",
                      backgroundColor: "rgba(16, 185, 129, 0.12)",
                      color: "#10b981",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <MapPin size={18} />
                  </div>
                  <div>
                    <div style={{ fontSize: "0.72rem", color: "#64748b", textTransform: "uppercase", fontWeight: 600 }}>
                      Location
                    </div>
                    <div style={{ fontSize: "0.92rem", fontWeight: 600, color: "#ffffff" }}>
                      {personalInfo.location}
                    </div>
                  </div>
                </div>
              </div>

              {/* Instant Dynamic WhatsApp Reach Out */}
              <div style={{ marginTop: "24px" }}>
                <a
                  href={dynamicWhatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-emerald"
                  style={{ width: "100%", padding: "13px", fontSize: "0.94rem" }}
                >
                  <MessageSquare size={17} />
                  <span>Chat Instantly on WhatsApp</span>
                  <ExternalLink size={15} />
                </a>
              </div>
            </div>

            {/* Map Card */}
            <div
              className="glass-card"
              style={{
                borderRadius: "var(--radius-lg)",
                overflow: "hidden",
                height: "210px",
                position: "relative",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                backgroundColor: "rgba(15, 18, 24, 0.72)",
              }}
            >
              <iframe
                title="Faiez Ahmed Location - Udaipur"
                width="100%"
                height="100%"
                frameBorder="0"
                scrolling="no"
                marginHeight="0"
                marginWidth="0"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3627.8589886879117!2d73.72056017507295!3d24.594062255866188!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3967e594ea500f2b%3A0x4fd66fd3787dc438!2zQmlsYWxpIE1hc2ppZCDZhdiz2KzYrw!5e0!3m2!1sen!2sin!4v1709470389828!5m2!1sen!2sin"
                style={{
                  border: "none",
                  filter: "invert(90%) hue-rotate(180deg) contrast(90%)",
                  opacity: 0.85,
                }}
              />
            </div>
          </div>

          {/* Right: Formspree Contact Form */}
          <div
            className="glass-card"
            style={{
              padding: "38px 34px",
              borderRadius: "var(--radius-xl)",
              backgroundColor: "rgba(15, 18, 24, 0.72)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              border: "1px solid rgba(255, 255, 255, 0.08)",
              boxShadow: "inset 0 1px 0 rgba(255, 255, 255, 0.07), 0 10px 30px rgba(0, 0, 0, 0.5)",
              position: "relative",
            }}
          >
            <div style={{ marginBottom: "24px" }}>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  color: "#818cf8",
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                  marginBottom: "8px",
                }}
              >
                <span>Direct Inquiry Form</span>
              </div>
              <h3 style={{ fontSize: "1.5rem", fontWeight: 800, color: "#ffffff", marginBottom: "6px" }}>
                Send a Message
              </h3>
              <p style={{ color: "#94a3b8", fontSize: "0.92rem" }}>
                Fill in the details below or choose a quick prompt to prefill your inquiry.
              </p>
            </div>

            {/* Quick Prompts Bar */}
            <div style={{ marginBottom: "22px" }}>
              <div style={{ fontSize: "0.74rem", color: "#64748b", textTransform: "uppercase", marginBottom: "8px", fontWeight: 600 }}>
                Quick Inquiry Starters:
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {quickPrompts.map((p, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => {
                      setFormData((prev) => ({
                        ...prev,
                        service: p.service,
                        subject: p.subject,
                        message: p.message,
                      }));
                    }}
                    style={{
                      padding: "6px 13px",
                      borderRadius: "var(--radius-full)",
                      fontSize: "0.78rem",
                      fontWeight: 600,
                      backgroundColor: "rgba(255, 255, 255, 0.04)",
                      border: "1px solid rgba(255, 255, 255, 0.09)",
                      color: "#cbd5e1",
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                      transition: "all 0.15s ease",
                      cursor: "pointer",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
                      e.currentTarget.style.color = "#ffffff";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.04)";
                      e.currentTarget.style.color = "#cbd5e1";
                    }}
                  >
                    <Zap size={12} color="#818cf8" />
                    <span>{p.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Success Banner */}
            {status === "success" ? (
              <div
                style={{
                  padding: "36px 28px",
                  borderRadius: "var(--radius-md)",
                  backgroundColor: "rgba(16, 185, 129, 0.1)",
                  border: "1px solid rgba(16, 185, 129, 0.3)",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    width: "52px",
                    height: "52px",
                    borderRadius: "50%",
                    backgroundColor: "rgba(16, 185, 129, 0.2)",
                    color: "#10b981",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 16px auto",
                  }}
                >
                  <CheckCircle size={30} />
                </div>
                <h4 style={{ fontSize: "1.35rem", fontWeight: 700, color: "#ffffff", marginBottom: "8px" }}>
                  Message Sent Successfully!
                </h4>
                <p style={{ color: "#34d399", fontSize: "0.95rem", lineHeight: 1.6, marginBottom: "22px" }}>
                  Thank you for reaching out. Your message has been routed to Faiez Ahmed. Expect a response
                  within 24 hours.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="btn btn-secondary"
                  style={{ padding: "9px 20px" }}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
                {/* Formspree Error Notice */}
                {status === "error" && (
                  <div
                    style={{
                      padding: "14px 18px",
                      borderRadius: "var(--radius-md)",
                      backgroundColor: "rgba(244, 63, 94, 0.1)",
                      border: "1px solid rgba(244, 63, 94, 0.3)",
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "10px",
                      color: "#fda4af",
                      fontSize: "0.88rem",
                    }}
                  >
                    <AlertCircle size={18} color="#f43f5e" style={{ flexShrink: 0, marginTop: "2px" }} />
                    <div>
                      <div style={{ fontWeight: 600, marginBottom: "2px" }}>Submission Notice</div>
                      <div>{errorMessage}</div>
                      <div style={{ marginTop: "8px" }}>
                        <a
                          href={`mailto:${personalInfo.email}?subject=${encodeURIComponent(
                            formData.subject || "Project Inquiry"
                          )}&body=${encodeURIComponent(
                            `Name: ${formData.name}\nService: ${formData.service}\nBudget: ${formData.budget}\n\n${formData.message}`
                          )}`}
                          className="btn btn-primary"
                          style={{ padding: "5px 12px", fontSize: "0.8rem" }}
                        >
                          Email Directly Instead
                        </a>
                      </div>
                    </div>
                  </div>
                )}

                {/* Name & Email Row */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }} className="form-row">
                  <div>
                    <label
                      htmlFor="name"
                      style={{
                        display: "block",
                        fontSize: "0.82rem",
                        fontWeight: 600,
                        color: "#e2e8f0",
                        marginBottom: "6px",
                      }}
                    >
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Alex Rivera"
                      style={{
                        width: "100%",
                        padding: "12px 14px",
                        borderRadius: "8px",
                        backgroundColor: "rgba(255, 255, 255, 0.04)",
                        border: "1px solid rgba(255, 255, 255, 0.1)",
                        color: "#ffffff",
                        fontSize: "0.92rem",
                        outline: "none",
                        transition: "all 0.2s ease",
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = "#818cf8";
                        e.target.style.boxShadow = "0 0 0 3px rgba(129, 140, 248, 0.2)";
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = "rgba(255, 255, 255, 0.1)";
                        e.target.style.boxShadow = "none";
                      }}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      style={{
                        display: "block",
                        fontSize: "0.82rem",
                        fontWeight: 600,
                        color: "#e2e8f0",
                        marginBottom: "6px",
                      }}
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. alex@company.com"
                      style={{
                        width: "100%",
                        padding: "12px 14px",
                        borderRadius: "8px",
                        backgroundColor: "rgba(255, 255, 255, 0.04)",
                        border: "1px solid rgba(255, 255, 255, 0.1)",
                        color: "#ffffff",
                        fontSize: "0.92rem",
                        outline: "none",
                        transition: "all 0.2s ease",
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = "#818cf8";
                        e.target.style.boxShadow = "0 0 0 3px rgba(129, 140, 248, 0.2)";
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = "rgba(255, 255, 255, 0.1)";
                        e.target.style.boxShadow = "none";
                      }}
                    />
                  </div>
                </div>

                {/* Service & Budget Selectors */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }} className="form-row">
                  <div>
                    <label
                      htmlFor="service"
                      style={{
                        display: "block",
                        fontSize: "0.82rem",
                        fontWeight: 600,
                        color: "#e2e8f0",
                        marginBottom: "6px",
                      }}
                    >
                      Service Required
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      style={{
                        width: "100%",
                        padding: "12px 14px",
                        borderRadius: "8px",
                        backgroundColor: "#0d1017",
                        border: "1px solid rgba(255, 255, 255, 0.1)",
                        color: "#ffffff",
                        fontSize: "0.9rem",
                        outline: "none",
                      }}
                    >
                      <option value="UI/UX & Frontend Development" style={{ backgroundColor: "#0d1017", color: "#ffffff" }}>UI/UX &amp; Frontend Development</option>
                      <option value="Next.js Web Application" style={{ backgroundColor: "#0d1017", color: "#ffffff" }}>Next.js Web Application</option>
                      <option value="Figma Design System / Prototyping" style={{ backgroundColor: "#0d1017", color: "#ffffff" }}>Figma Design System / Prototyping</option>
                      <option value="WordPress Custom Platform" style={{ backgroundColor: "#0d1017", color: "#ffffff" }}>WordPress Custom Platform</option>
                      <option value="Frontend Performance & Refactoring" style={{ backgroundColor: "#0d1017", color: "#ffffff" }}>Frontend Performance &amp; Refactoring</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="budget"
                      style={{
                        display: "block",
                        fontSize: "0.82rem",
                        fontWeight: 600,
                        color: "#e2e8f0",
                        marginBottom: "6px",
                      }}
                    >
                      Project Budget
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      style={{
                        width: "100%",
                        padding: "12px 14px",
                        borderRadius: "8px",
                        backgroundColor: "#0d1017",
                        border: "1px solid rgba(255, 255, 255, 0.1)",
                        color: "#ffffff",
                        fontSize: "0.9rem",
                        outline: "none",
                      }}
                    >
                      <option value="Under $1,000" style={{ backgroundColor: "#0d1017", color: "#ffffff" }}>Under $1,000</option>
                      <option value="$1,000 - $3,000" style={{ backgroundColor: "#0d1017", color: "#ffffff" }}>$1,000 - $3,000</option>
                      <option value="$3,000 - $5,000" style={{ backgroundColor: "#0d1017", color: "#ffffff" }}>$3,000 - $5,000</option>
                      <option value="$5,000+" style={{ backgroundColor: "#0d1017", color: "#ffffff" }}>$5,000+ (Enterprise)</option>
                    </select>
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label
                    htmlFor="subject"
                    style={{
                      display: "block",
                      fontSize: "0.82rem",
                      fontWeight: 600,
                      color: "#e2e8f0",
                      marginBottom: "6px",
                    }}
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. Redesigning our SaaS Web Platform"
                    style={{
                      width: "100%",
                      padding: "12px 14px",
                      borderRadius: "8px",
                      backgroundColor: "rgba(255, 255, 255, 0.04)",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                      color: "#ffffff",
                      fontSize: "0.92rem",
                      outline: "none",
                      transition: "all 0.2s ease",
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = "#818cf8";
                      e.target.style.boxShadow = "0 0 0 3px rgba(129, 140, 248, 0.2)";
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = "rgba(255, 255, 255, 0.1)";
                      e.target.style.boxShadow = "none";
                    }}
                  />
                </div>

                {/* Message */}
                <div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "6px" }}>
                    <label
                      htmlFor="message"
                      style={{
                        display: "block",
                        fontSize: "0.82rem",
                        fontWeight: 600,
                        color: "#e2e8f0",
                      }}
                    >
                      Message / Project Details *
                    </label>
                    <span style={{ fontSize: "0.74rem", color: "#64748b" }}>
                      {formData.message.length} characters
                    </span>
                  </div>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project goals, timelines, and requirements..."
                    style={{
                      width: "100%",
                      padding: "12px 14px",
                      borderRadius: "8px",
                      backgroundColor: "rgba(255, 255, 255, 0.04)",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                      color: "#ffffff",
                      fontSize: "0.92rem",
                      outline: "none",
                      resize: "vertical",
                      transition: "all 0.2s ease",
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = "#818cf8";
                      e.target.style.boxShadow = "0 0 0 3px rgba(129, 140, 248, 0.2)";
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = "rgba(255, 255, 255, 0.1)";
                      e.target.style.boxShadow = "none";
                    }}
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="btn btn-primary"
                  style={{
                    padding: "14px 28px",
                    fontSize: "0.96rem",
                    width: "100%",
                    cursor: status === "submitting" ? "not-allowed" : "pointer",
                    opacity: status === "submitting" ? 0.75 : 1,
                  }}
                >
                  {status === "submitting" ? (
                    <>
                      <Loader2 size={16} className="spin-icon" />
                      <span>Submitting via Formspree...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Project Inquiry</span>
                      <Send size={16} />
                    </>
                  )}
                </button>

                <div
                  style={{
                    textAlign: "center",
                    fontSize: "0.76rem",
                    color: "#64748b",
                    marginTop: "4px",
                  }}
                >
                  🔒 Confidential &amp; Protected &bull; Direct delivery to Faiez Ahmed
                </div>
              </form>
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .spin-icon {
          animation: spin 1s linear infinite;
        }
        @media (min-width: 992px) {
          .contact-grid {
            grid-template-columns: 0.85fr 1.15fr !important;
          }
        }
        @media (max-width: 640px) {
          .form-row {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
