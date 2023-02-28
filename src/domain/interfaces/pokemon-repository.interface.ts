import PokemonEntity from '../entities/pokemon.entity';

export interface PokemonRepositoryInterface {
  getPokemonByName(name: string): Promise<PokemonEntity>;
}
