import React from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import {useTranslation} from 'react-i18next';
import {useAppTheme} from '@FocusWorld/Hooks';
import {SizeVariant} from '@FocusWorld/types';
import {Layout, Spacer, Text, TextInput} from '@FocusWorld/Components';
import {AppTheme} from '@FocusWorld/Theme';
import {RoutName} from '@FocusWorld/Navigation';

const Registration = (props: any) => {
  const {t} = useTranslation();
  const {colors} = useAppTheme();

  const styles = getStyles(colors);

  const navigateToReg = () => props.navigation.navigate(RoutName.LOGIN);

  return (
    <Layout>
      <Spacer size={SizeVariant.LG} />
      <Text bold size={SizeVariant.LG}>
        {t('registration.main')}
      </Text>
      <Spacer />
      <TextInput rightIcon="account-box" placeholder="UserName" />
      <TextInput rightIcon="email" placeholder="Email" />
      <TextInput rightIcon="lock" isPassword placeholder="Password" />
      <Spacer size={SizeVariant.MD} />
      <View style={styles.btnContainer}>
        <Pressable style={styles.btn}>
          <Text bold color={colors.white} align="center">
            {t('registration.main')}
          </Text>
        </Pressable>
        <Spacer />
        <Pressable onPress={navigateToReg}>
          <Text color={colors.link}>{t('registration.login')}</Text>
        </Pressable>
      </View>
    </Layout>
  );
};

const getStyles = (colors: AppTheme['colors']) =>
  StyleSheet.create({
    btnContainer: {
      alignItems: 'center',
    },
    btn: {
      borderRadius: 16,
      padding: 12,
      width: 200,
      height: 40,
      backgroundColor: colors.primary,
    },
  });

export default Registration;
