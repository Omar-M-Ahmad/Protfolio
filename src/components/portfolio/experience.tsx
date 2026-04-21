import type { PortfolioContent } from '@/types/portfolio';

type Props = {
  experience: PortfolioContent['experience'];
};

export function Experience({ experience }: Props) {
  return (
    <section id="experience" className="experience section">
      <div className="container">
        <div className="section-label">
          <span className="label-line"></span>
          <span>{experience.sectionLabel}</span>
          <span className="label-line"></span>
        </div>

        <h2 className="section-title text-center" data-animate="fade-up" dangerouslySetInnerHTML={{ __html: experience.titleHtml }} />

        <div className="timeline">
          <div className="timeline-track"></div>

          {experience.items.map((item) => (
            <div key={`${item.role}-${item.period}`} className="timeline-item" data-animate={item.animation}>
              <div className="timeline-dot"></div>
              <div className="timeline-card">
                <div className="timeline-meta">
                  <span className="timeline-period">{item.period}</span>
                  {item.badge ? <span className="timeline-badge badge-current">{item.badge}</span> : null}
                </div>
                <h3 className="timeline-role">{item.role}</h3>
                <p className="timeline-org">{item.organization}</p>
                <ul className="timeline-list">
                  {item.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
