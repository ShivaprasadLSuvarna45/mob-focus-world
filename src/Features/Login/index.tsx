import React from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import {useTranslation} from 'react-i18next';
import {useAppTheme, useFirebaseAuth} from '@FocusWorld/Hooks';
import {SizeVariant} from '@FocusWorld/types';
import {Button, Layout, Spacer, Text, TextInput} from '@FocusWorld/Components';
import {RoutName} from '@FocusWorld/Navigation';
import {Formik} from 'formik';
import {getLoginSchema} from '@FocusWorld/Validations';

const loginInitialValues = {
  email: '',
  password: '',
};

const Login = (props: any) => {
  const {t} = useTranslation();
  const {colors} = useAppTheme();
  const {login} = useFirebaseAuth();

  const styles = getStyles(colors);

  const navigateToReg = () => props.navigation.navigate(RoutName.REGISTRATION);

  return (
    <Layout>
      <Spacer size={SizeVariant.LG} />
      <Text bold size={SizeVariant.LG}>
        {t('login.main')}
      </Text>
      <Spacer />
      <Formik
        validateOnMount
        validateOnChange
        initialValues={loginInitialValues}
        validationSchema={getLoginSchema(t)}>
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
            <TextInput
              rightIcon="email"
              placeholder="Email"
              value={values.email}
              onBlur={handleBlur('email')}
              onChange={handleChange('email')}
              isError={errors.email && touched.email}
            />
            <TextInput
              isPassword
              rightIcon="lock"
              placeholder="Password"
              value={values.password}
              onBlur={handleBlur('password')}
              onChange={handleChange('password')}
              isError={errors.password && touched.password}
            />
            <Spacer size={SizeVariant.MD} />
            <View style={styles.btnContainer}>
              <Button
                disabled={!isValid || isValidating}
                onPress={() => login(values.email, values.password)}>
                <Text bold color={colors.white} align="center">
                  {t('login.btn')}
                </Text>
              </Button>
              <Spacer />
              <Pressable onPress={navigateToReg}>
                <Text color={colors.link}>{t('login.signUp')}</Text>
              </Pressable>
            </View>
          </>
        )}
      </Formik>
    </Layout>
  );
};

const getStyles = () =>
  StyleSheet.create({
    btnContainer: {
      alignItems: 'center',
    },
  });

export default Login;

/* const onPress = () => {
  const lang = i18next.language;

  const nextLang = lang === Language.AR ? Language.EN : Language.AR;
  i18next.changeLanguage(nextLang);

  I18nManager.forceRTL(nextLang === Language.AR);
  I18nManager.allowRTL(nextLang === Language.AR);
  setTimeout(RNRestart.restart, 1000);

  updateCountry(nextLang === Language.AR ? COUNTRY.UAE : COUNTRY.IND);
}; */
