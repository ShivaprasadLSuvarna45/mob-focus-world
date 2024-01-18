import React from 'react';
import {Image, Pressable, StyleSheet, View} from 'react-native';
import {useTranslation} from 'react-i18next';
import {useAppTheme} from '@FocusWorld/Hooks';
import {SizeVariant} from '@FocusWorld/types';
import {
  Dropdown,
  Layout,
  Spacer,
  Text,
  TextInput,
} from '@FocusWorld/Components';
import {AppTheme} from '@FocusWorld/Theme';
import {RoutName} from '@FocusWorld/Navigation';
import {getFlag} from '@FocusWorld/Utils';

const data = [
  {label: 'UAE', value: 'AE'},
  {label: 'INDIA', value: 'IN'},
  {label: 'UK', value: 'UK', flag: 'gb'},
  {label: 'EGYPT', value: 'EG'},
];

const Registration = (props: any) => {
  const {t} = useTranslation();
  const {colors} = useAppTheme();

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
      <Dropdown
        data={data}
        renderItem={renderItem}
        activeColor={colors.white}
      />
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
    itemContainer: {
      flexDirection: 'row',
      marginVertical: 4,
      marginHorizontal: 12,
      paddingVertical: 8,
      paddingHorizontal: 8,
    },
    flagImage: {
      width: 24,
      height: 24,
      marginRight: 12,
      borderRadius: 4,
    },
    selectedItem: {
      backgroundColor: '#f0f0f0',
      borderRadius: 8,
    },
  });

export default Registration;
