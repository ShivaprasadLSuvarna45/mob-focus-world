export enum Language {
  EN = 'en',
  AR = 'ar',
}

export enum MainStoreAction {
  LOADING = 'LOADING',
  LOGIN = 'LOGIN',
  LOGOUT = 'LOGOUT',
  CHANGE_LANG = 'CHANGE_LANG',
}

export type MainStoreData = {
  loading: boolean;
  user?: object;
  country?: string;
};
