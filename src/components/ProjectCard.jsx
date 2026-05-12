import { useState } from "react";
import { Pill } from "./UI";

/**
 * ProjectCard
 * Renders a single project card in the projects grid.
 * size="large" → full width; size="small" → half width (in grid).
 */
const ProjectCard = ({ p, isMobile, onClick }) => {
  const [hov, setHov] = useState(false);

  return (
    <div
      role="button"
      tabIndex={0}
      aria-label={`Ver case: ${p.title}`}
      onClick={() => onClick(p.id)}
      onKeyDown={e => e.key === "Enter" && onClick(p.id)}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      className="hj-project-card"
      data-gtm={p.id}
      data-project-id={p.id}
      style={{
        gridColumn: p.size === "large" && !isMobile ? "span 2" : "span 1",
        background: "#0C0C0C",
        border: `1px solid ${hov ? "var(--bdh)" : "var(--bd)"}`,
        borderRadius: 20,
        overflow: "hidden",
        cursor: "pointer",
        transition: "border-color .3s, transform .3s",
        transform: hov ? "translateY(-4px)" : "translateY(0)",
        position: "relative",
      }}
    >
      {/* Image */}
      <div style={{ position: "relative", overflow: "hidden", height: isMobile ? 200 : p.size === "large" ? 420 : 280 }}>
        <img
          src={p.thumbImg}
          alt={p.title}
          loading="lazy"
          style={{
            width: "100%", height: "100%", objectFit: "cover",
            transition: "transform .6s ease",
            transform: hov ? "scale(1.04)" : "scale(1)",
          }}
        />
        {/* Gradient overlay */}
        <div style={{
          position: "absolute", inset: 0,
          background: `linear-gradient(to bottom, transparent 40%, ${p.bg || "#070707"} 100%)`,
        }} />
        {/* Year badge */}
        <div style={{
          position: "absolute", top: 16, right: 16,
          fontFamily: "var(--font-mono)", fontSize: 10,
          color: "var(--dim)", letterSpacing: ".1em",
        }}>
          {p.year}
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: isMobile ? "20px" : "28px 32px 32px" }}>
        <div style={{ marginBottom: 12 }}>
          <Pill color={p.accent}>{p.tag}</Pill>
        </div>
        <h3 style={{
          fontFamily: "var(--font-display)", fontWeight: 700,
          fontSize: isMobile ? 22 : 26, letterSpacing: "-.02em",
          color: "var(--fg)", marginBottom: 10, lineHeight: 1.2,
        }}>
          {p.title}
        </h3>
        <p style={{
          fontFamily: "var(--font-mono)", fontSize: 13,
          color: "var(--dim)", lineHeight: 1.7, maxWidth: 540,
        }}>
          {p.description}
        </p>

        {/* CTA row */}
        <div style={{ display: "flex", alignItems: "center", gap: 16, marginTop: 24 }}>
          <span
            className="hj-case-open"
            data-gtm="case-open"
            style={{
              fontFamily: "var(--font-mono)", fontSize: 12,
              color: hov ? p.accent || "var(--ac)" : "var(--dim)",
              letterSpacing: ".06em", transition: "color .3s",
              display: "flex", alignItems: "center", gap: 6,
            }}
          >
            Ver case →
          </span>
          {p.figmaLink && (
            <span data-gtm="case-link-figma" className="case-link-figma" style={{
              fontFamily: "var(--font-mono)", fontSize: 11,
              color: "var(--dimmer)", letterSpacing: ".06em",
            }}>
              + Figma
            </span>
          )}
          {p.externalLink && (
            <span data-gtm="case-link-site" className="case-link-site" style={{
              fontFamily: "var(--font-mono)", fontSize: 11,
              color: "var(--dimmer)", letterSpacing: ".06em",
            }}>
              + Site ao vivo
            </span>
          )}
        </div>
      </div>

      {/* Accent line at bottom on hover */}
      <div style={{
        position: "absolute", bottom: 0, left: 0, right: 0,
        height: 2, background: p.accent || "var(--ac)",
        transform: hov ? "scaleX(1)" : "scaleX(0)",
        transition: "transform .4s ease",
        transformOrigin: "left",
      }} />
    </div>
  );
};

export default ProjectCard;
