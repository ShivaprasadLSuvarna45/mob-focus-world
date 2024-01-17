import React from 'react';
import {SafeAreaView} from 'react-native';

import '@FocusWorld/i18n';
import ThemeProvider from '@FocusWorld/Theme';
import Test from '@FocusWorld/Features/Test';

function App(): React.JSX.Element {
  return (
    <ThemeProvider>
      <SafeAreaView>
        <Test />
      </SafeAreaView>
    </ThemeProvider>
  );
}

export default App;
