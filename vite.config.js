import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // Se for hospedar em GitHub Pages em sub-path, configure base:
  // base: "/nome-do-repo/",
});
