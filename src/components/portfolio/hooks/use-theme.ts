'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';

import { themeOptions } from '@/content/site';
import type { ThemePreference } from '@/types/portfolio';

const STORAGE_KEY = 'oa-theme';
const MEDIA_QUERY = '(prefers-color-scheme: dark)';

function resolveTheme(preference: ThemePreference): 'dark' | 'light' {
  if (preference === 'system') {
    return window.matchMedia(MEDIA_QUERY).matches ? 'dark' : 'light';
  }

  return preference;
}

function applyTheme(preference: ThemePreference): void {
  const resolved = resolveTheme(preference);
  document.documentElement.setAttribute('data-theme', resolved);
  document.documentElement.setAttribute('data-theme-pref', preference);
}

export function useTheme(labels: Record<ThemePreference, string>) {
  const [preference, setPreference] = useState<ThemePreference>('system');

  useEffect(() => {
    const stored = (localStorage.getItem(STORAGE_KEY) as ThemePreference | null) ?? 'system';
    setPreference(stored);
    applyTheme(stored);

    const media = window.matchMedia(MEDIA_QUERY);
    const handleChange = () => {
      if ((document.documentElement.getAttribute('data-theme-pref') ?? 'system') === 'system') {
        applyTheme('system');
      }
    };

    media.addEventListener('change', handleChange);
    return () => media.removeEventListener('change', handleChange);
  }, []);

  const cycleTheme = useCallback(() => {
    setPreference((current: ThemePreference) => {
      const order: ThemePreference[] = themeOptions.map((option) => option.key);
      const next = order[(order.indexOf(current) + 1) % order.length];
      localStorage.setItem(STORAGE_KEY, next);
      applyTheme(next);
      return next;
    });
  }, []);

  const label = useMemo(() => labels[preference] ?? labels.system, [labels, preference]);

  return {
    preference,
    label,
    cycleTheme,
  };
}
