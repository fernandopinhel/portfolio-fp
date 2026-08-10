import { useEffect, useRef } from "react";

const SCRIPT_SRC = "https://vlibras.gov.br/app/vlibras-plugin.js";

/**
 * VLibras — widget oficial do governo brasileiro (tradutor de Libras).
 * Carrega o script uma única vez (guarda contra o double-effect do
 * StrictMode em dev) e inicializa o ícone flutuante de acesso.
 *
 * position: "BR" (bottom-right, padrão) — testamos "BL" (esquerda) pra
 * fugir do widget de feedback do Hotjar, mas a animação de expandir e o
 * player do avatar assumem espaço à esquerda e ficam cortados nesse lado.
 * Mantido à direita; o CSS (global.css) empurra bem pro canto pra não
 * encostar no Hotjar, que fica mais alto na tela.
 */
export default function VLibras() {
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

    const initWidget = () => {
      if (window.VLibras) new window.VLibras.Widget("https://vlibras.gov.br/app", { position: "BR" });
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
