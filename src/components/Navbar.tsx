'use client';

import { useEffect, useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import LanguageToggle from './LanguageToggle';

const SECTIONS = ['about', 'projects', 'skills', 'contact'] as const;

export default function Navbar() {
  const { t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { href: '#about',    label: t.nav.about },
    { href: '#projects', label: t.nav.projects },
    { href: '#skills',   label: t.nav.skills },
  ];

  // Scroll shrink + border
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Active section via IntersectionObserver
  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { threshold: 0.3, rootMargin: '-80px 0px -40% 0px' }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  // Close menu on resize to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMenuOpen(false); };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const navLinkClass = (href: string) => {
    const id = href.replace('#', '');
    const isActive = activeSection === id;
    return `relative text-sm font-medium transition-colors duration-200 ${
      isActive ? 'text-white' : 'text-on-surface-variant hover:text-white'
    }`;
  };

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-surface/95 backdrop-blur-xl border-b border-white/8 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.3)]'
            : 'bg-surface/60 backdrop-blur-md border-b border-transparent py-4'
        }`}
      >
        <div className="flex justify-between items-center px-8 max-w-7xl mx-auto font-headline">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <span className={`flex items-center justify-center rounded-lg bg-primary text-white text-xs font-black transition-all duration-300 ${scrolled ? 'w-7 h-7' : 'w-8 h-8'}`}>
              DV
            </span>
            <span className={`font-bold tracking-tighter text-white transition-all duration-300 ${scrolled ? 'text-base' : 'text-xl'}`}>
              David Vinícius
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a key={l.href} href={l.href} className={navLinkClass(l.href)}>
                {l.label}
                {/* Active underline dot */}
                {activeSection === l.href.replace('#', '') && (
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary" />
                )}
              </a>
            ))}
            <LanguageToggle />
            <a
              href="#contact"
              className={`px-5 py-2 rounded-full text-white text-sm font-semibold transition-all duration-300 border ${
                activeSection === 'contact'
                  ? 'bg-primary border-primary shadow-lg shadow-primary/20'
                  : 'bg-white/5 hover:bg-white/10 border-white/10'
              }`}
            >
              {t.nav.contact}
            </a>
          </div>

          {/* Mobile hamburger */}
          <div className="md:hidden flex items-center gap-3">
            <LanguageToggle />
            <button
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
              className="w-9 h-9 flex flex-col items-center justify-center gap-1.5 rounded-xl glass-card border border-white/10 active:scale-95 transition-transform"
            >
              <span className={`block h-0.5 bg-white rounded-full transition-all duration-300 ${menuOpen ? 'w-4 rotate-45 translate-y-2' : 'w-4'}`} />
              <span className={`block h-0.5 bg-white rounded-full transition-all duration-300 ${menuOpen ? 'opacity-0 w-0' : 'w-3'}`} />
              <span className={`block h-0.5 bg-white rounded-full transition-all duration-300 ${menuOpen ? 'w-4 -rotate-45 -translate-y-2' : 'w-4'}`} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-surface/80 backdrop-blur-xl"
          onClick={() => setMenuOpen(false)}
        />

        {/* Menu panel — slides in from top */}
        <div
          className={`absolute top-0 left-0 right-0 bg-surface/95 border-b border-white/10 pt-20 pb-8 px-8 flex flex-col gap-2 transition-transform duration-300 shadow-xl ${
            menuOpen ? 'translate-y-0' : '-translate-y-full'
          }`}
        >
          {[...links, { href: '#contact', label: t.nav.contact }].map((l) => {
            const id = l.href.replace('#', '');
            const isActive = activeSection === id;
            return (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className={`flex items-center justify-between px-4 py-3.5 rounded-2xl font-semibold text-base transition-all duration-200 ${
                  isActive
                    ? 'bg-primary/10 text-white border border-primary/20'
                    : 'text-on-surface-variant hover:text-white hover:bg-white/5 border border-transparent'
                }`}
              >
                {l.label}
                {isActive && <span className="w-1.5 h-1.5 rounded-full bg-primary" />}
              </a>
            );
          })}
        </div>
      </div>
    </>
  );
}
