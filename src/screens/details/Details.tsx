import React, {useEffect, useState} from 'react';
import {Text, View, SafeAreaView, FlatList} from 'react-native';
import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import PokemonService from 'src/services/PokemonServices';
import {PokemonType} from 'store/pokemons/Pokemon.types';
import Name from './components/Name/Name';
import Photo from './components/Photo/Photo';
import {styles} from './Details.style';
import Info from './components/Info/Info';
import Stats from './components/Stats/Stats';
import Types from './components/Types/Types';
import Animated, {
  delay,
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import PokedexAnimation from 'src/components/pokedexAnimation/PokedexAnimation';

type RootStackParamList = {
  Details: {id: string};
};

type DetailsScreenRouteProp = RouteProp<RootStackParamList, 'Details'>;

type DetailsScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Details'
>;

type Props = {
  route: DetailsScreenRouteProp;
  navigation: DetailsScreenNavigationProp;
};

const Details: React.FC<Props> = (props) => {
  const {id} = props.route.params;
  const [pokemon, setPokemon] = useState<PokemonType>();
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
    PokemonService.getPokemonDetails(id)
      .then((resolve: PokemonType | undefined) => setPokemon(resolve))
      .catch((reject: any) => console.warn(reject));

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
  }, [animatedContent.value, animatedPokedex.value, id]);

  return (
    <SafeAreaView style={styles.container}>
      <Animated.View style={pokedexStyle}>
        <PokedexAnimation />
      </Animated.View>
      <Animated.View style={[styles.container, contentStyle]}>
        <View style={styles.duoWrapper}>
          <Photo id={id} />
          <Name name={pokemon?.name} testID="PokemonNameID" />
        </View>
        <View style={styles.duoWrapper}>
          <Info name="Height" value={pokemon?.height} />
          <Info name="Weight" value={pokemon?.weight} />
          <Info name="Experience" value={pokemon?.baseExperience} />
        </View>
        <View style={styles.wrapper}>
          <Text style={styles.headerText}>Types:</Text>
          <FlatList
            data={pokemon?.types}
            renderItem={({item}) => <Types value={item} />}
            keyExtractor={(item) => item}
          />
        </View>
        <View style={styles.wrapper}>
          <Text style={styles.headerText}>Stats:</Text>
          <FlatList
            data={pokemon?.stats}
            renderItem={({item}) => (
              <Stats name={item.name} value={item.value} />
            )}
            keyExtractor={(item) => item.name}
          />
        </View>
      </Animated.View>
    </SafeAreaView>
  );
};

export default Details;
