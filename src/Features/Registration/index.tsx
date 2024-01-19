import React from 'react';
import {Image, Pressable, StyleSheet, View} from 'react-native';
import {useTranslation} from 'react-i18next';
import {useAppTheme, useFirebaseAuth} from '@FocusWorld/Hooks';
import {SizeVariant} from '@FocusWorld/types';
import {
  Button,
  Dropdown,
  Layout,
  Spacer,
  Text,
  TextInput,
} from '@FocusWorld/Components';
import {AppTheme} from '@FocusWorld/Theme';
import {RoutName} from '@FocusWorld/Navigation';
import {getFlag} from '@FocusWorld/Utils';

import {Formik} from 'formik';
import {getRegistrationSchema} from '@FocusWorld/Validations';
import {countryList} from '@FocusWorld/Constants';

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

  const renderItem = (item: any, selected?: boolean) => (
    <View
      style={{...styles.itemContainer, ...(selected && styles.selectedItem)}}>
      <Image
        style={styles.flagImage}
        source={{uri: getFlag(item.flag || item.value)}}
      />
      <Text size={SizeVariant.MD}>{item.label}</Text>
    </View>
  );

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
            <Dropdown
              data={countryList}
              renderItem={renderItem}
              activeColor={colors.white}
              onChange={handleChange('country')}
              isError={errors.country && touched.country}
            />
            <TextInput
              rightIcon="account-box"
              placeholder="UserName"
              value={values.userName}
              onChange={handleChange('userName')}
              onBlur={handleBlur('userName')}
              isError={errors.userName && touched.userName}
            />
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
                label={t('registration.main')}
                onPress={() => {
                  registration(values.userName, values.email, values.password);
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
    </Layout>
  );
};

const getStyles = (colors: AppTheme['colors']) =>
  StyleSheet.create({
    btnContainer: {
      alignItems: 'center',
    },

    itemContainer: {
      flexDirection: 'row',
      marginVertical: 4,
      marginHorizontal: 12,
      paddingVertical: 8,
      paddingHorizontal: 8,
    },
    flagImage: {
      width: 36,
      height: 24,
      marginRight: 12,
      borderRadius: 4,
      resizeMode: 'cover',
    },
    selectedItem: {
      backgroundColor: '#f0f0f0',
      borderRadius: 8,
    },
  });

export default Registration;
