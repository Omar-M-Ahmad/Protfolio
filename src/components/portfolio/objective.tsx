import type { PortfolioContent } from '@/types/portfolio';

type Props = {
  objective: PortfolioContent['objective'];
};

export function Objective({ objective }: Props) {
  return (
    <section id="objective" className="objective">
      <div className="container">
        <div className="objective-card" data-animate="fade-up">
          <div className="objective-icon">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
              <circle cx="12" cy="12" r="10" />
              <circle cx="12" cy="12" r="6" />
              <circle cx="12" cy="12" r="2" />
            </svg>
          </div>
          <div className="objective-label">{objective.label}</div>
          <blockquote className="objective-text" dangerouslySetInnerHTML={{ __html: objective.textHtml }} />
        </div>
      </div>
    </section>
  );
}
