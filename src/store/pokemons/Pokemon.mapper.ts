import type {
  PokemonsArrayType,
  PokemonType,
  PokemonStatsType,
} from './Pokemon.types';

export const pokemonsMapper = (data: any): PokemonsArrayType[] => {
  if (data) {
    let dateArray: PokemonsArrayType[];
    let index = 0;
    dateArray = data.map((item: any) => {
      index = index + 1;
      return {
        id: index,
        name: item.name,
        url: item.url,
      } as PokemonsArrayType;
    });

    return dateArray;
  }
  return [] as PokemonsArrayType[];
};

export const pokemonDetailsMapper = (data: any): PokemonType | undefined => {
  if (data) {
    const stats = data.stats.map((item: any) => {
      return {name: item.stat.name, value: item.base_stat} as PokemonStatsType;
    });

    const types = data.types.map((item: any) => {
      return item.type.name;
    });

    return {
      id: data.id,
      name: data.name,
      height: data.height,
      baseExperience: data.base_experience,
      weight: data.weight,
      stats,
      types,
    } as PokemonType;
  }
};
