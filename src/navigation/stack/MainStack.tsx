import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from 'src/screens/login/Login';

const MainStack: React.FC<any> = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
};

export default MainStack;
