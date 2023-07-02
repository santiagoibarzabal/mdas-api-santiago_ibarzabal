/* eslint-disable @typescript-eslint/no-explicit-any */
import { PokemonRepository } from "../../domain/interfaces/pokemon-repository.interface";
import PokemonAggregate from "../../domain/pokemon.aggregate";
import { PokemonId, PokemonName } from "../../domain/value-objects";
import { app } from "../../../app";

class InMemoryPokemonRepository implements PokemonRepository {
  private selectedAsFavoriteCount: Map<number, number> = app.locals.favouritesCountMap;

  public update(pokemonAggregate: PokemonAggregate): void {
    this.selectedAsFavoriteCount.set(pokemonAggregate.getId().value, pokemonAggregate.selectedAsFavoriteCount().value);
  }
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  async getPokemonByName(name: PokemonName): Promise<PokemonAggregate>;
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  async getPokemonById(id: PokemonId): Promise<PokemonAggregate>;

}

export default InMemoryPokemonRepository;
