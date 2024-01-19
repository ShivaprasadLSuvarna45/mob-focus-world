import {ActivityIndicator, StyleSheet} from 'react-native';
import React from 'react';
import {useMainStore} from '@FocusWorld/Hooks';

const Loader = () => {
  const {isLoading} = useMainStore();
  return isLoading ? (
    <ActivityIndicator style={styles.loader} size={'large'} />
  ) : null;
};

const styles = StyleSheet.create({
  loader: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    zIndex: 10,
    opacity: 0.5,
    backgroundColor: 'black',
  },
});

export default Loader;
