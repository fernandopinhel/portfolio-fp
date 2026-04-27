import { useState } from "react";

/* ── Pill ─────────────────────────────────────────────────────────── */
export const Pill = ({ children, color }) => (
  <span style={{
    display: "inline-block",
    fontSize: 10,
    letterSpacing: ".1em",
    textTransform: "uppercase",
    color: color || "var(--dim)",
    border: `1px solid ${color ? color + "44" : "var(--bd)"}`,
    padding: "4px 10px",
    borderRadius: 100,
    fontFamily: "var(--font-mono)",
  }}>
    {children}
  </span>
);

/* ── BtnPrimary ───────────────────────────────────────────────────── */
export const BtnPrimary = ({ href, onClick, children, style = {}, className = "" }) => {
  const s = {
    display: "inline-flex", alignItems: "center", gap: 8,
    background: "var(--ac)", color: "#070707",
    fontFamily: "var(--font-mono)", fontSize: 12, fontWeight: 500,
    letterSpacing: ".06em", padding: "14px 28px",
    borderRadius: 100, border: "none", cursor: "pointer",
    textDecoration: "none", transition: "transform .2s", ...style,
  };
  const ev = {
    onMouseEnter: e => { e.currentTarget.style.transform = "scale(1.04)"; },
    onMouseLeave: e => { e.currentTarget.style.transform = "scale(1)"; },
  };
  if (href)
    return <a href={href} target="_blank" rel="noreferrer" style={s} className={className} {...ev}>{children}</a>;
  return <button onClick={onClick} style={s} className={className} {...ev}>{children}</button>;
};

/* ── BtnOutline ───────────────────────────────────────────────────── */
export const BtnOutline = ({ href, onClick, children, style = {}, className = "", onMouseEnter, onMouseLeave }) => {
  const s = {
    display: "inline-flex", alignItems: "center", gap: 8,
    background: "transparent", color: "var(--fg)",
    fontFamily: "var(--font-mono)", fontSize: 12, letterSpacing: ".06em",
    padding: "13px 28px", borderRadius: 100,
    border: "1px solid rgba(237,233,227,.2)", cursor: "pointer",
    textDecoration: "none", transition: "border-color .2s, background .2s", ...style,
  };
  const ev = {
    onMouseEnter: e => {
      e.currentTarget.style.borderColor = "rgba(237,233,227,.45)";
      e.currentTarget.style.background = "rgba(237,233,227,.04)";
      onMouseEnter && onMouseEnter();
    },
    onMouseLeave: e => {
      e.currentTarget.style.borderColor = "rgba(237,233,227,.2)";
      e.currentTarget.style.background = "transparent";
      onMouseLeave && onMouseLeave();
    },
  };
  if (href)
    return <a href={href} target="_blank" rel="noreferrer" style={s} className={className} {...ev}>{children}</a>;
  return <button onClick={onClick} style={s} className={className} {...ev}>{children}</button>;
};

/* ── GitHub SVG Icon ──────────────────────────────────────────────── */
export const GithubIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.929.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
  </svg>
);

/* ── GridBg ───────────────────────────────────────────────────────── */
export const GridBg = () => (
  <div aria-hidden="true" style={{
    position: "fixed", inset: 0, pointerEvents: "none", zIndex: 0,
    backgroundImage: `linear-gradient(rgba(237,233,227,.022) 1px,transparent 1px),
                      linear-gradient(90deg,rgba(237,233,227,.022) 1px,transparent 1px)`,
    backgroundSize: "64px 64px",
  }} />
);

/* ── Glow ─────────────────────────────────────────────────────────── */
export const Glow = ({ top = "-30vh", color = "rgba(200,255,0,.032)" }) => (
  <div aria-hidden="true" style={{
    position: "fixed", top, left: "50%", transform: "translateX(-50%)",
    width: 900, height: 600, pointerEvents: "none", zIndex: 0,
    background: `radial-gradient(ellipse,${color} 0%,transparent 65%)`,
  }} />
);

/* ── VideoEmbed ───────────────────────────────────────────────────── */
/**
 * Renders a YouTube embed or a native <video> depending on the value.
 * - YouTube ID  (11 chars, no slash): renders <iframe>
 * - Full URL ending in .mp4/.webm:    renders <video>
 */
export const VideoEmbed = ({ src, title = "Case video", accent = "var(--ac)" }) => {
  const isYT = src && !src.includes("/") && src.length === 11;
  const isMp4 = src && (src.endsWith(".mp4") || src.endsWith(".webm"));

  if (isYT) {
    return (
      <div style={{ position: "relative", paddingBottom: "56.25%", height: 0, overflow: "hidden", borderRadius: 12, border: `1px solid ${accent}22` }}>
        <iframe
          title={title}
          src={`https://www.youtube.com/embed/${src}?rel=0&modestbranding=1`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: "none" }}
        />
      </div>
    );
  }

  if (isMp4) {
    return (
      <video
        controls
        playsInline
        style={{ width: "100%", borderRadius: 12, border: `1px solid ${accent}22` }}
      >
        <source src={src} type="video/mp4" />
        Seu navegador não suporta vídeo HTML5.
      </video>
    );
  }

  return null;
};

/* ── ContactForm ──────────────────────────────────────────────────── */
export const ContactForm = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Replace with your preferred form service (Formspree, EmailJS, etc.)
    const mailto = `mailto:contato@fernandopinhel.com.br?subject=Contato via portfólio — ${form.name}&body=${encodeURIComponent(form.message)}%0A%0A${form.email}`;
    window.open(mailto, "_blank");
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="hj-contact-form"
      style={{ display: "flex", flexDirection: "column", gap: 16 }}
    >
      <input
        className="form-input hj-contact-form"
        type="text"
        placeholder="Seu nome"
        value={form.name}
        onChange={e => setForm(p => ({ ...p, name: e.target.value }))}
        required
        aria-label="Seu nome"
      />
      <input
        className="form-input hj-contact-form"
        type="email"
        placeholder="Seu e-mail"
        value={form.email}
        onChange={e => setForm(p => ({ ...p, email: e.target.value }))}
        required
        aria-label="Seu e-mail"
      />
      <textarea
        className="form-textarea hj-contact-form"
        placeholder="Me conta o que você está construindo..."
        value={form.message}
        onChange={e => setForm(p => ({ ...p, message: e.target.value }))}
        required
        aria-label="Sua mensagem"
      />
      <BtnPrimary
        onClick={handleSubmit}
        className="hj-contact-submit"
        style={{ alignSelf: "flex-start" }}
      >
        {sent ? "✓ Mensagem enviada!" : "Enviar mensagem →"}
      </BtnPrimary>
    </form>
  );
};
