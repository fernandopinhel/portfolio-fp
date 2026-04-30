import { useRef } from "react";
import { SKILLS, TRAJECTORY, ARTICLES, PROJECTS, WHATSAPP_NUMBER } from "../data";
import { BtnPrimary, BtnOutline, Pill, GithubIcon, ContactForm } from "../components/UI";
import ProjectCard from "../components/ProjectCard";

/* ── Marquee skills strip ────────────────────────────────────────── */
const SkillsMarquee = () => {
  const items = [...SKILLS, ...SKILLS];
  return (
    <div
      aria-hidden="true"
      style={{ overflow: "hidden", borderTop: "1px solid var(--bd)", borderBottom: "1px solid var(--bd)", padding: "14px 0" }}
    >
      <div className="mq">
        {items.map((s, i) => (
          <span key={i} style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--dim)", letterSpacing: ".12em", textTransform: "uppercase" }}>
            {s} <span style={{ color: "var(--ac)", marginLeft: 20 }}>·</span>
          </span>
        ))}
      </div>
    </div>
  );
};

/* ── Section Title ───────────────────────────────────────────────── */
const SectionTitle = ({ children, sub }) => (
  <div style={{ marginBottom: 56 }}>
    {sub && (
      <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--ac)", letterSpacing: ".18em", textTransform: "uppercase", marginBottom: 14 }}>
        {sub}
      </div>
    )}
    <h2
      className="section-title"
      style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 48, letterSpacing: "-.03em", color: "var(--fg)" }}
    >
      {children}
    </h2>
  </div>
);

/* ═══════════════════════════════════════════════════════════════════
   PORTFOLIO PAGE — all home sections
═══════════════════════════════════════════════════════════════════ */
const PortfolioPage = ({
  setCurrentCase, scrollTo, setHovLink, isMobile, isTablet,
}) => {
  const W = { maxWidth: "var(--max-w)", margin: "0 auto", padding: isMobile ? "0 20px" : "0 48px" };
  const sectionRefs = useRef({});

  // WhatsApp URL built from env var — number not hardcoded in source
  const whatsappHref = WHATSAPP_NUMBER
    ? `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}`
    : "https://wa.me/";

  return (
    <main style={{ position: "relative", zIndex: 2 }}>

      {/* ═══ HERO ═══════════════════════════════════════════════════ */}
      <section
        id="sobre"
        aria-label="Apresentação"
        className="hj-hero-section"
        style={{ ...W, paddingTop: isMobile ? 120 : 160, paddingBottom: isMobile ? 60 : 100 }}
      >
        {/* Status badge */}
        <div className="fu d1" style={{ display: "inline-flex", alignItems: "center", gap: 8, border: "1px solid var(--bd)", borderRadius: 100, padding: "8px 16px", marginBottom: 32 }}>
          <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--ac)", animation: "pu 2s ease infinite", display: "block" }} />
          <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--dim)", letterSpacing: ".1em" }}>
            Design que inspira e conecta
          </span>
        </div>

        {/* Name */}
        <h1
          className="hero-name fu d2"
          style={{
            fontFamily: "var(--font-display)", fontWeight: 800,
            fontSize: "clamp(56px,9vw,112px)", letterSpacing: "-.04em",
            lineHeight: 1, color: "var(--fg)", marginBottom: 32,
          }}
        >
          Fernando<br />
          <span style={{ color: "var(--ac)" }}>Pinhel</span>
        </h1>

        {/* Tagline */}
        <p className="fu d3" style={{ fontFamily: "var(--font-mono)", fontSize: isMobile ? 14 : 16, color: "var(--dim)", maxWidth: 560, lineHeight: 1.8, marginBottom: 48 }}>
          Product Designer com +10 anos de experiência em UX/UI e Front-end. Formado em Publicidade e Design Digital — da pesquisa ao código, do wireframe ao produto final em produção.
        </p>

        {/* CTAs */}
        <div className="fu d4" style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          <BtnPrimary onClick={() => scrollTo("Projetos")} className="hj-cta-hero">
            Ver projetos →
          </BtnPrimary>
          <BtnOutline
            href={import.meta.env.VITE_FIGMA_STORYTELLING}
            className="hj-cta-storytelling"
            onMouseEnter={() => setHovLink(true)}
            onMouseLeave={() => setHovLink(false)}
          >
            Saiba mais ↗
          </BtnOutline>
        </div>

        {/* Stats */}
        <div className="stats-row fu d5" style={{ display: "flex", gap: 48, marginTop: 64, paddingTop: 48, borderTop: "1px solid var(--bd)" }}>
          {[
            { v: "10+", l: "Anos de experiência" },
            { v: "30+", l: "Projetos entregues" },
            { v: "10+", l: "Empresas atendidas" },
          ].map(s => (
            <div key={s.l}>
              <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 36, color: "var(--fg)", letterSpacing: "-.03em" }}>{s.v}</div>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--dimmer)", letterSpacing: ".1em", textTransform: "uppercase", marginTop: 4 }}>{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══ SKILLS MARQUEE ═════════════════════════════════════════ */}
      <SkillsMarquee />

      {/* ═══ ABOUT ══════════════════════════════════════════════════ */}
      <section
        id="sobre-detalhes"
        style={{ ...W, paddingTop: isMobile ? 60 : 100, paddingBottom: isMobile ? 60 : 100 }}
      >
        <div className="about-grid" style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: 80, alignItems: "start" }}>
          <div>
            <SectionTitle sub="// sobre">Trajetória & Visão</SectionTitle>
            <p style={{ fontFamily: "var(--font-mono)", fontSize: 14, color: "var(--dim)", lineHeight: 1.9, marginBottom: 24 }}>
              Minha jornada começou no design gráfico — onde aprendi que toda comunicação visual conta uma história. De lá, passei pelo web design, pelo motion e pelo front-end, até me especializar em Product Design.
            </p>
            <p style={{ fontFamily: "var(--font-mono)", fontSize: 14, color: "var(--dim)", lineHeight: 1.9, marginBottom: 40 }}>
              Hoje atuo na interseção entre design, tecnologia e negócios — criando produtos digitais que são ao mesmo tempo bonitos, funcionais e mensuráveis.
            </p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              {SKILLS.slice(0, 8).map(s => (
                <span key={s} className="sk">{s}</span>
              ))}
            </div>
          </div>

          {/* Trajectory */}
          <div>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--ac)", letterSpacing: ".18em", textTransform: "uppercase", marginBottom: 32 }}>
              // trajetória
            </div>
            {TRAJECTORY.map((t, i) => (
              <div key={i} className="tr">
                <span style={{ fontFamily: "var(--font-mono)", fontSize: 13, color: t.current ? "var(--fg)" : "var(--dim)" }}>
                  {t.current && <span style={{ color: "var(--ac)" }}>↳ </span>}{t.role}
                </span>
                {t.current && (
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--ac)", letterSpacing: ".1em" }}>ATUAL</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ PROJECTS ═══════════════════════════════════════════════ */}
      <section
        id="projetos"
        className="hj-projects-section"
        style={{ ...W, paddingTop: isMobile ? 60 : 100, paddingBottom: isMobile ? 60 : 100 }}
      >
        <SectionTitle sub="// projetos selecionados">Cases de design</SectionTitle>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)",
            gap: 20,
          }}
        >
          {PROJECTS.map(p => (
            <ProjectCard
              key={p.id}
              p={p}
              isMobile={isMobile}
              onClick={setCurrentCase}
            />
          ))}
        </div>
      </section>

      {/* ═══ ARTICLES ═══════════════════════════════════════════════ */}
      <section
        id="artigos"
        className="hj-articles-section"
        style={{ ...W, paddingTop: isMobile ? 60 : 100, paddingBottom: isMobile ? 60 : 100, borderTop: "1px solid var(--bd)" }}
      >
        <SectionTitle sub="// escrita">Artigos</SectionTitle>
        <div style={{ display: "flex", flexDirection: "column" }}>
          {ARTICLES.map(a => (
            <a
              key={a.id}
              href={a.href}
              target="_blank"
              rel="noopener noreferrer"
              className="ac-row hj-article-link"
              onMouseEnter={() => setHovLink(true)}
              onMouseLeave={() => setHovLink(false)}
            >
              <img
                src={a.img}
                alt={a.title}
                loading="lazy"
                style={{ width: 64, height: 64, objectFit: "cover", borderRadius: 10, flexShrink: 0 }}
              />
              <div style={{ flex: 1 }}>
                <div style={{ marginBottom: 8 }}>
                  <Pill>{a.tag}</Pill>
                </div>
                <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 18, color: "var(--fg)", letterSpacing: "-.02em", marginBottom: 6 }}>
                  {a.title}
                </div>
                <p style={{ fontFamily: "var(--font-mono)", fontSize: 13, color: "var(--dim)", lineHeight: 1.6 }}>
                  {a.desc}
                </p>
              </div>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: 20, color: "var(--dimmer)", flexShrink: 0 }}>↗</span>
            </a>
          ))}
        </div>
      </section>

      {/* ═══ CONTACT ════════════════════════════════════════════════ */}
      <section
        id="contato"
        className="hj-contact-section"
        style={{ ...W, paddingTop: isMobile ? 60 : 100, paddingBottom: isMobile ? 60 : 100, borderTop: "1px solid var(--bd)" }}
      >
        <h2
          className="contact-title"
          style={{
            fontFamily: "var(--font-display)", fontWeight: 800,
            fontSize: "clamp(40px,7vw,80px)", letterSpacing: "-.04em",
            color: "var(--fg)", marginBottom: 56, lineHeight: 1.05,
          }}
        >
          Vamos trabalhar<br />
          <span style={{ color: "var(--ac)" }}>juntos?</span>
        </h2>

        <div
          className="contact-grid"
          style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: 64 }}
        >
          {/* Left: links */}
          <div>
            <p style={{ fontFamily: "var(--font-mono)", fontSize: 13, color: "var(--dim)", maxWidth: 360, lineHeight: 1.8, marginBottom: 32 }}>
              Me conta o que você está construindo.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <a
                href="mailto:contato@fernandopinhel.com.br"
                className="hj-contact-email"
                style={{ display: "flex", alignItems: "center", gap: 8, color: "var(--fg)", textDecoration: "none", fontFamily: "var(--font-mono)", fontSize: 13, transition: "color .2s" }}
                onMouseEnter={e => { e.currentTarget.style.color = "var(--ac)"; setHovLink(true); }}
                onMouseLeave={e => { e.currentTarget.style.color = "var(--fg)"; setHovLink(false); }}
              >
                ✉ contato@fernandopinhel.com.br
              </a>
              {/* WhatsApp: número via env var — não exposto no repositório público */}
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="hj-contact-whatsapp"
                style={{ display: "flex", alignItems: "center", gap: 8, color: "var(--fg)", textDecoration: "none", fontFamily: "var(--font-mono)", fontSize: 13, transition: "color .2s" }}
                onMouseEnter={e => { e.currentTarget.style.color = "var(--ac)"; setHovLink(true); }}
                onMouseLeave={e => { e.currentTarget.style.color = "var(--fg)"; setHovLink(false); }}
              >
                💬 WhatsApp direto
              </a>
              <a
                href="https://github.com/fernandopinhel"
                target="_blank"
                rel="noopener noreferrer"
                className="hj-footer-github"
                style={{ display: "flex", alignItems: "center", gap: 8, color: "var(--fg)", textDecoration: "none", fontFamily: "var(--font-mono)", fontSize: 13, transition: "color .2s" }}
                onMouseEnter={e => { e.currentTarget.style.color = "var(--ac)"; setHovLink(true); }}
                onMouseLeave={e => { e.currentTarget.style.color = "var(--fg)"; setHovLink(false); }}
              >
                <GithubIcon size={16} /> GitHub · fernandopinhel
              </a>
            </div>

            {/* Social links */}
            <div style={{ display: "flex", gap: 32, paddingTop: 36, borderTop: "1px solid var(--bd)", marginTop: 48, flexWrap: "wrap" }}>
              {[
                { l: "LinkedIn", h: "https://www.linkedin.com/in/fernando-pinhel-designer/" },
                { l: "Medium", h: "https://medium.com/@fernandopinhelll" },
                { l: "GitHub", h: "https://github.com/fernandopinhel" },
              ].map(lk => (
                <a
                  key={lk.l}
                  href={lk.h}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--dim)", textDecoration: "none", display: "flex", alignItems: "center", gap: 6, transition: "color .2s", letterSpacing: ".05em" }}
                  onMouseEnter={e => { e.currentTarget.style.color = "var(--ac)"; setHovLink(true); }}
                  onMouseLeave={e => { e.currentTarget.style.color = "var(--dim)"; setHovLink(false); }}
                >
                  {lk.l} →
                </a>
              ))}
            </div>
          </div>

          {/* Right: form */}
          <ContactForm />
        </div>
      </section>
    </main>
  );
};

export default PortfolioPage;
