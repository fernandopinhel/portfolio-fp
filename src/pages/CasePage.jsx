import { BtnPrimary, BtnOutline, Pill, VideoEmbed } from "../components/UI";

/**
 * CasePage
 * Full-screen case study view. Supports optional YouTube video embed.
 *
 * SECURITY: All external links use rel="noopener noreferrer" to prevent
 * Reverse Tabnapping (OWASP vulnerability). BtnPrimary and BtnOutline
 * already enforce this; direct <a> tags here also carry the attribute.
 */
const CasePage = ({ project: p, onBack, setHovLink, isMobile }) => {
  if (!p) return null;

  const W = { maxWidth: "var(--max-w)", margin: "0 auto", padding: isMobile ? "0 20px" : "0 48px" };

  return (
    <main
      id="case-page"
      className="hj-case-page"
      data-gtm={`case-page-${p.id}`}
      data-case-id={p.id}
      style={{ paddingTop: 80, position: "relative", zIndex: 2 }}
    >
      {/* ── Hero ──────────────────────────────────────────────────── */}
      <section style={{ ...W, paddingTop: isMobile ? 40 : 80, paddingBottom: isMobile ? 40 : 64 }}>
        <div style={{ marginBottom: 24 }}>
          <Pill color={p.accent}>{p.tag}</Pill>
        </div>
        <h1
          className="case-hero-title"
          style={{
            fontFamily: "var(--font-display)", fontWeight: 800,
            fontSize: isMobile ? "clamp(32px,9vw,56px)" : 72,
            letterSpacing: "-.03em", color: "var(--fg)", lineHeight: 1.05,
            marginBottom: 32,
          }}
        >
          {p.title}
        </h1>

        {/* Meta row */}
        <div
          className="case-meta-row"
          style={{
            display: "flex", gap: 40, paddingBottom: 40,
            borderBottom: "1px solid var(--bd)", flexWrap: "wrap",
          }}
        >
          {[
            { l: "Ano", v: p.year },
            { l: "Role", v: p.role },
            { l: "Cliente", v: p.client },
          ].map(item => (
            <div key={item.l}>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--dimmer)", letterSpacing: ".12em", textTransform: "uppercase", marginBottom: 4 }}>
                {item.l}
              </div>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: 13, color: "var(--fg)" }}>
                {item.v}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Hero Image ────────────────────────────────────────────── */}
      <div style={{ ...W, marginBottom: isMobile ? 40 : 64 }}>
        <div style={{ borderRadius: 20, overflow: "hidden", border: "1px solid var(--bd)" }}>
          <img
            src={p.heroImg}
            alt={`${p.title} — hero`}
            style={{ width: "100%", maxHeight: 520, objectFit: "cover", display: "block" }}
          />
        </div>
      </div>

      {/* ── Overview + Challenge ──────────────────────────────────── */}
      <section style={{ ...W, marginBottom: isMobile ? 40 : 64 }}>
        <div
          className="case-two-col"
          style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: 48 }}
        >
          <div>
            <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 22, color: "var(--fg)", marginBottom: 16, letterSpacing: "-.02em" }}>
              Visão Geral
            </h2>
            <p style={{ fontFamily: "var(--font-mono)", fontSize: 14, color: "var(--dim)", lineHeight: 1.8 }}>
              {p.overview}
            </p>
          </div>
          <div>
            <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 22, color: "var(--fg)", marginBottom: 16, letterSpacing: "-.02em" }}>
              Desafio
            </h2>
            <p style={{ fontFamily: "var(--font-mono)", fontSize: 14, color: "var(--dim)", lineHeight: 1.8 }}>
              {p.challenge}
            </p>
          </div>
        </div>
      </section>

      {/* ── Problem ──────────────────────────────────────────────── */}
      {p.problem && (
        <section style={{ ...W, marginBottom: isMobile ? 40 : 64 }}>
          <div style={{
            background: `${p.accent}0D`, border: `1px solid ${p.accent}33`,
            borderRadius: 16, padding: isMobile ? 24 : 40,
          }}>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: p.accent, letterSpacing: ".15em", textTransform: "uppercase", marginBottom: 16 }}>
              HMW — How Might We
            </div>
            <p style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: isMobile ? 20 : 28, color: "var(--fg)", lineHeight: 1.4, letterSpacing: "-.02em" }}>
              "{p.problem}"
            </p>
          </div>
        </section>
      )}

      {/* ── Methodology ──────────────────────────────────────────── */}
      {p.methodology && (
        <section style={{ ...W, marginBottom: isMobile ? 40 : 64 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 16 }}>
            <div style={{ width: 3, height: 32, background: p.accent || "var(--ac)", borderRadius: 2, flexShrink: 0 }} />
            <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 22, color: "var(--fg)", letterSpacing: "-.02em" }}>
              Metodologia: {p.methodology}
            </h2>
          </div>
          <p style={{ fontFamily: "var(--font-mono)", fontSize: 14, color: "var(--dim)", lineHeight: 1.8, paddingLeft: 19 }}>
            {p.methodologyDesc}
          </p>
        </section>
      )}

      {/* ── KPIs ─────────────────────────────────────────────────── */}
      {p.kpis && (
        <section style={{ ...W, marginBottom: isMobile ? 40 : 64 }}>
          <div
            className="kpis-row"
            style={{ display: "grid", gridTemplateColumns: `repeat(${Math.min(p.kpis.length, 4)}, 1fr)`, gap: 16 }}
          >
            {p.kpis.map(k => (
              <div
                key={k.l}
                style={{
                  background: "#0C0C0C", border: "1px solid var(--bd)",
                  borderRadius: 14, padding: isMobile ? "20px 16px" : "28px 24px",
                  textAlign: "center",
                }}
              >
                <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 36, color: p.accent || "var(--ac)", letterSpacing: "-.03em", marginBottom: 6 }}>
                  {k.v}
                </div>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--dim)", letterSpacing: ".08em" }}>
                  {k.l}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ── Video ────────────────────────────────────────────────── */}
      {p.video && (
        <section data-gtm={`case-video-${p.id}`} style={{ ...W, marginBottom: isMobile ? 40 : 64 }}>
          <h2 style={{
            fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 22,
            color: "var(--fg)", marginBottom: 24, letterSpacing: "-.02em",
          }}>
            Vídeo do Projeto
          </h2>
          <VideoEmbed src={p.video} title={`${p.title} — vídeo`} accent={p.accent}/>
        </section>
      )}

      {/* ── Case Sections ────────────────────────────────────────── */}
      {p.sections?.map((sec, i) => (
        <section
          key={i}
          className="hj-case-section"
          data-section-index={i}
          style={{
            ...W,
            marginBottom: isMobile ? 48 : 72,
            paddingTop: isMobile ? 32 : 48,
            borderTop: "1px solid var(--bd)",
          }}
        >
          <div style={{ display: "flex", gap: 16, alignItems: "flex-start", marginBottom: 20 }}>
            <div className="step-dot" style={{ background: p.accent || "var(--ac)" }} />
            <h3 style={{
              fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 20,
              color: "var(--fg)", letterSpacing: "-.02em", lineHeight: 1.3,
            }}>
              {sec.title}
            </h3>
          </div>
          <p style={{
            fontFamily: "var(--font-mono)", fontSize: 14, color: "var(--dim)",
            lineHeight: 1.8, paddingLeft: 26, marginBottom: sec.imgs?.length ? 28 : 0,
          }}>
            {sec.content}
          </p>

          {/* Section images */}
          {sec.imgs?.length > 0 && (
            <div className="case-img-grid" style={{ paddingLeft: 0, display: "grid", gap: 16 }}>
              {sec.imgs.map((img, idx) => (
                <div key={idx} style={{ borderRadius: 12, overflow: "hidden", border: "1px solid var(--bd)" }}>
                  <img
                    src={img}
                    alt={`${sec.title} — imagem ${idx + 1}`}
                    loading="lazy"
                    style={{ width: "100%", objectFit: "cover", display: "block" }}
                  />
                </div>
              ))}
            </div>
          )}
        </section>
      ))}

      {/* ── Impact ───────────────────────────────────────────────── */}
      {p.impact && (
        <section style={{ ...W, marginBottom: isMobile ? 40 : 64 }}>
          <div style={{
            background: "#0C0C0C", border: "1px solid var(--bd)", borderRadius: 16, padding: isMobile ? 24 : 40,
          }}>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--dimmer)", letterSpacing: ".12em", textTransform: "uppercase", marginBottom: 12 }}>
              Impacto
            </div>
            <p style={{ fontFamily: "var(--font-mono)", fontSize: 14, color: "var(--fg)", lineHeight: 1.8 }}>
              {p.impact}
            </p>
          </div>
        </section>
      )}

      {/* ── Results ──────────────────────────────────────────────── */}
      {p.results?.length > 0 && (
        <section style={{ ...W, marginBottom: isMobile ? 48 : 80 }}>
          <h2 style={{
            fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 22,
            color: "var(--fg)", marginBottom: 28, letterSpacing: "-.02em",
          }}>
            Resultados & Entregas
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {p.results.map((r, i) => (
              <div
                key={i}
                style={{
                  display: "flex", gap: 16, alignItems: "flex-start",
                  padding: "16px 0", borderBottom: "1px solid var(--bd)",
                }}
              >
                <span style={{ color: p.accent || "var(--ac)", fontFamily: "var(--font-mono)", fontSize: 13, flexShrink: 0, marginTop: 1 }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: 14, color: "var(--dim)", lineHeight: 1.6 }}>
                  {r}
                </span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ── CTA Footer ───────────────────────────────────────────── */}
      <section style={{ ...W, paddingBottom: isMobile ? 60 : 100 }}>
        <div style={{
          display: "flex", gap: 16, flexWrap: "wrap", alignItems: "center",
          paddingTop: 40, borderTop: "1px solid var(--bd)",
        }}>
          {p.figmaLink && (
            <BtnPrimary href={p.figmaLink} className="hj-case-figma" data-gtm="hj-case-figma">
              Ver no Figma ↗
            </BtnPrimary>
          )}
          {p.externalLink && (
            <BtnOutline
              href={p.externalLink}
              className="hj-case-external"
              onMouseEnter={() => setHovLink(true)}
              onMouseLeave={() => setHovLink(false)}
            >
              Ver site ao vivo ↗
            </BtnOutline>
          )}
          <BtnOutline
            onClick={onBack}
            className="hj-case-back"
            onMouseEnter={() => setHovLink(true)}
            onMouseLeave={() => setHovLink(false)}
          >
            ← Voltar aos projetos
          </BtnOutline>
        </div>
      </section>
    </main>
  );
};

export default CasePage;
