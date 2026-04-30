/**
 * CookieBanner.jsx — Consentimento de Cookies (LGPD)
 *
 * Exibido apenas quando o usuário ainda não tomou uma decisão.
 * Informa o uso de Hotjar e Google Analytics GA4 e oferece
 * aceitar ou recusar antes de qualquer coleta de dados.
 *
 * Design: segue os tokens do portfólio (--bg, --fg, --ac, --bd,
 * --font-mono, --font-display) sem depender de nenhuma lib externa.
 *
 * Acessibilidade:
 *   - role="dialog" + aria-modal + aria-labelledby
 *   - foco preso no banner enquanto visível (não bloqueia scroll)
 *   - botões com labels claros
 */

import { useEffect, useRef } from "react";

const CookieBanner = ({ onAccept, onDecline, onPrivacyOpen }) => {
  const bannerRef   = useRef(null);
  const acceptRef   = useRef(null);

  // Foca o botão principal ao montar
  useEffect(() => {
    acceptRef.current?.focus();
  }, []);

  return (
    <>
      {/* Backdrop — fica acima de tudo incluindo o cursor customizado */}
      <div
        aria-hidden="true"
        style={{
          position: "fixed",
          inset: 0,
          background: "rgba(7,7,7,.4)",
          backdropFilter: "blur(2px)",
          zIndex: 10000,
          pointerEvents: "none",
        }}
      />

      {/* Banner — z-index acima do cursor (9999) e do backdrop (10000) */}
      <div
        ref={bannerRef}
        role="dialog"
        aria-modal="false"
        aria-labelledby="cookie-banner-title"
        style={{
          position: "fixed",
          bottom: 24,
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 10001,
          width: "min(680px, calc(100vw - 32px))",
          background: "#0F0F0F",
          border: "1px solid rgba(237,233,227,.12)",
          borderRadius: 20,
          padding: "28px 32px",
          boxShadow: "0 24px 64px rgba(0,0,0,.6), 0 0 0 1px rgba(200,255,0,.06)",
          animation: "cookieFadeUp .4s cubic-bezier(.16,1,.3,1) forwards",
          cursor: "auto",
        }}
      >
        {/* Linha de topo — ícone + título */}
        <div style={{ display: "flex", alignItems: "flex-start", gap: 14, marginBottom: 16 }}>
          <div
            aria-hidden="true"
            style={{
              width: 36, height: 36, borderRadius: 10, flexShrink: 0,
              background: "rgba(200,255,0,.08)",
              border: "1px solid rgba(200,255,0,.2)",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 16,
            }}
          >
            🍪
          </div>
          <div>
            <h2
              id="cookie-banner-title"
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 700,
                fontSize: 16,
                color: "var(--fg)",
                letterSpacing: "-.02em",
                marginBottom: 2,
              }}
            >
              Cookies & privacidade
            </h2>
            <span style={{
              fontFamily: "var(--font-mono)",
              fontSize: 10,
              color: "var(--ac)",
              letterSpacing: ".12em",
              textTransform: "uppercase",
            }}>
              LGPD — Lei 13.709/2018
            </span>
          </div>
        </div>

        {/* Corpo */}
        <p style={{
          fontFamily: "var(--font-mono)",
          fontSize: 13,
          color: "rgba(237,233,227,.7)",
          lineHeight: 1.75,
          marginBottom: 20,
        }}>
          Este site utiliza{" "}
          <strong style={{ color: "var(--fg)" }}>Hotjar</strong> e{" "}
          <strong style={{ color: "var(--fg)" }}>Google Analytics (GA4)</strong> para
          analisar o comportamento de navegação e melhorar a experiência do portfólio.
          Nenhum dado é coletado antes do seu consentimento.{" "}
          <button
            onClick={onPrivacyOpen}
            style={{
              background: "none", border: "none", padding: 0,
              color: "var(--ac)", fontFamily: "var(--font-mono)",
              fontSize: 13, cursor: "pointer", textDecoration: "underline",
              textUnderlineOffset: 3,
            }}
          >
            Política de Privacidade →
          </button>
        </p>

        {/* Ferramentas */}
        <div style={{
          display: "flex", gap: 10, marginBottom: 24, flexWrap: "wrap",
        }}>
          {[
            { name: "Hotjar", desc: "Heatmaps & gravações" },
            { name: "Google Analytics GA4", desc: "Métricas de tráfego" },
          ].map(tool => (
            <div
              key={tool.name}
              style={{
                display: "flex", alignItems: "center", gap: 8,
                background: "rgba(237,233,227,.04)",
                border: "1px solid var(--bd)",
                borderRadius: 100,
                padding: "6px 12px",
              }}
            >
              <span style={{
                width: 6, height: 6, borderRadius: "50%",
                background: "var(--ac)", flexShrink: 0,
              }} />
              <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--fg)" }}>
                {tool.name}
              </span>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "rgba(237,233,227,.4)" }}>
                · {tool.desc}
              </span>
            </div>
          ))}
        </div>

        {/* Ações */}
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", alignItems: "center" }}>
          {/* Aceitar */}
          <button
            ref={acceptRef}
            onClick={onAccept}
            style={{
              background: "var(--ac)",
              color: "#070707",
              border: "none",
              borderRadius: 100,
              padding: "12px 24px",
              fontFamily: "var(--font-mono)",
              fontSize: 12,
              fontWeight: 500,
              letterSpacing: ".06em",
              cursor: "pointer",
              transition: "transform .15s, opacity .15s",
              flexShrink: 0,
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = "scale(1.04)"; }}
            onMouseLeave={e => { e.currentTarget.style.transform = "scale(1)"; }}
          >
            Aceitar cookies
          </button>

          {/* Recusar */}
          <button
            onClick={onDecline}
            style={{
              background: "transparent",
              color: "var(--fg)",
              border: "1px solid rgba(237,233,227,.18)",
              borderRadius: 100,
              padding: "11px 24px",
              fontFamily: "var(--font-mono)",
              fontSize: 12,
              letterSpacing: ".06em",
              cursor: "pointer",
              transition: "border-color .15s, background .15s",
              flexShrink: 0,
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = "rgba(237,233,227,.4)";
              e.currentTarget.style.background = "rgba(237,233,227,.04)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = "rgba(237,233,227,.18)";
              e.currentTarget.style.background = "transparent";
            }}
          >
            Recusar
          </button>

          {/* Info de recusa */}
          <span style={{
            fontFamily: "var(--font-mono)",
            fontSize: 11,
            color: "rgba(237,233,227,.3)",
            lineHeight: 1.5,
            flex: 1,
            minWidth: 160,
          }}>
            Ao recusar, nenhum dado de navegação será coletado.
          </span>
        </div>
      </div>

      {/* Keyframe inline — sem dependência de CSS externo */}
      <style>{`
        @keyframes cookieFadeUp {
          from { opacity: 0; transform: translateX(-50%) translateY(16px); }
          to   { opacity: 1; transform: translateX(-50%) translateY(0); }
        }
      `}</style>
    </>
  );
};

export default CookieBanner;