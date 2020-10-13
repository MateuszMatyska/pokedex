import {ActionCreator, Dispatch} from 'redux';
import {ThunkAction} from 'redux-thunk';
import {PokemonsArrayType} from './Pokemon.types';
import pokemonActionTypes from './Pokemon.enums';
import {IGetPokemonReducer} from './Pokemon.reducer';
import {getPokemons} from './Pokemon.api';
import {pokemonsMapper} from './Pokemon.mapper';

export const GetPokemnos: ActionCreator<ThunkAction<
  Promise<any>,
  PokemonsArrayType,
  null,
  IGetPokemonReducer
>> = () => {
  return async (dispatch: Dispatch) => {
    const data = await getPokemons();
    const pokemons: PokemonsArrayType[] = pokemonsMapper(data.results);
    dispatch({
      type: pokemonActionTypes.GET_POKEMON,
      payload: pokemons,
    });
  };
};
