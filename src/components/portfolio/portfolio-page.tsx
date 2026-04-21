'use client';

import { useRouter } from 'next/navigation';
import { useMemo, useState } from 'react';

import { getPortfolioContent, getPortfolioMessages } from '@/lib/content/get-portfolio-content';
import type { Locale } from '@/lib/i18n/config';

import { About } from './about';
import { Contact } from './contact';
import { Experience } from './experience';
import { Footer } from './footer';
import { Hero } from './hero';
import { Navbar } from './navbar';
import { Objective } from './objective';
import { Projects } from './projects';
import { Services } from './services';
import { Skills } from './skills';
import { usePortfolioEffects } from './hooks/use-portfolio-effects';
import { useTheme } from './hooks/use-theme';

type Props = {
  locale: Locale;
};

export function PortfolioPage({ locale }: Props) {
  const router = useRouter();
  const content = getPortfolioContent(locale);
  const messages = getPortfolioMessages(locale);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { preference, label, cycleTheme } = useTheme(messages.themeLabels);
  const { activeSection, isScrolled, typedTitle } = usePortfolioEffects(locale, content.hero.title);

  const alternateLocale = useMemo<Locale>(() => (locale === 'ar' ? 'en' : 'ar'), [locale]);

  const handleToggleLanguage = () => {
    const hash = typeof window !== 'undefined' ? window.location.hash : '';
    router.push(`/${alternateLocale}${hash}`);
    setIsMenuOpen(false);
  };

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <Navbar
        locale={locale}
        labels={content.nav}
        activeSection={activeSection}
        isScrolled={isScrolled}
        isMenuOpen={isMenuOpen}
        themePreference={preference}
        themeLabel={label}
        accessibility={content.ui.accessibility}
        onToggleTheme={cycleTheme}
        onToggleLanguage={handleToggleLanguage}
        onToggleMenu={() => setIsMenuOpen((current: boolean) => !current)}
        onCloseMenu={closeMenu}
      />

      <main>
        <Hero hero={content.hero} typedTitle={typedTitle} />
        <About about={content.about} />
        <Skills skills={content.skills} />
        <Projects projects={content.projects} />
        <Experience experience={content.experience} />
        <Services services={content.services} />
        <Objective objective={content.objective} />
        <Contact locale={locale} contact={content.contact} />
      </main>

      <Footer footer={content.footer} />
    </>
  );
}
