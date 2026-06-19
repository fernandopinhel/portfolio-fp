import { Component } from "react";

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, info) {
    console.error("[ErrorBoundary]", error, info.componentStack);
  }

  render() {
    if (!this.state.hasError) return this.props.children;

    return (
      <div style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 24,
        padding: "40px 24px",
        background: "var(--bg)",
        color: "var(--fg)",
        fontFamily: "var(--font-mono)",
        textAlign: "center",
      }}>
        <div style={{
          width: 56, height: 56, borderRadius: "50%",
          border: "1px solid rgba(255,80,80,.3)",
          background: "rgba(255,80,80,.06)",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 24,
        }}>
          ✕
        </div>

        <div>
          <h1 style={{
            fontFamily: "var(--font-display)", fontWeight: 700,
            fontSize: 24, letterSpacing: "-.02em", marginBottom: 12,
          }}>
            Algo deu errado
          </h1>
          <p style={{ fontSize: 13, color: "var(--dim)", lineHeight: 1.8, maxWidth: 400 }}>
            Ocorreu um erro inesperado. Tente recarregar a página.
          </p>
        </div>

        <button
          type="button"
          onClick={() => window.location.assign("/")}
          style={{
            background: "var(--ac)", color: "#070707",
            border: "none", borderRadius: 100,
            padding: "14px 28px", cursor: "pointer",
            fontFamily: "var(--font-mono)", fontSize: 12,
            fontWeight: 500, letterSpacing: ".06em",
          }}
        >
          Voltar ao início
        </button>
      </div>
    );
  }
}
