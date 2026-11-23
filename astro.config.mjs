// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig, fontProviders } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import react from '@astrojs/react';

import svelte from '@astrojs/svelte';

// https://astro.build/config
export default defineConfig({
    site: 'https://example.com',
    integrations: [mdx(), sitemap(), react({ compiler: true }), svelte()],
    fonts: [
        {
            provider: fontProviders.google(),
            name: 'Montserrat',
            cssVariable: '--font-montserrat',
            weights: [400, 500, 600, 700, 800],
        },
        {
            provider: fontProviders.google(),
            name: 'Inter',
            cssVariable: '--font-inter',
            weights: [400, 500, 600, 700],
        },
    ],
    vite: {
      plugins: [tailwindcss()],
    },
});
