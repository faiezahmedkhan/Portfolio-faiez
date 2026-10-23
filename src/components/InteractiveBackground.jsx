"use client";

import { useEffect, useRef } from "react";

export default function InteractiveBackground() {
  const containerRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!containerRef.current) return;
      const x = e.clientX;
      const y = e.clientY;
      containerRef.current.style.setProperty("--mouse-x", `${x}px`);
      containerRef.current.style.setProperty("--mouse-y", `${y}px`);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",
        backgroundColor: "#050608",
        overflow: "hidden",
      }}
    >
      {/* Top Ambient Horizon Beam (Linear / Vercel style) */}
      <div
        style={{
          position: "absolute",
          top: "-150px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "1000px",
          height: "400px",
          background: "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(99, 102, 241, 0.18), rgba(56, 189, 248, 0.08) 60%, transparent 100%)",
          filter: "blur(40px)",
        }}
      />

      {/* Subtle Precision Grid */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
          maskImage: "radial-gradient(ellipse 85% 70% at 50% 25%, #000 40%, transparent 95%)",
          WebkitMaskImage: "radial-gradient(ellipse 85% 70% at 50% 25%, #000 40%, transparent 95%)",
        }}
      />

      {/* Subtle Dot Matrix Intersections */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "radial-gradient(rgba(255, 255, 255, 0.08) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          backgroundPosition: "-1px -1px",
          maskImage: "radial-gradient(ellipse 70% 60% at 50% 30%, #000 20%, transparent 80%)",
          WebkitMaskImage: "radial-gradient(ellipse 70% 60% at 50% 30%, #000 20%, transparent 80%)",
        }}
      />

      {/* Interactive Cursor Spotlight */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `radial-gradient(650px circle at var(--mouse-x, 50vw) var(--mouse-y, 30vh), rgba(129, 140, 248, 0.06), transparent 65%)`,
        }}
      />
    </div>
  );
}
