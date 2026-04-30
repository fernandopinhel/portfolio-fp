/**
 * App.jsx — Fernando Pinhel Portfolio
 *
 * Root component. Manages global state (cursor, nav, menu, active case)
 * and renders Nav + the appropriate page (PortfolioPage, CasePage ou PrivacyPage).
 *
 * LGPD: o CookieBanner é exibido na primeira visita. Hotjar e GA4 só são
 * inicializados após consentimento explícito via useCookieConsent.
 */

import { useState, useEffect, useCallback } from "react";
import { PROJECTS } from "./data";
import { useMediaQuery } from "./hooks/useMediaQuery";
import { useCookieConsent } from "./hooks/useCookieConsent";
import { GridBg, Glow } from "./components/UI";
import { Nav, MobileMenu } from "./components/Nav";
import CookieBanner from "./components/CookieBanner";
import PortfolioPage from "./pages/PortfolioPage";
import CasePage from "./pages/CasePage";
import PrivacyPage from "./pages/PrivacyPage";
import "./styles/global.css";

export default function App() {
  const [activeNav, setActiveNav]     = useState("Sobre");
  const [cursor, setCursor]           = useState({ x: -200, y: -200 });
  const [hovLink, setHovLink]         = useState(false);
  const [scrolled, setScrolled]       = useState(false);
  const [menuOpen, setMenuOpen]       = useState(false);
  const [currentCase, setCurrentCase] = useState(null);
  const [showPrivacy, setShowPrivacy] = useState(false);

  /* ── Cookie consent (LGPD) ──────────────────────────────────────── */
  const { consent, acceptCookies, declineCookies, resetConsent } = useCookieConsent();
  const showCookieBanner = consent === null;

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

  /* ── Update document title ──────────────────────────────────────── */
  useEffect(() => {
    if (showPrivacy) {
      document.title = "Política de Privacidade — Fernando Pinhel";
      return;
    }
    const project = PROJECTS.find(p => p.id === currentCase);
    document.title = project
      ? `${project.title} — Fernando Pinhel`
      : "Fernando Pinhel | Product Designer";
  }, [currentCase, showPrivacy]);

  /* ── Scroll to top when view changes ───────────────────────────── */
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [showPrivacy]);

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

  /* ── Open / close privacy page ──────────────────────────────────── */
  const handlePrivacyOpen = useCallback((e) => {
    e?.preventDefault();
    setShowPrivacy(true);
  }, []);

  const handlePrivacyBack = useCallback(() => {
    setShowPrivacy(false);
  }, []);

  const currentProject = currentCase ? PROJECTS.find(p => p.id === currentCase) : null;

  /* ── Derived nav state ──────────────────────────────────────────── */
  const isInSubpage = !!currentProject || showPrivacy;
  const onCaseBack  = isInSubpage
    ? (showPrivacy ? handlePrivacyBack : handleCaseBack)
    : null;

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

      {/* ── Cookie Banner (LGPD) — visível até o usuário decidir ───── */}
      {showCookieBanner && (
        <CookieBanner
          onAccept={acceptCookies}
          onDecline={declineCookies}
          onPrivacyOpen={handlePrivacyOpen}
        />
      )}

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
        onCaseBack={onCaseBack}
      />

      {/* Main content: privacy | case | portfolio */}
      {showPrivacy ? (
        <PrivacyPage onBack={handlePrivacyBack} />
      ) : currentProject ? (
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
          onPrivacyOpen={handlePrivacyOpen}
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
        <span style={{
          fontFamily: "var(--font-mono)", fontSize: 11,
          color: "var(--dimmer)", letterSpacing: ".06em",
        }}>
          © 2026 Fernando Pinhel
        </span>

        <span style={{
          fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--dimmer)",
          letterSpacing: ".06em", display: "flex", gap: 16,
          alignItems: "center", flexWrap: "wrap",
        }}>
          {/* LGPD: Política de Privacidade a um clique (exigência GRC) */}
          <a
            href="/politica-de-privacidade"
            onClick={handlePrivacyOpen}
            style={{ color: "var(--dimmer)", textDecoration: "none" }}
          >
            Política de Privacidade
          </a>

          <span aria-hidden="true">·</span>

          {/* LGPD: permite rever/alterar decisão de cookies a qualquer momento */}
          <button
            onClick={resetConsent}
            title="Rever preferências de cookies"
            style={{
              background: "none", border: "none", padding: 0,
              cursor: "pointer", color: "var(--dimmer)",
              fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: ".06em",
            }}
          >
            {consent === "accepted"
              ? "🍪 Cookies aceitos"
              : consent === "declined"
              ? "🍪 Cookies recusados"
              : "🍪 Cookies"}
          </button>

          <span aria-hidden="true">·</span>

          Product Designer · Niterói, RJ ·{" "}
          {/* SECURITY: rel="noopener noreferrer" — Reverse Tabnapping (OWASP) */}
          <a
            href="https://github.com/fernandopinhel"
            target="_blank"
            rel="noopener noreferrer"
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