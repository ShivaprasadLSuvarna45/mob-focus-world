import React from 'react';
import {View} from 'react-native';

import {SizeVariant, SpacerProps} from '@FocusWorld/types';

const Sizes = {
  xxxs: 4,
  xxs: 8,
  xs: 16,
  sm: 24,
  md: 32,
  lg: 40,
  xl: 48,
  xxl: 60,
  xxxl: 80,
};

const Spacer: React.FC<SpacerProps> = (props: SpacerProps) => {
  const {size = SizeVariant.XXS, horizontal = false, vertical = true} = props;

  const _size = Sizes[size || SizeVariant.SM];
  const isVertical = !horizontal && vertical;

  const style = {
    ...(isVertical && {height: _size}),
    ...(horizontal && {width: _size}),
  };

  return <View style={style} />;
};

export default Spacer;
