/* eslint-disable @typescript-eslint/no-explicit-any */
import { PokemonRepository } from "../../domain/interfaces/pokemon-repository.interface";
import PokemonAggregate from "../../domain/pokemon.aggregate";
import PokemonType from "../../domain/entities/pokemon-type.entity";
import PokemonNotFound from "../../domain/exceptions/pokemon-not-found.exception";
import ConnectionError from "../../domain/exceptions/connection-error.exception";
import fetch from "cross-fetch";
import { PokemonId, PokemonName, PokemonTypeName, PokemonTypeUrl, PokemonHeight, PokemonWeight } from "../../domain/value-objects";
import { PokemonTimesSelectedAsFavoriteCountMap } from "../pokemon-times-selected-as-favorite-count";
import PokemonTimesSelectedAsFavoriteCount from "../../domain/value-objects/pokemon-times-selected-as-favorite-count";

class RestPokemonRepository implements PokemonRepository {
  private selectedAsFavoriteCount: Map<number, number> = PokemonTimesSelectedAsFavoriteCountMap;

  async getPokemonByName(name: PokemonName): Promise<PokemonAggregate> {
    let response;
    try {
      response = await fetch(`${process.env.POKEAPI_URL}${process.env.POKEAPI_GET_POKEMON_ENDPOINT}${name.value}`);
    }
    catch (Error) {
      throw new ConnectionError();
    }

    if (response.status === 404) {
      throw new PokemonNotFound();
    }
    const pokemon = await response.json();
    const pokemonTypes = this.mapPokemonTypes(pokemon.types);

    return new PokemonAggregate(
      new PokemonId(pokemon.id),
      new PokemonName(pokemon.name),
      pokemonTypes,
      new PokemonHeight(pokemon.height),
      new PokemonWeight(pokemon.weight),
      new PokemonTimesSelectedAsFavoriteCount(this.selectedAsFavoriteCount.get(pokemon.id) ?? 0)
    );
  }

  async getPokemonById(id: PokemonId): Promise<PokemonAggregate> {
    let response;
    try {
      response = await fetch(`${process.env.POKEAPI_URL}${process.env.POKEAPI_GET_POKEMON_ENDPOINT}${id.value}`);
    }
    catch (Error) {
      throw new ConnectionError();
    }

    if (response.status === 404) {
      throw new PokemonNotFound();
    }
    const pokemon = await response.json();
    const pokemonTypes = this.mapPokemonTypes(pokemon.types);

    return new PokemonAggregate(
      new PokemonId(pokemon.id),
      new PokemonName(pokemon.name),
      pokemonTypes,
      new PokemonHeight(pokemon.height),
      new PokemonWeight(pokemon.weight),
      new PokemonTimesSelectedAsFavoriteCount(this.selectedAsFavoriteCount.get(pokemon.id) ?? 0)
    );
  }
  private mapPokemonTypes(pokemonTypes: any[]): PokemonType[] {
    return pokemonTypes.map((pokemonType: any) => {
      return new PokemonType(
        new PokemonTypeName(pokemonType.type.name),
        new PokemonTypeUrl(pokemonType.type.url),
      );
    });
  }

  // Si bien no es infraestructura "rest", no le vi sentido a otra implementacion InMemory del repo
  // ya que el Rest repository no cumpliria con implementar update y el rest repository no cumpliria con
  // implementar getPokemonId y getPokemonByName.
  public update(pokemonAggregate: PokemonAggregate): void {
    this.selectedAsFavoriteCount.set(pokemonAggregate.getId().value, pokemonAggregate.selectedAsFavoriteCount().value);
  }
}

export default RestPokemonRepository;
