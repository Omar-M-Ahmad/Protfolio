import type { PortfolioContent } from '@/types/portfolio';

type Props = {
  projects: PortfolioContent['projects'];
};

function ProjectImageVisual({
  image,
  imageAlt,
  labels,
}: {
  image: string;
  imageAlt?: string;
  labels: PortfolioContent['projects']['visualLabels'];
}) {
  return (
    <div className="project-visual project-visual-image">
      <div className="project-image-wrap">
        <img
          src={image}
          alt={imageAlt ?? labels.imageAlt ?? labels.image ?? 'Project preview'}
          className="project-image"
          loading="lazy"
        />
      </div>

      <div className="visual-badge visual-badge-image">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <circle cx="8.5" cy="8.5" r="1.5" />
          <path d="M21 15l-5-5L5 21" />
        </svg>
        {labels.image ?? 'Preview'}
      </div>
    </div>
  );
}

function ProjectVisual({
  variant,
  labels,
}: {
  variant: 'marketplace' | 'saas';
  labels: PortfolioContent['projects']['visualLabels'];
}) {
  if (variant === 'marketplace') {
    return (
      <div className="project-visual">
        <div className="visual-card vc-1">
          <div className="vc-header"></div>
          <div className="vc-body">
            <div className="vc-line"></div>
            <div className="vc-line short"></div>
            <div className="vc-line medium"></div>
          </div>
        </div>
        <div className="visual-card vc-2">
          <div className="vc-header"></div>
          <div className="vc-body">
            <div className="vc-line"></div>
            <div className="vc-line medium"></div>
          </div>
        </div>
        <div className="visual-badge">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <rect x="1" y="4" width="22" height="16" rx="2" />
            <line x1="1" y1="10" x2="23" y2="10" />
          </svg>
          {labels.marketplace}
        </div>
      </div>
    );
  }

  return (
    <div className="project-visual">
      <div className="visual-card vc-1">
        <div className="vc-header vc-header-saas"></div>
        <div className="vc-body">
          <div className="vc-line"></div>
          <div className="vc-line short"></div>
          <div className="vc-line medium"></div>
          <div className="vc-line short"></div>
        </div>
      </div>
      <div className="visual-badge visual-badge-saas">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
        </svg>
        {labels.saas}
      </div>
    </div>
  );
}

export function Projects({ projects }: Props) {
  return (
    <section id="projects" className="projects section">
      <div className="container">
        <div className="section-label">
          <span className="label-line"></span>
          <span>{projects.sectionLabel}</span>
          <span className="label-line"></span>
        </div>

        <h2 className="section-title text-center" data-animate="fade-up" dangerouslySetInnerHTML={{ __html: projects.titleHtml }} />

        {projects.items.map((project) => (
          <div key={project.id} className="project-card" data-animate="fade-up">
            <div className="project-number">{project.number}</div>
            <div className="project-content">
              <div className="project-header">
                <div>
                  <div className="project-type">{project.type}</div>
                  <h3 className="project-title">{project.title}</h3>
                </div>
                {project.liveUrl ? (
                  <a
                    className="project-link-btn"
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={project.title}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                  </a>
                ) : (
                  <div className="project-link-btn" aria-hidden="true">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                  </div>
                )}
              </div>

              <p className="project-description">{project.description}</p>

              <div className="project-features">
                <h4>{project.featuresTitle}</h4>
                <div className="features-grid">
                  {project.features.map((feature) => (
                    <div key={feature} className="feature-item">
                      <span className="feature-check">✓</span>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="project-tech">
                {project.tech.map((item) => (
                  <span key={item} className="proj-tag">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {project.image ? (
              <ProjectImageVisual image={project.image} imageAlt={project.imageAlt} labels={projects.visualLabels} />
            ) : (
              <ProjectVisual variant={project.visualVariant} labels={projects.visualLabels} />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
