import React from 'react';
import {SafeAreaView} from 'react-native';

import '@FocusWorld/i18n';
import ThemeProvider from '@FocusWorld/Theme';
import Setup from '@FocusWorld/Features/Setup';

function App(): React.JSX.Element {
  return (
    <ThemeProvider>
      <SafeAreaView>
        <Setup />
      </SafeAreaView>
    </ThemeProvider>
  );
}

export default App;
