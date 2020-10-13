import {IAppState} from 'store/Store';

export const getPokemons = (store: IAppState) =>
  store.pokemonState.pokemonsArray;
