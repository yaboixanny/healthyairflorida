import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  output: 'static',
  integrations: [
    react(),
    sitemap(),
  ],
  redirects: {
    '/hollywood/ac-repair': '/fort-lauderdale/hollywood/ac-repair',
    '/kendall/ac-repair': '/fort-lauderdale/kendall/ac-repair',
    '/pembroke-pines/ac-repair': '/fort-lauderdale/pembroke-pines/ac-repair',
    '/boca-raton/ac-repair': '/fort-lauderdale/boca-raton/ac-repair',
    '/coral-springs/ac-repair': '/fort-lauderdale/coral-springs/ac-repair',
    '/davie/ac-repair': '/fort-lauderdale/davie/ac-repair',
  },
  // Site URL is set per-client via env or build arg
  site: process.env.SITE_URL || 'https://example.com',
});