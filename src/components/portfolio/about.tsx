import type { PortfolioContent } from '@/types/portfolio';

import { AboutCardIcon } from './icons';

type Props = {
  about: PortfolioContent['about'];
};

export function About({ about }: Props) {
  return (
    <section id="about" className="about section">
      <div className="container">
        <div className="section-label">
          <span className="label-line"></span>
          <span>{about.sectionLabel}</span>
          <span className="label-line"></span>
        </div>

        <div className="about-grid">
          <div className="about-text" data-animate="fade-left">
            <h2 className="section-title" dangerouslySetInnerHTML={{ __html: about.titleHtml }} />

            {about.paragraphsHtml.map((paragraph) => (
              <p key={paragraph} className="about-paragraph" dangerouslySetInnerHTML={{ __html: paragraph }} />
            ))}

            <div className="about-tags">
              {about.tags.map((tag) => (
                <span key={tag} className="tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="about-cards" data-animate="fade-right">
            {about.cards.map((card) => (
              <div key={card.title} className="about-card">
                <div className="card-icon icon-box icon-indigo">
                  <AboutCardIcon kind={card.icon} />
                </div>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
