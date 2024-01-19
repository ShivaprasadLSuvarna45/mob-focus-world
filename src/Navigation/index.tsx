import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home, Login, Registration} from '@FocusWorld/Features';
import {RoutName} from './routeName';
import {useMainStore} from '@FocusWorld/Hooks';

const Stack = createNativeStackNavigator();

const PostLoginStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={RoutName.LOGIN}
      screenOptions={{
        headerShown: false,
        gestureEnabled: false,
      }}>
      <Stack.Screen name={RoutName.HOME} component={Home} />
    </Stack.Navigator>
  );
};
const PreLoginStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={RoutName.LOGIN}
      screenOptions={{
        headerShown: false,
        gestureEnabled: false,
      }}>
      <Stack.Screen name={RoutName.LOGIN} component={Login} />
      <Stack.Screen name={RoutName.REGISTRATION} component={Registration} />
    </Stack.Navigator>
  );
};

const Navigation = () => {
  const {user} = useMainStore();

  return !user ? <PreLoginStack /> : <PostLoginStack />;
};

export default Navigation;
export {RoutName};
