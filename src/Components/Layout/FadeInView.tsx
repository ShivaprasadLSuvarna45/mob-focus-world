import React, {useEffect, useRef} from 'react';
import {Animated, ViewStyle} from 'react-native';

type FadeInViewProps = {
  duration?: number;
  children: React.ReactNode;
  style?: ViewStyle;
};

const FadeInView = (props: FadeInViewProps) => {
  const {children, duration = 500, style = {}} = props;
  const animation = useRef(new Animated.Value(0)).current;

  const animatedStyle = {
    opacity: animation,
  };

  const startAnimation = () => {
    Animated.timing(animation, {
      toValue: 1,
      duration: duration,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    startAnimation();
  }, []);

  return (
    <Animated.View style={[{flex: 1}, animatedStyle, style]}>
      {children}
    </Animated.View>
  );
};

export default FadeInView;
