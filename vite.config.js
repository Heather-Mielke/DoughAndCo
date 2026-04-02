import path from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  root: ".",
  server: {
    port: 5173,
    open: true,
  },
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, "index.html"),
        menu: path.resolve(__dirname, "menu.html"),
        privacy: path.resolve(__dirname, "privacy-policy.html"),
        terms: path.resolve(__dirname, "terms-of-use.html"),
      },
    },
  },
});
