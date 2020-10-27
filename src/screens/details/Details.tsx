import React, {useEffect, useState} from 'react';
import {Text, View, SafeAreaView, ScrollView, FlatList} from 'react-native';
import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import PokemonService from 'src/services/PokemonServices';
import {PokemonType} from 'store/pokemons/Pokemon.types';
import Name from './components/Name/Name';
import Photo from './components/Photo/Photo';
import {styles} from './Details.style';
import Info from './components/Info/Info';
import Stats from './components/Stats/Stats';

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

  useEffect(() => {
    PokemonService.getPokemonDetails(id)
      .then((resolve: PokemonType | undefined) => setPokemon(resolve))
      .catch((reject: any) => console.warn(reject));
  }, [id]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.duoWrapper}>
        <Photo id={id} />
        <Name name={pokemon?.name} />
      </View>
      <View style={styles.wrapper}>
        <Info name="Height" value={pokemon?.height} />
        <Info name="Weight" value={pokemon?.weight} />
        <Info name="Experience" value={pokemon?.baseExperience} />
      </View>
      <View style={styles.wrapper}>
        <Text style={styles.headerText}>Stats:</Text>
        <FlatList
          data={pokemon?.stats}
          renderItem={({item}) => <Stats name={item.name} value={item.value} />}
          keyExtractor={(item) => item.name}
        />
      </View>
      <View style={styles.wrapper}>
        <Text style={styles.headerText}>Types:</Text>
        <FlatList
          data={pokemon?.types}
          renderItem={({item}) => <Text style={styles.typeText}>{item}</Text>}
          keyExtractor={(item) => item}
        />
      </View>
    </SafeAreaView>
  );
};

export default Details;
