import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

import en from './locales/en.json';
import ar from './locales/ar.json';
import hi from './locales/hi.json';
import {Language} from '@FocusWorld/types';

const DEFAULT_LANGUAGE = Language.EN;

const resources = {
  en: {translation: en},
  ar: {translation: ar},
  hi: {translation: hi},
};

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  resources,
  fallbackLng: DEFAULT_LANGUAGE,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
