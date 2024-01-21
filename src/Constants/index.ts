import {COUNTRY, Language} from '@FocusWorld/types';
import i18n from 'i18next';

export const countryList = [
  {label: i18n.t('country.ae'), value: COUNTRY.AE},
  {label: i18n.t('country.in'), value: COUNTRY.IN},
  {label: i18n.t('country.uk'), value: COUNTRY.UK},
  {label: i18n.t('country.eg'), value: COUNTRY.EG},
];

export const languageList = [
  {key: Language.EN, language: i18n.t('ln.en')},
  {key: Language.AR, language: i18n.t('ln.ar')},
  {key: Language.HI, language: i18n.t('ln.hi')},
];

export const RtlLanguageList = [Language.AR];
