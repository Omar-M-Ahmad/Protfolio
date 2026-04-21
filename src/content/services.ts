import type { ServiceItem } from '@/types/portfolio';

export const serviceDefinitions: Array<Pick<ServiceItem, 'id' | 'icon'> & Partial<Pick<ServiceItem, 'delay'>>> = [
  {
    id: 'saasDevelopment',
    icon: 'saas',
  },
  {
    id: 'marketplaceDevelopment',
    icon: 'marketplace',
    delay: '.08s',
  },
  {
    id: 'backendArchitecture',
    icon: 'architecture',
    delay: '.16s',
  },
  {
    id: 'stripeIntegrations',
    icon: 'payments',
    delay: '.24s',
  },
];
