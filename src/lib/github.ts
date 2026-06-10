import fallback from '../data/projects-fallback.json';
import { curatedProjects, type CuratedProject } from '../data/projects';

const USERNAME = 'doclaag';
const API = 'https://api.github.com';

export interface RepoMeta {
  name: string;
  description: string | null;
  htmlUrl: string;
  homepage: string | null;
  language: string | null;
  topics: string[];
  stars: number;
  forks: number;
  pushedAt: string | null;
}

export interface GitHubData {
  user: {
    login: string;
    publicRepos: number;
    followers: number | null;
  };
  repos: RepoMeta[];
  fromFallback: boolean;
}

export interface RepoLink {
  name: string;
  url: string;
}

export interface EnrichedProject extends CuratedProject {
  links: RepoLink[];
  language: string | null;
  /** Most recent push across the project's repos. */
  pushedAt: string | null;
}

function headers(): HeadersInit {
  const h: Record<string, string> = {
    Accept: 'application/vnd.github+json',
    'User-Agent': 'doclaag.me-build',
  };
  const token = import.meta.env.GITHUB_TOKEN ?? process.env.GITHUB_TOKEN;
  if (token) h.Authorization = `Bearer ${token}`;
  return h;
}

async function fetchLive(): Promise<GitHubData> {
  const [userRes, reposRes] = await Promise.all([
    fetch(`${API}/users/${USERNAME}`, { headers: headers() }),
    fetch(`${API}/users/${USERNAME}/repos?per_page=100&type=owner&sort=pushed`, {
      headers: headers(),
    }),
  ]);
  if (!userRes.ok || !reposRes.ok) {
    throw new Error(`GitHub API responded ${userRes.status}/${reposRes.status}`);
  }
  const user = (await userRes.json()) as { public_repos: number; followers: number };
  const raw = (await reposRes.json()) as Array<Record<string, unknown>>;
  const repos: RepoMeta[] = raw
    .filter((r) => !r.fork && !r.archived)
    .map((r) => ({
      name: r.name as string,
      description: (r.description as string | null) ?? null,
      htmlUrl: r.html_url as string,
      homepage: (r.homepage as string | null) || null,
      language: (r.language as string | null) ?? null,
      topics: (r.topics as string[] | undefined) ?? [],
      stars: (r.stargazers_count as number) ?? 0,
      forks: (r.forks_count as number) ?? 0,
      pushedAt: (r.pushed_at as string | null) ?? null,
    }));
  return {
    user: { login: USERNAME, publicRepos: user.public_repos, followers: user.followers },
    repos,
    fromFallback: false,
  };
}

let cached: Promise<GitHubData> | null = null;

/** Build-time GitHub data, shared across all pages via a module-level memo. */
export function getGitHubData(): Promise<GitHubData> {
  cached ??= fetchLive().catch((err) => {
    console.warn(
      `[github] Live fetch failed (${err instanceof Error ? err.message : err}); using committed fallback snapshot.`,
    );
    return {
      user: {
        login: fallback.user.login,
        publicRepos: fallback.user.publicRepos,
        followers: fallback.user.followers,
      },
      repos: fallback.repos as RepoMeta[],
      fromFallback: true,
    };
  });
  return cached;
}

/** Curated projects merged with live (or fallback) repo metadata. */
export async function getFeaturedProjects(): Promise<EnrichedProject[]> {
  const { repos } = await getGitHubData();
  const byName = new Map(repos.map((r) => [r.name.toLowerCase(), r]));
  return curatedProjects.map((project) => {
    const metas = project.repos
      .map((name) => byName.get(name.toLowerCase()))
      .filter((m): m is RepoMeta => Boolean(m));
    const pushedAt =
      metas
        .map((m) => m.pushedAt)
        .filter((d): d is string => Boolean(d))
        .sort()
        .at(-1) ?? null;
    return {
      ...project,
      links: project.repos.map((name) => ({
        name,
        url: byName.get(name.toLowerCase())?.htmlUrl ?? `https://github.com/${USERNAME}/${name}`,
      })),
      language: metas[0]?.language ?? null,
      pushedAt,
    };
  });
}

export interface LanguageStat {
  language: string;
  count: number;
  percent: number;
}

/** Top languages across non-fork repos, as percentages of classified repos. */
export async function getLanguageStats(limit = 5): Promise<LanguageStat[]> {
  const { repos } = await getGitHubData();
  const counts = new Map<string, number>();
  for (const repo of repos) {
    if (repo.language) counts.set(repo.language, (counts.get(repo.language) ?? 0) + 1);
  }
  const total = [...counts.values()].reduce((a, b) => a + b, 0);
  return [...counts.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, limit)
    .map(([language, count]) => ({
      language,
      count,
      percent: Math.round((count / total) * 100),
    }));
}
