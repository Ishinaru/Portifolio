'use client';

import { useEffect, useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { fetchTechStack, LangStat } from '@/utils/github';

// ─── Language brand metadata ──────────────────────────────────────────────────
const LANG_META: Record<string, { color: string; bg: string }> = {
  'C#':         { color: '#9B4F96', bg: 'rgba(155,79,150,0.12)' },
  Java:         { color: '#E76F00', bg: 'rgba(231,111,0,0.12)' },
  TypeScript:   { color: '#3178C6', bg: 'rgba(49,120,198,0.12)' },
  JavaScript:   { color: '#F7DF1E', bg: 'rgba(247,223,30,0.10)' },
  HTML:         { color: '#E34C26', bg: 'rgba(227,76,38,0.12)' },
  CSS:          { color: '#563D7C', bg: 'rgba(86,61,124,0.12)' },
  SCSS:         { color: '#C6538C', bg: 'rgba(198,83,140,0.12)' },
  Python:       { color: '#3572A5', bg: 'rgba(53,114,165,0.12)' },
  'C++':        { color: '#F34B7D', bg: 'rgba(243,75,125,0.12)' },
  C:            { color: '#555555', bg: 'rgba(85,85,85,0.12)' },
  Go:           { color: '#00ADD8', bg: 'rgba(0,173,216,0.12)' },
  Rust:         { color: '#DEA584', bg: 'rgba(222,165,132,0.12)' },
};

const DEFAULT_META = { color: '#8b5cf6', bg: 'rgba(139,92,246,0.12)' };

// ─── Curated stack by category ────────────────────────────────────────────────
interface StackCategory {
  label: string;
  icon: string;          // material symbol name
  accent: string;        // tailwind text color
  items: string[];
}

const STACK_CATEGORIES: StackCategory[] = [
  {
    label: 'Backend',
    icon: 'dns',
    accent: 'text-primary',
    items: ['.NET / C#', 'Java SE', 'Spring Boot', 'Entity Framework', 'REST APIs', 'Clean Architecture'],
  },
  {
    label: 'Frontend',
    icon: 'web',
    accent: 'text-tertiary',
    items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'HTML5 / CSS3'],
  },
  {
    label: 'Banco de Dados',
    icon: 'storage',
    accent: 'text-secondary',
    items: ['PostgreSQL', 'SQL Server', 'MySQL', 'Entity Framework Core'],
  },
  {
    label: 'DevOps & Cloud',
    icon: 'cloud',
    accent: 'text-primary',
    items: ['Docker', 'Azure Cloud', 'GitHub Actions', 'Git Flow', 'CI/CD'],
  },
];

// ─── Language pill ─────────────────────────────────────────────────────────────
function LangPill({ stat, index }: { stat: LangStat; index: number }) {
  const meta = LANG_META[stat.language] ?? DEFAULT_META;

  return (
    <div
      className="group flex items-center gap-2.5 px-4 py-2.5 rounded-2xl border border-white/5 glass-card cursor-default transition-all duration-300 hover:-translate-y-1 hover:border-white/10"
      style={{
        animationDelay: `${index * 60}ms`,
        animationFillMode: 'both',
        backgroundColor: meta.bg,
      }}
    >
      {/* Language color dot */}
      <span
        className="w-2.5 h-2.5 rounded-full flex-shrink-0 ring-2 ring-black/20 transition-transform duration-300 group-hover:scale-125"
        style={{ backgroundColor: meta.color }}
      />
      <span className="text-sm font-semibold text-white/90 leading-none">
        {stat.language}
      </span>
      {/* Repo count badge */}
      <span className="text-[10px] font-bold text-white/30 leading-none ml-0.5">
        {stat.repos}
      </span>
    </div>
  );
}

// ─── Stack category column ────────────────────────────────────────────────────
function StackColumn({ category, index }: { category: StackCategory; index: number }) {
  return (
    <div
      className="skill-card-item flex flex-col gap-3"
      style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'both' }}
    >
      {/* Category header */}
      <div className="flex items-center gap-2 mb-1">
        <span className={`material-symbols-outlined text-base ${category.accent}`}>
          {category.icon}
        </span>
        <span className={`text-[11px] font-black uppercase tracking-[0.15em] ${category.accent}`}>
          {category.label}
        </span>
      </div>

      {/* Items */}
      <div className="flex flex-col gap-2">
        {category.items.map((item) => (
          <div
            key={item}
            className="group flex items-center gap-2.5 px-3 py-2 rounded-xl glass-card border border-white/5 hover:border-white/10 transition-all duration-200 hover:translate-x-1 cursor-default"
          >
            <span className="w-1 h-1 rounded-full bg-white/20 group-hover:bg-white/50 transition-colors flex-shrink-0" />
            <span className="text-sm text-on-surface-variant group-hover:text-white transition-colors leading-none">
              {item}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Main section ─────────────────────────────────────────────────────────────
export default function SkillsGrid() {
  const { t } = useLanguage();
  const [langs, setLangs] = useState<LangStat[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTechStack()
      .then((data) => { setLangs(data); setLoading(false); })
      .catch(() => setLoading(false));
  }, []);

  return (
    <section id="skills" className="relative py-32 bg-surface-variant/20 overflow-hidden">
      {/* Dot grid background */}
      <div className="absolute inset-0 dot-grid-bg opacity-50 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(2,6,23,0.85)_100%)] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-8">

        {/* ── Header ── */}
        <div className="text-center mb-16 reveal-on-scroll">
          <div className="inline-block px-4 py-1 rounded-full border border-primary/20 bg-primary/10 text-primary text-[10px] font-bold tracking-widest uppercase mb-4">
            {t.skills.eyebrow}
          </div>
          <h2 className="font-headline text-4xl font-bold mb-4 text-white">{t.skills.title}</h2>
          <p className="text-on-surface-variant max-w-2xl mx-auto text-lg leading-relaxed">
            {t.skills.subtitle}
          </p>
        </div>

        {/* ── Languages from GitHub ── */}
        <div className="mb-16 reveal-on-scroll">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-white/10" />
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-sm text-primary">code</span>
              <span className="text-[11px] font-black uppercase tracking-[0.2em] text-primary">
                Linguagens — dados reais do GitHub
              </span>
            </div>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-white/10" />
          </div>

          {loading ? (
            <div className="flex flex-wrap gap-2.5">
              {Array.from({ length: 7 }).map((_, i) => (
                <div
                  key={i}
                  className="h-10 rounded-2xl skeleton-shimmer"
                  style={{ width: `${70 + (i % 3) * 24}px` }}
                />
              ))}
            </div>
          ) : (
            <div className="flex flex-wrap gap-2.5">
              {langs.map((stat, i) => (
                <LangPill key={stat.language} stat={stat} index={i} />
              ))}
            </div>
          )}
        </div>

        {/* ── Curated stack by category ── */}
        <div className="reveal-on-scroll">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-white/10" />
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-sm text-secondary">layers</span>
              <span className="text-[11px] font-black uppercase tracking-[0.2em] text-secondary">
                Frameworks & Ferramentas
              </span>
            </div>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-white/10" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {STACK_CATEGORIES.map((cat, i) => (
              <StackColumn key={cat.label} category={cat} index={i} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
