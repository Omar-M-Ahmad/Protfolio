'use client';

import type { Locale } from '@/lib/i18n/config';
import type { NavSectionId, ThemePreference } from '@/types/portfolio';

import { ThemeIcon } from './icons';

type Props = {
  locale: Locale;
  labels: Record<NavSectionId, string>;
  activeSection: NavSectionId;
  isScrolled: boolean;
  isMenuOpen: boolean;
  themePreference: ThemePreference;
  themeLabel: string;
  accessibility: {
    themeToggle: string;
    toggleLanguage: string;
    toggleMenu: string;
  };
  onToggleTheme: () => void;
  onToggleLanguage: () => void;
  onToggleMenu: () => void;
  onCloseMenu: () => void;
};

export function Navbar({
  locale,
  labels,
  activeSection,
  isScrolled,
  isMenuOpen,
  themePreference,
  themeLabel,
  accessibility,
  onToggleTheme,
  onToggleLanguage,
  onToggleMenu,
  onCloseMenu,
}: Props) {
  return (
    <nav id="navbar" className={`navbar${isScrolled ? ' scrolled' : ''}`}>
      <div className="nav-container">
        <a href="#hero" className="nav-logo" onClick={onCloseMenu}>
          <span className="logo-bracket">&lt;</span>
          OA
          <span className="logo-bracket">/&gt;</span>
        </a>

        <ul id="navLinks" className={`nav-links${isMenuOpen ? ' open' : ''}`}>
          {(Object.entries(labels) as Array<[NavSectionId, string]>).map(([sectionId, label]) => (
            <li key={sectionId}>
              <a
                href={`#${sectionId}`}
                className={`nav-link${activeSection === sectionId ? ' active' : ''}`}
                onClick={onCloseMenu}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <div className="nav-controls">
          <button className="nav-icon-btn" type="button" title={themeLabel} aria-label={`${accessibility.themeToggle}: ${themeLabel}`} onClick={onToggleTheme}>
            <ThemeIcon preference={themePreference} />
          </button>

          <button className="lang-btn" type="button" aria-label={accessibility.toggleLanguage} onClick={onToggleLanguage}>
            <span className="seg-primary lang-seg-active">{locale === 'ar' ? 'AR' : 'EN'}</span>
            <span className="lang-divider">|</span>
            <span className="seg-other">{locale === 'ar' ? 'EN' : 'AR'}</span>
          </button>

          <button className={`hamburger${isMenuOpen ? ' open' : ''}`} type="button" aria-label={accessibility.toggleMenu} onClick={onToggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </nav>
  );
}
