import {useAppTheme} from '@FocusWorld/Hooks';
import React, {useState} from 'react';
import {InputModeOptions, KeyboardTypeOptions, StyleSheet} from 'react-native';
import {TextInput as PTextInput} from 'react-native-paper';
import {ThemeProp} from 'react-native-paper/lib/typescript/types';
import {Spacer, Text} from '..';

type TextInputProp = {
  placeholder?: string;
  value: string;
  multiline?: boolean;
  inputMode?: InputModeOptions;
  onChange?: (text: string) => void;
  keyboardType?: KeyboardTypeOptions;
  errorMsg?: string;
  isError?: boolean;
  isPassword?: boolean;
  rightIcon?: string;
};

const TextInput = (props: TextInputProp) => {
  const {
    placeholder,
    value,
    rightIcon,
    inputMode = 'none',
    keyboardType = 'default',
    onChange = () => ({}),
    errorMsg = '',
    isError = false,
    isPassword = false,
    ...rest
  } = props;

  const theme = useAppTheme();
  const style = getStyle(theme);
  const [isSecure, setIsSecure] = useState(true);

  const _handleChange = (t: string) => {
    onChange(t);
  };

  const onPressIcon = () => setIsSecure(prv => !prv);

  const passwordEyeIcon = isPassword && (
    <PTextInput.Icon
      onPress={onPressIcon}
      icon={`${isSecure ? 'eye' : 'eye-off-outline'}`}
    />
  );

  const InputTheme = {roundness: 12} as ThemeProp;

  const isEr = isError || errorMsg;

  return (
    <>
      <Spacer />
      <PTextInput
        mode="outlined"
        contentStyle={style.container}
        keyboardType={keyboardType}
        inputMode={inputMode}
        returnKeyType="done"
        textColor={theme.colors.black}
        placeholder={placeholder}
        secureTextEntry={isPassword && isSecure}
        activeOutlineColor={isEr ? theme.colors.danger : theme.colors.black}
        style={style.input}
        right={passwordEyeIcon}
        left={rightIcon && <PTextInput.Icon icon={rightIcon} />}
        onChangeText={_handleChange}
        textAlignVertical="center"
        value={value}
        theme={InputTheme}
        {...rest}
      />
      <Spacer />
      {errorMsg && <Text color={theme.colors.danger}>{errorMsg}</Text>}
    </>
  );
};

const getStyle = ({colors}: AppTheme) =>
  StyleSheet.create({
    container: {
      color: colors.black,
      textAlignVertical: 'center',
    },
    input: {
      padding: 0,
      backgroundColor: '#f0f0f0',
      textAlignVertical: 'center',
      justifyContent: 'flex-end',
    },
  });

export default TextInput;
