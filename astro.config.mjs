// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { unified } from '@astrojs/markdown-remark';
import { remarkReadingTime } from './src/lib/remark-reading-time.mjs';

// https://astro.build/config
export default defineConfig({
  site: 'https://doclaag.me',
  i18n: {
    locales: ['en', 'es'],
    defaultLocale: 'en',
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [
    mdx(),
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en-US',
          es: 'es-GT',
        },
      },
    }),
  ],
  // Self-hosted latin subsets committed in src/assets/fonts — deterministic
  // builds with no network dependency on a fonts API.
  fonts: [
    {
      provider: fontProviders.local(),
      name: 'Inter',
      cssVariable: '--font-inter',
      options: {
        variants: [
        { weight: 400, style: 'normal', src: ['./src/assets/fonts/inter-400.woff2'] },
        { weight: 500, style: 'normal', src: ['./src/assets/fonts/inter-500.woff2'] },
        { weight: 600, style: 'normal', src: ['./src/assets/fonts/inter-600.woff2'] },
        { weight: 700, style: 'normal', src: ['./src/assets/fonts/inter-700.woff2'] },
        ],
      },
    },
    {
      provider: fontProviders.local(),
      name: 'Space Grotesk',
      cssVariable: '--font-space-grotesk',
      options: {
        variants: [
        { weight: 500, style: 'normal', src: ['./src/assets/fonts/space-grotesk-500.woff2'] },
        { weight: 600, style: 'normal', src: ['./src/assets/fonts/space-grotesk-600.woff2'] },
        { weight: 700, style: 'normal', src: ['./src/assets/fonts/space-grotesk-700.woff2'] },
        ],
      },
    },
    {
      provider: fontProviders.local(),
      name: 'JetBrains Mono',
      cssVariable: '--font-jetbrains-mono',
      options: {
        variants: [
        { weight: 400, style: 'normal', src: ['./src/assets/fonts/jetbrains-mono-400.woff2'] },
        { weight: 500, style: 'normal', src: ['./src/assets/fonts/jetbrains-mono-500.woff2'] },
        ],
      },
    },
  ],
  markdown: {
    processor: unified({ remarkPlugins: [remarkReadingTime] }),
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
