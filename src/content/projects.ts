import type { ProjectItem } from '@/types/portfolio';

export const projectDefinitions: Array<Pick<ProjectItem, 'id' | 'number' | 'tech' | 'visualVariant' | 'liveUrl' | 'image' | 'imageAlt'>> = [
  {
    id: 'oraxFlow',
    number: '01',
    tech: ['Next.js', 'TypeScript', 'PostgreSQL', 'Workflow Design', 'AI Integrations'],
    visualVariant: 'saas',
    liveUrl: 'https://orax-flow-media.vercel.app',
    image: '/images/projects/orax-flow.png',
    imageAlt: 'ORAX Flow project preview',
  },
  {
    id: 'oraxFree',
    number: '02',
    tech: ['Next.js', 'TypeScript', 'TailwindCSS', 'Vercel', 'UI System'],
    visualVariant: 'saas',
    liveUrl: 'https://orax-free.vercel.app/',
    image: '/images/projects/orax-free.png',
    imageAlt: 'ORAX Free project preview',
  },
  {
    id: 'luminaFlow',
    number: '03',
    tech: ['Next.js', 'TypeScript', 'TailwindCSS', 'Content Workflow', 'Netlify'],
    visualVariant: 'saas',
    liveUrl: 'https://lumina-flow.netlify.app/',
    image: '/images/projects/lumina-flow.png',
    imageAlt: 'Lumina Flow project preview',
  },
  {
    id: 'multiVendorPlatform',
    number: '04',
    tech: ['Laravel', 'PHP', 'Stripe', 'MySQL', 'Livewire', 'TailwindCSS'],
    visualVariant: 'marketplace',
  },
  {
    id: 'saasInvoicingPlatform',
    number: '05',
    tech: ['Laravel', 'Filament', 'MySQL', 'Queues', 'PDF', 'Multi-tenant'],
    visualVariant: 'saas',
  },
];
