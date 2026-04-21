import type { ThemeOption } from '@/types/portfolio';

export const siteConfig = {
  name: 'Omar Ahmad',
  url: 'https://omar-ahmad.netlify.app',
  ogImage: '/og-image.svg',
  publicEmail: 'omar.m.ahmad.2024@gmail.com',
  googleSiteVerification: 'oQaS6LMWPkHw3F7QQsiL5jVyi9DDXvhWFUfCZi2gcjo',
} as const;

export const themeOptions: ThemeOption[] = [
  { key: 'system' },
  { key: 'dark' },
  { key: 'light' },
];
