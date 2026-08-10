import { useState, useEffect } from "react";

const STORAGE_KEY = "fp-a11y";

export const A11Y_DEFAULTS = {
  fontScale: 0, // -1 | 0 | 1 | 2
  highContrast: false,
  dyslexiaFont: false,
  underlineLinks: false,
  reduceMotion: false,
  readingGuide: false,
};

const FONT_SCALE_ATTR = { "-1": "down", "1": "up", "2": "up2" };

function loadSettings() {
  if (typeof window === "undefined") return A11Y_DEFAULTS;
  try {
    const saved = JSON.parse(window.localStorage.getItem(STORAGE_KEY));
    return saved ? { ...A11Y_DEFAULTS, ...saved } : A11Y_DEFAULTS;
  } catch {
    return A11Y_DEFAULTS;
  }
}

/**
 * useA11ySettings
 * Menu de acessibilidade nativo (sem widget de terceiro): tamanho de
 * fonte, alto contraste, fonte para leitura facilitada, sublinhar
 * links, reduzir animações e guia de leitura. Aplica atributos
 * data-* em #fp-portfolio (não em <html>, pra não afetar UI injetada
 * por terceiros como o VLibras) e persiste em localStorage.
 */
export function useA11ySettings() {
  const [settings, setSettings] = useState(loadSettings);

  useEffect(() => {
    const root = document.getElementById("fp-portfolio");
    if (root) {
      const scaleAttr = FONT_SCALE_ATTR[String(settings.fontScale)];
      if (scaleAttr) root.setAttribute("data-font-scale", scaleAttr);
      else root.removeAttribute("data-font-scale");

      if (settings.highContrast) root.setAttribute("data-contrast", "high");
      else root.removeAttribute("data-contrast");

      if (settings.dyslexiaFont) root.setAttribute("data-dyslexia", "true");
      else root.removeAttribute("data-dyslexia");

      if (settings.underlineLinks) root.setAttribute("data-underline-links", "true");
      else root.removeAttribute("data-underline-links");

      if (settings.reduceMotion) root.setAttribute("data-reduce-motion", "true");
      else root.removeAttribute("data-reduce-motion");
    }
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
  }, [settings]);

  const patch = (p) => setSettings(s => ({ ...s, ...p }));
  const reset = () => setSettings(A11Y_DEFAULTS);

  return { settings, patch, reset };
}
