import { Languages } from '~/types/language';

const check = (lang: string): string => {
  return RegExp(lang, 'i').test(String(Object.values(Languages)))
    ? lang.toLocaleLowerCase()
    : '';
};

const getDefaultLang = (): string => {
  const lang = new URLSearchParams(document.location.search).get('lang') || '';

  return (
    check(lang) ||
    check(window.navigator.language) ||
    Languages.EN_US
  );
};

export const TranslationService = {
  check,
  getDefaultLang,
};
