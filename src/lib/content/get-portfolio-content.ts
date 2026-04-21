import { aboutCardOrder } from '@/content/about';
import { experienceDefinitions } from '@/content/experience';
import { projectDefinitions } from '@/content/projects';
import { serviceDefinitions } from '@/content/services';
import { skillCategoryDefinitions, skillCloud } from '@/content/skills';
import { socialLinkDefinitions } from '@/content/social-links';
import { ar } from '@/messages/ar';
import { en } from '@/messages/en';
import type { Locale } from '@/lib/i18n/config';
import type { MessageDictionary, PortfolioContent, PortfolioMessages } from '@/types/portfolio';

const dictionaries: MessageDictionary = {
  en,
  ar,
};

export function getPortfolioMessages(locale: Locale): PortfolioMessages {
  return dictionaries[locale];
}

export function getPortfolioContent(locale: Locale): PortfolioContent {
  const messages = getPortfolioMessages(locale);

  return {
    meta: messages.meta,
    nav: messages.nav,
    hero: messages.hero,
    about: {
      sectionLabel: messages.about.sectionLabel,
      titleHtml: messages.about.titleHtml,
      paragraphsHtml: messages.about.paragraphsHtml,
      tags: messages.about.tags,
      cards: aboutCardOrder.map((cardId) => ({
        ...messages.about.cards[cardId],
        icon: cardId,
      })),
    },
    skills: {
      sectionLabel: messages.skills.sectionLabel,
      titleHtml: messages.skills.titleHtml,
      categories: skillCategoryDefinitions.map((category) => ({
        key: category.key,
        title: messages.skills.categories[category.key],
        items: category.items,
        icon: category.icon,
      })),
      cloud: [...skillCloud],
    },
    projects: {
      sectionLabel: messages.projects.sectionLabel,
      titleHtml: messages.projects.titleHtml,
      visualLabels: messages.projects.visualLabels,
      items: projectDefinitions.map((project) => ({
        id: project.id,
        number: project.number,
        type: messages.projects.items[project.id].type,
        title: messages.projects.items[project.id].title,
        description: messages.projects.items[project.id].description,
        featuresTitle: messages.projects.featuresTitle,
        features: messages.projects.items[project.id].features,
        tech: project.tech,
        visualVariant: project.visualVariant,
        liveUrl: project.liveUrl,
      })),
    },
    experience: {
      sectionLabel: messages.experience.sectionLabel,
      titleHtml: messages.experience.titleHtml,
      currentLabel: messages.experience.currentLabel,
      items: experienceDefinitions.map((entry) => ({
        id: entry.id,
        period: messages.experience.items[entry.id].period,
        badge: entry.id === 'independentDeveloper' ? messages.experience.currentLabel : undefined,
        role: messages.experience.items[entry.id].role,
        organization: messages.experience.items[entry.id].organization,
        points: messages.experience.items[entry.id].points,
        animation: entry.animation,
      })),
    },
    services: {
      sectionLabel: messages.services.sectionLabel,
      titleHtml: messages.services.titleHtml,
      items: serviceDefinitions.map((service) => ({
        id: service.id,
        title: messages.services.items[service.id].title,
        description: messages.services.items[service.id].description,
        icon: service.icon,
        delay: service.delay,
      })),
    },
    objective: messages.objective,
    contact: {
      sectionLabel: messages.contact.sectionLabel,
      titleHtml: messages.contact.titleHtml,
      sub: messages.contact.sub,
      fields: messages.contact.fields,
      submit: messages.contact.submit,
      findMe: messages.contact.findMe,
      directEmailLabel: messages.contact.directEmailLabel,
      messages: messages.contact.messages,
      socials: socialLinkDefinitions.map((social) => ({
        ...social,
        name: messages.contact.socialNames[social.id],
      })),
    },
    footer: messages.footer,
    ui: messages.ui,
  };
}
