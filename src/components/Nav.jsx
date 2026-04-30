import { NAV_LINKS } from "../data";
import { BtnPrimary, BtnOutline, GithubIcon } from "./UI";

/* ── Mobile Menu ─────────────────────────────────────────────────── */
export const MobileMenu = ({ open, onClose, activeNav, scrollTo }) => (
  <div
    role="dialog"
    aria-modal="true"
    aria-label="Menu de navegação"
    style={{
      position: "fixed", inset: 0, zIndex: 200,
      background: "rgba(7,7,7,.97)", backdropFilter: "blur(20px)",
      display: "flex", flexDirection: "column", alignItems: "center",
      justifyContent: "center", gap: 40,
      transform: open ? "translateY(0)" : "translateY(-100%)",
      transition: "transform .4s cubic-bezier(.16,1,.3,1)",
      pointerEvents: open ? "all" : "none",
    }}
  >
    <button
      onClick={onClose}
      aria-label="Fechar menu"
      className="hj-mobile-menu-close"
      style={{
        position: "absolute", top: 24, right: 24,
        background: "none", border: "none",
        color: "var(--fg)", fontSize: 28, cursor: "pointer", lineHeight: 1, padding: 8,
      }}
    >×</button>

    {NAV_LINKS.map(l => (
      <button
        key={l}
        onClick={() => { scrollTo(l); onClose(); }}
        className="hj-nav-link"
        style={{
          background: "none", border: "none", cursor: "pointer",
          fontFamily: "var(--font-display)", fontWeight: 700,
          fontSize: 38, letterSpacing: "-.03em",
          color: activeNav === l ? "var(--ac)" : "rgba(237,233,227,.5)",
          transition: "color .2s",
        }}
      >
        {l}
      </button>
    ))}

    <div style={{ display: "flex", gap: 12, marginTop: 20, flexWrap: "wrap", justifyContent: "center" }}>
      {/* SECURITY: rel="noopener noreferrer" — Reverse Tabnapping prevention (OWASP) */}
      <BtnPrimary href="https://www.linkedin.com/in/fernando-pinhel-designer/" className="hj-nav-linkedin">
        LinkedIn ↗
      </BtnPrimary>
      <BtnOutline href="https://github.com/fernandopinhel" className="hj-nav-github">
        GitHub ↗
      </BtnOutline>
    </div>
  </div>
);

/* ── Nav ─────────────────────────────────────────────────────────── */
export const Nav = ({
  scrolled, activeNav, scrollTo, setHovLink,
  isMobile, menuOpen, setMenuOpen, onCaseBack,
}) => (
  <nav
    role="navigation"
    aria-label="Navegação principal"
    style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      background: scrolled ? "rgba(7,7,7,.92)" : "transparent",
      backdropFilter: scrolled ? "blur(16px)" : "none",
      borderBottom: scrolled ? "1px solid var(--bd)" : "1px solid transparent",
      transition: "background .4s, border-color .4s",
    }}
  >
    <div style={{
      maxWidth: "var(--max-w)", margin: "0 auto",
      padding: isMobile ? "16px 20px" : "20px 48px",
      display: "flex", justifyContent: "space-between", alignItems: "center",
    }}>
      {/* Logo */}
      <button
        onClick={onCaseBack || (() => scrollTo("Sobre"))}
        aria-label="Ir ao topo"
        className="hj-nav-logo"
        style={{ background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center", gap: 10 }}
        onMouseEnter={() => setHovLink(true)}
        onMouseLeave={() => setHovLink(false)}
      >
        <div style={{
          width: 40, height: 40, borderRadius: "50%",
          border: "1.5px solid var(--ac)",
          display: "flex", alignItems: "center", justifyContent: "center",
        }}>
          <span style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 11, color: "var(--ac)" }}>FP</span>
        </div>
      </button>

      {/* Desktop nav links */}
      {!isMobile && !onCaseBack && (
        <div style={{ display: "flex", gap: 32, alignItems: "center" }}>
          {NAV_LINKS.map(l => (
            <button
              key={l}
              onClick={() => scrollTo(l)}
              onMouseEnter={() => setHovLink(true)}
              onMouseLeave={() => setHovLink(false)}
              className="hj-nav-link"
              style={{
                background: "none", border: "none", cursor: "none",
                fontFamily: "var(--font-mono)", fontSize: 13,
                letterSpacing: ".1em", textTransform: "uppercase",
                color: activeNav === l ? "var(--fg)" : "var(--dim)",
                transition: "color .2s", padding: 0,
              }}
            >
              {activeNav === l && <span style={{ color: "var(--ac)" }}>↳ </span>}{l}
            </button>
          ))}
        </div>
      )}

      {/* Back button (case view) */}
      {onCaseBack && !isMobile && (
        <button
          onClick={onCaseBack}
          onMouseEnter={() => setHovLink(true)}
          onMouseLeave={() => setHovLink(false)}
          className="hj-case-back"
          style={{
            background: "none", border: "none", cursor: "none",
            fontFamily: "var(--font-mono)", fontSize: 12,
            color: "var(--dim)", display: "flex", alignItems: "center",
            gap: 8, letterSpacing: ".06em",
          }}
        >
          ← Voltar ao portfólio
        </button>
      )}

      {/* Right side */}
      {isMobile ? (
        <button
          onClick={() => setMenuOpen(true)}
          aria-label="Abrir menu"
          aria-expanded={menuOpen}
          className="hj-mobile-menu-open"
          style={{
            background: "none", border: "1px solid rgba(237,233,227,.18)",
            borderRadius: 8, padding: "8px 12px", cursor: "pointer",
            color: "var(--fg)", fontSize: 18, lineHeight: 1,
          }}
        >☰</button>
      ) : (
        !onCaseBack && (
          <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
            {/* SECURITY: rel="noopener noreferrer" — Reverse Tabnapping prevention */}
            <a
              href="https://github.com/fernandopinhel"
              target="_blank"
              rel="noopener noreferrer"
              className="hj-nav-github"
              style={{
                display: "flex", alignItems: "center", gap: 6,
                color: "var(--dim)", textDecoration: "none",
                fontFamily: "var(--font-mono)", fontSize: 11,
                letterSpacing: ".06em", transition: "color .2s",
              }}
              onMouseEnter={e => { e.currentTarget.style.color = "var(--fg)"; setHovLink(true); }}
              onMouseLeave={e => { e.currentTarget.style.color = "var(--dim)"; setHovLink(false); }}
            >
              <GithubIcon size={14} /> GitHub
            </a>
            <BtnOutline
              href="https://www.linkedin.com/in/fernando-pinhel-designer/"
              style={{ padding: "9px 18px", fontSize: 11 }}
              className="hj-nav-linkedin"
              onMouseEnter={() => setHovLink(true)}
              onMouseLeave={() => setHovLink(false)}
            >
              LinkedIn ↗
            </BtnOutline>
          </div>
        )
      )}
    </div>
  </nav>
);
