// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

import vue from "@astrojs/vue";

import robotsTxt from "astro-robots-txt";

import icon from "astro-icon";

import mdx from "@astrojs/mdx";

import devtoolBreakpoints from "astro-devtool-breakpoints";

// https://astro.build/config
export default defineConfig({
  site: "https://leo-bourbon.github.io",
  integrations: [
    tailwind(),
    vue(),
    robotsTxt(),
    icon(),
    mdx(),
    devtoolBreakpoints(),
  ],
});