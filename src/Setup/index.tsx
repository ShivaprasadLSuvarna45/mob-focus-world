import React from 'react';
import Firebase from './Firebase';
import MainStore from './MainStore';
import Navigation from '@FocusWorld/Navigation';
import {NavigationContainer} from '@react-navigation/native';
import ThemeProvider from '@FocusWorld/Theme';

const Setup = () => {
  return (
    <MainStore>
      <ThemeProvider>
        <NavigationContainer>
          <Firebase>
            <Navigation />
          </Firebase>
        </NavigationContainer>
      </ThemeProvider>
    </MainStore>
  );
};

export default Setup;
