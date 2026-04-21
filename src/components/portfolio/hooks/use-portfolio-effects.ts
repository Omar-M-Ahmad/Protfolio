'use client';

import { useEffect, useMemo, useState } from 'react';

import { getDirection, type Locale } from '@/lib/i18n/config';
import type { NavSectionId } from '@/types/portfolio';

const SECTION_IDS: NavSectionId[] = ['about', 'skills', 'projects', 'experience', 'services', 'contact'];

export function usePortfolioEffects(locale: Locale, titleText: string) {
  const [activeSection, setActiveSection] = useState<NavSectionId>('about');
  const [isScrolled, setIsScrolled] = useState(false);
  const [typedTitle, setTypedTitle] = useState('');

  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = getDirection(locale);
  }, [locale]);

  useEffect(() => {
    let active = true;
    let timeoutId: ReturnType<typeof setTimeout> | undefined;

    setTypedTitle('');
    let index = 0;

    const typeNext = () => {
      if (!active) return;
      if (index < titleText.length) {
        const nextCharacter = titleText.charAt(index);
        index += 1;
        setTypedTitle((previous: string) => previous + nextCharacter);
        timeoutId = setTimeout(typeNext, 48);
      }
    };

    timeoutId = setTimeout(typeNext, 500);

    return () => {
      active = false;
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [titleText]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const position = window.scrollY + 120;
      let currentSection: NavSectionId = 'about';

      SECTION_IDS.forEach((sectionId) => {
        const section = document.getElementById(sectionId);
        if (!section) return;

        if (position >= section.offsetTop && position < section.offsetTop + section.offsetHeight) {
          currentSection = sectionId;
        }
      });

      setActiveSection(currentSection);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const animatedElements = Array.from(document.querySelectorAll<HTMLElement>('[data-animate]'));

    if (!('IntersectionObserver' in window)) {
      animatedElements.forEach((element) => element.classList.add('visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -50px 0px' },
    );

    animatedElements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const orbs = Array.from(document.querySelectorAll<HTMLElement>('.orb'));
    if (orbs.length === 0) return;

    let frameId = 0;
    let targetX = 0;
    let targetY = 0;

    const moveOrbs = () => {
      orbs.forEach((orb, index) => {
        const factor = (index + 1) * 0.35;
        orb.style.transform = `translate(${targetX * factor}px, ${targetY * factor}px)`;
      });
      frameId = 0;
    };

    const handleMouseMove = (event: MouseEvent) => {
      targetX = (event.clientX / window.innerWidth - 0.5) * 18;
      targetY = (event.clientY / window.innerHeight - 0.5) * 18;

      if (!frameId) {
        frameId = window.requestAnimationFrame(moveOrbs);
      }
    };

    document.addEventListener('mousemove', handleMouseMove, { passive: true });

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      if (frameId) window.cancelAnimationFrame(frameId);
    };
  }, []);

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>('.stat-number'));
    if (!('IntersectionObserver' in window) || elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const element = entry.target as HTMLElement;
          const rawValue = element.dataset.value ?? element.textContent ?? '0';
          const numericText = rawValue.replace(/[^0-9]/g, '');
          const suffix = rawValue.replace(/[0-9]/g, '');
          const target = Number.parseInt(numericText, 10);

          if (Number.isNaN(target)) {
            observer.unobserve(element);
            return;
          }

          let current = 0;
          const step = target / (900 / 16);

          const tick = () => {
            current = Math.min(current + step, target);
            element.textContent = `${Math.floor(current)}${suffix}`;
            if (current < target) {
              window.requestAnimationFrame(tick);
            }
          };

          tick();
          observer.unobserve(element);
        });
      },
      { threshold: 0.8 },
    );

    elements.forEach((element) => {
      element.dataset.value = element.textContent ?? '';
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, [locale]);

  return useMemo(
    () => ({
      activeSection,
      isScrolled,
      typedTitle,
    }),
    [activeSection, isScrolled, typedTitle],
  );
}
