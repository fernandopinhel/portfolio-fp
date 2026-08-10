import { useState, useEffect, useRef } from "react";

const FONT_SCALE_LABEL = { "-1": "85%", "0": "100%", "1": "115%", "2": "130%" };

const TOGGLES = [
  { key: "highContrast",   label: "Alto contraste" },
  { key: "dyslexiaFont",   label: "Fonte para leitura facilitada" },
  { key: "readingGuide",   label: "Guia de leitura" },
  { key: "underlineLinks", label: "Sublinhar links" },
  { key: "reduceMotion",   label: "Reduzir animações" },
];

const btnStyle = {
  flex: 1, background: "none", border: "1px solid var(--bd)",
  borderRadius: 8, padding: "8px 0", cursor: "pointer",
  color: "var(--fg)", fontFamily: "var(--font-mono)", fontSize: 13,
};

/* ── Guia de leitura: barra horizontal que acompanha o mouse ───────── */
export const ReadingGuide = () => {
  const [y, setY] = useState(-100);
  useEffect(() => {
    const onMove = (e) => setY(e.clientY);
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);
  return (
    <div
      aria-hidden="true"
      style={{
        position: "fixed", left: 0, right: 0, top: y - 22, height: 44,
        background: "rgba(var(--ac-rgb),.1)",
        borderTop: "2px solid var(--ac)",
        borderBottom: "2px solid var(--ac)",
        pointerEvents: "none", zIndex: 9998,
      }}
    />
  );
};

/* ── Menu de acessibilidade ──────────────────────────────────────────
 * Recursos nativos (sem widget de terceiro): tamanho de fonte, alto
 * contraste, fonte para leitura facilitada, guia de leitura, sublinhar
 * links e reduzir animações. Painel não-modal (mesmo raciocínio do
 * CookieBanner): fecha com Escape ou clique fora, sem forçar focus trap.
 */
const AccessibilityMenu = ({ settings, patch, reset }) => {
  const [open, setOpen] = useState(false);
  const panelRef = useRef(null);
  const triggerRef = useRef(null);
  const firstFieldRef = useRef(null);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e) => {
      if (e.key === "Escape") { setOpen(false); triggerRef.current?.focus(); }
    };
    const onClickOutside = (e) => {
      if (panelRef.current && !panelRef.current.contains(e.target) && !triggerRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("mousedown", onClickOutside);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("mousedown", onClickOutside);
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const t = setTimeout(() => firstFieldRef.current?.focus(), 50);
    return () => clearTimeout(t);
  }, [open]);

  return (
    <div style={{ position: "relative" }}>
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen(o => !o)}
        aria-label="Abrir menu de acessibilidade"
        aria-expanded={open}
        aria-controls="a11y-panel"
        className="hj-a11y-toggle"
        data-gtm="a11y-toggle"
        style={{
          width: 36, height: 36, borderRadius: "50%",
          background: "none", border: "1px solid var(--bd)",
          display: "flex", alignItems: "center", justifyContent: "center",
          cursor: "pointer", color: "var(--fg)", flexShrink: 0,
        }}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <circle cx="12" cy="4.5" r="1.8" fill="currentColor" stroke="none" />
          <path d="M4 8.5c2.5 1 5.3 1.5 8 1.5s5.5-.5 8-1.5M12 10v11M8.2 21l2.3-6.2M15.8 21l-2.3-6.2M9 13.5h6" />
        </svg>
      </button>

      {open && (
        <div
          ref={panelRef}
          id="a11y-panel"
          role="dialog"
          aria-label="Opções de acessibilidade"
          style={{
            position: "absolute", top: "calc(100% + 12px)", right: 0,
            width: 280, maxWidth: "calc(100vw - 32px)",
            background: "var(--surface-2)", border: "1px solid var(--bd)",
            borderRadius: 16, padding: 20, zIndex: 10002,
            boxShadow: "0 24px 48px rgba(0,0,0,.35)",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
            <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 14, color: "var(--fg)" }}>
              Acessibilidade
            </span>
            <button
              type="button"
              onClick={() => { setOpen(false); triggerRef.current?.focus(); }}
              aria-label="Fechar"
              style={{ background: "none", border: "none", color: "var(--dim)", cursor: "pointer", fontSize: 18, lineHeight: 1, padding: 4 }}
            >×</button>
          </div>

          {/* Tamanho da fonte */}
          <div style={{ marginBottom: 16 }}>
            <span style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--dim)", letterSpacing: ".06em", marginBottom: 8 }}>
              Tamanho da fonte — {FONT_SCALE_LABEL[String(settings.fontScale)]}
            </span>
            <div style={{ display: "flex", gap: 8 }}>
              <button
                ref={firstFieldRef}
                type="button"
                onClick={() => patch({ fontScale: Math.max(-1, settings.fontScale - 1) })}
                disabled={settings.fontScale <= -1}
                aria-label="Diminuir fonte"
                style={{ ...btnStyle, opacity: settings.fontScale <= -1 ? .4 : 1 }}
              >A-</button>
              <button
                type="button"
                onClick={() => patch({ fontScale: 0 })}
                aria-label="Fonte padrão"
                style={btnStyle}
              >A</button>
              <button
                type="button"
                onClick={() => patch({ fontScale: Math.min(2, settings.fontScale + 1) })}
                disabled={settings.fontScale >= 2}
                aria-label="Aumentar fonte"
                style={{ ...btnStyle, opacity: settings.fontScale >= 2 ? .4 : 1 }}
              >A+</button>
            </div>
          </div>

          {/* Toggles */}
          <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 16 }}>
            {TOGGLES.map(t => (
              <label key={t.key} style={{ display: "flex", alignItems: "center", gap: 10, cursor: "pointer", fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--fg)" }}>
                <input
                  type="checkbox"
                  checked={settings[t.key]}
                  onChange={e => patch({ [t.key]: e.target.checked })}
                  style={{ accentColor: "var(--ac)", flexShrink: 0 }}
                />
                {t.label}
              </label>
            ))}
          </div>

          <button
            type="button"
            onClick={reset}
            style={{
              width: "100%", background: "none", border: "1px solid var(--bd)",
              borderRadius: 100, padding: "10px 16px", cursor: "pointer",
              color: "var(--dim)", fontFamily: "var(--font-mono)", fontSize: 11,
              letterSpacing: ".06em",
            }}
          >
            Restaurar padrão
          </button>
        </div>
      )}
    </div>
  );
};

export default AccessibilityMenu;
