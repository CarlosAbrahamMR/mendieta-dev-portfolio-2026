import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https:///CarlosAbrahamMR.github.io",
  base: "/portfolio",
  vite: {
    plugins: [tailwindcss()]
  }
});
