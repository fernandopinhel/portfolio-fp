import { useEffect, useRef } from "react";

const SCRIPT_SRC = "https://vlibras.gov.br/app/vlibras-plugin.js";

/**
 * VLibras — widget oficial do governo brasileiro (tradutor de Libras).
 * Carrega o script uma única vez (guarda contra o double-effect do
 * StrictMode em dev) e inicializa o ícone flutuante de acesso.
 *
 * Sem parâmetro de posição: testamos "BL" e "BR" e nenhum bateu com o
 * que a documentação sugere (o widget se posiciona sozinho, vertical-
 * mente centrado à direita, ignorando esse parâmetro) — e travar a
 * posição via CSS quebrou a animação de abrir o player do avatar.
 * Deixa 100% no comportamento padrão do widget.
 */
export default function VLibras() {
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

    const initWidget = () => {
      if (window.VLibras) new window.VLibras.Widget("https://vlibras.gov.br/app");
    };

    const existing = document.querySelector(`script[src="${SCRIPT_SRC}"]`);
    if (existing) {
      if (window.VLibras) initWidget();
      else existing.addEventListener("load", initWidget, { once: true });
      return;
    }

    const script = document.createElement("script");
    script.src = SCRIPT_SRC;
    script.async = true;
    script.addEventListener("load", initWidget, { once: true });
    document.body.appendChild(script);
  }, []);

  return (
    <div vw="" className="enabled">
      <div vw-access-button="" className="active" />
      <div vw-plugin-wrapper="">
        <div className="vw-plugin-top-wrapper" />
      </div>
    </div>
  );
}
