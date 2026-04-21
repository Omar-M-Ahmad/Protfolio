import Image from 'next/image';

import type { PortfolioContent } from '@/types/portfolio';

type Props = {
  hero: PortfolioContent['hero'];
  typedTitle: string;
};

export function Hero({ hero, typedTitle }: Props) {
  return (
    <section id="hero" className="hero">
      <div className="hero-bg">
        <div className="hero-grid"></div>
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
        <div className="orb orb-3"></div>
      </div>

      <div className="hero-content">
        <div className="hero-badge">
          <span className="badge-dot"></span>
          <span>{hero.badge}</span>
        </div>

        <h1 className="hero-name">
          <span className="name-line">{hero.nameFirst}</span>
          <span className="name-line accent">{hero.nameLast}</span>
        </h1>

        <div className="hero-title" aria-label={hero.title}>
          <span className="title-prefix">// </span>
          <span className="typing-text">{typedTitle}</span>
          <span className="typing-cursor"></span>
        </div>

        <p className="hero-tagline" dangerouslySetInnerHTML={{ __html: hero.taglineHtml }} />
        <p className="hero-sub">{hero.sub}</p>

        <div className="hero-cta">
          <a href="#projects" className="btn btn-primary">
            <span className="btn-icon">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <rect x="3" y="3" width="7" height="7" />
                <rect x="14" y="3" width="7" height="7" />
                <rect x="14" y="14" width="7" height="7" />
                <rect x="3" y="14" width="7" height="7" />
              </svg>
            </span>
            <span>{hero.ctaProjects}</span>
          </a>

          <a href="#contact" className="btn btn-outline">
            <span className="btn-icon">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </span>
            <span>{hero.ctaContact}</span>
          </a>
        </div>

        <div className="hero-stats">
          {hero.stats.map((stat, index) => (
            <div key={`${stat.value}-${stat.label}`} className="hero-stat-group">
              {index > 0 ? <div className="stat-divider"></div> : null}
              <div className="stat-item">
                <span className="stat-number">{stat.value}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="hero-visual" aria-hidden="true">
        <div className="hero-portrait-wrap">
          <div className="hero-portrait-glow hero-portrait-glow-1"></div>
          <div className="hero-portrait-glow hero-portrait-glow-2"></div>
          <div className="hero-portrait-frame">
            <div className="hero-portrait-blob">
              <Image
                src="/images/omar-ahmad-hero.png"
                alt="Omar Ahmad portrait"
                fill
                priority
                sizes="(max-width: 1024px) 80vw, 420px"
                className="hero-portrait-image"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="scroll-line"></div>
        <span>{hero.scroll}</span>
      </div>
    </section>
  );
}
