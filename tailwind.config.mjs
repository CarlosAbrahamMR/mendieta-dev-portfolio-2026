import tailwindAnimations from "@midudev/tailwind-animations";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte}"],
  theme: {
    extend: {
      colors: {
        night: "#090F22",
        ink: "#DCE6FF",
        mint: "#5BE7C4",
        sun: "#FFD86B",
        stroke: "#2A3A78"
      }
    }
  },
  plugins: [tailwindAnimations]
};
