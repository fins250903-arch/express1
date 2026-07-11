import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  site: "https://abura.site",
  integrations: [
    sitemap({
      // Advertise the latest deployment date as lastmod for every URL,
      // reinforcing content freshness for search / answer engines (AEO).
      serialize(item) {
        item.lastmod = new Date().toISOString();
        return item;
      },
    }),
    tailwind({
      applyBaseStyles: false, // Prevents Tailwind preflight from breaking the rich hand-crafted global.css styles
    }),
    mdx()
  ],
  server: {
    host: true,
    port: 4321
  }
});
