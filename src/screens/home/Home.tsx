/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import {SafeAreaView, FlatList} from 'react-native';
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

  return (
    <SafeAreaView style={styles.container}>
      <Animated.View style={[styles.animationWrapper, pokedexStyle]}>
        <PokedexAnimation />
      </Animated.View>
      <Animated.View style={[styles.listWrapper, contentStyle]}>
        <FlatList
          data={pokemnos}
          renderItem={({item}) => <PokemonItem name={item.name} id={item.id} />}
          keyExtractor={(item) => item.name}
        />
      </Animated.View>
    </SafeAreaView>
  );
};

export default Home;
