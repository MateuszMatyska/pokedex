import type {PokemonsArrayType} from './Pokemon.types';

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
