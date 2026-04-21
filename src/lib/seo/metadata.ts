import type { Metadata } from 'next';

import { siteConfig } from '@/content/site';
import { getPortfolioMessages } from '@/lib/content/get-portfolio-content';
import type { Locale } from '@/lib/i18n/config';

export function buildMetadata(locale: Locale): Metadata {
  const messages = getPortfolioMessages(locale);
  const canonical = `${siteConfig.url}/${locale}`;

  return {
    title: messages.meta.title,
    description: messages.meta.description,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical,
      languages: {
        en: `${siteConfig.url}/en`,
        ar: `${siteConfig.url}/ar`,
      },
    },
    openGraph: {
      title: messages.meta.title,
      description: messages.meta.description,
      url: canonical,
      siteName: siteConfig.name,
      type: 'website',
      locale: locale === 'ar' ? 'ar_AR' : 'en_US',
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: siteConfig.name,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: messages.meta.title,
      description: messages.meta.description,
      images: [siteConfig.ogImage],
    },
  };
}
