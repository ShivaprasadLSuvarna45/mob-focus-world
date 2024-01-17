import React from 'react';
import {View, Text, Pressable, I18nManager} from 'react-native';
import {useTranslation} from 'react-i18next';
import i18next from 'i18next';
import {useAppTheme} from '@FocusWorld/Hooks';
import {Language} from '@FocusWorld/types';

const Login = () => {
  const {t} = useTranslation();
  const {colors} = useAppTheme();

  const onPress = () => {
    const lang = i18next.language;

    const nextLang = lang === Language.AR ? Language.EN : Language.AR;
    i18next.changeLanguage(nextLang);
    if (nextLang === Language.AR) {
      I18nManager.forceRTL(true);
    }
  };

  return (
    <View
      style={{
        backgroundColor: colors.primary,
      }}>
      <Pressable onPress={onPress}>
        <Text>Press</Text>
      </Pressable>
      <Text>
        {t('name') + ' -> '}
        {i18next.language}
      </Text>
    </View>
  );
};

export default Login;
