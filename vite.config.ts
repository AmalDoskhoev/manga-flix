import react from "@vitejs/plugin-react";
import path from "path";
import svgr from "vite-plugin-svgr";
import { defineConfig } from "vitest/config";

export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "ui-kit": path.resolve(__dirname, "./src/shared/ui-kit"),
    },
  },
  plugins: [react(), svgr()],
});
