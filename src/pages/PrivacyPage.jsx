/**
 * PrivacyPage.jsx — Política de Privacidade
 *
 * Exigência LGPD (Relatório GRC / Denatech):
 * - Informa quais dados são coletados e com qual finalidade.
 * - Identifica o responsável (DPO).
 * - Lista os direitos do titular.
 * - Deve estar acessível a um clique de distância (link no rodapé).
 *
 * Base legal: Lei Geral de Proteção de Dados (LGPD — Lei 13.709/2018)
 */

const PrivacyPage = ({ onBack }) => {
  const W = { maxWidth: 760, margin: "0 auto", padding: "0 24px" };

  const Section = ({ title, children }) => (
    <div style={{ marginBottom: 48 }}>
      <h2 style={{
        fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 20,
        color: "var(--fg)", letterSpacing: "-.02em", marginBottom: 16,
      }}>
        {title}
      </h2>
      <div style={{ fontFamily: "var(--font-mono)", fontSize: 14, color: "var(--dim)", lineHeight: 1.9 }}>
        {children}
      </div>
    </div>
  );

  return (
    <main style={{ paddingTop: 100, paddingBottom: 100, position: "relative", zIndex: 2 }}>
      <div style={W}>

        {/* Header */}
        <div style={{ marginBottom: 56 }}>
          <div style={{
            fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--ac)",
            letterSpacing: ".18em", textTransform: "uppercase", marginBottom: 14,
          }}>
            // legal
          </div>
          <h1 style={{
            fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(36px,6vw,64px)",
            letterSpacing: "-.03em", color: "var(--fg)", lineHeight: 1.05, marginBottom: 16,
          }}>
            Política de Privacidade
          </h1>
          <p style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--dimmer)" }}>
            Última atualização: abril de 2026 · Base legal: LGPD (Lei 13.709/2018)
          </p>
        </div>

        {/* 1. Responsável */}
        <Section title="1. Responsável pelo tratamento dos dados (DPO)">
          <p>
            <strong style={{ color: "var(--fg)" }}>Fernando Pinhel</strong><br />
            Product Designer — Niterói, RJ, Brasil<br />
            E-mail de contato para assuntos de privacidade:{" "}
            <a href="mailto:contato@fernandopinhel.com.br" style={{ color: "var(--ac)" }}>
              contato@fernandopinhel.com.br
            </a>
          </p>
        </Section>

        {/* 2. Dados coletados */}
        <Section title="2. Quais dados coletamos">
          <p style={{ marginBottom: 16 }}>Coletamos dois tipos de dados:</p>
          <p style={{ marginBottom: 12 }}>
            <strong style={{ color: "var(--fg)" }}>a) Dados de navegação (Cookies e Analytics)</strong><br />
            Informações sobre como você interage com este site: páginas visitadas, tempo de permanência,
            cliques e comportamento de scroll. Coletados por ferramentas de análise (Hotjar e/ou Google Analytics)
            <em> somente após seu consentimento explícito</em> via banner de cookies.
          </p>
          <p>
            <strong style={{ color: "var(--fg)" }}>b) Dados de contato (Formulário)</strong><br />
            Quando você preenche o formulário de contato, coletamos: seu nome, endereço de e-mail e a
            mensagem enviada. Esses dados são utilizados exclusivamente para responder à sua solicitação.
          </p>
        </Section>

        {/* 3. Finalidade */}
        <Section title="3. Finalidade do tratamento">
          <p>Utilizamos seus dados para as seguintes finalidades:</p>
          <ul style={{ paddingLeft: 20, marginTop: 12, display: "flex", flexDirection: "column", gap: 8 }}>
            <li><strong style={{ color: "var(--fg)" }}>Análise de tráfego:</strong> entender quais conteúdos são mais relevantes e melhorar a experiência do site.</li>
            <li><strong style={{ color: "var(--fg)" }}>Resposta a orçamentos e mensagens:</strong> entrar em contato com quem nos escreveu pelo formulário.</li>
            <li><strong style={{ color: "var(--fg)" }}>Melhoria contínua:</strong> identificar pontos de atrito na navegação para otimizar o portfólio.</li>
          </ul>
          <p style={{ marginTop: 16 }}>
            Seus dados <strong style={{ color: "var(--fg)" }}>não são vendidos, alugados ou compartilhados</strong> com terceiros
            para fins comerciais ou publicitários.
          </p>
        </Section>

        {/* 4. Cookies */}
        <Section title="4. Uso de cookies e rastreadores">
          <p style={{ marginBottom: 12 }}>
            Este site pode utilizar cookies de análise e rastreamento de comportamento. Nenhum rastreador
            é ativado antes do seu consentimento explícito. Você pode aceitar, recusar ou personalizar
            suas preferências a qualquer momento pelo banner de cookies exibido na primeira visita.
          </p>
          <p>
            <strong style={{ color: "var(--fg)" }}>Ferramentas utilizadas:</strong> Hotjar (análise de comportamento),
            Google Analytics GA4 (métricas de tráfego). Ambas operam sob suas respectivas políticas de privacidade.
          </p>
        </Section>

        {/* 5. Direitos */}
        <Section title="5. Seus direitos como titular">
          <p style={{ marginBottom: 12 }}>
            Nos termos da LGPD (Art. 18), você tem direito a:
          </p>
          <ul style={{ paddingLeft: 20, display: "flex", flexDirection: "column", gap: 8 }}>
            <li>Confirmar a existência de tratamento de seus dados.</li>
            <li>Acessar os dados que possuímos sobre você.</li>
            <li>Corrigir dados incompletos, inexatos ou desatualizados.</li>
            <li>Solicitar a anonimização, bloqueio ou eliminação de dados desnecessários.</li>
            <li>Revogar seu consentimento a qualquer momento.</li>
            <li>Portabilidade dos dados a outro fornecedor de serviço.</li>
          </ul>
          <p style={{ marginTop: 16 }}>
            Para exercer qualquer um desses direitos, entre em contato pelo e-mail{" "}
            <a href="mailto:contato@fernandopinhel.com.br" style={{ color: "var(--ac)" }}>
              contato@fernandopinhel.com.br
            </a>. Responderemos em até 15 dias úteis.
          </p>
        </Section>

        {/* 6. Retenção */}
        <Section title="6. Retenção dos dados">
          <p>
            Dados de formulário de contato são mantidos apenas pelo tempo necessário para responder à
            solicitação e por até 6 meses após o encerramento da troca de mensagens. Dados de analytics
            seguem os prazos definidos pelas plataformas (Hotjar: 365 dias; Google Analytics: 14 meses),
            conforme configuração padrão. Você pode solicitar a exclusão antecipada a qualquer momento.
          </p>
        </Section>

        {/* 7. Segurança */}
        <Section title="7. Segurança">
          <p>
            Adotamos medidas técnicas para proteger os dados coletados: HTTPS em todo o site,
            cabeçalhos de segurança HTTP (CSP, X-Frame-Options, HSTS), política DMARC no e-mail
            e variáveis de ambiente para dados sensíveis no código. Nenhum sistema é 100% seguro,
            mas adotamos as melhores práticas disponíveis.
          </p>
        </Section>

        {/* 8. Contato */}
        <Section title="8. Contato e atualizações">
          <p>
            Esta política pode ser atualizada periodicamente. A data de "última atualização" no topo
            indica a versão vigente. Para dúvidas ou solicitações relacionadas à privacidade,
            entre em contato:{" "}
            <a href="mailto:contato@fernandopinhel.com.br" style={{ color: "var(--ac)" }}>
              contato@fernandopinhel.com.br
            </a>.
          </p>
        </Section>

        {/* Back */}
        <div style={{ paddingTop: 40, borderTop: "1px solid var(--bd)" }}>
          <button
            onClick={onBack}
            style={{
              background: "none", border: "1px solid rgba(237,233,227,.2)",
              borderRadius: 100, padding: "13px 28px", cursor: "pointer",
              color: "var(--fg)", fontFamily: "var(--font-mono)", fontSize: 12,
              letterSpacing: ".06em",
            }}
          >
            ← Voltar ao portfólio
          </button>
        </div>

      </div>
    </main>
  );
};

export default PrivacyPage;
