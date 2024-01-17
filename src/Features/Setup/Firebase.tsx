import React, {useEffect} from 'react';
import auth from '@react-native-firebase/auth';
import {useMainStore} from '@FocusWorld/Hooks';

const Firebase = ({children}: {children: JSX.Element}) => {
  const {setUser} = useMainStore();
  function onAuthStateChanged(user) {
    console.log('user', user);
    user && setUser(user);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  return <>{children}</>;
};

export default Firebase;
