import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  site: 'https://dublinelectrician.ie',
  integrations: [sitemap()],
  compressHTML: true,

  build: {
    inlineStylesheets: 'always',
  },

  adapter: cloudflare()
});