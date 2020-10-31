/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {SafeAreaView, FlatList, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {GetPokemnos} from 'src/store/pokemons/Pokemon.action';
import {getPokemons} from 'src/store/pokemons/Pokemon.selector';
import {PokemonsArrayType} from 'store/pokemons/Pokemon.types';
import PokemonItem from 'src/components/pokemonListItem/PokemonItem';
import PokedexAnimation from 'src/components/pokedexAnimation/PokedexAnimation';
import {styles} from './Home.style';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  delay,
} from 'react-native-reanimated';

const Home: React.FC<any> = () => {
  const [scrollViewHeight, setScrollViewHeight] = useState(0);
  const [scrollViewContentHeight, setScrollViewContentHeight] = useState(0);
  const animatedWidth = useSharedValue(0);

  const pokemnos = useSelector(getPokemons) as PokemonsArrayType[];
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetPokemnos());
  }, []);

  const animatedPokedex = useSharedValue(1);
  const animatedContent = useSharedValue(0);

  const pokedexStyle = useAnimatedStyle(() => {
    return {
      opacity: animatedPokedex.value,
    };
  });

  const contentStyle = useAnimatedStyle(() => {
    return {
      opacity: animatedContent.value,
    };
  });

  useEffect(() => {
    animatedPokedex.value = withTiming(0, {
      duration: 4000,
      easing: Easing.out(Easing.exp),
    });
    animatedContent.value = delay(
      3000,
      withTiming(1, {
        duration: 4000,
        easing: Easing.out(Easing.exp),
      }),
    );
  });

  const animatedWidthStyle = useAnimatedStyle(() => {
    return {
      width: `${animatedWidth.value}%`,
    };
  });

  const getPercentageValue = (value: number) => {
    const max = scrollViewContentHeight - scrollViewHeight;

    if (max > 0) {
      return Math.round((value * 100) / max);
    }

    return 0;
  };

  const setStatus = (value: number) => {
    const percent = getPercentageValue(value);
    animatedWidth.value = withTiming(percent, {
      duration: 10000,
      easing: Easing.out(Easing.exp),
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Animated.View style={[styles.animationWrapper, pokedexStyle]}>
        <PokedexAnimation />
      </Animated.View>
      <Animated.View style={contentStyle}>
        <View style={styles.statusBarWrapper}>
          <Animated.View style={[styles.statusBar, animatedWidthStyle]} />
        </View>
        <View style={styles.listWrapper}>
          <FlatList
            onScroll={(event) => {
              setStatus(event.nativeEvent.contentOffset.y);
            }}
            onContentSizeChange={(width, height) => {
              setScrollViewContentHeight(height);
            }}
            onLayout={(event) => {
              setScrollViewHeight(event.nativeEvent.layout.height);
            }}
            data={pokemnos}
            renderItem={({item}) => (
              <PokemonItem name={item.name} id={item.id} />
            )}
            keyExtractor={(item) => item.name}
          />
        </View>
      </Animated.View>
    </SafeAreaView>
  );
};

export default Home;
