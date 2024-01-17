import React from 'react';
import {View, Text, Pressable, I18nManager} from 'react-native';
import {useTranslation} from 'react-i18next';
import i18next from 'i18next';
import {useAppTheme, useMainStore} from '@FocusWorld/Hooks';
import {COUNTRY, Language, SizeVariant} from '@FocusWorld/types';
import {Layout, Spacer} from '@FocusWorld/Components';

const Login = () => {
  const {t} = useTranslation();
  const {colors} = useAppTheme();

  const {country, updateCountry} = useMainStore();

  const onPress = () => {
    const lang = i18next.language;

    const nextLang = lang === Language.AR ? Language.EN : Language.AR;
    i18next.changeLanguage(nextLang);
    if (nextLang === Language.AR) {
      I18nManager.forceRTL(true);
    } else {
      I18nManager.forceRTL(false);
    }

    updateCountry(nextLang === Language.AR ? COUNTRY.UAE : COUNTRY.IND);
  };

  return (
    <Layout>
      <Spacer size={SizeVariant.LG} />
      <Pressable
        style={{
          backgroundColor: colors.secondary,
          width: 100,
          height: 30,
          borderRadius: 12,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={onPress}>
        <Text style={{textAlign: 'center'}}>Press {country}</Text>
      </Pressable>

      <Spacer size={SizeVariant.MD} />
      <View
        style={{
          backgroundColor: colors.primary,
          padding: 20,
          borderRadius: 12,
        }}>
        <Text>
          {t('name') + ' -> '}
          {i18next.language}
        </Text>
      </View>
    </Layout>
  );
};

export default Login;
