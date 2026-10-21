import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: "https://abura.site",
  // Keep Astro 6 HTML whitespace so inline text does not collapse after the v7 default.
  compressHTML: true,
  integrations: [
    sitemap({
      // Advertise the latest deployment date as lastmod for every URL,
      // reinforcing content freshness for search / answer engines (AEO).
      serialize(item) {
        item.lastmod = new Date().toISOString();
        return item;
      },
    }),
    mdx()
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  server: {
    host: true,
    port: 4321
  }
});
