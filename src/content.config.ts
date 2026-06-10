import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob, file } from 'astro/loaders';

const localized = z.object({ en: z.string(), es: z.string() });

const blog = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    lang: z.enum(['en', 'es']),
    /** Pairs the same post across locales for the language toggle + hreflang. */
    translationKey: z.string(),
    draft: z.boolean().default(false),
  }),
});

const experience = defineCollection({
  loader: file('./src/content/experience/experience.json'),
  schema: z.object({
    id: z.string(),
    role: localized,
    company: z.string(),
    start: z.string(),
    end: z.string().nullable(),
    summary: localized,
    tech: z.array(z.string()),
    placeholder: z.boolean().default(false),
  }),
});

const certifications = defineCollection({
  loader: file('./src/content/certifications/certifications.json'),
  schema: z.object({
    id: z.string(),
    name: localized,
    issuer: z.string(),
    year: z.number(),
    url: z.url().nullable(),
    placeholder: z.boolean().default(false),
  }),
});

export const collections = { blog, experience, certifications };
