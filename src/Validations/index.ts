import {RegExt} from '@FocusWorld/RegEx';
import {TFunction} from 'i18next';
import * as Yup from 'yup';

export const getRegistrationSchema = (t: TFunction) =>
  Yup.object({
    country: Yup.string()
      .max(15, 'Must be 15 characters or less')
      .required('Required'),
    userName: Yup.string()
      .max(15, 'Must be 15 characters or less')
      .required('Required'),
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
