import { useState, useEffect, useCallback } from "react";

const STORAGE_KEY = "fp-theme";

function getInitialTheme() {
  if (typeof window === "undefined") return "light";
  const saved = window.localStorage.getItem(STORAGE_KEY);
  if (saved === "light" || saved === "dark") return saved;
  // Sem preferência salva: light é o padrão do site
  return "light";
}

/**
 * useTheme
 * Gerencia o tema claro/escuro: aplica data-theme no <html> (para o CSS
 * em cascata via [data-theme="light"]) e persiste a escolha do usuário.
 * @returns {{ theme: "dark"|"light", toggleTheme: () => void }}
 */
export function useTheme() {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    window.localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme(t => (t === "dark" ? "light" : "dark"));
  }, []);

  return { theme, toggleTheme };
}
