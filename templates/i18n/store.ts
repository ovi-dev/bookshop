import { create } from 'zustand';
import i18n from './i18n';

type LanguageStore = {
  locale: string;
  setLocale: (locale: string) => void;
  t: (key: string, params?: Record<string, string | number>) => string;
};

export const useLanguage = create<LanguageStore>(set => ({
  locale: i18n.locale,
  setLocale: (locale: string) => {
    i18n.locale = locale;
    set({ locale });
  },
  t: (key: string, params?: Record<string, string | number>) => {
    return i18n.t(key, params);
  },
}));
