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

const ThemeProvider = ({children}: {children: JSX.Element}) => {
  const appTheme: ThemeProp = true ? uaeTheme : uaeTheme;

  return <PaperProvider theme={appTheme}>{children}</PaperProvider>;
};

export type AppTheme = typeof uaeTheme;
export default ThemeProvider;
