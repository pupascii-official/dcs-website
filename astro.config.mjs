// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig, fontProviders } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import react from '@astrojs/react';

import svelte from '@astrojs/svelte';

import JavaScriptObfuscator from 'javascript-obfuscator';

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
        plugins: [
            {
                name: "obfuscate-pdf-decoder",
                apply: "build",
                enforce: "post",
                generateBundle(_options, bundle) {
                    for (const item of Object.values(bundle)) {
                        if (item.type !== "chunk") continue;

                        const isPdfDecoderChunk = item.moduleIds.some((id) => {
                            const lower = id.toLowerCase();
                            return (
                                lower.includes("pdfmodal.astro") ||
                                lower.includes("pdfconfig")
                            );
                        });

                        if (!isPdfDecoderChunk) continue;

                        const obfuscated = JavaScriptObfuscator.obfuscate(
                            item.code,
                            {
                                compact: true,
                                controlFlowFlattening: true,
                                controlFlowFlatteningThreshold: 0.75,
                                deadCodeInjection: true,
                                deadCodeInjectionThreshold: 0.4,
                                ignoreImports: true,
                                numbersToExpressions: true,
                                splitStrings: true,
                                splitStringsChunkLength: 5,
                                stringArray: true,
                                stringArrayEncoding: ["base64"],
                                stringArrayRotate: true,
                                stringArrayShuffle: true,
                                stringArrayThreshold: 1,
                            }
                        );

                        item.code = obfuscated.getObfuscatedCode();
                    }
                },
            },
            tailwindcss()
        ],
    },
});