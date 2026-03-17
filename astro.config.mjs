import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

const repo = process.env.GITHUB_REPOSITORY?.split("/")[1];
const defaultBase = "/portfolio";

export default defineConfig({
  // Use Pages URL in CI, fallback to your profile domain for local builds.
  site: process.env.GITHUB_PAGES_URL || "https://CarlosAbrahamMR.github.io",
  // Auto-detect repository name on GitHub Actions to avoid base path mismatches.
  base: process.env.GITHUB_ACTIONS && repo ? `/${repo}` : defaultBase,
  vite: {
    plugins: [tailwindcss()]
  }
});
