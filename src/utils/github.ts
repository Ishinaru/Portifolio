export interface GithubRepo {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  topics: string[];
  stargazers_count: number;
  forks_count: number;
  fork: boolean;
  archived: boolean;
  created_at: string;
  updated_at: string;
  pushed_at: string;
}

export interface LangStat {
  language: string;
  repos: number;    // how many repos use this as primary language
  bytes: number;    // total bytes across all repo /languages calls
}

const getHeaders = () => {
  const headers: Record<string, string> = { Accept: 'application/vnd.github+json' };
  // Supports both client-side and server-side env variables
  const token = process.env.NEXT_PUBLIC_GITHUB_TOKEN || process.env.GITHUB_TOKEN;
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }
  return headers;
};

/**
 * Fetches the real tech stack from GitHub: aggregates languages by repo count
 * and total bytes of code written, then returns them sorted by bytes desc.
 */
export async function fetchTechStack(user = GITHUB_USER): Promise<LangStat[]> {
  const res = await fetch(
    `https://api.github.com/users/${user}/repos?per_page=100&type=owner`,
    { headers: getHeaders() }
  );
  if (!res.ok) throw new Error(`GitHub API error: ${res.status}`);
  const repos: GithubRepo[] = await res.json();
  const ownRepos = repos.filter((r) => !r.fork && !r.archived);

  // Count repos per primary language
  const repoCounts: Record<string, number> = {};
  for (const repo of ownRepos) {
    if (repo.language) repoCounts[repo.language] = (repoCounts[repo.language] ?? 0) + 1;
  }

  // Fetch /languages bytes for each repo (cap at 25 calls)
  const bytesPerLang: Record<string, number> = {};
  await Promise.all(
    ownRepos.slice(0, 25).map(async (repo) => {
      try {
        const r = await fetch(
          `https://api.github.com/repos/${user}/${repo.name}/languages`,
          { headers: getHeaders() }
        );
        if (!r.ok) return;
        const map: Record<string, number> = await r.json();
        for (const [lang, bytes] of Object.entries(map)) {
          bytesPerLang[lang] = (bytesPerLang[lang] ?? 0) + bytes;
        }
      } catch { /* ignore */ }
    })
  );

  return Object.keys(repoCounts)
    .map((lang) => ({ language: lang, repos: repoCounts[lang], bytes: bytesPerLang[lang] ?? 0 }))
    .sort((a, b) => b.bytes - a.bytes || b.repos - a.repos);
}

export const GITHUB_USER = 'Ishinaru';

const PINNED_REPOS = [
  '240076-david-vinicius-pereira-lima',
  'ProjetoCalendarioAcademico',
  'restic18_java',
  'restic18_front_end',
  'Analisador__Lexico',
];

export async function fetchGithubRepos(user = GITHUB_USER): Promise<GithubRepo[]> {
  const res = await fetch(
    `https://api.github.com/users/${user}/repos?sort=updated&per_page=30`,
    { headers: getHeaders() }
  );
  if (!res.ok) throw new Error(`GitHub API error: ${res.status}`);
  const data: GithubRepo[] = await res.json();
  return data
    .filter((r) => !r.fork && !r.archived && PINNED_REPOS.includes(r.name))
    .sort((a, b) => b.stargazers_count - a.stargazers_count || +new Date(b.pushed_at) - +new Date(a.pushed_at));
}

export function formatRepoName(name: string): string {
  return name
    .replace(/[-_]/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase());
}
