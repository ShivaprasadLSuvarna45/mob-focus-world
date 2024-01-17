import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home, Login, Registration} from '@FocusWorld/Features';
import {RoutName} from './routeName';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <Stack.Navigator
      initialRouteName={RoutName.LOGIN}
      screenOptions={{
        headerShown: false,
        gestureEnabled: false,
      }}>
      <Stack.Screen name={RoutName.HOME} component={Home} />
      <Stack.Screen name={RoutName.LOGIN} component={Login} />
      <Stack.Screen name={RoutName.REGISTRATION} component={Registration} />
    </Stack.Navigator>
  );
};

export default Navigation;
export {RoutName};
