import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { PortfolioPage } from '@/components/portfolio/portfolio-page';
import { isValidLocale, locales, type Locale } from '@/lib/i18n/config';
import { buildMetadata } from '@/lib/seo/metadata';

type Props = {
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isValidLocale(locale)) {
    return {};
  }

  return buildMetadata(locale);
}

export default async function LocalePage({ params }: Props) {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  return <PortfolioPage locale={locale as Locale} />;
}
