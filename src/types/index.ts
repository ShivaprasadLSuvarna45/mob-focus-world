export enum Language {
  EN = 'en',
  AR = 'ar',
  HI = 'hi',
}

export enum MainStoreAction {
  LOADING = 'LOADING',
  LOGIN = 'LOGIN',
  LOGOUT = 'LOGOUT',
  CHANGE_COUNTRY = 'CHANGE_COUNTRY',
}

export type MainStoreData = {
  loading: boolean;
  user?: object;
  country?: COUNTRY;
};

export enum SizeVariant {
  XXXS = 'xxxs',
  XXS = 'xxs',
  XS = 'xs',
  SM = 'sm',
  MD = 'md',
  LG = 'lg',
  XL = 'xl',
  XXL = 'xxl',
  XXXL = 'xxxl',
}

export type SpacerProps = {
  size?: SizeVariant;
  horizontal?: boolean;
  vertical?: boolean;
};

export enum COUNTRY {
  AE = 'AE',
  IN = 'IN',
  UK = 'UK',
  EG = 'EG',
}

export enum FireStoreCollection {
  USER = 'users',
}

export enum StorageKey {
  LANG = 'language',
  COUNTRY = 'country',
}
