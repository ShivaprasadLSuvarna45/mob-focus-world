import {Text as RNText} from 'react-native';
import React from 'react';
import {SizeVariant} from '@FocusWorld/types';

type TextProps = {
  children: React.ReactNode;
  color?: string;
  opacity?: number;
  align?: 'left' | 'center' | 'right' | undefined;
  style?: TextStyle;
  size?: SizeVariant;
  bold: boolean;
};

const Sizes = {
  xxxs: 4,
  xxs: 8,
  xs: 12,
  sm: 14,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
  xxxl: 60,
};

const Text: React.FC<TextProps> = (props: TextProps) => {
  const {
    opacity = 1,
    size,
    align,
    color = '#000',
    children,
    style = {},
    bold = false,
    ...rest
  } = props;

  const _size = Sizes[size || SizeVariant.SM];

  const styles = {
    ...style,
    color,
    fontWeight: bold ? 600 : 'normal',
    textAlign: align,
    opacity,
    fontSize: _size,
  };

  return (
    <RNText style={styles} {...rest}>
      {children}
    </RNText>
  );
};

export default Text;
