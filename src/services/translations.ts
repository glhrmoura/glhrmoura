import { Languages } from '~/types/language';

const STORAGE_KEY = 'preferred_language';

const check = (lang: string): string => {
  return RegExp(lang, 'i').test(String(Object.values(Languages)))
    ? lang.toLocaleLowerCase()
    : '';
};

const getDefaultLang = (): string => {
  const storedLang = localStorage.getItem(STORAGE_KEY);
  if (storedLang && check(storedLang)) {
    return storedLang;
  }

  const lang = new URLSearchParams(document.location.search).get('lang') || '';
  const browserLang = check(window.navigator.language);
  return check(lang) || browserLang || Languages.EN_US;
};

const setLanguage = (lang: string): void => {
  if (check(lang)) {
    localStorage.setItem(STORAGE_KEY, lang);
  }
};

export const TranslationService = {
  check,
  getDefaultLang,
  setLanguage,
};
