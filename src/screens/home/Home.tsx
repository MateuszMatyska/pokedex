import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import {getUser} from 'src/store/user/user.selector';
import {useSelector} from 'react-redux';
import {IUser} from 'src/store/user/user.types';

const Home: React.FC<any> = () => {
  const user: IUser | null = useSelector(getUser);

  return (
    <SafeAreaView>
      <View>
        <Text>Home</Text>
        <Text>{user?.name}</Text>
      </View>
    </SafeAreaView>
  );
};

export default Home;
