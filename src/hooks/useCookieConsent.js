import { useState, useEffect } from "react";

/**
 * useCookieConsent
 *
 * Gerencia o consentimento de cookies do usuário (LGPD).
 * Persiste a decisão em localStorage para não exibir o banner novamente.
 *
 * Retorna:
 *   consent        → null (não decidiu) | "accepted" | "declined"
 *   acceptCookies  → função: aceita e inicializa Hotjar + GA4
 *   declineCookies → função: recusa e bloqueia / remove os scripts
 *   resetConsent   → função: limpa a decisão (útil para testes)
 */

const STORAGE_KEY = "fp_cookie_consent";

// ── Hotjar helpers ─────────────────────────────────────────────────────────
function initHotjar() {
  const hjId = import.meta.env.VITE_HOTJAR_ID;
  if (!hjId) return;
  if (window.hj) return; // já inicializado

  (function (h, o, t, j, a, r) {
    h.hj = h.hj || function () { (h.hj.q = h.hj.q || []).push(arguments); };
    h._hjSettings = { hjid: Number(hjId), hjsv: 6 };
    a = o.getElementsByTagName("head")[0];
    r = o.createElement("script"); r.async = 1;
    r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
    a.appendChild(r);
  })(window, document, "https://static.hotjar.com/c/hotjar-", ".js?sv=");
}

function removeHotjar() {
  // Remove o script do DOM e limpa cookies Hotjar
  document.querySelectorAll('script[src*="hotjar"]').forEach(s => s.remove());
  // Hotjar não tem API de opt-out oficial — apaga cookies
  document.cookie.split(";").forEach(c => {
    const name = c.trim().split("=")[0];
    if (name.startsWith("_hj")) {
      document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; domain=${location.hostname}`;
    }
  });
  delete window.hj;
  delete window._hjSettings;
}

// ── Google Analytics (GA4) helpers ────────────────────────────────────────
function initGA4() {
  const gaId = import.meta.env.VITE_GA_MEASUREMENT_ID;
  if (!gaId) return;
  if (document.querySelector(`script[src*="${gaId}"]`)) return; // já carregado

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  function gtag() { window.dataLayer.push(arguments); }
  window.gtag = gtag;
  gtag("js", new Date());
  gtag("config", gaId, { anonymize_ip: true });
}

function removeGA4() {
  const gaId = import.meta.env.VITE_GA_MEASUREMENT_ID;
  // Remove scripts do DOM
  document.querySelectorAll('script[src*="googletagmanager"], script[src*="google-analytics"]')
    .forEach(s => s.remove());
  // Apaga cookies GA
  document.cookie.split(";").forEach(c => {
    const name = c.trim().split("=")[0];
    if (name.startsWith("_ga") || name.startsWith("_gid") || name.startsWith("_gat")) {
      document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; domain=${location.hostname}`;
      // também tenta com ponto no domínio (cookie de subdomínio)
      document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; domain=.${location.hostname}`;
    }
  });
  // Desabilita via gtag se disponível
  if (gaId && window.gtag) {
    window.gtag("consent", "update", {
      analytics_storage: "denied",
      ad_storage: "denied",
    });
  }
  delete window.gtag;
  delete window.dataLayer;
}

// ── Hook ───────────────────────────────────────────────────────────────────
export function useCookieConsent() {
  const [consent, setConsent] = useState(() => {
    try {
      return localStorage.getItem(STORAGE_KEY) || null;
    } catch {
      return null;
    }
  });

  // Ao montar: só inicializa os scripts se já havia aceite salvo anteriormente.
  // NUNCA inicializa se consent for null (sem decisão) ou "declined".
  useEffect(() => {
    if (consent === "accepted") {
      initHotjar();
      initGA4();
    } else {
      // Garante que scripts não rodem mesmo se injetados externamente
      removeHotjar();
      removeGA4();
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const acceptCookies = () => {
    try { localStorage.setItem(STORAGE_KEY, "accepted"); } catch {}
    setConsent("accepted");
    initHotjar();
    initGA4();
  };

  const declineCookies = () => {
    try { localStorage.setItem(STORAGE_KEY, "declined"); } catch {}
    setConsent("declined");
    removeHotjar();
    removeGA4();
  };

  const resetConsent = () => {
    try { localStorage.removeItem(STORAGE_KEY); } catch {}
    setConsent(null);
    removeHotjar();
    removeGA4();
  };

  return { consent, acceptCookies, declineCookies, resetConsent };
}