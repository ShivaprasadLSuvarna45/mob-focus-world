import React, {useEffect} from 'react';
import auth from '@react-native-firebase/auth';
import {useMainStore} from '@FocusWorld/Hooks';
import {StorageUtils} from '@FocusWorld/Storage';
import {COUNTRY, StorageKey} from '@FocusWorld/types';
import i18next from 'i18next';

const Firebase = ({children}: {children: JSX.Element}) => {
  const {setUser, updateCountry} = useMainStore();

  const updateLanguage = async () => {
    const lan = await StorageUtils.get(StorageKey.LANG);
    const country = await StorageUtils.get(StorageKey.COUNTRY);
    lan && i18next.changeLanguage(lan);
    updateCountry(country || COUNTRY.IN);
  };

  const onAuthStateChanged = user => setUser(user);

  useEffect(() => {
    updateLanguage();
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <>{children}</>;
};

export default Firebase;
