import React, {useEffect} from 'react';
import {SafeAreaView, View, Text, FlatList} from 'react-native';
import {getUser} from 'src/store/user/user.selector';
import {useDispatch, useSelector} from 'react-redux';
import {IUser} from 'src/store/user/user.types';
import {GetPokemnos} from 'src/store/pokemons/Pokemon.action';
import {getPokemons} from 'src/store/pokemons/Pokemon.selector';
import {PokemonsArrayType} from 'store/pokemons/Pokemon.types';

const Home: React.FC<any> = () => {
  const user: IUser | null = useSelector(getUser);
  const pokemnos = useSelector(getPokemons) as PokemonsArrayType[];
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetPokemnos());
  }, []);

  return (
    <SafeAreaView>
      <View>
        <Text>Home</Text>
        <Text>{user?.name}</Text>
      </View>
      <View>
        <FlatList
          data={pokemnos}
          renderItem={({item}) => (
            <View>
              <Text>{`${item.id}: ${item.name}`}</Text>
            </View>
          )}
          keyExtractor={(item) => item.name}
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;
