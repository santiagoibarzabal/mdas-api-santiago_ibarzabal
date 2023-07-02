import PokemonAggregate from '../pokemon.aggregate';
import { PokemonId, PokemonName } from "../value-objects";

export interface PokemonRepository {
  getPokemonByName(name: PokemonName): Promise<PokemonAggregate>;
  getPokemonById(id: PokemonId): Promise<PokemonAggregate>;
  update(PokemonAggregate: PokemonAggregate): void;
}
