import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import { EN_US, PT_BR } from '~/i18n/translation';
import { Languages } from '~/i18n/types/languages';

const queryLang = new URLSearchParams(document.location.search).get('lang') || '';
const isValidQueryLang = (Object.values(Languages) as string[]).includes(queryLang);
const isValidNavigatorLang = (Object.values(Languages) as string[]).includes(window.navigator.language);

const lng = (
  (isValidQueryLang && queryLang) || 
  (isValidNavigatorLang && window.navigator.language) || 
  Languages.EN_US
);

i18n.use(initReactI18next).init({
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
