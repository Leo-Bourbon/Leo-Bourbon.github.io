/** @type {import('tailwindcss').Config} */
import typography from "@tailwindcss/typography";
import animate from "tailwindcss-animate";
import daisyui from "daisyui";

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {},
  },
  plugins: [typography, animate, daisyui],
  daisyui: {
    themes: ["nord", "night"],
    darkTheme: "night",
  },
};
