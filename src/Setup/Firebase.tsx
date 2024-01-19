import React, {useEffect} from 'react';
import auth from '@react-native-firebase/auth';
import {useMainStore} from '@FocusWorld/Hooks';

const Firebase = ({children}: {children: JSX.Element}) => {
  const {setUser} = useMainStore();

  const onAuthStateChanged = user => setUser(user);

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <>{children}</>;
};

export default Firebase;
