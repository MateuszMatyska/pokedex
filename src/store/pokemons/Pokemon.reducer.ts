import {Reducer} from 'redux';
import pokemonActionTypes from './Pokemon.enums';
import {PokemonsArrayType} from './Pokemon.types';

export interface IGetPokemonReducer {
  type: pokemonActionTypes.GET_POKEMON;
  payload: PokemonsArrayType[];
}

type PokemonReducers = IGetPokemonReducer;

export interface IPokemonInitialState {
  pokemonsArray: PokemonsArrayType[] | null;
  error: boolean;
}

const initialState: IPokemonInitialState = {
  pokemonsArray: [],
  error: false,
};

export const PokemonReducer: Reducer<IPokemonInitialState, PokemonReducers> = (
  state: IPokemonInitialState = initialState,
  action: PokemonReducers,
) => {
  switch (action.type) {
    case pokemonActionTypes.GET_POKEMON:
      return {
        ...state,
        pokemonsArray: action.payload,
      };
    default:
      return state;
  }
};
