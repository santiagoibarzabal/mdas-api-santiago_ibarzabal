import PokemonAggregate from '../pokemon.aggregate';

export interface PokemonRepositoryInterface {
  getPokemonByName(name: string): Promise<PokemonAggregate>;
}
