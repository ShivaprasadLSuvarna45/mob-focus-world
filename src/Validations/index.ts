import {RegExt} from '@FocusWorld/RegEx';
import {COUNTRY} from '@FocusWorld/types';
import {TFunction} from 'i18next';
import * as Yup from 'yup';

export const getUserNameValidation = (country: COUNTRY) => {
  switch (country) {
    case COUNTRY.AE:
      return RegExt.USERNAME_AE;
    case COUNTRY.IN:
      return RegExt.USERNAME_IN;
    case COUNTRY.UK:
      return RegExt.USERNAME_UK;
    case COUNTRY.EG:
      return RegExt.USERNAME_EG;
    default:
      return RegExt.USERNAME_IN;
  }
};

export const getRegistrationSchema = (t: TFunction, country: COUNTRY) =>
  Yup.object({
    country: Yup.string()
      .max(15, 'Must be 15 characters or less')
      .required('Required'),
    userName: Yup.string()
      .max(15, 'Must be 15 characters or less')
      .matches(getUserNameValidation(country))
      .required('Required'),
    email: Yup.string()
      .email('Invalid email address')
      .matches(RegExt.EMAIL)
      .required('Required'),
    password: Yup.string()
      .min(5)
      .max(20, 'Must be 6 characters')
      .matches(RegExt.PASSWORD)
      .required('Required'),
  });

export const getLoginSchema = (t: TFunction) =>
  Yup.object({
    email: Yup.string()
      .email('Invalid email address')
      .matches(RegExt.EMAIL)
      .required('Required'),
    password: Yup.string()
      .min(6)
      .max(20, 'Must be 6 characters')
      .matches(RegExt.PASSWORD)
      .required('Required'),
  });
