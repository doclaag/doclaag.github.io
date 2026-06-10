import { author, socials } from '../data/site';

export function personJsonLd(): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: author.name,
    url: 'https://doclaag.me',
    email: `mailto:${author.email}`,
    jobTitle: 'Full Stack Developer',
    address: { '@type': 'PostalAddress', addressCountry: 'GT' },
    sameAs: socials.map((s) => s.url),
  };
}

export function blogPostingJsonLd(input: {
  title: string;
  description: string;
  pubDate: Date;
  url: string;
  lang: string;
}): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: input.title,
    description: input.description,
    datePublished: input.pubDate.toISOString(),
    inLanguage: input.lang,
    url: input.url,
    author: {
      '@type': 'Person',
      name: author.name,
      url: 'https://doclaag.me',
    },
  };
}
