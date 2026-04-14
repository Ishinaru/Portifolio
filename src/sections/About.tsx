'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import Image from 'next/image';
import foto1 from '../assets/foto-perfil-1.jpg';

const TAG_ICONS = ['token', 'api', 'database', 'terminal'];

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-32 bg-surface-variant/30 reveal-on-scroll">
      <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-20 items-center">
        <div className="relative">
          <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden glass-card p-2 group shadow-2xl relative z-10 border-white/5">
            <div className="w-full h-full rounded-[2rem] bg-gradient-to-br from-primary/40 via-surface-container to-secondary/30 flex items-center justify-center transition-transform duration-1000 group-hover:scale-105">
              <Image src={foto1} alt={'Foto de perfil de David Vinícius'} className='w-full h-full object-cover object-top rounded-[2rem]' priority />
            </div>
          </div>
          <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-primary/20 blur-3xl -z-10" />
        </div>

        <div>
          <div className="flex items-center gap-4 mb-8">
            <span className="w-12 h-[1px] bg-primary" />
            <span className="text-primary font-bold tracking-[0.3em] uppercase text-xs">{t.about.eyebrow}</span>
          </div>
          <h2 className="font-headline text-4xl font-bold mb-8 text-white leading-tight">
            {t.about.title1} <br />
            <span className="text-on-surface-variant">{t.about.title2}</span>
          </h2>
          <div className="space-y-6 font-body text-lg text-on-surface-variant leading-relaxed">
            <p>{t.about.p1}</p>
            <p>{t.about.p2}</p>
            <div className="grid grid-cols-2 gap-y-4 pt-6">
              {t.about.tags.map((tag, i) => (
                <div key={tag} className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary text-xl">{TAG_ICONS[i]}</span>
                  <span className="text-sm font-medium">{tag}</span>
                </div>
              ))}
            </div>
            <div className="pt-10">
              <a
                href="https://github.com/Ishinaru"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-white/5 border border-white/10 text-white font-semibold hover:bg-white/10 transition-all duration-300"
              >
                {t.about.cta}
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                  arrow_right_alt
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
