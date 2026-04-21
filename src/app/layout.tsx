import type { Metadata } from 'next';
import type { ReactNode } from 'react';

import { siteConfig } from '@/content/site';

import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: siteConfig.name,
  description: 'Structured SaaS systems, multilingual products, and practical AI integrations.',
  verification: {
    google: siteConfig.googleSiteVerification,
  },
};

const documentSetupScript = `(function(){
  try {
    var pref = localStorage.getItem('oa-theme') || 'system';
    var resolved = pref === 'system'
      ? (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
      : pref;
    var locale = location.pathname.split('/').filter(Boolean)[0] === 'ar' ? 'ar' : 'en';
    document.documentElement.setAttribute('data-theme', resolved);
    document.documentElement.setAttribute('data-theme-pref', pref);
    document.documentElement.setAttribute('lang', locale);
    document.documentElement.setAttribute('dir', locale === 'ar' ? 'rtl' : 'ltr');
  } catch (error) {}
})();`;

type Props = {
  children: ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en" dir="ltr" data-theme="dark" data-theme-pref="system" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;500;600;700;800;900&family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        <script dangerouslySetInnerHTML={{ __html: documentSetupScript }} />
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
