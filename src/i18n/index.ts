import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

import * as en from './locales/en.json';
import * as ar from './locales/ar.json';
import {Language} from '@FocusWorld/types';

const DEFAULT_LANGUAGE = Language.EN;

const resources = {
  en: {translation: en},
  ar: {translation: ar},
};

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  resources,
  lng: DEFAULT_LANGUAGE,
  fallbackLng: DEFAULT_LANGUAGE,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
