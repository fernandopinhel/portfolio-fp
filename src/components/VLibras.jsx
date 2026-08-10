import { useEffect, useRef } from "react";

const SCRIPT_SRC = "https://vlibras.gov.br/app/vlibras-plugin.js";

/**
 * VLibras — widget oficial do governo brasileiro (tradutor de Libras).
 * Carrega o script uma única vez (guarda contra o double-effect do
 * StrictMode em dev) e inicializa o ícone flutuante de acesso.
 *
 * position: "BL" (bottom-left) — o padrão do widget é "BR" (bottom-right),
 * que sobrepõe o widget de pesquisa/feedback do Hotjar, ancorado à direita.
 */
export default function VLibras() {
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

    const initWidget = () => {
      if (window.VLibras) new window.VLibras.Widget("https://vlibras.gov.br/app", { position: "BL" });
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
