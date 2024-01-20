import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import { EN_US, PT_BR } from '~/i18n/translation';

import { Languages } from '~/types/language';

const checkLang = (lang: string): boolean => {
  return RegExp(lang, 'i').test(String(Object.values(Languages)));
}

const lang = new URLSearchParams(document.location.search).get('lang') || '';
const isValidLang = checkLang(lang);
const isValidNavigatorLang = checkLang(window.navigator.language);

const lng = (
  (isValidLang && lang) || 
  (isValidNavigatorLang && window.navigator.language) || 
  Languages.EN_US
);

export default i18n.use(initReactI18next).init({
  lng,
  fallbackLng: Languages.EN_US,
  resources: {
    [Languages.EN_US]: {
      translation: EN_US,
    },
    [Languages.PT_BR]: {
      translation: PT_BR,
    },
  },
});
