import {RtlLanguageList} from '@FocusWorld/Constants';
import {COUNTRY, Language} from '@FocusWorld/types';

const getFlagCode = (countryCode: COUNTRY) =>
  countryCode === COUNTRY.UK ? 'gb' : countryCode.toLowerCase();

export const getFlag = (countryCode = 'in') =>
  `https://flagcdn.com/w320/${getFlagCode(countryCode)}.png`;

export const isRrtLanguage = (ln: Language) => RtlLanguageList.includes(ln);
