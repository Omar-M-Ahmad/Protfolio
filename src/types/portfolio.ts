import type { Locale } from '@/lib/i18n/config';

export type NavSectionId =
  | 'about'
  | 'skills'
  | 'projects'
  | 'experience'
  | 'services'
  | 'contact';

export type ThemePreference = 'system' | 'dark' | 'light';

export type ThemeOption = {
  key: ThemePreference;
};

export type SocialPlatformId = 'email' | 'x' | 'linkedin' | 'github' | 'facebook';

export type SocialLink = {
  id: SocialPlatformId;
  name: string;
  handle: string;
  href: string;
  icon: SocialPlatformId;
};

export type AboutCardId = 'architecture' | 'payments' | 'languages' | 'performance';

export type AboutCard = {
  title: string;
  description: string;
  icon: AboutCardId;
};

export type SkillCategoryId = 'backend' | 'frontend' | 'database' | 'devops';

export type SkillCategory = {
  key: SkillCategoryId;
  title: string;
  items: string[];
  icon: SkillCategoryId;
};

export type ProjectId = 'multiVendorPlatform' | 'saasInvoicingPlatform' | 'luminaFlow' | 'oraxFree' | 'oraxFlow';

export type ProjectItem = {
  id: ProjectId;
  number: string;
  type: string;
  title: string;
  description: string;
  featuresTitle: string;
  features: string[];
  tech: string[];
  visualVariant: 'marketplace' | 'saas';
  liveUrl?: string;
};

export type ExperienceId = 'independentDeveloper' | 'academicProjects';

export type TimelineItem = {
  id: ExperienceId;
  period: string;
  badge?: string;
  role: string;
  organization: string;
  points: string[];
  animation: 'fade-left' | 'fade-right';
};

export type ServiceId = 'saasDevelopment' | 'marketplaceDevelopment' | 'backendArchitecture' | 'stripeIntegrations';

export type ServiceItem = {
  id: ServiceId;
  title: string;
  description: string;
  icon: 'saas' | 'marketplace' | 'architecture' | 'payments';
  delay?: string;
};

export type ContactMessages = {
  nameRequired: string;
  nameShort: string;
  emailRequired: string;
  emailInvalid: string;
  messageRequired: string;
  messageShort: string;
  submitting: string;
  submit: string;
  success: string;
  failure: string;
  fallbackToEmail: string;
};

export type PortfolioContent = {
  meta: {
    title: string;
    description: string;
  };
  nav: Record<NavSectionId, string>;
  hero: {
    badge: string;
    nameFirst: string;
    nameLast: string;
    title: string;
    taglineHtml: string;
    sub: string;
    ctaProjects: string;
    ctaContact: string;
    scroll: string;
    stats: Array<{ value: string; label: string }>;
  };
  about: {
    sectionLabel: string;
    titleHtml: string;
    paragraphsHtml: string[];
    tags: string[];
    cards: AboutCard[];
  };
  skills: {
    sectionLabel: string;
    titleHtml: string;
    categories: SkillCategory[];
    cloud: string[];
  };
  projects: {
    sectionLabel: string;
    titleHtml: string;
    visualLabels: {
      marketplace: string;
      saas: string;
    };
    items: ProjectItem[];
  };
  experience: {
    sectionLabel: string;
    titleHtml: string;
    currentLabel: string;
    items: TimelineItem[];
  };
  services: {
    sectionLabel: string;
    titleHtml: string;
    items: ServiceItem[];
  };
  objective: {
    label: string;
    textHtml: string;
  };
  contact: {
    sectionLabel: string;
    titleHtml: string;
    sub: string;
    fields: {
      nameLabel: string;
      namePlaceholder: string;
      emailLabel: string;
      emailPlaceholder: string;
      messageLabel: string;
      messagePlaceholder: string;
      hiddenTrapLabel: string;
    };
    submit: string;
    findMe: string;
    directEmailLabel: string;
    messages: ContactMessages;
    socials: SocialLink[];
  };
  footer: {
    subtitle: string;
    copy: string;
    backToTop: string;
  };
  ui: {
    accessibility: {
      themeToggle: string;
      toggleLanguage: string;
      toggleMenu: string;
    };
  };
};

export type PortfolioMessages = {
  meta: PortfolioContent['meta'];
  themeLabels: Record<ThemePreference, string>;
  nav: PortfolioContent['nav'];
  hero: PortfolioContent['hero'];
  about: {
    sectionLabel: string;
    titleHtml: string;
    paragraphsHtml: string[];
    tags: string[];
    cards: Record<AboutCardId, Omit<AboutCard, 'icon'>>;
  };
  skills: {
    sectionLabel: string;
    titleHtml: string;
    categories: Record<SkillCategoryId, string>;
  };
  projects: {
    sectionLabel: string;
    titleHtml: string;
    featuresTitle: string;
    visualLabels: PortfolioContent['projects']['visualLabels'];
    items: Record<ProjectId, Omit<ProjectItem, 'id' | 'number' | 'featuresTitle' | 'tech' | 'visualVariant'>>;
  };
  experience: {
    sectionLabel: string;
    titleHtml: string;
    currentLabel: string;
    items: Record<ExperienceId, Omit<TimelineItem, 'id' | 'animation' | 'badge'>>;
  };
  services: {
    sectionLabel: string;
    titleHtml: string;
    items: Record<ServiceId, Omit<ServiceItem, 'id' | 'icon' | 'delay'>>;
  };
  objective: PortfolioContent['objective'];
  contact: {
    sectionLabel: string;
    titleHtml: string;
    sub: string;
    fields: PortfolioContent['contact']['fields'];
    submit: string;
    findMe: string;
    directEmailLabel: string;
    socialNames: Record<SocialPlatformId, string>;
    messages: ContactMessages;
  };
  footer: PortfolioContent['footer'];
  ui: PortfolioContent['ui'];
};

export type MessageDictionary = Record<Locale, PortfolioMessages>;
