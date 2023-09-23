import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import react from "@astrojs/react";
import node from "@astrojs/node";
import astroI18next from "astro-i18next";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://example.com',
  integrations: [mdx(), sitemap(), react(), tailwind(), astroI18next()],
  output: "server",
  adapter: node({
    mode: "standalone"
  })
});