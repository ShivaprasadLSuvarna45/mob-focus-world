import {useMainStore} from '@FocusWorld/Hooks';
import {COUNTRY} from '@FocusWorld/types';
import React from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import {egTheme, indTheme, uaeTheme, ukTheme} from './AppTheme';

const getTheme = (country: COUNTRY) => {
  switch (country) {
    case COUNTRY.IN:
      return indTheme;
    case COUNTRY.AE:
      return uaeTheme;
    case COUNTRY.UK:
      return ukTheme;
    case COUNTRY.EG:
      return egTheme;

    default:
      return indTheme;
  }
};

const ThemeProvider = ({children}: {children: JSX.Element}) => {
  const {country} = useMainStore();

  const appTheme: ThemeProp = getTheme(country);

  return <PaperProvider theme={appTheme}>{children}</PaperProvider>;
};

export type AppTheme = typeof uaeTheme;
export default ThemeProvider;
