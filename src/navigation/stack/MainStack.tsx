import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../../screens/login/Login';
import Home from '../../screens/home/Home';
import Details from '../../screens/details/Details';

const MainStack: React.FC<any> = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  );
};

export default MainStack;
