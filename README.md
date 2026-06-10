# doclaag.me

Personal portfolio and blog of **Luis Alonzo** — bilingual (EN at `/`, ES at `/es/`), built with [Astro 6](https://astro.build) and Tailwind CSS v4, deployed to GitHub Pages at [doclaag.me](https://doclaag.me).

## Stack

- **Astro 6** (static output, strict TypeScript) with built-in i18n routing and the Fonts API
- **Tailwind CSS v4** via `@tailwindcss/vite` — CSS-first config, no `tailwind.config`
- **MDX** content collections for the blog (2 locales, paired by `translationKey`), RSS per locale
- **GitHub API at build time** for the Projects/Stats sections, with a committed fallback snapshot (`src/data/projects-fallback.json`) so builds never break
- ~0.7 KB client JS total: theme toggle + IntersectionObserver reveal; page transitions are pure-CSS cross-document view transitions

## Develop

```bash
pnpm install
pnpm dev       # http://localhost:4321
pnpm build     # output in dist/
pnpm preview
```

Optional: set `GITHUB_TOKEN` to raise the GitHub API rate limit for the build-time fetch.

## Deploy

Pushes to `main` trigger `.github/workflows/deploy.yml` (withastro/action → GitHub Pages). A weekly cron rebuild keeps the GitHub-sourced project data fresh. Repo Settings → Pages → Source must be set to **GitHub Actions**.

## Content

- Blog posts: `src/content/blog/{en,es}/*.mdx`
- Featured projects (curated, bilingual): `src/data/projects.ts`
- Experience / certifications (placeholder-flagged sample data): `src/content/{experience,certifications}/`
- UI strings: `src/i18n/ui.ts` — a missing Spanish key is a compile error
