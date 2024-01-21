import {Image, StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Button, Layout, Spacer, Text} from '@FocusWorld/Components';
import {useAppTheme, useFirebaseAuth, useMainStore} from '@FocusWorld/Hooks';
import {COUNTRY, SizeVariant, StorageKey} from '@FocusWorld/types';
import {getFlag} from '@FocusWorld/Utils';
import {useTranslation} from 'react-i18next';
import LanguageSelector from './LanguageSelector';
import CountrySelector from '../Registration/CountrySelector';
import {StorageUtils} from '@FocusWorld/Storage';
import {AppTheme} from '@FocusWorld/Theme';

const Home = () => {
  const {signOut} = useFirebaseAuth();
  const {country, updateCountry} = useMainStore();

  [selectedCountry, setSelectedCountry] = useState<COUNTRY>(
    country || COUNTRY.IN,
  );

  const getCountry = async () => {
    const country =
      ((await StorageUtils.get(StorageKey.COUNTRY)) as COUNTRY) || COUNTRY.IN;
    setSelectedCountry(`${country}`);
  };

  useEffect(() => {
    getCountry();
  }, []);

  const {user} = useMainStore();
  const {colors} = useAppTheme();
  const {t} = useTranslation();

  const styles = getStyle(colors);

  const onPressLogOut = async () => {
    await signOut();
  };

  const onChangeCountry = (value: string) => {
    setSelectedCountry(value);
    updateCountry(value);
    StorageUtils.store(StorageKey.COUNTRY, value);
  };

  return (
    <Layout>
      <View style={styles.container}>
        <Spacer size={SizeVariant.LG} />
        <Image
          style={styles.flagImage}
          source={{uri: getFlag(selectedCountry)}}
        />
        <Spacer size={SizeVariant.MD} />
        <Text size={SizeVariant.LG}>{user.displayName}</Text>
        <Text>{user.email}</Text>
        <Spacer size={SizeVariant.LG} />
        <Button onPress={onPressLogOut}>
          <Text bold align="center" color={colors.white}>
            {t('home.btn')}
          </Text>
        </Button>
      </View>
      <Spacer size={SizeVariant.LG} />

      <CountrySelector
        defaultSelected={COUNTRY.IN}
        onChange={onChangeCountry}
      />

      <Spacer size={SizeVariant.LG} />
      <View style={styles.emptyContainer} />
      <LanguageSelector />
    </Layout>
  );
};

export default Home;

const getStyle = (colors: AppTheme['colors']) =>
  StyleSheet.create({
    container: {
      alignItems: 'center',
    },
    flagImage: {
      width: 120,
      height: 120,
      marginRight: 12,
      borderRadius: 60,
      resizeMode: 'stretch',
    },
    emptyContainer: {
      height: 100,
      backgroundColor: colors.secondary,
      borderRadius: 12,
    },
  });
