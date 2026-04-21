import type { PortfolioContent } from '@/types/portfolio';

import { ServiceIcon } from './icons';

type Props = {
  services: PortfolioContent['services'];
};

export function Services({ services }: Props) {
  return (
    <section id="services" className="services section">
      <div className="container">
        <div className="section-label">
          <span className="label-line"></span>
          <span>{services.sectionLabel}</span>
          <span className="label-line"></span>
        </div>

        <h2 className="section-title text-center" data-animate="fade-up" dangerouslySetInnerHTML={{ __html: services.titleHtml }} />

        <div className="services-grid">
          {services.items.map((service) => (
            <div
              key={service.title}
              className="service-card"
              data-animate="fade-up"
              style={service.delay ? { ['--delay' as string]: service.delay } : undefined}
            >
              <div className="service-icon icon-box icon-box-lg icon-indigo">
                <ServiceIcon kind={service.icon} />
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <div className="service-arrow" aria-hidden="true">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
