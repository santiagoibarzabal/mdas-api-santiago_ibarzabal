/* eslint-disable @typescript-eslint/no-explicit-any */
import { PokemonRepository } from "../../domain/interfaces/pokemon-repository.interface";
import PokemonAggregate from "../../domain/pokemon.aggregate";
import PokemonType from "../../domain/entities/pokemon-type.entity";
import PokemonNotFound from "../../domain/exceptions/pokemon-not-found.exception";
import ConnectionError from "../../domain/exceptions/connection-error.exception";
import fetch from "cross-fetch";
import { PokemonId, PokemonName, PokemonTypeName, PokemonTypeUrl } from "../../domain/value-objects";

class RestPokemonRepository implements PokemonRepository {
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
      pokemonTypes
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
}

export default RestPokemonRepository;
