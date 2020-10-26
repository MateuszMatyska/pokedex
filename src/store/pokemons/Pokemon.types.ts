export interface PokemonsArrayType {
  id: number;
  name: string;
  url: string;
}

export interface PokemonStatsType {
  name: string;
  value: number;
}

export interface PokemonType {
  id: number;
  name: string;
  height: number;
  baseExperience: number;
  weight: number;
  stats: PokemonStatsType[];
  types: string[];
}
