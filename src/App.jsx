/**
 * App.jsx — Fernando Pinhel Portfolio
 *
 * Root component. Manages global state (cursor, nav, menu, active case)
 * and renders Nav + the appropriate page (PortfolioPage or CasePage).
 *
 * Hotjar: hj-* classes are applied throughout for heatmap/recording tracking.
 * To configure Hotjar, create segments based on the classes defined in
 * src/styles/global.css.
 */

import { useState, useEffect, useCallback } from "react";
import { PROJECTS } from "./data";
import { useMediaQuery } from "./hooks/useMediaQuery";
import { GridBg, Glow } from "./components/UI";
import { Nav, MobileMenu } from "./components/Nav";
import PortfolioPage from "./pages/PortfolioPage";
import CasePage from "./pages/CasePage";
import "./styles/global.css";

export default function App() {
  const [activeNav, setActiveNav]     = useState("Sobre");
  const [cursor, setCursor]           = useState({ x: -200, y: -200 });
  const [hovLink, setHovLink]         = useState(false);
  const [scrolled, setScrolled]       = useState(false);
  const [menuOpen, setMenuOpen]       = useState(false);
  const [currentCase, setCurrentCase] = useState(null);

  const isMobile = useMediaQuery("(max-width: 768px)");
  const isTablet = useMediaQuery("(max-width: 1024px)");

  /* ── Custom cursor ──────────────────────────────────────────────── */
  useEffect(() => {
    const onMove = (e) => setCursor({ x: e.clientX, y: e.clientY });
    if (!isMobile) window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [isMobile]);

  /* ── Scroll state for nav ───────────────────────────────────────── */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ── Body overflow lock when mobile menu is open ────────────────── */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  /* ── Update document title when case changes ─────────────────────  */
  useEffect(() => {
    const project = PROJECTS.find(p => p.id === currentCase);
    document.title = project
      ? `${project.title} — Fernando Pinhel`
      : "Fernando Pinhel | Product Designer";
  }, [currentCase]);

  /* ── Scroll to section ──────────────────────────────────────────── */
  const scrollTo = useCallback((id) => {
    setActiveNav(id);
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
  }, []);

  /* ── Open / close case ──────────────────────────────────────────── */
  const handleCaseOpen = useCallback((id) => {
    setCurrentCase(id);
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const handleCaseBack = useCallback(() => {
    setCurrentCase(null);
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const currentProject = currentCase ? PROJECTS.find(p => p.id === currentCase) : null;

  return (
    <div
      id="fp-portfolio"
      style={{
        fontFamily: "var(--font-mono)",
        background: "var(--bg)",
        color: "var(--fg)",
        minHeight: "100vh",
        overflowX: "hidden",
        cursor: isMobile ? "auto" : "none",
      }}
    >
      {/* Custom cursor (desktop only) */}
      {!isMobile && (
        <>
          <div className="cur cur-dot" style={{ left: cursor.x, top: cursor.y }} />
          <div className={`cur cur-ring ${hovLink ? "ex" : ""}`} style={{ left: cursor.x, top: cursor.y }} />
        </>
      )}

      {/* Background decorations */}
      <GridBg />
      <Glow />

      {/* Mobile menu overlay */}
      <MobileMenu
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        activeNav={activeNav}
        scrollTo={scrollTo}
      />

      {/* Top navigation */}
      <Nav
        scrolled={scrolled}
        activeNav={activeNav}
        scrollTo={scrollTo}
        setHovLink={setHovLink}
        isMobile={isMobile}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        onCaseBack={currentCase ? handleCaseBack : null}
      />

      {/* Main content: case or portfolio */}
      {currentProject ? (
        <CasePage
          project={currentProject}
          onBack={handleCaseBack}
          setHovLink={setHovLink}
          isMobile={isMobile}
        />
      ) : (
        <PortfolioPage
          setCurrentCase={handleCaseOpen}
          scrollTo={scrollTo}
          activeNav={activeNav}
          setActiveNav={setActiveNav}
          setHovLink={setHovLink}
          isMobile={isMobile}
          isTablet={isTablet}
        />
      )}

      {/* Footer */}
      <footer
        role="contentinfo"
        className="footer-row"
        style={{
          borderTop: "1px solid var(--bd)",
          padding: isMobile ? "20px" : "24px 48px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          position: "relative",
          zIndex: 2,
          flexWrap: "wrap",
          gap: 8,
        }}
      >
        <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--dimmer)", letterSpacing: ".06em" }}>
          © 2026 Fernando Pinhel
        </span>
        <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--dimmer)", letterSpacing: ".06em" }}>
          Product Designer · Niterói, RJ ·{" "}
          <a
            href="https://github.com/fernandopinhel"
            target="_blank"
            rel="noreferrer"
            className="hj-footer-github"
            style={{ color: "var(--dimmer)", textDecoration: "none" }}
          >
            github.com/fernandopinhel
          </a>
        </span>
      </footer>
    </div>
  );
}
