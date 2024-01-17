import React from 'react';
import {useTranslation} from 'react-i18next';
import {Pressable, SafeAreaView, StyleSheet, View} from 'react-native';
import {Text, useTheme} from 'react-native-paper';

import '@FocusWorld/i18n';
import i18next from 'i18next';
import {Language} from '@FocusWorld/types';

function App(): React.JSX.Element {
  const theme = useTheme();

  const {t} = useTranslation();

  const onPress = () => {
    const lang = i18next.language;
    i18next.changeLanguage(lang === Language.AR ? Language.EN : Language.AR);
  };

  return (
    <SafeAreaView>
      <View
        style={{
          backgroundColor: theme.colors.primary,
        }}>
        <Pressable onPress={onPress}>
          <Text>Press</Text>
        </Pressable>
        <Text style={styles.highlight}>
          {t('name') + ' -> '}
          {i18next.language}
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
