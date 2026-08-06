/**
 * color.js — utilitário de acessibilidade de cor para o tema claro.
 *
 * Cada case tem uma cor de destaque própria (p.accent) usada como texto,
 * borda e fundo decorativo. Muitas dessas cores (ex: o lima #C8FF00) têm
 * ótimo contraste sobre fundo escuro, mas ficam quase invisíveis sobre
 * fundo claro. accessibleAccent() escurece a cor (mantendo matiz/saturação
 * via HSL) até atingir contraste mínimo AA (4.5:1) contra branco — só no
 * tema claro; no tema escuro a cor original é retornada sem alteração.
 */

function hexToRgb(hex) {
  const h = hex.replace("#", "");
  const full = h.length === 3 ? h.split("").map(c => c + c).join("") : h;
  const num = parseInt(full, 16);
  return { r: (num >> 16) & 255, g: (num >> 8) & 255, b: num & 255 };
}

function rgbToHex({ r, g, b }) {
  return "#" + [r, g, b]
    .map(v => Math.round(Math.min(255, Math.max(0, v))).toString(16).padStart(2, "0"))
    .join("");
}

function rgbToHsl({ r, g, b }) {
  r /= 255; g /= 255; b /= 255;
  const max = Math.max(r, g, b), min = Math.min(r, g, b);
  let h, s;
  const l = (max + min) / 2;
  if (max === min) {
    h = s = 0;
  } else {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r: h = (g - b) / d + (g < b ? 6 : 0); break;
      case g: h = (b - r) / d + 2; break;
      default: h = (r - g) / d + 4;
    }
    h /= 6;
  }
  return { h, s, l };
}

function hslToRgb({ h, s, l }) {
  let r, g, b;
  if (s === 0) {
    r = g = b = l;
  } else {
    const hue2rgb = (p, q, t) => {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1 / 6) return p + (q - p) * 6 * t;
      if (t < 1 / 2) return q;
      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
      return p;
    };
    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;
    r = hue2rgb(p, q, h + 1 / 3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1 / 3);
  }
  return { r: r * 255, g: g * 255, b: b * 255 };
}

function relativeLuminance({ r, g, b }) {
  const [rs, gs, bs] = [r, g, b].map(v => {
    v /= 255;
    return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
}

function contrastRatio(rgb1, rgb2) {
  const l1 = relativeLuminance(rgb1);
  const l2 = relativeLuminance(rgb2);
  const [lighter, darker] = l1 > l2 ? [l1, l2] : [l2, l1];
  return (lighter + 0.05) / (darker + 0.05);
}

const WHITE = { r: 255, g: 255, b: 255 };

/**
 * @param {string} hex - cor de destaque original (ex: "#C8FF00")
 * @param {boolean} isLight - true quando o tema ativo é o claro
 * @param {number} target - contraste mínimo desejado (WCAG AA = 4.5)
 * @returns {string} hex original (tema escuro) ou escurecido (tema claro)
 */
export function accessibleAccent(hex, isLight, target = 4.5) {
  if (!hex || !isLight) return hex;
  const rgb = hexToRgb(hex);
  if (contrastRatio(rgb, WHITE) >= target) return hex;

  const hsl = rgbToHsl(rgb);
  let lo = 0, hi = hsl.l;
  for (let i = 0; i < 24; i++) {
    const mid = (lo + hi) / 2;
    const c = contrastRatio(hslToRgb({ ...hsl, l: mid }), WHITE);
    if (c >= target) lo = mid; else hi = mid;
  }
  return rgbToHex(hslToRgb({ ...hsl, l: lo }));
}
