import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import * as path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@/assets/styles/_variables.scss";`, // ✅ SCSS 전역 변수 적용
      },
    },
  },
});
