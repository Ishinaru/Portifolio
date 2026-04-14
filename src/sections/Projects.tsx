'use client';

import { useEffect, useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { fetchGithubRepos, GithubRepo, GITHUB_USER } from '@/utils/github';
import ProjectCard from '@/components/ProjectCard';
import SkeletonCard from '@/components/SkeletonCard';

// Skeleton layout mirrors the real card layout (featured pattern: i % 3 === 0)
const SKELETON_PATTERN = [true, false, false, true, false, false];

export default function Projects() {
  const { t } = useLanguage();
  const [repos, setRepos] = useState<GithubRepo[]>([]);
  const [status, setStatus] = useState<'loading' | 'ready' | 'error'>('loading');

  useEffect(() => {
    fetchGithubRepos()
      .then((data) => {
        setRepos(data.slice(0, 6));
        setStatus('ready');
      })
      .catch(() => setStatus('error'));
  }, []);

  return (
    <section id="projects" className="py-32 bg-surface reveal-on-scroll">
      <div className="max-w-7xl mx-auto px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-xl">
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-primary mb-3">
              Open Source
            </p>
            <h2 className="font-headline text-4xl font-bold mb-4 text-white">{t.projects.title}</h2>
            <p className="text-on-surface-variant text-lg">{t.projects.subtitle}</p>
          </div>
          <a
            href={`https://github.com/${GITHUB_USER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-primary hover:text-white transition-colors"
          >
            {t.projects.viewAll}
            <span className="material-symbols-outlined text-sm transition-transform group-hover:rotate-45">
              north_east
            </span>
          </a>
        </div>

        {/* Decorative section divider */}
        <div className="flex items-center gap-4 mb-16">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          <div className="flex gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-primary/60" />
            <span className="w-1.5 h-1.5 rounded-full bg-secondary/60" />
            <span className="w-1.5 h-1.5 rounded-full bg-tertiary/60" />
          </div>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </div>

        {/* Loading skeletons */}
        {status === 'loading' && (
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {SKELETON_PATTERN.map((featured, i) => (
              <SkeletonCard key={i} featured={featured} />
            ))}
          </div>
        )}

        {/* Error state */}
        {status === 'error' && (
          <div className="flex flex-col items-center justify-center py-32 gap-4 text-on-surface-variant">
            <span className="material-symbols-outlined text-tertiary text-5xl">cloud_off</span>
            <p className="text-tertiary font-semibold">{t.projects.error}</p>
          </div>
        )}

        {/* Cards — staggered reveal */}
        {status === 'ready' && (
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {repos.map((repo, i) => (
              <ProjectCard key={repo.id} repo={repo} featured={i % 3 === 0} index={i} />
            ))}

            {/* Placeholder "next project" card */}
            <div className="md:col-span-12 group relative rounded-[2.5rem] h-[300px] border-2 border-dashed border-white/10 hover:border-primary/40 transition-all duration-500 flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              {/* Background decoration */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-5">
                <div className="w-64 h-64 rounded-full border-2 border-primary animate-float" />
                <div className="absolute w-48 h-48 rounded-full border border-secondary animate-float" style={{ animationDelay: '1s' }} />
              </div>
              <div className="text-center relative z-10 transition-transform duration-500 group-hover:scale-110">
                <div className="w-16 h-16 rounded-full bg-surface-variant flex items-center justify-center mb-4 mx-auto border border-white/5 group-hover:border-primary/30 group-hover:shadow-[0_0_30px_rgba(139,92,246,0.2)] transition-all duration-500">
                  <span className="material-symbols-outlined text-primary text-3xl">auto_awesome</span>
                </div>
                <p className="text-white font-headline font-bold text-xl">{t.projects.placeholderTitle}</p>
                <p className="text-on-surface-variant text-sm mt-1">{t.projects.placeholderSub}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
