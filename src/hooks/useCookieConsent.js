/**
 * useCookieConsent.js
 *
 * Hook de gerenciamento de consentimento LGPD.
 * Controla a inicialização de Hotjar, GA4 e Google Tag Manager
 * — todos só carregam APÓS aceite explícito do usuário.
 *
 * Fluxo GTM (Consent Mode v2):
 *   1. index.html cria o dataLayer vazio e envia consent_default (tudo negado)
 *   2. Este hook lê o localStorage ao montar o componente
 *   3. Se já há consentimento salvo → chama window.initGTM() imediatamente
 *   4. Se o usuário aceita agora → chama window.initGTM()
 *   5. Se o usuário recusa → chama window.denyGTM() (GTM nunca carrega)
 *
 * Fix Hotjar (maio/2026):
 *   A flag _hjInitialized era verificada antes de window.hj existir,
 *   causando falha silenciosa na primeira carga após aceite de cookies.
 *   Agora a verificação usa window.hj diretamente — se já existe, Hotjar
 *   já está rodando; se não existe, injeta o script normalmente.
 */

import { useState, useEffect, useCallback } from 'react';

const CONSENT_KEY = 'fp_cookie_consent';

// ─── Helpers de inicialização ─────────────────────────────────────────────────

/**
 * Inicializa o Hotjar via script dinâmico.
 *
 * Fix: usa window.hj como flag de "já inicializado" em vez de
 * window._hjInitialized, que era setado antes de window.hj existir
 * e bloqueava re-inicializações legítimas (ex: após aceite de cookie).
 */
function initHotjar(hjid) {
  if (!hjid) return;
  // Se window.hj já existe, o script já carregou — não reinjetar
  if (typeof window.hj === 'function') return;

  (function(h, o, t, j, a, r) {
    h.hj = h.hj || function() { (h.hj.q = h.hj.q || []).push(arguments); };
    h._hjSettings = { hjid: Number(hjid), hjsv: 6 };
    a = o.getElementsByTagName('head')[0];
    r = o.createElement('script');
    r.async = 1;
    r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
    r.onerror = () => console.warn('[Hotjar] Falha ao carregar o script.');
    a.appendChild(r);
  })(window, document, 'https://static.hotjar.com/c/hotjar-', '.js?sv=');
}

/**
 * Inicializa o GA4 via script dinâmico (gtag.js direto).
 * Mantido como camada adicional fora do GTM para redundância.
 * Se você migrar tudo para GTM, pode remover esta função.
 */
function initGA4(measurementId) {
  if (!measurementId) return;
  // Se gtag já está configurado para este ID, não reinjetar
  if (window._ga4Initialized) return;
  window._ga4Initialized = true;

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  script.onerror = () => console.warn('[GA4] Falha ao carregar o script.');
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  function gtag() { window.dataLayer.push(arguments); }
  window.gtag = window.gtag || gtag;
  window.gtag('js', new Date());
  window.gtag('config', measurementId, { anonymize_ip: true });
}

/**
 * Inicializa o Google Tag Manager.
 * Delega para window.initGTM() definido em index.html,
 * que garante Consent Mode v2 e injeção dinâmica do script.
 */
function initGTM() {
  if (typeof window.initGTM === 'function') {
    window.initGTM();
  }
}

/**
 * Registra a recusa de consentimento no GTM (Consent Mode v2).
 */
function denyGTM() {
  if (typeof window.denyGTM === 'function') {
    window.denyGTM();
  }
}

// ─── Hook principal ───────────────────────────────────────────────────────────

export function useCookieConsent() {
  // null = não decidido | true = aceito | false = recusado
  const [consent, setConsent] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem(CONSENT_KEY);

    if (saved === 'accepted') {
      setConsent(true);
      _activateAnalytics();
    } else if (saved === 'denied') {
      setConsent(false);
      denyGTM();
    }
    // Se null → banner será exibido
  }, []);

  /** Ativa todos os serviços de analytics após consentimento */
  function _activateAnalytics() {
    initGTM();
    initHotjar(import.meta.env.VITE_HOTJAR_ID);
    initGA4(import.meta.env.VITE_GA_MEASUREMENT_ID);
  }

  const accept = useCallback(() => {
    localStorage.setItem(CONSENT_KEY, 'accepted');
    setConsent(true);
    _activateAnalytics();
  }, []);

  const deny = useCallback(() => {
    localStorage.setItem(CONSENT_KEY, 'denied');
    setConsent(false);
    denyGTM();
  }, []);

  const reset = useCallback(() => {
    localStorage.removeItem(CONSENT_KEY);
    setConsent(null);
  }, []);

  return {
    consent,                    // null | true | false
    acceptCookies: accept,
    declineCookies: deny,
    resetConsent: reset,
    showBanner: consent === null,
  };
}

export default useCookieConsent;