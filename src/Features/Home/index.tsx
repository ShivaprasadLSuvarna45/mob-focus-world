import {View} from 'react-native';
import React from 'react';
import {Button, Layout, Spacer, Text} from '@FocusWorld/Components';
import {useFirebaseAuth} from '@FocusWorld/Hooks';
import {SizeVariant} from '@FocusWorld/types';

const Home = () => {
  const {signOut} = useFirebaseAuth();

  const onPressLogOut = async () => {
    const res = await signOut();
    console.log('====================================');
    console.log(res);
    console.log('====================================');
  };

  return (
    <Layout>
      <View>
        <Spacer size={SizeVariant.LG} />
        <Button onPress={onPressLogOut}>
          <Text align>Logout</Text>
        </Button>
      </View>
    </Layout>
  );
};

export default Home;
