import {Image, StyleSheet, View} from 'react-native';
import React from 'react';
import {Button, Layout, Spacer, Text} from '@FocusWorld/Components';
import {useAppTheme, useFirebaseAuth, useMainStore} from '@FocusWorld/Hooks';
import {SizeVariant} from '@FocusWorld/types';
import {getFlag} from '@FocusWorld/Utils';
import {useTranslation} from 'react-i18next';

const Home = () => {
  const {signOut} = useFirebaseAuth();
  const {user} = useMainStore();
  const {colors} = useAppTheme();
  const {t} = useTranslation();

  const onPressLogOut = async () => {
    const res = await signOut();
  };

  console.log('====================================');
  console.log(user);
  console.log('====================================');

  return (
    <Layout>
      <View style={styles.container}>
        <Spacer size={SizeVariant.LG} />
        <Image style={styles.flagImage} source={{uri: getFlag()}} />
        <Spacer size={SizeVariant.MD} />
        <Text size={SizeVariant.LG}>{user.displayName}</Text>
        <Text>{user.email}</Text>
        <Spacer size={SizeVariant.LG} />
        <Button onPress={onPressLogOut}>
          <Text bold align color={colors.white}>
            {t('home.btn')}
          </Text>
        </Button>
      </View>
    </Layout>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  flagImage: {
    width: 100,
    height: 100,
    marginRight: 12,
    borderRadius: 50,
    resizeMode: 'cover',
  },
});
