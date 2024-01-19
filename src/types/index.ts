export enum Language {
  EN = 'en',
  AR = 'ar',
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
  UAE = 'AE',
  IND = 'IND',
}

export enum FireStoreCollection {
  USER = 'user',
}
