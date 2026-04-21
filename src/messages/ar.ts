import type { PortfolioMessages } from '@/types/portfolio';

export const ar: PortfolioMessages = {
  meta: {
    title: 'عمر أحمد — الملف الشخصي',
    description:
      'عمر أحمد مهندس برمجيات Full Stack متخصص في Laravel وNext.js وأنظمة SaaS وتكاملات AI العملية والهندسة الخلفية القابلة للتوسع.',
  },
  themeLabels: {
    system: 'المظهر: تلقائي',
    dark: 'المظهر: داكن',
    light: 'المظهر: فاتح',
  },
  nav: {
    about: 'عني',
    skills: 'المهارات',
    projects: 'المشاريع',
    experience: 'الخبرة',
    services: 'الخدمات',
    contact: 'تواصل',
  },
  hero: {
    badge: 'متاح للمشاريع',
    nameFirst: 'عمر',
    nameLast: 'أحمد',
    title: 'مهندس برمجيات Full Stack',
    taglineHtml:
      'أبني <strong>أنظمة SaaS</strong> منظمة و<strong>تجارب رقمية حديثة</strong> باستخدام Laravel وNext.js وهندسة نظيفة.',
    sub: 'أركّز على الأنظمة الخلفية القابلة للتوسع، ولوحات التحكم متعددة اللغات، وتدفّقات الدفع، وتكاملات AI العملية.',
    ctaProjects: 'عرض المشاريع',
    ctaContact: 'تواصل معي',
    scroll: 'تمرير',
    stats: [
      { value: '4+', label: 'سنوات الخبرة' },
      { value: '5', label: 'مشاريع مختارة' },
      { value: '12+', label: 'تقنيات أساسية' },
    ],
  },
  about: {
    sectionLabel: 'عني',
    titleHtml: "هندسة أسس <span class='accent'>قابلة للتوسع</span>",
    paragraphsHtml: [
      'أنا مهندس برمجيات Full Stack بخلفية قوية في علوم الحاسوب وتقنية المعلومات. عملي يتمحور حول بناء منتجات رقمية منظمة مع اهتمام حقيقي بالهندسة، وقابلية الصيانة، والوضوح على المدى الطويل.',
      'نقطة قوتي الأساسية هي تصميم الأنظمة والخلفية، خصوصًا في <strong>تطبيقات SaaS المبنية بـ Laravel</strong> والمنصات متعددة المستأجرين ولوحات التحكم التشغيلية. كما أبني طبقات واجهة حديثة باستخدام <strong>Next.js</strong> عندما يحتاج المنتج إلى سير عمل Full Stack أقوى.',
      'أهتم بـ <strong>الوضوح، وقابلية التوسع، وبنية المنتج</strong>، والتنفيذ العملي. أفضل الأنظمة المتينة على الحلول الذكية المؤقتة، وأستخدم الذكاء الاصطناعي عندما يخدم سير العمل فعليًا بدون فقدان السيطرة.',
    ],
    tags: ['هندسة نظيفة', 'Laravel', 'Next.js', 'أنظمة الدفع', 'تدفّقات AI'],
    cards: {
      architecture: {
        title: 'هندسة منظمة',
        description: 'أنظمة وحدوية مع فصل واضح للمسؤوليات وقابلية صيانة طويلة المدى.',
      },
      payments: {
        title: 'تدفّقات الدفع',
        description: 'تكاملات Stripe ومعالجة Webhooks وتدفّقات جاهزة للإنتاج.',
      },
      languages: {
        title: 'منتجات متعددة اللغات',
        description: 'واجهات عربية وإنجليزية مع فهم حقيقي لـ RTL/LTR.',
      },
      performance: {
        title: 'تكامل AI عملي',
        description: 'تدفّقات عمل مدعومة بالذكاء الاصطناعي بشكل منضبط وموثوق.',
      },
    },
  },
  skills: {
    sectionLabel: 'المهارات',
    titleHtml: "الخبرة <span class='accent'>التقنية</span>",
    categories: {
      backend: 'الخلفية (Backend)',
      frontend: 'الواجهة (Frontend)',
      database: 'قواعد البيانات',
      devops: 'DevOps وسير العمل',
    },
  },
  projects: {
    sectionLabel: 'المشاريع',
    titleHtml: "أبرز <span class='accent'>الأعمال</span>",
    featuresTitle: 'المزايا الرئيسية',
    visualLabels: {
      marketplace: 'Marketplace',
      saas: 'SaaS',
    },
    items: {
      multiVendorPlatform: {
        type: 'منصة متعددة البائعين',
        title: 'منصة تجارة إلكترونية متعددة البائعين',
        description:
          'سوق متعدد البائعين منظم ومبني من الصفر باستخدام Laravel. ركّز النظام على فصل البائعين بشكل قابل للتوسع، وتدفّقات خلفية قابلة للصيانة، وبنية جاهزة للدفع.',
        features: [
          'لوحة تحكم مخصصة للبائع',
          'دعم متعدد العملات',
          'توطين عربي وإنجليزي',
          'مدفوعات Stripe وWebhooks',
          'سلة مبنية على التخزين المؤقت',
          'تسجيل اجتماعي',
          'هندسة وحدوية نظيفة',
        ],
      },
      saasInvoicingPlatform: {
        type: 'تطبيق SaaS',
        title: 'منصة فواتير SaaS',
        description:
          'نظام فوترة SaaS متعدد المستأجرين موجّه للمستقلين والوكالات الصغيرة في السوق العربي، مع حدود واضحة للخلفية وبنية قوية للوحة التحكم.',
        features: [
          'هندسة متعددة المستأجرين',
          'واجهة RTL / LTR ديناميكية',
          'توليد فواتير PDF',
          'تصدير Excel',
          'معالجة عبر Queue',
          'لوحة تحكم إدارية',
          'فصل واضح للمسؤوليات',
        ],
      },
      luminaFlow: {
        type: 'منتج تدفّق محتوى',
        title: 'Lumina Flow',
        description:
          'تجربة منتج مبنية بعناية لإدارة تدفّق المحتوى بشكل واضح ومنظّم، مع واجهة تبدو كمنتج حقيقي لا كصفحة هبوط عامة.',
        features: [
          'هيكل Landing Page نظيف',
          'هرمية بصرية واضحة',
          'رسائل موجّهة للمنتج',
          'تموضع قائم على الـ Workflow',
          'واجهة خفيفة وسريعة',
          'نسخة Live منشورة',
        ],
      },
      oraxFree: {
        type: 'نظام واجهة منتج',
        title: 'ORAX Free',
        description:
          'نسخة مجانية مركّزة من ORAX لعرض نظام الواجهة والاتجاه العام للمنتج وبناء الثقة قبل التوسّع إلى النظام الكامل.',
        features: [
          'تموضع منتج منظم',
          'واجهة نظيفة ومتجاوبة',
          'اتجاه تصميم ثنائي اللغة',
          'بنية مهيأة للتحويل',
          'نسخة عامة منشورة',
          'أساس واجهة قابل لإعادة الاستخدام',
        ],
      },
      oraxFlow: {
        type: 'منصة Workflow مدعومة بالذكاء الاصطناعي',
        title: 'ORAX Flow',
        description:
          'نظام منظم لتدفّق عمل المحتوى المدعوم بالذكاء الاصطناعي، مبني حول المصدر والمراجعة والموافقة للحفاظ على السيطرة بدل الاعتماد على توليد غير منضبط.',
        features: [
          'تدفّق Source → Workspace → Review',
          'تشغيل AI بشكل منضبط',
          'تفكير System-first',
          'بنية Next.js قابلة للتوسع',
          'أساس ثنائي اللغة نظيف',
          'اتجاه Product-ready واضح',
        ],
      },
    },
  },
  experience: {
    sectionLabel: 'الخبرة',
    titleHtml: "<span class='accent'>مسيرتي</span> المهنية",
    currentLabel: 'حالي',
    items: {
      independentDeveloper: {
        period: '2022 – الآن',
        role: 'مهندس برمجيات Full Stack مستقل',
        organization: 'مشاريع موجّهة ذاتيًا',
        points: [
          'تصميم وبناء أنظمة SaaS منظمة من الصفر.',
          'تنفيذ تدفّقات دفع Stripe مع معالجة Webhooks.',
          'بناء لوحات تحكم متعددة اللغات مع دعم RTL/LTR الديناميكي.',
          'التوسع إلى Next.js وتدفّقات منتجات مدعومة بالذكاء الاصطناعي بشكل عملي.',
        ],
      },
      academicProjects: {
        period: 'أكاديمي',
        role: 'مشاريع برمجية أكاديمية',
        organization: 'برنامج علوم الحاسوب',
        points: [
          'بناء أنظمة خلفية وفق مبادئ هندسة البرمجيات.',
          'تصميم قواعد بيانات علائقية بنمذجة مُطبّعة.',
          'تطبيق مفاهيم الهندسة النظيفة في تطبيقات Laravel.',
        ],
      },
    },
  },
  services: {
    sectionLabel: 'الخدمات',
    titleHtml: "ما <span class='accent'>أقدمه</span>",
    items: {
      saasDevelopment: {
        title: 'تطوير أنظمة SaaS',
        description: 'منتجات SaaS منظمة مع هندسة قابلة للتوسع، وتدفّقات واضحة، وأساس Backend قابل للصيانة.',
      },
      marketplaceDevelopment: {
        title: 'تطوير منصات Marketplace',
        description: 'منصات متعددة البائعين مع تدفّقات البائعين، والتوطين، والدفع، ووضوح معماري طويل المدى.',
      },
      backendArchitecture: {
        title: 'هندسة Backend وتصميم الأنظمة',
        description: 'طبقات خدمة، وتصميم Backend وحدوي، وقرارات بنية بيانات، وتنفيذ واعٍ بالأداء.',
      },
      stripeIntegrations: {
        title: 'تكاملات الدفع وAI العملية',
        description: 'تكاملات Stripe وتدفّقات مدعومة بالذكاء الاصطناعي تخدم المنتج بدل أن تعقّده.',
      },
    },
  },
  objective: {
    label: 'الهدف المهني',
    textHtml:
      'تصميم وتنفيذ منصات SaaS قابلة للتوسع وأنظمة رقمية منظمة تجمع بين <strong>الهندسة النظيفة</strong> و<strong>واجهات قابلة للصيانة</strong> و<strong>تكاملات AI عملية</strong> — لمساعدة المنتجات على النمو فوق أساس تقني متين.',
  },
  contact: {
    sectionLabel: 'تواصل',
    titleHtml: "لنعمل <span class='accent'>معًا</span>",
    sub: 'عندك مشروع في بالك؟ أرسل لي رسالة وسأعود إليك عبر الإيميل.',
    fields: {
      nameLabel: 'الاسم',
      namePlaceholder: 'اسمك الكامل',
      emailLabel: 'الإيميل',
      emailPlaceholder: 'your@email.com',
      messageLabel: 'الرسالة',
      messagePlaceholder: 'احكِ لي عن مشروعك...',
      hiddenTrapLabel: 'اترك هذا الحقل فارغًا',
    },
    submit: 'إرسال الرسالة',
    findMe: 'يمكنك إيجادي على',
    directEmailLabel: 'راسلني مباشرة عبر الإيميل',
    socialNames: {
      email: 'الإيميل',
      x: 'X (تويتر)',
      linkedin: 'لينكدإن',
      github: 'GitHub',
      facebook: 'فيسبوك',
    },
    messages: {
      nameRequired: 'الاسم مطلوب.',
      nameShort: 'يجب أن يحتوي الاسم على حرفين على الأقل.',
      emailRequired: 'الإيميل مطلوب.',
      emailInvalid: 'يرجى إدخال بريد إلكتروني صحيح.',
      messageRequired: 'الرسالة مطلوبة.',
      messageShort: 'يجب أن تحتوي الرسالة على 10 أحرف على الأقل.',
      submitting: 'جارٍ الإرسال...',
      submit: 'إرسال الرسالة',
      success: 'تم إرسال الرسالة بنجاح. سأعود إليك قريبًا.',
      failure: 'حدث خطأ ما. حاول مرة أخرى.',
      fallbackToEmail: 'تم فتح تطبيق الإيميل كحل بديل لأن الإرسال المباشر غير مفعّل بعد.',
    },
  },
  footer: {
    subtitle: 'مهندس برمجيات Full Stack',
    copy: '© 2026 عمر أحمد. جميع الحقوق محفوظة.',
    backToTop: 'العودة للأعلى',
  },
  ui: {
    accessibility: {
      themeToggle: 'تبديل المظهر',
      toggleLanguage: 'تبديل اللغة',
      toggleMenu: 'فتح القائمة',
    },
  },
};
