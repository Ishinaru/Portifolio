'use client';

import { useEffect } from 'react';

export default function RevealObserver() {
  useEffect(() => {
    const revealClasses = ['reveal-on-scroll', 'reveal-left', 'reveal-right', 'reveal-scale', 'stagger-children'];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const delay = el.dataset.delay;
            if (delay) {
              setTimeout(() => el.classList.add('visible'), parseInt(delay));
            } else {
              el.classList.add('visible');
            }
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    );

    revealClasses.forEach((cls) => {
      document.querySelectorAll(`.${cls}`).forEach((el) => observer.observe(el));
    });

    // Magnetic button effect
    const magneticEls = document.querySelectorAll<HTMLElement>('.magnetic');
    const magneticHandlers = new Map<HTMLElement, { move: (e: MouseEvent) => void; leave: () => void }>();

    magneticEls.forEach((el) => {
      const onMove = (e: MouseEvent) => {
        const rect = el.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const dx = (e.clientX - cx) * 0.3;
        const dy = (e.clientY - cy) * 0.3;
        el.style.transform = `translate(${dx}px, ${dy}px)`;
      };
      const onLeave = () => {
        el.style.transform = '';
      };
      el.addEventListener('mousemove', onMove);
      el.addEventListener('mouseleave', onLeave);
      magneticHandlers.set(el, { move: onMove, leave: onLeave });
    });

    // Tilt card effect
    const tiltEls = document.querySelectorAll<HTMLElement>('.tilt-card');
    const tiltHandlers = new Map<HTMLElement, { move: (e: MouseEvent) => void; leave: () => void }>();

    tiltEls.forEach((el) => {
      const onMove = (e: MouseEvent) => {
        const rect = el.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        el.style.transform = `perspective(800px) rotateX(${(-y * 8).toFixed(2)}deg) rotateY(${(x * 8).toFixed(2)}deg)`;
      };
      const onLeave = () => {
        el.style.transform = '';
      };
      el.addEventListener('mousemove', onMove);
      el.addEventListener('mouseleave', onLeave);
      tiltHandlers.set(el, { move: onMove, leave: onLeave });
    });

    // Parallax blob effect
    const blobEls = document.querySelectorAll<HTMLElement>('.parallax-blob');
    const onScroll = () => {
      const scrollY = window.scrollY;
      blobEls.forEach((blob, i) => {
        const speed = parseFloat(blob.dataset.parallaxSpeed ?? '0.1') * (i % 2 === 0 ? 1 : -1);
        blob.style.transform = `translateY(${scrollY * speed}px)`;
      });
    };

    if (blobEls.length > 0) {
      window.addEventListener('scroll', onScroll, { passive: true });
    }

    return () => {
      observer.disconnect();
      magneticHandlers.forEach(({ move, leave }, el) => {
        el.removeEventListener('mousemove', move);
        el.removeEventListener('mouseleave', leave);
      });
      tiltHandlers.forEach(({ move, leave }, el) => {
        el.removeEventListener('mousemove', move);
        el.removeEventListener('mouseleave', leave);
      });
      if (blobEls.length > 0) {
        window.removeEventListener('scroll', onScroll);
      }
    };
  }, []);

  return null;
}
