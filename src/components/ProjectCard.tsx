'use client';

import { useRef } from 'react';
import { GithubRepo, formatRepoName } from '@/utils/github';
import { useLanguage } from '@/contexts/LanguageContext';

interface Props {
  repo: GithubRepo;
  featured?: boolean;
  index?: number;
}

type Accent = 'primary' | 'secondary' | 'tertiary';

// Real language brand colors
const LANG_COLOR: Record<string, string> = {
  'C#': '#9B4F96',
  Java: '#E76F00',
  JavaScript: '#F7DF1E',
  TypeScript: '#3178C6',
  Python: '#3572A5',
  HTML: '#E34C26',
  CSS: '#563D7C',
  Go: '#00ADD8',
  Rust: '#DEA584',
  Kotlin: '#A97BFF',
  Swift: '#F05138',
  Ruby: '#CC342D',
  PHP: '#4F5D95',
};

const LANG_ACCENT: Record<string, Accent> = {
  'C#': 'primary',
  Java: 'secondary',
  JavaScript: 'tertiary',
  TypeScript: 'secondary',
  Python: 'tertiary',
  HTML: 'primary',
  CSS: 'secondary',
};

const ACCENT_CLASSES: Record<Accent, { bg: string; text: string; border: string; hover: string; grad: string; shadow: string }> = {
  primary: {
    bg: 'bg-primary/20',
    text: 'text-primary',
    border: 'border-primary/20',
    hover: 'hover:text-primary',
    grad: 'from-primary/20',
    shadow: 'rgba(139,92,246,0.4)',
  },
  secondary: {
    bg: 'bg-secondary/20',
    text: 'text-secondary',
    border: 'border-secondary/20',
    hover: 'hover:text-secondary',
    grad: 'from-secondary/20',
    shadow: 'rgba(59,130,246,0.4)',
  },
  tertiary: {
    bg: 'bg-tertiary/20',
    text: 'text-tertiary',
    border: 'border-tertiary/20',
    hover: 'hover:text-tertiary',
    grad: 'from-tertiary/20',
    shadow: 'rgba(236,72,153,0.4)',
  },
};

export default function ProjectCard({ repo, featured = false, index = 0 }: Props) {
  const { t } = useLanguage();
  const accent = LANG_ACCENT[repo.language ?? ''] ?? 'primary';
  const cls = ACCENT_CLASSES[accent];
  const langColor = LANG_COLOR[repo.language ?? ''] ?? '#8b5cf6';
  const badges = [repo.language, ...repo.topics.slice(0, featured ? 3 : 1)].filter(Boolean) as string[];

  const cardRef = useRef<HTMLElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    card.style.transform = `perspective(900px) rotateX(${(-y * 6).toFixed(2)}deg) rotateY(${(x * 6).toFixed(2)}deg) translateZ(8px)`;
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = '';
  };

  return (
    <article
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'both' }}
      className={`group relative rounded-[2.5rem] overflow-hidden glass-card shimmer-border border-white/5 flex flex-col h-[550px] animate-scale-in transition-transform duration-300 ease-out ${
        featured ? 'md:col-span-8' : 'md:col-span-4'
      }`}
    >
      {/* Gradient mesh background */}
      <div className={`absolute inset-0 bg-gradient-to-br ${cls.grad} via-surface-variant/40 to-surface transition-all duration-700 group-hover:opacity-80`} />
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_30%_20%,rgba(139,92,246,0.3),transparent_50%)]" />
      {/* Animated mesh that intensifies on hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `radial-gradient(ellipse at 60% 80%, ${cls.shadow.replace('0.4', '0.15')}, transparent 60%)`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/40 to-transparent" />

      <div className="relative z-10 flex flex-col justify-end h-full p-10 md:p-12">
        {/* Language icon dot + badges */}
        <div className="flex flex-wrap gap-2 mb-6 items-center">
          {/* Language color dot */}
          {repo.language && (
            <span
              className="w-3 h-3 rounded-full ring-2 ring-white/10 flex-shrink-0"
              style={{ backgroundColor: langColor }}
              title={repo.language}
            />
          )}
          {badges.map((b, i) => (
            <span
              key={`${b}-${i}`}
              className={`px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider border ${
                i === 0 ? `${cls.bg} ${cls.text} ${cls.border}` : 'bg-white/10 text-white border-white/10'
              }`}
            >
              {b}
            </span>
          ))}
        </div>

        <h3 className={`font-headline font-bold mb-4 text-white ${featured ? 'text-4xl' : 'text-2xl'}`}>
          {formatRepoName(repo.name)}
        </h3>
        <p className={`text-on-surface-variant mb-8 leading-relaxed ${featured ? 'text-lg max-w-xl' : ''}`}>
          {repo.description ?? t.projects.noDescription}
        </p>

        <div className="flex gap-6 items-center flex-wrap">
          {/* Arrow reveal link */}
          <a
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className={`group/link flex items-center gap-2 text-white font-bold transition-all duration-300 ${cls.hover}`}
          >
            <span className="relative overflow-hidden">
              <span className="flex items-center gap-2">
                {t.projects.viewCode}
                <span className="material-symbols-outlined text-sm transition-transform duration-300 group-hover/link:translate-x-1.5">
                  arrow_forward
                </span>
              </span>
              {/* Underline slide-in */}
              <span
                className={`absolute bottom-0 left-0 h-px w-0 group-hover/link:w-full transition-all duration-300 ${cls.text.replace('text-', 'bg-')}`}
              />
            </span>
          </a>

          {repo.homepage && (
            <a
              href={repo.homepage}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-on-surface-variant font-semibold hover:text-white transition-all"
            >
              Demo
              <span className="material-symbols-outlined text-sm">open_in_new</span>
            </a>
          )}

          {/* Star glow counter */}
          <div className="ml-auto flex items-center gap-1.5 text-xs text-on-surface-variant group-hover:text-yellow-400 transition-colors duration-300">
            <span
              className="material-symbols-outlined text-sm group-hover:drop-shadow-[0_0_6px_rgba(250,204,21,0.8)] transition-all duration-300"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              star
            </span>
            <span className="font-semibold">{repo.stargazers_count}</span>
          </div>
        </div>
      </div>
    </article>
  );
}
