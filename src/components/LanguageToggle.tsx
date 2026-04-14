'use client';

import { useLanguage } from '@/contexts/LanguageContext';

export default function LanguageToggle() {
  const { lang, toggleLang } = useLanguage();
  return (
    <button
      onClick={toggleLang}
      aria-label="Toggle language"
      className="px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-bold tracking-wider text-white transition-all flex items-center gap-2"
    >
      <span className={lang === 'pt' ? 'text-primary' : 'text-on-surface-variant'}>PT</span>
      <span className="text-on-surface-variant">/</span>
      <span className={lang === 'en' ? 'text-primary' : 'text-on-surface-variant'}>EN</span>
    </button>
  );
}
