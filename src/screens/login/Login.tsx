/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useRef} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Button,
  Platform,
  UIManager,
  Animated,
  LayoutAnimation,
} from 'react-native';
import {LoginUser} from 'src/store/user/user.action';
import {useDispatch} from 'react-redux';
import {navigate} from '../../navigation/NavigationServices';
import PokedexAnimation from '../../components/pokedexAnimation/PokedexAnimation';
import {styles} from './Login.styles';

if (
  Platform.OS === 'android' &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const Login: React.FC<any> = () => {
  const pokedexOpacity = useRef(new Animated.Value(1)).current;
  const opacityContent = useRef(new Animated.Value(0)).current;
  const dispatch = useDispatch();

  const fadeIn = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
    Animated.timing(pokedexOpacity, {
      toValue: 1,
      duration: 3000,
      useNativeDriver: true,
    }).start();
    Animated.timing(opacityContent, {
      toValue: 0,
      duration: 3000,
      useNativeDriver: true,
    }).start();
  };

  const fadeOut = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
    Animated.timing(pokedexOpacity, {
      toValue: 0,
      duration: 4000,
      useNativeDriver: true,
    }).start();
    Animated.timing(opacityContent, {
      toValue: 1,
      duration: 4000,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    fadeOut();

    return () => {
      fadeIn();
    };
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <PokedexAnimation pokedexOpacity={pokedexOpacity} />
      <Animated.View style={{opacity: opacityContent}}>
        <View>
          <Text>It works</Text>
          <Button
            title="Login"
            onPress={() => {
              dispatch(LoginUser());
              navigate('Home');
            }}
          />
        </View>
      </Animated.View>
    </SafeAreaView>
  );
};

export default Login;
