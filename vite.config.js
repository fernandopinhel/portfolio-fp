import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath, URL } from "node:url";

export default defineConfig({
  plugins: [react()],

  resolve: {
    alias: {
      "@":           fileURLToPath(new URL("./src", import.meta.url)),
      "@components": fileURLToPath(new URL("./src/components", import.meta.url)),
      "@pages":      fileURLToPath(new URL("./src/pages", import.meta.url)),
      "@hooks":      fileURLToPath(new URL("./src/hooks", import.meta.url)),
      "@data":       fileURLToPath(new URL("./src/data", import.meta.url)),
      "@styles":     fileURLToPath(new URL("./src/styles", import.meta.url)),
    },
  },

  build: {
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: { vendor: ["react", "react-dom"] },
      },
    },
  },

  server: {
    port: 5173,
    open: true,

    // Proxy /api/* → backend Node.js em desenvolvimento.
    // IMPORTANTE: secure: false — o backend local usa HTTP (sem certificado).
    // Em produção, o Apache faz o proxy via ProxyPass no .htaccess.
    proxy: {
      "/api": {
        target:       "http://localhost:3001",
        changeOrigin: true,
        secure:       false,   // ← false obrigatório para HTTP local
      },
    },
  },
});