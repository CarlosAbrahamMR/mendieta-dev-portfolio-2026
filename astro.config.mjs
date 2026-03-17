import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://TU-USUARIO.github.io",
  base: "/portfolio",
  vite: {
    plugins: [tailwindcss()]
  }
});
