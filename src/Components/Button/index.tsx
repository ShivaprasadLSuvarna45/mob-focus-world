import React from 'react';
import {useAppTheme} from '@FocusWorld/Hooks';
import {Pressable, StyleSheet} from 'react-native';

type ButtonProps = {
  disabled: boolean;
  onPress: () => void;
  color: string;
  children?: React.ReactNode;
};

const Button = (props: ButtonProps) => {
  const {colors} = useAppTheme();
  const {onPress, color, children, disabled} = props;

  const bgColor = color || colors.primary;

  const styles = getStyle(bgColor, disabled);

  return (
    <Pressable style={styles.btn} onPress={onPress}>
      {children}
    </Pressable>
  );
};

export default Button;

const getStyle = (bg: string, disabled: boolean) =>
  StyleSheet.create({
    btn: {
      opacity: disabled ? 0.4 : 1,
      borderRadius: 16,
      padding: 12,
      width: '100%',
      height: 40,
      backgroundColor: disabled ? 'gray' : bg,
    },
  });
