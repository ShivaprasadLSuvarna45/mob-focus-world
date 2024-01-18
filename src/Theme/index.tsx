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
    black: '#000000',
    primary: '#EF3340',
    secondary: '#009739',
    tertiary: '#000000',
    danger: '#c5000d',
    link: '#2724c4',
  },
};
const indTheme = {
  ...DefaultTheme,
  myOwnProperty: true,
  bgImage: '',
  colors: {
    white: '#FFFFFF',
    black: '#000000',
    primary: '#FF671F',
    secondary: '#046A38',
    tertiary: '#06038D',
    danger: '#c5000d',
    link: '#2724c4',
  },
};

const ThemeProvider = ({children}: {children: JSX.Element}) => {
  const {country} = useMainStore();

  const appTheme: ThemeProp = country === COUNTRY.UAE ? uaeTheme : indTheme;

  return <PaperProvider theme={appTheme}>{children}</PaperProvider>;
};

export type AppTheme = typeof uaeTheme;
export default ThemeProvider;
