'use client';

import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const EMAIL = 'david-pereiraliman@outlook.com';

const SOCIAL_CARDS = [
  {
    icon: 'business_center',
    label: 'LinkedIn',
    value: 'david-vinícius-pereira-lima',
    display: '/in/david-vinícius',
    href: 'https://linkedin.com/in/david-vinícius-pereira-lima',
    accent: 'text-secondary',
    border: 'hover:border-secondary/30',
    glow: 'rgba(59,130,246,0.2)',
    bg: 'rgba(59,130,246,0.06)',
    description: 'Conecte-se profissionalmente',
  },
  {
    icon: 'code',
    label: 'GitHub',
    value: 'Ishinaru',
    display: '@Ishinaru',
    href: 'https://github.com/Ishinaru',
    accent: 'text-tertiary',
    border: 'hover:border-tertiary/30',
    glow: 'rgba(236,72,153,0.2)',
    bg: 'rgba(236,72,153,0.06)',
    description: 'Veja meus repositórios',
  },
];

function CopyEmailButton() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(EMAIL).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="flex items-center gap-3 group/email">
      <a
        href={`mailto:${EMAIL}`}
        className="text-base md:text-lg font-semibold text-white/70 hover:text-white transition-colors duration-200 truncate"
      >
        {EMAIL}
      </a>
      <button
        onClick={handleCopy}
        aria-label="Copiar email"
        className="flex-shrink-0 w-8 h-8 rounded-xl glass-card border border-white/5 hover:border-primary/30 flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95"
      >
        <span className={`material-symbols-outlined text-sm transition-colors duration-200 ${copied ? 'text-green-400' : 'text-white/40 hover:text-primary'}`}>
          {copied ? 'check' : 'content_copy'}
        </span>
      </button>
      {copied && (
        <span className="text-xs font-bold text-green-400 animate-reveal">Copiado!</span>
      )}
    </div>
  );
}

function SocialCard({ card }: { card: typeof SOCIAL_CARDS[number] }) {
  return (
    <a
      href={card.href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative flex items-center gap-4 p-5 rounded-2xl glass-card border border-white/5 ${card.border} transition-all duration-300 hover:-translate-y-1 overflow-hidden`}
    >
      {/* Hover glow */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: `radial-gradient(ellipse at 0% 50%, ${card.glow}, transparent 70%)` }}
      />

      {/* Icon */}
      <div
        className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 border border-white/5 group-hover:border-white/10 transition-colors"
        style={{ background: card.bg }}
      >
        <span className={`material-symbols-outlined text-xl ${card.accent}`}>{card.icon}</span>
      </div>

      {/* Text */}
      <div className="flex-1 min-w-0">
        <p className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-0.5">
          {card.label}
        </p>
        <p className="text-sm font-semibold text-white truncate">{card.display}</p>
        <p className="text-[11px] text-on-surface-variant mt-0.5">{card.description}</p>
      </div>

      {/* Arrow */}
      <span className="material-symbols-outlined text-sm text-white/20 group-hover:text-white/60 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 flex-shrink-0">
        north_east
      </span>
    </a>
  );
}

export default function ContactSection() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-32 relative overflow-hidden reveal-on-scroll">
      {/* Background orbs */}
      <div className="absolute inset-0 bg-primary/5 -z-10" />
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/10 blur-[140px] rounded-full -z-10 animate-pulse-slow" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 blur-[120px] rounded-full -z-10 animate-pulse-slow" style={{ animationDelay: '2s' }} />

      <div className="max-w-6xl mx-auto px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* ── Left: CTA ── */}
          <div>
            {/* Availability badge — Opção D */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass-card border border-green-500/20 bg-green-500/5 mb-8">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
              </span>
              <span className="text-[11px] font-bold text-green-400 tracking-wide">
                Disponível para novos projetos
              </span>
            </div>

            <h2 className="font-headline text-5xl md:text-6xl font-bold mb-5 text-white tracking-tight leading-[1.05]">
              {t.contact.title1} <br />
              <span className="italic text-primary">{t.contact.title2}</span>
            </h2>

            <p className="text-on-surface-variant text-lg mb-3 leading-relaxed max-w-lg">
              {t.contact.subtitle}
            </p>
            <p className="text-on-surface-variant/50 text-sm mb-10">
              Aberto a freelance, projetos e oportunidades CLT.
            </p>

            {/* Primary CTA */}
            <a
              href={`mailto:${EMAIL}`}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-primary text-white font-bold text-base shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-1 active:scale-95 transition-all duration-300 glow-button glow-pulse-cta mb-6"
            >
              <span className="material-symbols-outlined text-lg">send</span>
              Enviar Email
            </a>

            {/* Email copy row */}
            <div className="flex flex-col gap-2">
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-on-surface-variant">
                Ou copie o endereço
              </span>
              <CopyEmailButton />
            </div>
          </div>

          {/* ── Right: Social cards ── */}
          <div className="flex flex-col gap-4">
            {/* Response time info card */}
            <div className="flex items-center gap-4 p-5 rounded-2xl glass-card border border-white/5 mb-2">
              <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                <span className="material-symbols-outlined text-primary text-lg">schedule</span>
              </div>
              <div>
                <p className="text-sm font-bold text-white">Resposta rápida</p>
                <p className="text-[12px] text-on-surface-variant">Geralmente respondo em menos de 24 horas</p>
              </div>
            </div>

            {SOCIAL_CARDS.map((card) => (
              <SocialCard key={card.label} card={card} />
            ))}

            {/* Location subtle info */}
            <div className="flex items-center gap-2 px-2 pt-2">
              <span className="material-symbols-outlined text-sm text-on-surface-variant/50">location_on</span>
              <span className="text-xs text-on-surface-variant/50">Brasil — Remoto disponível globalmente</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
