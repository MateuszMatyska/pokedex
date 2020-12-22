/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useRef, useState} from 'react';
import {SafeAreaView, View, Button, Animated, Text} from 'react-native';
// import {LoginUser} from 'src/store/user/user.action';
// import {useDispatch} from 'react-redux';
// import {navigate} from 'src/navigation/NavigationServices';
import PokedexAnimation from 'src/components/pokedexAnimation/PokedexAnimation';
import PokeInput from 'src/components/pokeInput/PokeInput';
import {styles} from './Login.styles';
import userRX from 'src/store/userRX/user';
import {IUser} from 'store/user/user.types';

const Login: React.FC<any> = () => {
  const pokedexOpacity = useRef(new Animated.Value(1)).current;
  const opacityContent = useRef(new Animated.Value(0)).current;
  const colorForText = useRef(new Animated.Value(0)).current;
  const activeInput = useRef(new Animated.Value(0)).current;
  // const dispatch = useDispatch();
  const [password, setPassword] = useState('');
  const [user, setUser] = useState<IUser>();

  const fadeOut = (): void => {
    Animated.timing(pokedexOpacity, {
      toValue: 0,
      duration: 4000,
      useNativeDriver: false,
    }).start();
    Animated.timing(opacityContent, {
      toValue: 1,
      duration: 4000,
      delay: 4000,
      useNativeDriver: true,
    }).start();
  };

  const colorChanging = (): void => {
    Animated.timing(colorForText, {
      toValue: 100,
      duration: 5000,
      delay: 8000,
      useNativeDriver: false,
    }).start();
  };

  const activeInputAnimation = (): void => {
    Animated.timing(activeInput, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  };

  const deactiveInputAnimation = (): void => {
    Animated.timing(activeInput, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  };

  const logInUser = (): void => {
    if (password === '123') {
      userRX.loginUser('Ash', '123');
      // dispatch(LoginUser());
      // navigate('Home');
    }
  };

  useEffect(() => {
    fadeOut();
    colorChanging();
    userRX.storeUser$.subscribe((userData: IUser) => {
      setUser(userData);
    });
  }, [user]);

  return (
    <SafeAreaView style={styles.container}>
      <Animated.View
        style={{
          opacity: pokedexOpacity,
        }}>
        <PokedexAnimation />
      </Animated.View>
      <Animated.View style={[styles.content, {opacity: opacityContent}]}>
        <View style={[styles.title, styles.wrapper]}>
          <Animated.Text
            style={[
              styles.animatedText,
              {
                color: colorForText.interpolate({
                  inputRange: [0, 25, 75, 100],
                  outputRange: ['#000000', '#EBE900', '#EB270B', '#0F4DDB'],
                }),
              },
            ]}>
            Pokedex
          </Animated.Text>
        </View>
        <View style={styles.login}>
          <Animated.View
            style={[
              styles.passwordAnimatedWrapper,
              {
                backgroundColor: activeInput.interpolate({
                  inputRange: [0, 1],
                  outputRange: ['#fff', '#FFF82B'],
                }),
              },
            ]}>
            <PokeInput
              placeholder="Password"
              isPassword
              value={password}
              onChangeText={(text: string) => setPassword(text)}
              style={styles.password}
              onFocus={() => {
                activeInputAnimation();
              }}
              onBlur={() => {
                deactiveInputAnimation();
              }}
            />
          </Animated.View>
          <Button
            title="Login"
            onPress={() => {
              logInUser();
            }}
          />
        </View>
        <View>
          <Text>{user ? user.name : ''}</Text>
        </View>
      </Animated.View>
    </SafeAreaView>
  );
};

export default Login;
