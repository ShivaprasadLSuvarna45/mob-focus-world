import React from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import {useTranslation} from 'react-i18next';
import {useAppTheme, useFirebaseAuth} from '@FocusWorld/Hooks';
import {COUNTRY, SizeVariant} from '@FocusWorld/types';
import {Button, Layout, Spacer, Text, TextInput} from '@FocusWorld/Components';
import {RoutName} from '@FocusWorld/Navigation';

import {Formik} from 'formik';
import {getRegistrationSchema} from '@FocusWorld/Validations';
import LanguageSelector from '../Home/LanguageSelector';
import CountrySelector from './CountrySelector';

const registrationInitialValues = {
  email: '',
  userName: '',
  password: '',
  country: '',
};

const Registration = (props: any) => {
  const {t} = useTranslation();
  const {colors} = useAppTheme();
  const {registration} = useFirebaseAuth();

  const styles = getStyles(colors);

  const navigateToReg = () => props.navigation.navigate(RoutName.LOGIN);

  return (
    <Layout>
      <Spacer size={SizeVariant.LG} />
      <Text bold size={SizeVariant.LG}>
        {t('registration.main')}
      </Text>
      <Spacer />
      <Formik
        validateOnMount
        validateOnChange
        initialValues={registrationInitialValues}
        validationSchema={getRegistrationSchema(t)}>
        {({
          handleChange,
          handleBlur,
          values,
          errors,
          touched,
          isValid,
          isValidating,
        }) => (
          <>
            <CountrySelector
              onChange={handleChange('country')}
              isError={errors.country && touched.country}
            />
            <TextInput
              rightIcon="account-box"
              placeholder={t('registration.userName')}
              value={values.userName}
              onChange={handleChange('userName')}
              onBlur={handleBlur('userName')}
              isError={errors.userName && touched.userName}
            />
            <Text>
              {t(
                `registration.userNameValid.${(
                  values?.country || COUNTRY.IN
                ).toLowerCase()}`,
              )}
            </Text>
            <Spacer />
            <TextInput
              rightIcon="email"
              placeholder={t('registration.email')}
              value={values.email}
              onBlur={handleBlur('email')}
              onChange={handleChange('email')}
              isError={errors.email && touched.email}
            />
            <TextInput
              isPassword
              rightIcon="lock"
              placeholder={t('registration.password')}
              value={values.password}
              onBlur={handleBlur('password')}
              onChange={handleChange('password')}
              isError={errors.password && touched.password}
            />

            <Spacer size={SizeVariant.MD} />
            <View style={styles.btnContainer}>
              <Button
                disabled={!isValid || isValidating}
                label={t('registration.main')}
                onPress={() => {
                  registration(
                    values.userName,
                    values.email,
                    values.password,
                    values.country,
                  );
                }}>
                <Text bold color={colors.white} align="center">
                  {t('registration.main')}
                </Text>
              </Button>

              <Spacer />
              <Pressable onPress={navigateToReg}>
                <Text color={colors.link}>{t('registration.login')}</Text>
              </Pressable>
            </View>
          </>
        )}
      </Formik>
      <Spacer size={SizeVariant.LG} />
      <LanguageSelector />
    </Layout>
  );
};

const getStyles = () =>
  StyleSheet.create({
    btnContainer: {
      alignItems: 'center',
    },
  });

export default Registration;
