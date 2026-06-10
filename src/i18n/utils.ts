import { ui, defaultLang, type Lang, type UIKey } from './ui';

export function getLangFromUrl(url: URL): Lang {
  const [, first] = url.pathname.split('/');
  if (first === 'es') return 'es';
  return defaultLang;
}

export function useTranslations(lang: Lang) {
  return function t(key: UIKey): string {
    return ui[lang][key];
  };
}

/** Prefix a root-relative path for the given locale. */
export function localizePath(path: string, lang: Lang): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  return lang === defaultLang ? clean : `/es${clean === '/' ? '' : clean}`;
}

/**
 * The same page in the other locale. Used by the language toggle;
 * pages with non-mirrored slugs (blog posts) pass an explicit override.
 */
export function alternatePath(pathname: string, lang: Lang): string {
  if (lang === 'es') {
    const stripped = pathname.replace(/^\/es(\/|$)/, '/');
    return stripped === '' ? '/' : stripped;
  }
  return pathname === '/' ? '/es/' : `/es${pathname}`;
}

export function otherLang(lang: Lang): Lang {
  return lang === 'en' ? 'es' : 'en';
}
