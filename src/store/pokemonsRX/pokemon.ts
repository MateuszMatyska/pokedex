import {Subject, Observable, of} from 'rxjs';
import {fromFetch} from 'rxjs/fetch';
import {catchError, map, switchMap} from 'rxjs/operators';
import {pokemonsMapper} from '../pokemons/Pokemon.mapper';
import {
  PokemonsArrayType,
  //   PokemonStatsType,
  //   PokemonType,
} from '../pokemons/Pokemon.types';

const storePokemons: Subject<PokemonsArrayType[]> = new Subject<
  PokemonsArrayType[]
>();

const storePokemons$: Observable<
  PokemonsArrayType[]
> = storePokemons.asObservable();

const getPokemons = () => {
  return fromFetch('https://pokeapi.co/api/v2/pokemon').pipe(
    switchMap((response) => {
      if (response.ok) {
        return response.json();
      } else {
        return of({error: true, message: response.status});
      }
    }),
    map((data) => pokemonsMapper(data.results)),
    catchError((err) => {
      return of({error: true, message: err.message});
    }),
  );
};

export default {
  getPokemons,
  storePokemons$,
};
