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
    // SECURITY: rel="noopener noreferrer" prevents Reverse Tabnapping (OWASP)
    return <a href={href} target="_blank" rel="noopener noreferrer" style={s} className={className} {...ev}>{children}</a>;
  return <button type="button" onClick={onClick} style={s} className={className} {...ev}>{children}</button>;
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
      e.currentTarget.style.background  = "rgba(237,233,227,.04)";
      onMouseEnter?.();
    },
    onMouseLeave: e => {
      e.currentTarget.style.borderColor = "rgba(237,233,227,.2)";
      e.currentTarget.style.background  = "transparent";
      onMouseLeave?.();
    },
  };
  if (href)
    // SECURITY: rel="noopener noreferrer" prevents Reverse Tabnapping (OWASP)
    return <a href={href} target="_blank" rel="noopener noreferrer" style={s} className={className} {...ev}>{children}</a>;
  return <button type="button" onClick={onClick} style={s} className={className} {...ev}>{children}</button>;
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
export const VideoEmbed = ({ src, title = "Case video", accent = "var(--ac)" }) => {
  const isYT  = src && !src.includes("/") && src.length === 11;
  const isMp4 = src && (src.endsWith(".mp4") || src.endsWith(".webm"));

  if (isYT) {
    return (
      <div style={{
        position: "relative", paddingBottom: "56.25%", height: 0,
        overflow: "hidden", borderRadius: 12,
        border: `1px solid ${accent}22`,
      }}>
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
      <video controls playsInline style={{ width: "100%", borderRadius: 12, border: `1px solid ${accent}22` }}>
        <source src={src} type="video/mp4" />
        Seu navegador não suporta vídeo HTML5.
      </video>
    );
  }

  return null;
};

/* ── ContactForm ──────────────────────────────────────────────────── */
/**
 * Formulário de contato via POST /api/contact (Node.js + Nodemailer + SMTP HostGator).
 * Sem mailto: — mensagens chegam diretamente no e-mail da hospedagem.
 *
 * LGPD Compliance:
 *   - Checkbox de opt-in obrigatório antes do envio (Art. 5º, XII LGPD)
 *   - Link para Política de Privacidade no label do checkbox
 *   - Nenhum dado enviado sem aceite explícito
 *
 * Estados:
 *   idle     → formulário normal
 *   sending  → botão desabilitado + spinner
 *   success  → mensagem de confirmação
 *   error    → mensagem de erro inline
 *
 * Backend necessário: api/contact.js
 * Dev: Vite faz proxy de /api → localhost:3001 (vite.config.js)
 */
export const ContactForm = ({ onPrivacyOpen }) => {
  const [fields, setFields]     = useState({ name: "", email: "", message: "" });
  const [lgpd, setLgpd]         = useState(false);
  const [status, setStatus]     = useState("idle"); // idle | sending | success | error
  const [errorMsg, setErrorMsg] = useState("");

  const set = (k) => (e) => setFields(f => ({ ...f, [k]: e.target.value }));

  const handleSubmit = async () => {
    if (!fields.name.trim() || !fields.email.trim() || !fields.message.trim()) {
      setErrorMsg("Preencha todos os campos antes de enviar.");
      setStatus("error");
      return;
    }
    if (!lgpd) {
      setErrorMsg("Por favor, aceite a Política de Privacidade.");
      setStatus("error");
      return;
    }

    setStatus("sending");
    setErrorMsg("");

    // Detecta se é localhost ou produção
    const isLocal = window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1";
    
    // URL de Produção (Formcarry) ou Local (Sua API Node)
    const endpoint = isLocal ? "/api/contact" : "https://formcarry.com/s/3yzii8xkQ3q";

    try {
      const res = await fetch(endpoint, {
        method:  "POST",
        headers: { 
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(fields),
      });

      const data = await res.json();

      // Sucesso no Formcarry (code 200) ou no Node (res.ok)
      if (res.ok && (isLocal || data.code === 200)) {
        setStatus("success");
        setFields({ name: "", email: "", message: "" });
        setLgpd(false);
      } else {
        setErrorMsg(data.message || "Erro ao enviar. Tente novamente.");
        setStatus("error");
      }
    } catch (err) {
      setErrorMsg("Erro de conexão com o servidor.");
      setStatus("error");
    }
  };

  /* ── Estado de sucesso ────────────────────────────────────────── */
  if (status === "success") {
    return (
      <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 12, padding: "32px 0" }}>
        <div style={{
          width: 48, height: 48, borderRadius: "50%",
          background: "rgba(200,255,0,.1)",
          border: "1px solid rgba(200,255,0,.3)",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 22, color: "var(--ac)",
        }}>
          ✓
        </div>
        <h3 style={{
          fontFamily: "var(--font-display)", fontWeight: 700,
          fontSize: 20, color: "var(--fg)", letterSpacing: "-.02em",
        }}>
          Mensagem enviada!
        </h3>
        <p style={{ fontFamily: "var(--font-mono)", fontSize: 13, color: "var(--dim)", lineHeight: 1.8 }}>
          Obrigado pelo contato. Responderei em breve pelo e-mail informado.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          style={{
            marginTop: 8, background: "none",
            border: "1px solid rgba(237,233,227,.2)",
            borderRadius: 100, padding: "10px 20px",
            cursor: "pointer", color: "var(--dim)",
            fontFamily: "var(--font-mono)", fontSize: 11,
            letterSpacing: ".06em",
          }}
        >
          Enviar outra mensagem
        </button>
      </div>
    );
  }

  /* ── Estilos compartilhados dos campos ────────────────────────── */
  const inputStyle = {
    width: "100%",
    background: "rgba(237,233,227,.04)",
    border: "1px solid rgba(237,233,227,.12)",
    borderRadius: 12,
    padding: "14px 16px",
    color: "var(--fg)",
    fontFamily: "var(--font-mono)",
    fontSize: 13,
    outline: "none",
    transition: "border-color .2s",
    boxSizing: "border-box",
  };

  const labelStyle = {
    fontFamily: "var(--font-mono)",
    fontSize: 11,
    color: "var(--dimmer)",
    letterSpacing: ".1em",
    textTransform: "uppercase",
    display: "block",
    marginBottom: 8,
  };

  const focusOn  = e => { e.target.style.borderColor = "rgba(200,255,0,.4)"; };
  const focusOff = e => { e.target.style.borderColor = "rgba(237,233,227,.12)"; };

  /* ── Formulário ───────────────────────────────────────────────── */

  return (
    <div className="hj-contact-form" style={{ display: "flex", flexDirection: "column", gap: 20 }}>

      {/* Nome */}
      <div>
        <label htmlFor="contact-name" style={labelStyle}>Nome</label>
        <input
          id="contact-name"
          name="name"
          type="text"
          autoComplete="name"
          placeholder="Seu nome"
          value={fields.name}
          onChange={set("name")}
          disabled={status === "sending"}
          style={inputStyle}
          onFocus={focusOn}
          onBlur={focusOff}
        />
      </div>

      {/* E-mail */}
      <div>
        <label htmlFor="contact-email" style={labelStyle}>E-mail</label>
        <input
          id="contact-email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="seu@email.com"
          value={fields.email}
          onChange={set("email")}
          disabled={status === "sending"}
          style={inputStyle}
          onFocus={focusOn}
          onBlur={focusOff}
        />
      </div>

      {/* Mensagem */}
      <div>
        <label htmlFor="contact-message" style={labelStyle}>Mensagem</label>
        <textarea
          id="contact-message"
          name="message"
          placeholder="Me conta o que você está construindo..."
          rows={5}
          value={fields.message}
          onChange={set("message")}
          disabled={status === "sending"}
          style={{ ...inputStyle, resize: "vertical", minHeight: 120 }}
          onFocus={focusOn}
          onBlur={focusOff}
        />
      </div>

      {/* ── LGPD opt-in obrigatório (Art. 5º, XII LGPD) ─────────── */}
      <label style={{
        display: "flex", alignItems: "flex-start", gap: 10,
        cursor: "pointer", userSelect: "none",
      }}>
        <input
          id="contact-lgpd"
          name="lgpd"
          type="checkbox"
          checked={lgpd}
          onChange={e => { setLgpd(e.target.checked); setErrorMsg(""); setStatus("idle"); }}
          disabled={status === "sending"}
          aria-required="true"
          style={{ marginTop: 2, accentColor: "var(--ac)", flexShrink: 0 }}
        />
        <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--dimmer)", lineHeight: 1.7 }}>
          Li e aceito a{" "}
          <button
            type="button"
            onClick={onPrivacyOpen}
            style={{
              background: "none", border: "none", padding: 0,
              color: "var(--ac)", fontFamily: "var(--font-mono)",
              fontSize: 11, cursor: "pointer",
              textDecoration: "underline", textUnderlineOffset: 3,
            }}
          >
            Política de Privacidade
          </button>
          {" "}e concordo com o tratamento dos meus dados para resposta ao contato.
        </span>
      </label>

      {/* Erro inline */}
      {status === "error" && (
        <div
          role="alert"
          style={{
            background: "rgba(255,80,80,.08)",
            border: "1px solid rgba(255,80,80,.25)",
            borderRadius: 10, padding: "12px 16px",
            fontFamily: "var(--font-mono)", fontSize: 12,
            color: "rgba(255,130,130,.9)", lineHeight: 1.6,
          }}
        >
          ⚠ {errorMsg}
        </div>
      )}

      {/* Botão enviar */}
      <button
        type="button"
        onClick={handleSubmit}
        disabled={status === "sending"}
        className="hj-contact-submit"
        style={{
          background: status === "sending" ? "rgba(200,255,0,.5)" : "var(--ac)",
          color: "#070707",
          border: "none", borderRadius: 100,
          padding: "14px 28px",
          fontFamily: "var(--font-mono)", fontSize: 12,
          fontWeight: 500, letterSpacing: ".06em",
          cursor: status === "sending" ? "not-allowed" : "pointer",
          transition: "transform .15s",
          alignSelf: "flex-start",
          display: "inline-flex", alignItems: "center", gap: 8,
        }}
        onMouseEnter={e => { if (status !== "sending") e.currentTarget.style.transform = "scale(1.04)"; }}
        onMouseLeave={e => { e.currentTarget.style.transform = "scale(1)"; }}
      >
        {status === "sending" ? (
          <>
            <span style={{
              width: 12, height: 12,
              border: "2px solid #070707",
              borderTopColor: "transparent",
              borderRadius: "50%",
              animation: "cfSpin .7s linear infinite",
              display: "inline-block",
            }} />
            Enviando…
          </>
        ) : (
          "Enviar mensagem →"
        )}
      </button>

      <style>{`
        @keyframes cfSpin { to { transform: rotate(360deg); } }
      `}</style>
    </div>
  );
};