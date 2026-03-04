/* ═══════════════════════════════════════════════════════
   APP.JS — Bundled (No ES Modules, works with file://)
═══════════════════════════════════════════════════════ */
(function () {
  'use strict';

  /* ══════════════ TRANSLATIONS ══════════════ */
  const T = {
    en: {
      nav: { about:'About', skills:'Skills', projects:'Projects', experience:'Experience', services:'Services', contact:'Contact' },
      hero: {
        badge:'Available for Projects', name_first:'Omar', name_last:'Ahmad',
        title:'Full Stack Laravel Developer',
        tagline:'I build structured <strong>SaaS systems</strong> and <strong>multi-vendor platforms</strong> from scratch with clean architecture and scalable foundations.',
        sub:'Specialized in payment integrations, multilingual dashboards, and organized backend systems.',
        cta_projects:'View Projects', cta_contact:'Contact Me',
        stat_years_label:'Years Experience', stat_projects_label:'Major Projects', stat_tech_label:'Technologies', scroll:'Scroll',
      },
      about: {
        section_label:'About Me', title:"Engineering <span class='accent'>Scalable</span> Foundations",
        p1:'I am a Full Stack Laravel Developer with a strong academic foundation in Computer Science and Information Technology. Since <strong>Laravel 9</strong>, I have been building complete systems from the ground up with a strong emphasis on structured architecture, modular code organization, and long-term maintainability.',
        p2:'My expertise centers on <strong>backend system design</strong>, SaaS-style applications, and multi-vendor platforms. I have hands-on experience integrating payment gateways such as <strong>Stripe</strong> (including Webhooks), implementing multilingual dashboards, and developing scalable administrative systems.',
        p3:'I approach development with an engineering mindset — prioritizing <strong>clarity, scalability, performance awareness</strong>, and sustainable architecture over quick, short-term solutions.',
        tag1:'Clean Architecture', tag2:'SaaS Expert', tag3:'Payment Systems', tag4:'Multilingual', tag5:'Backend Design',
        card1_title:'Structured Architecture', card1_desc:'Building modular, scalable systems with clean separation of concerns',
        card2_title:'Payment Integration',    card2_desc:'Stripe payments & webhooks for production-grade commerce systems',
        card3_title:'Multilingual Systems',   card3_desc:'Dynamic RTL/LTR dashboards with Arabic & English localization',
        card4_title:'Performance Aware',      card4_desc:'Eager loading, caching strategies, and queue-based processing',
      },
      skills: { section_label:'Skills', title:"Technical <span class='accent'>Expertise</span>", backend:'Backend', frontend:'Frontend', database:'Database', devops:'DevOps & Workflow' },
      projects: {
        section_label:'Projects', title:"Featured <span class='accent'>Work</span>",
        p1_type:'Multi-Vendor Platform', p1_title:'Multi-Vendor E-Commerce Platform',
        p1_desc:'A structured multi-vendor marketplace built from scratch using Laravel. This project emphasized scalable vendor separation and structured marketplace workflows, focusing on maintainable backend logic and payment-ready infrastructure.',
        p1_feat:'Key Features', p1_f1:'Dedicated vendor dashboard', p1_f2:'Multi-currency support', p1_f3:'Arabic & English localization', p1_f4:'Stripe payments & Webhooks', p1_f5:'Caching-based cart system', p1_f6:'Social auth (Google & Facebook)', p1_f7:'Clean modular architecture',
        p2_type:'SaaS Application', p2_title:'SaaS Invoicing Platform',
        p2_desc:'A multi-tenant SaaS system designed for freelancers and small agencies in the Arabic market. Built with scalability awareness and architectural clarity as primary objectives.',
        p2_feat:'Key Features', p2_f1:'Multi-tenant architecture', p2_f2:'Dynamic RTL / LTR interface', p2_f3:'PDF invoice generation', p2_f4:'Excel export functionality', p2_f5:'Queue-based processing', p2_f6:'Filament dashboard', p2_f7:'Clean separation of concerns',
      },
      experience: {
        section_label:'Experience', title:"My <span class='accent'>Journey</span>", current:'Current',
        role1:'Independent Full Stack Developer', org1:'Self-Directed Projects', period1:'2022 – Present',
        e1_1:'Designed and developed multi-tenant SaaS systems from scratch', e1_2:'Implemented Stripe payment integrations with Webhooks', e1_3:'Built modular backend architectures focused on maintainability', e1_4:'Developed multilingual dashboards with dynamic RTL/LTR support',
        role2:'Academic Software Projects', org2:'Computer Science Program', period2:'Academic',
        e2_1:'Built structured backend systems following software engineering principles', e2_2:'Designed relational databases with normalized schema modeling', e2_3:'Applied clean architecture concepts in Laravel-based applications',
      },
      services: {
        section_label:'Services', title:"What I <span class='accent'>Offer</span>",
        s1_title:'SaaS Platform Development', s1_desc:'End-to-end SaaS systems with multi-tenant architecture, subscription flows, and scalable infrastructure designed for growth.',
        s2_title:'Multi-Vendor Marketplace',  s2_desc:'Complete marketplace solutions with vendor dashboards, commission systems, multi-currency support, and localization.',
        s3_title:'Backend Architecture & Design', s3_desc:'System architecture consulting and implementation — modular design, service layers, performance optimization, and clean code.',
        s4_title:'Stripe Payment Integration', s4_desc:'Full payment flow implementation including Stripe Checkout, subscriptions, webhook handling, and dispute management.',
      },
      objective: {
        label:'Career Objective',
        text:'To design and deliver scalable SaaS platforms and structured backend systems that combine <strong>clean architecture</strong>, <strong>performance awareness</strong>, and <strong>payment-ready infrastructure</strong> — enabling businesses to grow on solid technical foundations.',
      },
      contact: {
        section_label:'Contact', title:"Let's <span class='accent'>Work Together</span>",
        sub:"Have a project in mind? Let's build something great together.",
        name_label:'Name', name_ph:'Your full name', email_label:'Email', email_ph:'your@email.com',
        msg_label:'Message', msg_ph:'Tell me about your project...',
        submit:'Send Message', submitting:'Sending...', success:"Message sent! I'll get back to you soon.",
        find_me:'Find me on',
        err_name_req:'Name is required.', err_name_short:'Name must be at least 2 characters.',
        err_email_req:'Email is required.', err_email_invalid:'Please enter a valid email address.',
        err_msg_req:'Message is required.', err_msg_short:'Message must be at least 10 characters.',
      },
      footer: { subtitle:'Full Stack Laravel Developer', copy:'© 2026 Omar Ahmad. All rights reserved.', back_top:'Back to Top' },
    },
    ar: {
      nav: { about:'من أنا', skills:'المهارات', projects:'أبرز الأعمال', experience:'الخبرة العملية', services:'الخدمات', contact:'تواصل معي' },
      hero: {
        badge:'متاح حالياً للمشاريع الجديدة',
        name_first:'عمر', name_last:'أحمد',
        title:'مطور Laravel Full-Stack المحترف',
        tagline:'متخصص في بناء <strong>أنظمة الـ SaaS</strong> والمنصات <strong>متعددة التجار (Multi-vendor)</strong> من الصفر، مع التركيز على البنية الهندسية النظيفة والأسس القابلة للتوسع.',
        sub:'خبير في تكامل بوابات الدفع، لوحات التحكم متعددة اللغات، وتطوير الأنظمة الخلفية المعقدة والمنظمة.',
        cta_projects:'مشاهدة أعمالي', cta_contact:'ابدأ مشروعك الآن',
        stat_years_label:'سنوات من الخبرة', stat_projects_label:'مشاريع ضخمة منفذة', stat_tech_label:'تقنيات احترافية', scroll:'مرر للأسفل',
      },
      about: {
        section_label:'من أنا', title:"بناء أسس برمجية <span class='accent'>بمقاييس هندسية</span>",
        p1:'أنا مطور Laravel Full-Stack أمتلك خلفية أكاديمية متينة في علوم الحاسوب وتقنية المعلومات. منذ إطلاق <strong>Laravel 9</strong>، تخصصت في بناء الأنظمة المتكاملة مع التركيز التام على الهندسة البرمجية النظيفة (Clean Architecture) وتنظيم الكود لضمان سهولة الصيانة والتطوير المستقبلي.',
        p2:'تتمحور خبرتي في <strong>تصميم المعمارية الخلفية (Backend)</strong>، وتطبيقات الـ SaaS، والمنصات التجارية الضخمة. لدي خبرة عملية معمقة في ربط بوابات الدفع مثل <strong>Stripe</strong> (بما في ذلك الـ Webhooks)، وتطوير لوحات تحكم ديناميكية تدعم لغات متعددة وأنظمة برمجية قابلة للنمو.',
        p3:'أتبع في عملي عقلية هندسية صارمة؛ حيث أعطي الأولوية لـ <strong>وضوح الكود، قابلية التوسع، وكفاءة الأداء</strong>، مؤمناً بأن الحلول التقنية المستدامة هي مفتاح النجاح لأي مشروع طموح.',
        tag1:'هندسة نظيفة', tag2:'خبير SaaS', tag3:'أنظمة الدفع', tag4:'برمجيات دولية', tag5:'تصميم الـ Backend',
        card1_title:'معمارية منظمة',         card1_desc:'بناء أنظمة برمجية وحدوية (Modular) مع فصل دقيق للمسؤوليات (Separation of Concerns).',
        card2_title:'ربط بوابات الدفع',      card2_desc:'تكامل احترافي مع Stripe والـ Webhooks لأنظمة تجارية عالية الموثوقية.',
        card3_title:'دعم تعدد اللغات',     card3_desc:'لوحات تحكم RTL/LTR ديناميكية بالكامل بتوطين احترافي لترجمة المحتوى.',
        card4_title:'كفاءة الأداء',         card4_desc:'تحسين الاستعلامات عبر Eager Loading، واستراتيجيات التخزين المؤقت، والمعالجة المتزامنة.',
      },
      skills: { section_label:'المهارات', title:"الخبرات <span class='accent'>التقنية</span>", backend:'تطوير الأنظمة الخلفية', frontend:'تطوير الواجهات الأمامية', database:'قواعد البيانات', devops:'أدوات العمل والـ DevOps' },
      projects: {
        section_label:'أبرز الأعمال', title:"مشاريع <span class='accent'>مختارة</span>",
        p1_type:'منصة تجارية ضخمة', p1_title:'متجر الكتروني متعدد التجار (Multi-Vendor)',
        p1_desc:'منصة تجارة إلكترونية متكاملة تم بناؤها من الصفر باستخدام Laravel، تركز على إدارة التجار بشكل مستقل وسير عمل متطور، مع بنية تحتية جاهزة لمعالجة المدفوعات العالمية.',
        p1_feat:'المميزات الرئيسية', p1_f1:'لوحة تحكم كاملة ومخصصة لكل تاجر', p1_f2:'دعم تعدد العملات والتحويل الآلي', p1_f3:'توطين كامل للغتين العربية والإنجليزية', p1_f4:'ربط مباشر مع Stripe وتفعيل الـ Webhooks', p1_f5:'نظام سلة متقدم مبني على التخزين المؤقت', p1_f6:'تسجيل الدخول عبر المنصات الاجتماعية', p1_f7:'بنية برمجية وحدوية وسهلة التطوير',
        p2_type:'تطبيق SaaS متكامل', p2_title:'منصة إصدار الفواتير (Invoicing SaaS)',
        p2_desc:'نظام SaaS متعدد المستأجرين (Multi-tenant) مصمم خصيصاً للمستقلين والشركات الصغيرة، يجمع بين كفاءة الأداء وسهولة تجربة المستخدم في بيئة برمجية آمنة.',
        p2_feat:'المميزات الرئيسية', p2_f1:'بنية Multi-tenant بمعزل تام للبيانات', p2_f2:'واجهة ذكية تدعم RTL / LTR تلقائياً', p2_f3:'توليد فواتير PDF احترافية ومؤتمتة', p2_f4:'تصدير التقارير والبيانات إلى ملفات Excel', p2_f5:'معالجة المهام الخلفية عبر أنظمة الطوابير', p2_f6:'لوحة تحكم إدارية متطورة (Filament)', p2_f7:'فصل منطقي ومعماري نظيف للأكواد',
      },
      experience: {
        section_label:'الخبرة العملية', title:"مسيرة <span class='accent'>الاحتراف</span>", current:'حالي',
        role1:'مطور Full-Stack مستقل', org1:'مشاريع برمجية خاصة', period1:'2022 – الآن',
        e1_1:'تصميم وتطوير أنظمة SaaS معقدة من الصفر بمقاييس عالمية.', e1_2:'تنفيذ حلول دفع إلكتروني متطورة ومعالجة العمليات المالية.', e1_3:'بناء معمارية برمجية تركز على الأمان وقابلية الصيانة طويلة الأمد.', e1_4:'تطوير لوحات قيادة تدعم التوطين واللغات المتعددة بشكل ديناميكي.',
        role2:'مشاريع أكاديمية وهندسية', org2:'برنامج علوم الحاسوب', period2:'فترة الدراسة',
        e2_1:'بناء أنظمة خلفية تتبع أرقى معايير هندسة البرمجيات الحديثة.', e2_2:'تصميم قواعد بيانات علائقية مع تحسين الاستعلامات والنمذجة.', e2_3:'تطبيق مبادئ SOLID و هندسة الأكواد النظيفة في بيئة Laravel.',
      },
      services: {
        section_label:'الخدمات', title:"ماذا <span class='accent'>أقدم لعملائي</span>",
        s1_title:'تطوير منصات الـ SaaS', s1_desc:'بناء أنظمة SaaS متكاملة تدعم تعدد المستأجرين، أنظمة الاشتراكات، وبنية تحتية سحابية قابلة للنمو السريع.',
        s2_title:'تطوير الأسواق الإلكترونية',  s2_desc:'حلول متكاملة للمتاجر متعددة التجار مع لوحات تحكم متقدمة ونظام عمولات مؤتمت ودعم دولي.',
        s3_title:'هندسة وبناء الـ Backend', s3_desc:'استشارات وتنفيذ معمارية الأنظمة: تصميم وحدوي، طبقات الخدمة، تحسين الأداء، وكتابة أكواد نظيفة.',
        s4_title:'تكامل حلول الدفع (Stripe)', s4_desc:'تنفيذ دورة الدفع الكاملة: الاشتراكات، الفواتير، معالجة الـ Webhooks، وإدارة النزاعات المالية.',
      },
      objective: {
        label:'الهدف المهني',
        text:'أسعى لتصميم وتقديم منصات SaaS وأنظمة خلفية منظمة تجمع بين <strong>جودة الهندسة البرمجية</strong> و<strong>كفاءة الأداء</strong> و<strong>البنية التحتية المتينة</strong>؛ لتمكين الشركات من التوسع بثقة على أسس تقنية صلبة.',
      },
      contact: {
        section_label:'تواصل معي', title:"لنبتكر <span class='accent'>مشروعك القادم</span>",
        sub:'هل لديك فكرة مشروع طموحة؟ دعنا نحولها إلى واقع تقني ملموس.',
        name_label:'الاسم الكامل', name_ph:'أدخل اسمك هنا', email_label:'البريد الإلكتروني', email_ph:'example@domain.com',
        msg_label:'تفاصيل المشروع', msg_ph:'أخبرني بلمحة عن مشروعك وكيف يمكنني مساعدتك...',
        submit:'إرسال الرسالة', submitting:'جاري الإرسال...', success:'تم استلام رسالتك بنجاح! سأتواصل معك في أقرب وقت.',
        find_me:'تواصل معي عبر المنصات',
        err_name_req:'يرجى إدخال الاسم.', err_name_short:'يجب أن يتكون الاسم من حرفين على الأقل.',
        err_email_req:'البريد الإلكتروني مطلوب.', err_email_invalid:'يرجى إدخال بريد إلكتروني صحيح.',
        err_msg_req:'يرجى كتابة رسالتك.', err_msg_short:'يجب أن تكون الرسالة 10 أحرف على الأقل.',
      },
      footer: { subtitle:'مطور Laravel Full-Stack', copy:'© 2026 جميع الحقوق محفوظة لعمر أحمد.', back_top:'العودة للأعلى' },
    },

  };

  /* ══════════════ HELPERS ══════════════ */
  function getLangKey(lang, key) {
    return key.split('.').reduce(function(o, k){ return o && o[k]; }, T[lang]);
  }

  /* ══════════════ THEME ══════════════ */
  var THEME_KEY = 'oa-theme';
  var THEMES    = ['system','dark','light'];
  var ICONS = {
    dark:   '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>',
    light:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>',
    system: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>',
  };
  var themePref = localStorage.getItem(THEME_KEY) || 'system';
  var sysDark   = window.matchMedia('(prefers-color-scheme: dark)');

  function resolveTheme(pref) { return pref === 'system' ? (sysDark.matches ? 'dark' : 'light') : pref; }

  function applyTheme(pref) {
    document.documentElement.setAttribute('data-theme', resolveTheme(pref));
    document.documentElement.setAttribute('data-theme-pref', pref);
    var btn = document.getElementById('themeToggle');
    if (btn) btn.innerHTML = ICONS[pref];
  }

  function initTheme() {
    applyTheme(themePref);
    sysDark.addEventListener('change', function() { if (themePref === 'system') applyTheme('system'); });
    var btn = document.getElementById('themeToggle');
    if (btn) btn.addEventListener('click', function() {
      themePref = THEMES[(THEMES.indexOf(themePref) + 1) % THEMES.length];
      localStorage.setItem(THEME_KEY, themePref);
      applyTheme(themePref);
    });
  }

  /* ══════════════ I18N ══════════════ */
  var LANG_KEY = 'oa-lang';
  var currentLang = localStorage.getItem(LANG_KEY) || 'en';

  function updateDOM(lang) {
    document.querySelectorAll('[data-i18n]').forEach(function(el) {
      var val = getLangKey(lang, el.getAttribute('data-i18n'));
      if (val === undefined) return;
      el.hasAttribute('data-i18n-html') ? (el.innerHTML = val) : (el.textContent = val);
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(function(el) {
      var val = getLangKey(lang, el.getAttribute('data-i18n-placeholder'));
      if (val !== undefined) el.placeholder = val;
    });
    document.title = lang === 'ar'
      ? 'عمر أحمد — مطور Laravel Full Stack'
      : 'Omar Ahmad — Full Stack Laravel Developer';
  }

  function updateLangBtn(lang) {
    var btn = document.getElementById('langToggle');
    if (!btn) return;
    var primary = btn.querySelector('.seg-primary');
    var other   = btn.querySelector('.seg-other');
    if (primary) { primary.textContent = lang === 'ar' ? 'AR' : 'EN'; primary.classList.add('lang-seg-active'); }
    if (other)   { other.textContent   = lang === 'ar' ? 'EN' : 'AR'; other.classList.remove('lang-seg-active'); }
  }

  function applyLang(lang) {
    currentLang = lang;
    localStorage.setItem(LANG_KEY, lang);
    document.documentElement.setAttribute('lang', lang);
    document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
    updateDOM(lang);
    updateLangBtn(lang);
    startTyping(T[lang].hero.title);
  }

  function initI18n() {
    var btn = document.getElementById('langToggle');
    if (btn) btn.addEventListener('click', function() { applyLang(currentLang === 'en' ? 'ar' : 'en'); });
    applyLang(currentLang);
  }

  /* ══════════════ ANIMATIONS ══════════════ */
  function initScrollAnimations() {
    var els = document.querySelectorAll('[data-animate]');
    if (!('IntersectionObserver' in window)) { els.forEach(function(el){ el.classList.add('visible'); }); return; }
    var obs = new IntersectionObserver(function(entries) {
      entries.forEach(function(e){ if (e.isIntersecting){ e.target.classList.add('visible'); obs.unobserve(e.target); } });
    }, { threshold: 0.12, rootMargin: '0px 0px -50px 0px' });
    els.forEach(function(el){ obs.observe(el); });
  }

  function initParallax() {
    var orbs = document.querySelectorAll('.orb');
    if (!orbs.length) return;
    document.addEventListener('mousemove', function(e) {
      var x = (e.clientX / window.innerWidth  - 0.5) * 18;
      var y = (e.clientY / window.innerHeight - 0.5) * 18;
      orbs.forEach(function(orb, i) {
        var f = (i + 1) * 0.35;
        orb.style.transform = 'translate(' + (x*f) + 'px,' + (y*f) + 'px)';
      });
    }, { passive: true });
  }

  function initCounters() {
    var els = document.querySelectorAll('.stat-number');
    if (!('IntersectionObserver' in window)) return;
    var obs = new IntersectionObserver(function(entries){
      entries.forEach(function(entry){
        if (!entry.isIntersecting) return;
        var el  = entry.target;
        var raw = el.textContent.replace(/[^0-9]/g,'');
        var sfx = el.textContent.replace(/[0-9]/g,'');
        var tgt = parseInt(raw, 10);
        if (isNaN(tgt)) return;
        var cur = 0, step = tgt / (900/16);
        (function tick(){ cur = Math.min(cur+step, tgt); el.textContent = Math.floor(cur)+sfx; if(cur<tgt) requestAnimationFrame(tick); })();
        obs.unobserve(el);
      });
    }, { threshold: 0.8 });
    els.forEach(function(el){ obs.observe(el); });
  }

  var typingTimer = null;
  function startTyping(text) {
    var container = document.querySelector('.hero-title');
    if (!container) return;
    clearTimeout(typingTimer);
    var textEl  = container.querySelector('.typing-text');
    var cursor  = container.querySelector('.typing-cursor');
    if (!textEl) { textEl = document.createElement('span'); textEl.className = 'typing-text'; container.appendChild(textEl); }
    if (!cursor) { cursor = document.createElement('span'); cursor.className = 'typing-cursor'; container.appendChild(cursor); }
    textEl.textContent = '';
    var i = 0;
    function type(){ if (i < text.length){ textEl.textContent += text[i++]; typingTimer = setTimeout(type, 50); } }
    typingTimer = setTimeout(type, 400);
  }

  /* ══════════════ NAVBAR ══════════════ */
  function initNavbar() {
    var navbar    = document.getElementById('navbar');
    var hamburger = document.getElementById('hamburger');
    var navLinks  = document.getElementById('navLinks');
    var sections  = document.querySelectorAll('section[id]');

    function onScroll() {
      if (navbar) navbar.classList.toggle('scrolled', window.scrollY > 20);
      var scrollY = window.scrollY + 120;
      sections.forEach(function(sec){
        var link = document.querySelector('.nav-link[href="#'+sec.id+'"]');
        if (link) link.classList.toggle('active', scrollY >= sec.offsetTop && scrollY < sec.offsetTop + sec.offsetHeight);
      });
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    if (hamburger) hamburger.addEventListener('click', function(){
      hamburger.classList.toggle('open');
      if (navLinks) navLinks.classList.toggle('open');
    });

    document.querySelectorAll('.nav-link').forEach(function(l){
      l.addEventListener('click', function(){
        if (hamburger) hamburger.classList.remove('open');
        if (navLinks)  navLinks.classList.remove('open');
      });
    });

    document.querySelectorAll('a[href^="#"]').forEach(function(a){
      a.addEventListener('click', function(e){
        var target = document.querySelector(a.getAttribute('href'));
        if (!target) return;
        e.preventDefault();
        window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' });
      });
    });
  }

  /* ══════════════ CONTACT FORM ══════════════ */
  function initContact() {
    var form     = document.getElementById('contactForm');
    if (!form) return;
    var nameEl   = document.getElementById('contactName');
    var emailEl  = document.getElementById('contactEmail');
    var msgEl    = document.getElementById('contactMessage');
    var nameErr  = document.getElementById('nameError');
    var emailErr = document.getElementById('emailError');
    var msgErr   = document.getElementById('messageError');
    var submitBtn= document.getElementById('submitBtn');
    var success  = document.getElementById('formSuccess');

    function t(k) { return getLangKey(currentLang, k) || ''; }
    function isEmail(v) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v); }
    function setErr(el, eEl, msg) { el.classList.add('error');    eEl.textContent = msg; }
    function clrErr(el, eEl)      { el.classList.remove('error'); eEl.textContent = ''; }

    function validate() {
      var ok = true, name = nameEl.value.trim(), email = emailEl.value.trim(), msg = msgEl.value.trim();
      if (!name)          { setErr(nameEl,  nameErr,  t('contact.err_name_req'));     ok=false; }
      else if(name.length<2){ setErr(nameEl, nameErr, t('contact.err_name_short'));   ok=false; }
      else clrErr(nameEl, nameErr);
      if (!email)         { setErr(emailEl, emailErr, t('contact.err_email_req'));    ok=false; }
      else if(!isEmail(email)){ setErr(emailEl,emailErr,t('contact.err_email_invalid'));ok=false; }
      else clrErr(emailEl, emailErr);
      if (!msg)           { setErr(msgEl,   msgErr,   t('contact.err_msg_req'));      ok=false; }
      else if(msg.length<10){ setErr(msgEl, msgErr,   t('contact.err_msg_short'));    ok=false; }
      else clrErr(msgEl, msgErr);
      return ok;
    }

    nameEl.addEventListener('blur',  validate);
    emailEl.addEventListener('blur', validate);
    msgEl.addEventListener('blur',   validate);

    form.addEventListener('submit', function(e){
      e.preventDefault();
      if (!validate()) return;
      var label = submitBtn.querySelector('.btn-label');
      submitBtn.disabled = true;
      if (label) label.textContent = t('contact.submitting');
      setTimeout(function(){
        form.reset();
        submitBtn.disabled = false;
        if (label) label.textContent = t('contact.submit');
        var sEl = success ? success.querySelector('[data-i18n]') : null;
        if (sEl) sEl.textContent = t('contact.success');
        if (success) success.classList.add('visible');
        setTimeout(function(){ if(success) success.classList.remove('visible'); }, 5000);
      }, 1400);
    });
  }

  /* ══════════════ INIT ══════════════ */
  document.addEventListener('DOMContentLoaded', function() {
    initTheme();
    initI18n();
    initNavbar();
    initContact();
    initScrollAnimations();
    initParallax();
    initCounters();
  });

})();
