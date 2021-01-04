import {of} from 'rxjs';
import {fromFetch} from 'rxjs/fetch';
import {catchError, map, switchMap} from 'rxjs/operators';
import {pokemonDetailsMapper, pokemonsMapper} from '../pokemons/Pokemon.mapper';

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

const getPokemonDetails = (id: number) => {
  return fromFetch(`https://pokeapi.co/api/v2/pokemon/${id}`).pipe(
    switchMap((response) => {
      if (response.ok) {
        return response.json();
      } else {
        return of({error: true, message: response.status});
      }
    }),
    map((data) => pokemonDetailsMapper(data)),
    catchError((err) => {
      return of({error: true, message: err.message});
    }),
  );
};

export default {
  getPokemons,
  getPokemonDetails,
};
