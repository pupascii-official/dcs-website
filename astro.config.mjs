import { defineConfig, fontProviders } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";
import svelte from "@astrojs/svelte";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
    site: 'https://example.com',
    integrations: [mdx(), sitemap(), react({ compiler: true }), svelte()],
    fonts: [
        {
            provider: fontProviders.google(),
            name: 'Montserrat',
            cssVariable: '--font-montserrat',
            weights: [400, 600, 800],
        },
        {
            provider: fontProviders.google(),
            name: 'Inter',
            cssVariable: '--font-inter',
            weights: [400, 600],
        },
    ],
    vite: {
      plugins: [tailwindcss()],
    },
});