# 🚀 Fernando Pinhel | Product Designer & Front-end Portfolio

Este repositório contém o ecossistema completo do meu portfólio pessoal[cite: 14, 15]. O projeto transcende o visual, integrando uma arquitetura de software robusta, automação de e-mails e rigorosas políticas de segurança e privacidade[cite: 11, 12, 15].

---

## 🏗️ Estrutura do Projeto

A organização segue os mais altos padrões de escalabilidade e separação de interesses[cite: 13, 14].

![Estrutura do Projeto](https://r.jina.ai/i/6f8902be34be495f87b32230eb49a888)

*   **`/api`**: Servidor Node.js dedicado para processamento de contatos e integração SMTP[cite: 14].
*   **`/public`**: Assets estáticos otimizados (imagens e vídeos)[cite: 11].
*   **`/src`**: Núcleo da aplicação React com **Path Aliases** configurados no `jsconfig.json` para imports limpos[cite: 13, 15].
    *   `hooks/`: Lógicas reutilizáveis, incluindo o motor de consentimento LGPD[cite: 15].
    *   `components/`: UI Atômica e componentes de layout[cite: 15].
    *   `pages/`: Visualizações de alto nível como a `CasePage` e `PrivacyPage`[cite: 15, 17].

---

## 🛡️ Segurança e Governança (DevSecOps)

O projeto foi auditado sob uma ótica de **GRC (Governança, Riscos e Conformidade)**[cite: 8, 12]:

### 1. Hardening com `.htaccess`
Implementação de um firewall a nível de servidor para proteção contra ataques comuns[cite: 11]:
*   **Content Security Policy (CSP)**: Regras estritas que permitem apenas scripts confiáveis (Hotjar, Google Analytics, Formcarry)[cite: 11].
*   **Proteção de Cabeçalho**: Remoção de assinaturas de servidor (`X-Powered-By`) e prevenção de Sniffing de conteúdo[cite: 11].

### 2. Privacidade por Design (LGPD)
Conformidade total com a LGPD através do **Google Consent Mode v2**[cite: 12]:
*   O rastreio (GA4/Hotjar) permanece **inativo por padrão**[cite: 12, 15].
*   Injeção dinâmica de scripts apenas após o aceite explícito no `CookieBanner`[cite: 12, 15].
*   O arquivo `index.html` prepara o `dataLayer` de forma segura, garantindo que nenhum dado escape antes da hora[cite: 12].

### 3. Proteção de Dados Sensíveis
Utilização de um sistema de variáveis de ambiente (`.env.local`) para proteger[cite: 8]:
*   Contatos pessoais (WhatsApp).
*   IDs de rastreio analítico.
*   Links de protótipos no Figma sob NDA.

---

## 🛠️ Tecnologias & Performance

*   **React 18 + Vite**: Frontend ultrarrápido com suporte a ESNext[cite: 14, 16].
*   **Concurrently**: Workflow que orquestra o Frontend e a API de e-mail em um único comando[cite: 14].
*   **Static Analysis**: Configurações de `.hintrc` e `.eslintrc` para garantir qualidade de código constante[cite: 10, 14].

---

## 📦 Como Inicializar

1.  **Instale as dependências:**
    ```bash
    npm install
    ```

2.  **Configure o Ambiente:**
    Crie o arquivo `.env.local` na raiz do projeto seguindo o modelo de segurança (nunca faça commit deste arquivo)[cite: 8, 9].

3.  **Rode o ecossistema completo:**
    ```bash
    npm run dev
    ```
    *Este comando iniciará o Vite e o servidor de API simultaneamente*[cite: 14].

---
Design, Código e Segurança por **Fernando Pinhel** · 2026
```