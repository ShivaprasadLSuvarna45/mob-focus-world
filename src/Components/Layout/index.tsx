import React from 'react';
import {
  KeyboardAvoidingView,
  KeyboardAvoidingViewProps,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';

import {useAppTheme} from '@FocusWorld/Hooks';
import {AppTheme} from '@FocusWorld/Theme';
import FadeInView from './FadeInView';

type LayoutProps = {
  header?: React.ReactNode;
  keyboardAvoidingProps?: KeyboardAvoidingViewProps;
  footer?: React.ReactNode;
  children?: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = (props: LayoutProps) => {
  const {
    header = null,
    footer = null,
    keyboardAvoidingProps = {},
    children = null,
  } = props;

  const {colors} = useAppTheme();
  const style = getStyle(colors);

  const defaultKeyboardAvoidingProps = {
    behavior: Platform.select({ios: 'padding', android: 'none'}),
    keyboardVerticalOffset: Platform.select({ios: 50, android: 0}),
    style: {flex: 1},
    ...keyboardAvoidingProps,
  } as KeyboardAvoidingViewProps;

  return (
    <>
      <StatusBar backgroundColor={colors.white} barStyle={'dark-content'} />
      <SafeAreaView style={{backgroundColor: colors.white}} />
      <SafeAreaView style={style.safeAreaView}>
        <KeyboardAvoidingView
          style={style.keyboardAvoid}
          {...defaultKeyboardAvoidingProps}>
          {header}
          <View style={style.appBody}>
            <FadeInView>{children}</FadeInView>
          </View>
        </KeyboardAvoidingView>
        {footer}
      </SafeAreaView>
    </>
  );
};

const getStyle = (color: AppTheme['colors']) =>
  StyleSheet.create({
    safeArea: {
      backgroundColor: color.white,
    },
    safeAreaView: {
      flex: 1,
      backgroundColor: color.white,
    },
    keyboardAvoid: {
      flex: 1,
    },
    appBody: {
      paddingHorizontal: 24,
      paddingBottom: 24,
      flexGrow: 1,
    },
  });

export default Layout;
