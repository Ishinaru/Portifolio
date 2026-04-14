'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import foto2 from '../assets/foto-perfil-2.jpg';

function AnimatedCounter({ target, suffix = '' }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const duration = 2000;
          const startTime = performance.now();
          const step = (now: number) => {
            const progress = Math.min((now - startTime) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 4);
            setCount(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref} className="text-4xl font-headline font-black text-white counter-glow">
      {count}{suffix}
    </div>
  );
}

function TypingBadge({ text }: { text: string }) {
  const [displayed, setDisplayed] = useState('');
  const [done, setDone] = useState(false);

  useEffect(() => {
    let i = 0;
    // Small initial delay so it fires after mount
    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        i++;
        setDisplayed(text.slice(0, i));
        if (i >= text.length) {
          clearInterval(interval);
          setDone(true);
        }
      }, 45);
      return () => clearInterval(interval);
    }, 600);
    return () => clearTimeout(timeout);
  }, [text]);

  return (
    <span className={done ? 'typing-cursor' : ''}>
      {displayed}
      {!done && <span className="inline-block w-px h-[0.9em] bg-primary align-middle ml-0.5 animate-pulse" />}
    </span>
  );
}

export default function Hero() {
  const { t } = useLanguage();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 30,
        y: (e.clientY / window.innerHeight - 0.5) * 30,
      });
    };
    window.addEventListener('mousemove', handleMouse);
    return () => window.removeEventListener('mousemove', handleMouse);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background blobs — parallax on mouse */}
      <div className="absolute inset-0 hero-gradient" />
      <div
        className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/20 blur-[120px] rounded-full animate-pulse-slow"
        style={{ transform: `translate(${mousePos.x * 0.5}px, ${mousePos.y * 0.5}px)` }}
      />
      <div
        className="absolute bottom-1/4 -right-20 w-96 h-96 bg-secondary/20 blur-[120px] rounded-full animate-pulse-slow"
        style={{
          animationDelay: '2s',
          transform: `translate(${mousePos.x * -0.3}px, ${mousePos.y * -0.3}px)`,
        }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-tertiary/10 blur-[150px] rounded-full animate-pulse-slow"
        style={{
          animationDelay: '4s',
          transform: `translate(calc(-50% + ${mousePos.x * 0.2}px), calc(-50% + ${mousePos.y * 0.2}px))`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-16 items-center">
        {/* Text Column */}
        <div className="text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card mb-8 animate-reveal border-primary/20">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary">
              <TypingBadge text={t.hero.badge} />
            </span>
          </div>

          <h1 className="font-headline text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-6 leading-[1.1] animate-reveal animate-delay-100">
            {t.hero.title1} <br />
            <span className="text-shimmer">{t.hero.title2}</span>
          </h1>

          <p className="font-body text-lg md:text-xl text-on-surface-variant max-w-xl mb-10 leading-relaxed animate-reveal animate-delay-200">
            {t.hero.description}
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 animate-reveal animate-delay-300">
            <a
              href="#projects"
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-primary text-white font-bold text-lg shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-1 active:scale-95 transition-all duration-300 glow-button glow-pulse-cta text-center cursor-pointer"
            >
              {t.hero.ctaProjects}
            </a>
            <a
              href="#contact"
              className="w-full sm:w-auto px-8 py-4 rounded-2xl glass-card text-white font-semibold text-lg hover:bg-white/5 hover:-translate-y-1 active:scale-95 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
            >
              {t.hero.ctaCV}{' '}
              <span className="material-symbols-outlined text-sm">download</span>
            </a>
          </div>
        </div>

        {/* Image Column */}
        <div className="relative hidden lg:block animate-reveal animate-delay-300">
          {/* Glow ring behind photo */}
          <div className="absolute inset-0 rounded-[3rem] z-0 animate-glow-ring"
            style={{ boxShadow: '0 0 60px rgba(139,92,246,0.25), 0 0 120px rgba(139,92,246,0.1)' }}
          />

          <div className="relative z-10 aspect-square rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl bg-gradient-to-br from-primary/30 via-surface-variant to-secondary/30">
            <Image
              src={foto2}
              alt={'Foto de perfil de David Vinícius'}
              className="w-full h-full object-cover object-top rounded-[3rem]"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent opacity-40 pointer-events-none" />
          </div>

          {/* Floating geometric shapes */}
          {/* Large outer ring */}
          <div className="absolute -top-10 -right-10 w-40 h-40 border border-primary/30 rounded-full animate-float pointer-events-none" />
          {/* Small outer ring */}
          <div
            className="absolute -bottom-10 -left-10 w-24 h-24 border border-secondary/30 rounded-full animate-float pointer-events-none"
            style={{ animationDelay: '1s' }}
          />
          {/* Rotating square */}
          <div
            className="absolute top-1/2 -right-16 w-8 h-8 bg-tertiary/40 rounded-lg animate-float rotate-45 pointer-events-none"
            style={{ animationDelay: '2s' }}
          />
          {/* Small circle top */}
          <div
            className="absolute -top-4 left-1/3 w-6 h-6 bg-secondary/30 rounded-full animate-float-delay pointer-events-none"
            style={{ animationDelay: '3s' }}
          />
          {/* Triangle — top-left */}
          <div
            className="absolute top-8 -left-12 w-0 h-0 animate-float pointer-events-none"
            style={{
              borderLeft: '10px solid transparent',
              borderRight: '10px solid transparent',
              borderBottom: '18px solid rgba(139,92,246,0.35)',
              animationDelay: '1.5s',
            }}
          />
          {/* Triangle — bottom-right */}
          <div
            className="absolute bottom-16 -right-12 w-0 h-0 animate-float-delay pointer-events-none"
            style={{
              borderLeft: '8px solid transparent',
              borderRight: '8px solid transparent',
              borderBottom: '14px solid rgba(59,130,246,0.4)',
              animationDelay: '2.5s',
            }}
          />
          {/* Small square bottom-left */}
          <div
            className="absolute bottom-4 left-1/4 w-5 h-5 border border-tertiary/40 rotate-12 animate-float pointer-events-none"
            style={{ animationDelay: '0.8s' }}
          />
          {/* Dot cluster */}
          <div className="absolute top-1/4 -left-8 flex flex-col gap-1.5 animate-float-delay pointer-events-none" style={{ animationDelay: '2s' }}>
            {[0, 1, 2].map((row) => (
              <div key={row} className="flex gap-1.5">
                {[0, 1, 2].map((col) => (
                  <div key={col} className="w-1 h-1 rounded-full bg-primary/30" />
                ))}
              </div>
            ))}
          </div>

          {/* Stats — Experience */}
          <div className="absolute bottom-10 right-10 glass-card p-6 rounded-3xl z-20 border-white/10">
            <AnimatedCounter target={3} suffix="+" />
            <div className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">
              {t.hero.experience}
            </div>
          </div>

          {/* Stats — Projects */}
          <div className="absolute top-10 left-10 glass-card p-4 rounded-2xl z-20 border-white/10">
            <AnimatedCounter target={10} suffix="+" />
            <div className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">
              Projetos
            </div>
          </div>

          {/* Stats — Technologies */}
          <div className="absolute top-1/2 -translate-y-1/2 -right-14 glass-card p-4 rounded-2xl z-20 border-white/10">
            <AnimatedCounter target={5} suffix="+" />
            <div className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">
              Tecnologias
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-scroll-hint z-20">
        <span className="text-[10px] uppercase tracking-[0.3em] text-on-surface-variant font-bold">
          Scroll
        </span>
        <span className="material-symbols-outlined text-primary text-lg">expand_more</span>
      </div>
    </section>
  );
}
