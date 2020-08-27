import React from 'react';
import {SafeAreaView, View, Text, Button} from 'react-native';
import {LoginUser} from 'src/store/user/user.action';
import {useDispatch} from 'react-redux';
import {navigate} from '../../navigation/NavigationServices';

const Login: React.FC<any> = () => {
  const dispatch = useDispatch();

  return (
    <SafeAreaView>
      <View>
        <Text>It works</Text>
        <Button
          title="Login"
          onPress={() => {
            dispatch(LoginUser());
            navigate('Home');
          }}>
          <Text>Login</Text>
        </Button>
      </View>
    </SafeAreaView>
  );
};

export default Login;
