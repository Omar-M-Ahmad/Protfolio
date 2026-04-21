import { siteConfig } from '@/content/site';
import type { SocialLink } from '@/types/portfolio';

export const socialLinkDefinitions: Array<Omit<SocialLink, 'name'>> = [
  {
    id: 'email',
    handle: siteConfig.publicEmail,
    href: `mailto:${siteConfig.publicEmail}`,
    icon: 'email',
  },
  {
    id: 'x',
    handle: '@omar_m_ahmad',
    href: 'https://x.com/omar_m_ahmad',
    icon: 'x',
  },
  {
    id: 'linkedin',
    handle: '@omar-mahmoud-ahmad',
    href: 'https://www.linkedin.com/in/omar-mahmoud-ahmad',
    icon: 'linkedin',
  },
  {
    id: 'github',
    handle: '@Omar-M-Ahmad',
    href: 'https://github.com/Omar-M-Ahmad',
    icon: 'github',
  },
  {
    id: 'facebook',
    handle: '@omar.ahmad.396821',
    href: 'https://www.facebook.com/omar.ahmad.396821',
    icon: 'facebook',
  },
];
