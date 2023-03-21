import PokemonAggregate from '../pokemon.aggregate';
import { PokemonName } from "../value-objects";

export interface PokemonRepository {
  getPokemonByName(name: PokemonName): Promise<PokemonAggregate>;
}
