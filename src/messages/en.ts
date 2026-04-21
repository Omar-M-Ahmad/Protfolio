import type { PortfolioMessages } from '@/types/portfolio';

export const en: PortfolioMessages = {
  meta: {
    title: 'Omar Ahmad — Portfolio',
    description:
      'Omar Ahmad is a Full Stack Engineer specializing in Laravel, Next.js, SaaS systems, AI integrations, and scalable backend architecture.',
  },
  themeLabels: {
    system: 'Theme: System',
    dark: 'Theme: Dark',
    light: 'Theme: Light',
  },
  nav: {
    about: 'About',
    skills: 'Skills',
    projects: 'Projects',
    experience: 'Experience',
    services: 'Services',
    contact: 'Contact',
  },
  hero: {
    badge: 'Available for Projects',
    nameFirst: 'Omar',
    nameLast: 'Ahmad',
    title: 'Full Stack Engineer',
    taglineHtml:
      'I build structured <strong>SaaS systems</strong> and <strong>modern product experiences</strong> with Laravel, Next.js, and clean architecture.',
    sub: 'Focused on scalable backend systems, multilingual dashboards, payment workflows, and practical AI integrations.',
    ctaProjects: 'View Projects',
    ctaContact: 'Contact Me',
    scroll: 'Scroll',
    stats: [
      { value: '4+', label: 'Years Experience' },
      { value: '5', label: 'Featured Projects' },
      { value: '12+', label: 'Core Technologies' },
    ],
  },
  about: {
    sectionLabel: 'About Me',
    titleHtml: "Engineering <span class='accent'>Scalable</span> Foundations",
    paragraphsHtml: [
      'I am a Full Stack Engineer with a strong foundation in Computer Science and Information Technology. My work is centered around building structured digital products with a serious focus on architecture, maintainability, and long-term clarity.',
      'My core strength is backend and system design, especially in <strong>Laravel-based SaaS applications</strong>, multi-tenant platforms, and operational dashboards. I also build modern frontend layers with <strong>Next.js</strong> when the product requires a stronger full-stack workflow.',
      'I care about <strong>clarity, scalability, product structure</strong>, and practical delivery. I prefer robust systems over clever shortcuts, and I use AI where it improves real workflows without sacrificing control.',
    ],
    tags: ['Clean Architecture', 'Laravel', 'Next.js', 'Payment Systems', 'AI Workflows'],
    cards: {
      architecture: {
        title: 'Structured Architecture',
        description: 'Modular systems with clean separation of concerns and long-term maintainability.',
      },
      payments: {
        title: 'Payment Workflows',
        description: 'Stripe integrations, webhook handling, and payment-ready product flows.',
      },
      languages: {
        title: 'Multilingual Products',
        description: 'Arabic and English interfaces with real RTL/LTR awareness.',
      },
      performance: {
        title: 'Practical AI Integration',
        description: 'AI-assisted product workflows implemented in a controlled and reliable way.',
      },
    },
  },
  skills: {
    sectionLabel: 'Skills',
    titleHtml: "Technical <span class='accent'>Expertise</span>",
    categories: {
      backend: 'Backend',
      frontend: 'Frontend',
      database: 'Database',
      devops: 'DevOps & Workflow',
    },
  },
  projects: {
    sectionLabel: 'Projects',
    titleHtml: "Featured <span class='accent'>Work</span>",
    featuresTitle: 'Key Features',
    visualLabels: {
      marketplace: 'Marketplace',
      saas: 'SaaS',
    },
    items: {
      multiVendorPlatform: {
        type: 'Multi-Vendor Platform',
        title: 'Multi-Vendor E-Commerce Platform',
        description:
          'A structured multi-vendor marketplace built from scratch using Laravel. The system focused on scalable vendor separation, maintainable backend flows, and payment-ready architecture.',
        features: [
          'Dedicated vendor dashboard',
          'Multi-currency support',
          'Arabic & English localization',
          'Stripe payments & webhooks',
          'Caching-based cart system',
          'Social authentication',
          'Clean modular architecture',
        ],
      },
      saasInvoicingPlatform: {
        type: 'SaaS Application',
        title: 'SaaS Invoicing Platform',
        description:
          'A multi-tenant SaaS invoicing system designed for freelancers and small agencies in the Arabic market, with clean backend boundaries and strong dashboard structure.',
        features: [
          'Multi-tenant architecture',
          'Dynamic RTL / LTR interface',
          'PDF invoice generation',
          'Excel export functionality',
          'Queue-based processing',
          'Administrative dashboard',
          'Clear separation of concerns',
        ],
      },
      luminaFlow: {
        type: 'Content Workflow Product',
        title: 'Lumina Flow',
        description:
          'A polished content workflow experience focused on structure, clarity, and an interface that feels like a real product rather than a generic landing page.',
        features: [
          'Clean landing page structure',
          'Strong visual hierarchy',
          'Localized product-facing copy',
          'Workflow-oriented messaging',
          'Fast lightweight frontend delivery',
          'Live deployed preview',
        ],
      },
      oraxFree: {
        type: 'Product UI System',
        title: 'ORAX Free',
        description:
          'A focused free version of ORAX designed to present the UI system clearly, communicate the product direction, and create trust before deeper platform adoption.',
        features: [
          'Structured product positioning',
          'Clean responsive UI',
          'Bilingual-ready design direction',
          'Conversion-oriented layout',
          'Live public deployment',
          'Reusable interface foundation',
        ],
      },
      oraxFlow: {
        type: 'AI Workflow Platform',
        title: 'ORAX Flow',
        description:
          'A controlled AI content workflow system built around structure, review, and approval — designed to keep teams in control instead of hiding behind one-click generation.',
        features: [
          'Source → Workspace → Review flow',
          'Controlled AI-assisted operations',
          'System-first product thinking',
          'Scalable Next.js architecture',
          'Clean bilingual foundation',
          'Product-ready workflow direction',
        ],
      },
    },
  },
  experience: {
    sectionLabel: 'Experience',
    titleHtml: "My <span class='accent'>Journey</span>",
    currentLabel: 'Current',
    items: {
      independentDeveloper: {
        period: '2022 – Present',
        role: 'Independent Full Stack Engineer',
        organization: 'Self-Directed Projects',
        points: [
          'Designed and built structured SaaS systems from scratch.',
          'Implemented Stripe payment flows with webhook handling.',
          'Built multilingual dashboards with dynamic RTL/LTR support.',
          'Expanded into Next.js and practical AI-powered product workflows.',
        ],
      },
      academicProjects: {
        period: 'Academic',
        role: 'Academic Software Projects',
        organization: 'Computer Science Program',
        points: [
          'Built backend systems following software engineering principles.',
          'Designed relational databases with normalized schema modeling.',
          'Applied clean architecture concepts in Laravel-based applications.',
        ],
      },
    },
  },
  services: {
    sectionLabel: 'Services',
    titleHtml: "What I <span class='accent'>Offer</span>",
    items: {
      saasDevelopment: {
        title: 'SaaS System Development',
        description:
          'Structured SaaS products with scalable architecture, clear workflows, and maintainable backend foundations.',
      },
      marketplaceDevelopment: {
        title: 'Marketplace Development',
        description:
          'Multi-vendor platforms with vendor workflows, localization, payment support, and long-term architectural clarity.',
      },
      backendArchitecture: {
        title: 'Backend Architecture & System Design',
        description:
          'Service layers, modular backend design, data structure decisions, and performance-aware implementation.',
      },
      stripeIntegrations: {
        title: 'Payment & AI Workflow Integrations',
        description:
          'Stripe integrations and practical AI-powered flows that support the product instead of complicating it.',
      },
    },
  },
  objective: {
    label: 'Career Objective',
    textHtml:
      'To design and deliver scalable SaaS platforms and structured digital systems that combine <strong>clean architecture</strong>, <strong>maintainable frontend layers</strong>, and <strong>practical AI integrations</strong> — helping products grow on solid technical foundations.',
  },
  contact: {
    sectionLabel: 'Contact',
    titleHtml: "Let's <span class='accent'>Work Together</span>",
    sub: "Have a project in mind? Send me a message and I'll get back to you by email.",
    fields: {
      nameLabel: 'Name',
      namePlaceholder: 'Your full name',
      emailLabel: 'Email',
      emailPlaceholder: 'your@email.com',
      messageLabel: 'Message',
      messagePlaceholder: 'Tell me about your project...',
      hiddenTrapLabel: 'Leave this field empty',
    },
    submit: 'Send Message',
    findMe: 'Find me on',
    directEmailLabel: 'Email me directly',
    socialNames: {
      email: 'Email',
      x: 'X (Twitter)',
      linkedin: 'LinkedIn',
      github: 'GitHub',
      facebook: 'Facebook',
    },
    messages: {
      nameRequired: 'Name is required.',
      nameShort: 'Name must be at least 2 characters.',
      emailRequired: 'Email is required.',
      emailInvalid: 'Please enter a valid email address.',
      messageRequired: 'Message is required.',
      messageShort: 'Message must be at least 10 characters.',
      submitting: 'Sending...',
      submit: 'Send Message',
      success: "Message sent successfully. I'll get back to you soon.",
      failure: 'Something went wrong. Please try again.',
      fallbackToEmail: 'Email app opened as a fallback because direct sending is not configured yet.',
    },
  },
  footer: {
    subtitle: 'Full Stack Engineer',
    copy: '© 2026 Omar Ahmad. All rights reserved.',
    backToTop: 'Back to Top',
  },
  ui: {
    accessibility: {
      themeToggle: 'Toggle theme',
      toggleLanguage: 'Toggle language',
      toggleMenu: 'Toggle menu',
    },
  },
};
