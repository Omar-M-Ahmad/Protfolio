import type { PortfolioContent } from '@/types/portfolio';

import { SkillCategoryIcon } from './icons';

type Props = {
  skills: PortfolioContent['skills'];
};

const techBadgeClassMap: Record<string, string> = {
  PHP: 'tb-php',
  Laravel: 'tb-laravel',
  Vue: 'tb-vue',
  Stripe: 'tb-stripe',
  MySQL: 'tb-mysql',
  Livewire: 'tb-livewire',
  'Inertia.js': 'tb-inertia',
  TailwindCSS: 'tb-tailwind',
  Git: 'tb-git',
  'REST API': 'tb-api',
};

export function Skills({ skills }: Props) {
  return (
    <section id="skills" className="skills section">
      <div className="container">
        <div className="section-label">
          <span className="label-line"></span>
          <span>{skills.sectionLabel}</span>
          <span className="label-line"></span>
        </div>

        <h2 className="section-title text-center" data-animate="fade-up" dangerouslySetInnerHTML={{ __html: skills.titleHtml }} />

        <div className="skills-grid">
          {skills.categories.map((category, index) => (
            <div
              key={category.title}
              className="skill-category"
              data-animate="fade-up"
              style={index === 0 ? undefined : { ['--delay' as string]: `${(index * 0.08).toFixed(2)}s` }}
            >
              <div className="skill-cat-header">
                <div
                  className={`icon-box ${
                    category.icon === 'backend'
                      ? 'icon-indigo'
                      : category.icon === 'frontend'
                        ? 'icon-cyan'
                        : category.icon === 'database'
                          ? 'icon-emerald'
                          : 'icon-violet'
                  }`}
                >
                  <SkillCategoryIcon kind={category.icon} />
                </div>
                <h3>{category.title}</h3>
              </div>

              <div className="skill-list">
                {category.items.map((item) => (
                  <div key={item} className="skill-item">
                    <span className="skill-dot"></span>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="tech-cloud" data-animate="fade-up">
          {skills.cloud.map((item) => (
            <span key={item} className={`tech-badge ${techBadgeClassMap[item] ?? 'tb-api'}`}>
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
