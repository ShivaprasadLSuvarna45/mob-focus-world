import {Text as RNText} from 'react-native';
import React from 'react';

const Text = ({children}: {children: JSX.Element}) => {
  return <RNText>{children}</RNText>;
};

export default Text;
