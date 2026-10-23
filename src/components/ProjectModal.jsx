"use client";

import { useEffect } from "react";
import Image from "next/image";
import { X, ExternalLink } from "lucide-react";
import { FigmaIcon } from "@/components/Icons";

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0, 0, 0, 0.75)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        zIndex: 2000,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
      }}
      onClick={onClose}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "860px",
          maxHeight: "90vh",
          backgroundColor: "#0d1016",
          border: "1px solid rgba(255, 255, 255, 0.12)",
          borderRadius: "var(--radius-xl)",
          overflowY: "auto",
          boxShadow: "0 25px 80px rgba(0, 0, 0, 0.85), inset 0 1px 0 rgba(255, 255, 255, 0.15)",
          position: "relative",
          animation: "modalFadeIn 0.22s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          style={{
            position: "absolute",
            top: "18px",
            right: "18px",
            zIndex: 10,
            width: "38px",
            height: "38px",
            borderRadius: "50%",
            backgroundColor: "rgba(255, 255, 255, 0.06)",
            border: "1px solid rgba(255, 255, 255, 0.12)",
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.4)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#ffffff",
            transition: "all 0.2s ease",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.14)")}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.06)")}
        >
          <X size={18} />
        </button>

        {/* Project Image Preview */}
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "360px",
            backgroundColor: "#080a0e",
            borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
          }}
        >
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 900px) 100vw, 860px"
            style={{ objectFit: "cover" }}
          />
          <div
            style={{
              position: "absolute",
              bottom: "16px",
              left: "24px",
              display: "flex",
              gap: "8px",
              flexWrap: "wrap",
            }}
          >
            <span
              style={{
                padding: "6px 14px",
                borderRadius: "var(--radius-full)",
                backgroundColor: "rgba(10, 12, 16, 0.85)",
                backdropFilter: "blur(8px)",
                fontSize: "0.82rem",
                fontWeight: 600,
                color: "#38bdf8",
                border: "1px solid rgba(255, 255, 255, 0.12)",
                boxShadow: "0 2px 6px rgba(0, 0, 0, 0.4)",
              }}
            >
              {project.tag}
            </span>
            {project.stats &&
              project.stats.map((s, idx) => (
                <span
                  key={idx}
                  style={{
                    padding: "6px 14px",
                    borderRadius: "var(--radius-full)",
                    backgroundColor: "rgba(10, 12, 16, 0.85)",
                    backdropFilter: "blur(8px)",
                    fontSize: "0.82rem",
                    fontWeight: 600,
                    color: "#34d399",
                    border: "1px solid rgba(16, 185, 129, 0.25)",
                    boxShadow: "0 2px 6px rgba(0, 0, 0, 0.4)",
                  }}
                >
                  {s}
                </span>
              ))}
          </div>
        </div>

        {/* Modal Content */}
        <div style={{ padding: "32px 36px" }}>
          <h2
            style={{
              fontSize: "1.9rem",
              fontWeight: 800,
              color: "#ffffff",
              marginBottom: "14px",
              letterSpacing: "-0.025em",
            }}
          >
            {project.title}
          </h2>

          <p
            style={{
              fontSize: "1.06rem",
              color: "#94a3b8",
              lineHeight: 1.7,
              marginBottom: "24px",
            }}
          >
            {project.longDescription || project.description}
          </p>

          {/* Tech Stack */}
          <div style={{ marginBottom: "32px" }}>
            <h4
              style={{
                fontSize: "0.82rem",
                fontWeight: 600,
                color: "#64748b",
                textTransform: "uppercase",
                letterSpacing: "0.06em",
                marginBottom: "12px",
              }}
            >
              Architecture &amp; Technologies:
            </h4>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {project.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  style={{
                    padding: "6px 14px",
                    borderRadius: "8px",
                    backgroundColor: "rgba(255, 255, 255, 0.05)",
                    border: "1px solid rgba(255, 255, 255, 0.08)",
                    fontSize: "0.86rem",
                    fontWeight: 500,
                    color: "#cbd5e1",
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action CTAs */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "12px",
              paddingTop: "20px",
              borderTop: "1px solid rgba(255, 255, 255, 0.08)",
            }}
          >
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                style={{ padding: "11px 22px" }}
              >
                <span>Visit Live Platform</span>
                <ExternalLink size={16} />
              </a>
            )}

            {project.figmaUrl && (
              <a
                href={project.figmaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
                style={{ padding: "11px 20px" }}
              >
                <FigmaIcon size={16} />
                <span>View Figma Prototype</span>
              </a>
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes modalFadeIn {
          from {
            opacity: 0;
            transform: scale(0.97) translateY(8px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
