import {getPokemonById} from 'src/store/pokemons/Pokemon.api.ts';
import {pokemonDetailsMapper} from 'src/store/pokemons/Pokemon.mapper.ts';
import {PokemonType} from 'store/pokemons/Pokemon.types';

const getPokemonDetails = async (
  id: number,
): Promise<PokemonType | undefined> => {
  const pokemonData = await getPokemonById(id);
  return pokemonDetailsMapper(pokemonData);
};

export default {getPokemonDetails};
