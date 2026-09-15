import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://dublinelectrician.ie',
  integrations: [sitemap()],
  compressHTML: true,
  build: {
    inlineStylesheets: 'always',
  },
});
