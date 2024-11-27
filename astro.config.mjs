// @ts-check
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";
import vue from "@astrojs/vue";
import robotsTxt from "astro-robots-txt";
import icon from "astro-icon";
import mdx from "@astrojs/mdx";
import devtoolBreakpoints from "astro-devtool-breakpoints";
import paraglide from "@inlang/paraglide-astro";
import compressor from "astro-compressor";
import purgecss from "astro-purgecss";

// https://astro.build/config
export default defineConfig({
  site: "https://leo-bourbon.github.io",
  i18n: {
    locales: ["fr", "en"],
    defaultLocale: "en",
  },
  integrations: [
    tailwind(),
    vue(),
    robotsTxt(),
    icon(),
    mdx(),
    devtoolBreakpoints(),
    paraglide({
      // recommended settings
      project: "./project.inlang",
      outdir: "./src/paraglide", //where your files should be
    }),
    compressor(),
    purgecss({
      extractors: [
        {
          extractor: (content) =>
            content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || [],
          extensions: ['astro', 'html']
        }
      ]
    }),
  ],
  experimental: {
    contentIntellisense: true,
  },
});
