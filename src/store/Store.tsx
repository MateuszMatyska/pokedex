import {applyMiddleware, combineReducers, createStore, Store} from 'redux';
import thunk from 'redux-thunk';
import {IUserInitialState, UserReducer} from './user/user.reducer';
import {IPokemonInitialState, PokemonReducer} from './pokemons/Pokemon.reducer';

export interface IAppState {
  userState: IUserInitialState;
  pokemonState: IPokemonInitialState;
}

const rootReducer = combineReducers<IAppState>({
  userState: UserReducer,
  pokemonState: PokemonReducer,
});

export default function configureStore(): Store<IAppState, any> {
  const store = createStore(rootReducer, undefined, applyMiddleware(thunk));
  return store;
}
