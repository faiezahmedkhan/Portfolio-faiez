"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop || document.body.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrollPercent = windowHeight > 0 ? (totalScroll / windowHeight) * 100 : 0;

      setScrollProgress(scrollPercent);
      setIsVisible(totalScroll > 320);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const radius = 20;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <div
      style={{
        position: "fixed",
        bottom: "30px",
        right: "30px",
        zIndex: 900,
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0) scale(1)" : "translateY(16px) scale(0.85)",
        transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
        pointerEvents: isVisible ? "auto" : "none",
      }}
    >
      <button
        onClick={scrollToTop}
        aria-label="Scroll back to top"
        style={{
          width: "48px",
          height: "48px",
          borderRadius: "50%",
          backgroundColor: "rgba(15, 18, 24, 0.85)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          border: "1px solid rgba(255, 255, 255, 0.12)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#ffffff",
          position: "relative",
          boxShadow: "inset 0 1px 0 rgba(255, 255, 255, 0.12), 0 12px 30px rgba(0, 0, 0, 0.6)",
          cursor: "pointer",
          transition: "transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-3px)";
          e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.3)";
          e.currentTarget.style.boxShadow = "inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 16px 36px rgba(0, 0, 0, 0.75)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.12)";
          e.currentTarget.style.boxShadow = "inset 0 1px 0 rgba(255, 255, 255, 0.12), 0 12px 30px rgba(0, 0, 0, 0.6)";
        }}
      >
        <svg
          width="46"
          height="46"
          viewBox="0 0 48 48"
          style={{
            position: "absolute",
            top: "0px",
            left: "0px",
            transform: "rotate(-90deg)",
            pointerEvents: "none",
          }}
        >
          <circle
            cx="24"
            cy="24"
            r={radius}
            stroke="rgba(255, 255, 255, 0.08)"
            strokeWidth="2.5"
            fill="transparent"
          />
          <circle
            cx="24"
            cy="24"
            r={radius}
            stroke="#38bdf8"
            strokeWidth="2.5"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            fill="transparent"
            style={{ transition: "stroke-dashoffset 0.15s ease" }}
          />
        </svg>
        <ArrowUp size={18} style={{ position: "relative", zIndex: 2 }} />
      </button>
    </div>
  );
}
