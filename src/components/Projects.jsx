"use client";

import { useState } from "react";
import Image from "next/image";
import { projects, projectCategories, personalInfo } from "@/data/portfolioData";
import ProjectModal from "./ProjectModal";
import { ExternalLink, ArrowUpRight, Eye, Search, X } from "lucide-react";
import { FigmaIcon } from "@/components/Icons";

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = projects.filter((project) => {
    const matchesCategory = activeCategory === "all" || project.category === activeCategory;
    const matchesSearch =
      searchQuery.trim() === "" ||
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tag.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.technologies.some((tech) => tech.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  const handleCardMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty("--mouse-x", `${x}px`);
    e.currentTarget.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <section id="projects" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <span className="dot" />
            <span>Selected Work &amp; Case Studies</span>
          </div>
          <h2 className="section-title">
            Featured Projects &amp; <span className="gradient-text">Production Deployments</span>
          </h2>
          <p className="section-subtitle">
            An archive of client commercial web applications, sustainability platforms, healthcare portals, and Figma design systems.
          </p>
        </div>

        {/* Search & Category Filter Bar */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "20px",
            marginBottom: "50px",
          }}
        >
          {/* Live Search Input */}
          <div
            style={{
              position: "relative",
              width: "100%",
              maxWidth: "480px",
            }}
          >
            <div
              style={{
                position: "absolute",
                left: "16px",
                top: "50%",
                transform: "translateY(-50%)",
                color: "#71717a",
                display: "flex",
                alignItems: "center",
                pointerEvents: "none",
              }}
            >
              <Search size={18} />
            </div>

            <input
              type="text"
              placeholder="Search by tech or keyword (e.g. Next.js, Figma, Health, SaaS...)"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: "100%",
                padding: "12px 44px 12px 46px",
                borderRadius: "var(--radius-full)",
                backgroundColor: "rgba(15, 18, 24, 0.85)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                color: "#ffffff",
                fontSize: "0.9rem",
                outline: "none",
                boxShadow: "0 4px 18px rgba(0, 0, 0, 0.5)",
                transition: "all 0.2s ease",
              }}
              onFocus={(e) => {
                e.target.style.borderColor = "#818cf8";
                e.target.style.boxShadow = "0 0 0 3px rgba(129, 140, 248, 0.2)";
              }}
              onBlur={(e) => {
                e.target.style.borderColor = "rgba(255, 255, 255, 0.1)";
                e.target.style.boxShadow = "0 4px 18px rgba(0, 0, 0, 0.5)";
              }}
            />

            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                style={{
                  position: "absolute",
                  right: "14px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  width: "24px",
                  height: "24px",
                  borderRadius: "50%",
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  color: "#ffffff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                title="Clear search"
              >
                <X size={14} />
              </button>
            )}
          </div>

          {/* Category Filter Pills */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: "8px",
            }}
          >
            {projectCategories.map((cat) => {
              const isActive = activeCategory === cat.id;
              const count =
                cat.id === "all"
                  ? projects.length
                  : projects.filter((p) => p.category === cat.id).length;

              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  style={{
                    padding: "8px 16px",
                    borderRadius: "var(--radius-full)",
                    fontSize: "0.84rem",
                    fontWeight: isActive ? 600 : 500,
                    backgroundColor: isActive ? "#ffffff" : "rgba(15, 18, 24, 0.8)",
                    color: isActive ? "#050608" : "#94a3b8",
                    border: isActive ? "1px solid #ffffff" : "1px solid rgba(255, 255, 255, 0.08)",
                    boxShadow: isActive ? "0 0 20px rgba(255, 255, 255, 0.2)" : "0 2px 6px rgba(0, 0, 0, 0.4)",
                    transition: "all 0.2s ease",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.06)";
                      e.currentTarget.style.color = "#ffffff";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.backgroundColor = "rgba(15, 18, 24, 0.8)";
                      e.currentTarget.style.color = "#94a3b8";
                    }
                  }}
                >
                  <span>{cat.label}</span>
                  <span
                    style={{
                      display: "inline-block",
                      padding: "2px 7px",
                      borderRadius: "10px",
                      fontSize: "0.72rem",
                      backgroundColor: isActive ? "rgba(0, 0, 0, 0.15)" : "rgba(255, 255, 255, 0.06)",
                      color: isActive ? "#050608" : "#94a3b8",
                      fontWeight: 700,
                    }}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 ? (
          <div
            style={{
              padding: "60px 20px",
              textAlign: "center",
              borderRadius: "var(--radius-xl)",
              backgroundColor: "rgba(15, 18, 24, 0.7)",
              border: "1px dashed rgba(255, 255, 255, 0.12)",
            }}
          >
            <p style={{ fontSize: "1.05rem", color: "#94a3b8", marginBottom: "16px" }}>
              No projects found matching &ldquo;{searchQuery}&rdquo;.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setActiveCategory("all");
              }}
              className="btn btn-secondary"
              style={{ padding: "8px 20px", fontSize: "0.86rem" }}
            >
              Reset Filters
            </button>
          </div>
        ) : (
          /* Projects Grid with Spotlight Glare */
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(350px, 1fr))",
              gap: "28px",
            }}
            className="projects-grid"
          >
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="glass-card spotlight-card"
                onMouseMove={handleCardMouseMove}
                style={{
                  borderRadius: "var(--radius-lg)",
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                  cursor: "pointer",
                }}
                onClick={() => setSelectedProject(project)}
              >
                {/* Thumbnail Container */}
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    height: "230px",
                    overflow: "hidden",
                    backgroundColor: "#080a0e",
                  }}
                  className="project-thumb"
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 420px"
                    style={{
                      objectFit: "cover",
                      transition: "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
                    }}
                    className="card-img"
                  />

                  {/* Gradient overlay */}
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: "linear-gradient(180deg, transparent 45%, #0d1016 100%)",
                    }}
                  />

                  {/* Top Badges */}
                  <div
                    style={{
                      position: "absolute",
                      top: "14px",
                      left: "14px",
                      display: "flex",
                      gap: "8px",
                      zIndex: 3,
                    }}
                  >
                    <span
                      style={{
                        padding: "5px 12px",
                        borderRadius: "var(--radius-full)",
                        backgroundColor: "rgba(10, 12, 16, 0.85)",
                        backdropFilter: "blur(8px)",
                        fontSize: "0.75rem",
                        fontWeight: 600,
                        color: "#38bdf8",
                        border: "1px solid rgba(255, 255, 255, 0.12)",
                        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.4)",
                      }}
                    >
                      {project.tag}
                    </span>
                  </div>

                  {/* Hover Quick View pill */}
                  <div
                    style={{
                      position: "absolute",
                      bottom: "14px",
                      right: "14px",
                      padding: "6px 12px",
                      borderRadius: "var(--radius-full)",
                      backgroundColor: "rgba(10, 12, 16, 0.85)",
                      backdropFilter: "blur(8px)",
                      border: "1px solid rgba(255, 255, 255, 0.12)",
                      fontSize: "0.78rem",
                      fontWeight: 600,
                      color: "#ffffff",
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                      zIndex: 3,
                      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.5)",
                    }}
                  >
                    <Eye size={14} />
                    <span>Inspect Case</span>
                  </div>
                </div>

                {/* Card Body */}
                <div
                  style={{
                    padding: "24px 24px 20px 24px",
                    display: "flex",
                    flexDirection: "column",
                    flexGrow: 1,
                    justifyContent: "space-between",
                    position: "relative",
                    zIndex: 2,
                    backgroundColor: "#0d1016",
                  }}
                >
                  <div>
                    <h3
                      style={{
                        fontSize: "1.2rem",
                        fontWeight: 700,
                        color: "#ffffff",
                        marginBottom: "8px",
                        letterSpacing: "-0.015em",
                      }}
                    >
                      {project.title}
                    </h3>

                    <p
                      style={{
                        fontSize: "0.9rem",
                        color: "#94a3b8",
                        lineHeight: 1.6,
                        marginBottom: "16px",
                      }}
                    >
                      {project.description}
                    </p>

                    {/* Tech stack tags */}
                    <div
                      style={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: "6px",
                        marginBottom: "18px",
                      }}
                    >
                      {project.technologies.slice(0, 3).map((tech, idx) => (
                        <span
                          key={idx}
                          style={{
                            padding: "3px 10px",
                            borderRadius: "6px",
                            backgroundColor: "rgba(255, 255, 255, 0.05)",
                            border: "1px solid rgba(255, 255, 255, 0.08)",
                            fontSize: "0.74rem",
                            color: "#cbd5e1",
                            fontWeight: 500,
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span
                          style={{
                            padding: "3px 8px",
                            borderRadius: "6px",
                            fontSize: "0.74rem",
                            color: "#64748b",
                          }}
                        >
                          +{project.technologies.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Card Action Links */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      paddingTop: "14px",
                      borderTop: "1px solid rgba(255, 255, 255, 0.08)",
                    }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <button
                      onClick={() => setSelectedProject(project)}
                      style={{
                        fontSize: "0.85rem",
                        fontWeight: 600,
                        color: "#ffffff",
                        display: "flex",
                        alignItems: "center",
                        gap: "4px",
                      }}
                    >
                      <span>View Case Study</span>
                      <ArrowUpRight size={15} />
                    </button>

                    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-icon btn-secondary"
                          style={{ width: "32px", height: "32px" }}
                          title="Live Website"
                        >
                          <ExternalLink size={14} />
                        </a>
                      )}
                      {project.figmaUrl && (
                        <a
                          href={project.figmaUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-icon btn-secondary"
                          style={{ width: "32px", height: "32px" }}
                          title="Figma Prototype"
                        >
                          <FigmaIcon size={14} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Figma Hub Banner */}
        <div
          style={{
            marginTop: "60px",
            padding: "36px 40px",
            borderRadius: "var(--radius-xl)",
            backgroundColor: "#fafafa",
            border: "1px solid #e4e4e7",
            boxShadow: "0 2px 10px rgba(0, 0, 0, 0.03)",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "24px",
          }}
        >
          <div>
            <h3
              style={{
                fontSize: "1.35rem",
                fontWeight: 800,
                color: "#09090b",
                marginBottom: "6px",
              }}
            >
              Want to inspect more interactive Figma prototypes?
            </h3>
            <p style={{ color: "#52525b", fontSize: "0.95rem" }}>
              Explore Kisko, Panoptic Analytics, and Kadam Organic directly in the official Figma workspace.
            </p>
          </div>
          <a
            href={personalInfo.figmaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
            style={{ padding: "12px 24px" }}
          >
            <FigmaIcon size={16} />
            <span>Open Figma Workspace</span>
            <ExternalLink size={15} />
          </a>
        </div>
      </div>

      {/* Lightbox / Modal */}
      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}

      <style jsx>{`
        .glass-card:hover .card-img {
          transform: scale(1.05);
        }
        @media (max-width: 768px) {
          .projects-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
