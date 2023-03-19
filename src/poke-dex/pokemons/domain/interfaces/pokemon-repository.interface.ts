import PokemonAggregate from '../pokemon.aggregate';

export interface PokemonRepository {
  getPokemonByName(name: string): Promise<PokemonAggregate>;
}
