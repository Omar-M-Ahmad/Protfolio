import type { SkillCategory } from '@/types/portfolio';

export const skillCategoryDefinitions: Array<Pick<SkillCategory, 'key' | 'icon' | 'items'>> = [
  {
    key: 'backend',
    icon: 'backend',
    items: [
      'PHP',
      'Laravel',
      'RESTful API Design',
      'Multi-tenant Architecture',
      'Stripe Integration (Webhooks)',
      'Queue-Based Processing',
      'Caching Strategies',
      'Authentication Systems (Social Login)',
    ],
  },
  {
    key: 'frontend',
    icon: 'frontend',
    items: [
      'HTML & CSS',
      'JavaScript',
      'Blade & Livewire',
      'Inertia.js',
      'Vue (Good Working Knowledge)',
      'React (Basic)',
      'Next.js',
      'TailwindCSS',
      'Bootstrap',
    ],
  },
  {
    key: 'database',
    icon: 'database',
    items: [
      'MySQL',
      'SQL Server',
      'Relational Database Design',
      'Query Structuring',
      'Eager Loading Optimization',
    ],
  },
  {
    key: 'devops',
    icon: 'devops',
    items: [
      'Git & GitHub',
      'GitHub Actions (CI/CD)',
      'VPS Deployment',
      'Deployment Workflows',
      'Environment Management',
    ],
  },
];

export const skillCloud = [
  'PHP',
  'Laravel',
  'Next.js',
  'TypeScript',
  'Vue',
  'Stripe',
  'MySQL',
  'Livewire',
  'Inertia.js',
  'TailwindCSS',
  'Git',
  'REST API',
  'AI Workflows',
] as const;
