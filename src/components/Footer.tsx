'use client';

import { useLanguage } from '@/contexts/LanguageContext';

const LINKS = [
  { label: 'GitHub',   href: 'https://github.com/Ishinaru' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/david-vinícius-pereira-lima' },
  { label: 'Email',    href: 'mailto:david-pereiraliman@outlook.com' },
];

export default function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-surface overflow-hidden reveal-on-scroll">
      {/* Top separator with gradient glow */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/5 to-transparent mt-px" />

      {/* Subtle background orb */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-32 bg-primary/5 blur-[80px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-8 py-12 flex flex-col md:flex-row justify-between items-center gap-8">

        {/* Brand */}
        <div className="flex flex-col items-center md:items-start gap-1.5">
          <div className="flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-primary flex items-center justify-center text-[10px] font-black text-white">
              DV
            </span>
            <span className="text-lg font-black text-white tracking-tighter">David Vinícius</span>
          </div>
          <p className="text-on-surface-variant text-xs">{t.footer.role}</p>
        </div>

        {/* Copyright */}
        <p className="text-on-surface-variant/50 text-xs font-medium tracking-wide text-center order-last md:order-none">
          © {year} David Vinícius Pereira Lima
        </p>

        {/* Social links */}
        <div className="flex items-center gap-8">
          {LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target={l.href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              className="group relative text-on-surface-variant hover:text-white transition-colors duration-200 text-xs font-bold uppercase tracking-widest"
            >
              {l.label}
              {/* Slide-in underline */}
              <span className="absolute -bottom-0.5 left-0 h-px w-0 group-hover:w-full bg-primary transition-all duration-300" />
            </a>
          ))}
        </div>

      </div>
    </footer>
  );
}
