import {useMainStore} from '@FocusWorld/Hooks';
import {COUNTRY} from '@FocusWorld/types';
import React from 'react';
import {
  MD3LightTheme as DefaultTheme,
  Provider as PaperProvider,
} from 'react-native-paper';

const uaeTheme = {
  ...DefaultTheme,
  myOwnProperty: true,
  bgImage: '',
  colors: {
    white: '#FFFFFF',
    primary: '#EF3340',
    secondary: '#009739',
    tertiary: '#000000',
  },
};
const indTheme = {
  ...DefaultTheme,
  myOwnProperty: true,
  bgImage: '',
  colors: {
    white: '#FFFFFF',
    primary: '#FF671F',
    secondary: '#046A38',
    tertiary: '#06038D',
  },
};

const ThemeProvider = ({children}: {children: JSX.Element}) => {
  const {country} = useMainStore();

  const appTheme: ThemeProp = country === COUNTRY.UAE ? uaeTheme : indTheme;

  return <PaperProvider theme={appTheme}>{children}</PaperProvider>;
};

export type AppTheme = typeof uaeTheme;
export default ThemeProvider;
