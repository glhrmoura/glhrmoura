import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enUS from '~/i18n/translations/en-us';
import ptBR from '~/i18n/translations/pt-br';
import esES from '~/i18n/translations/es-es';

import { TranslationService } from '~/services/translations';

import { Languages } from '~/types/language';

i18n.use(initReactI18next).init({
  lowerCaseLng: true,
  lng: TranslationService.getDefaultLang(),
  resources: {
    [Languages.EN_US]: {
      translation: enUS,
    },
    [Languages.PT_BR]: {
      translation: ptBR,
    },
    [Languages.ES_ES]: {
      translation: esES,
    },
  },
});

export { i18n };
