/* eslint-disable @typescript-eslint/no-explicit-any */
import { PokemonRepositoryInterface } from "../../domain/interfaces/pokemon-repository.interface";
import PokemonAggregate from "../../domain/pokemon.aggregate";
import PokemonType from "../../domain/entities/pokemon-type.entity";
import PokemonNotFound from "../../domain/exceptions/pokemon-not-found.exception";
import ConnectionError from "../../domain/exceptions/connection-error.exception";
import fetch from "cross-fetch";

class PokemonRepository implements PokemonRepositoryInterface {
  async getPokemonByName(name: string): Promise<PokemonAggregate> {
    let response;
    try {
      response = await fetch(`${process.env.POKEAPI_URL}${process.env.POKEAPI_GET_POKEMON_ENDPOINT}${name}`);
    }
    catch (Error) {
      throw new ConnectionError();
    }
    if (response.status === 404) {
      throw new PokemonNotFound();
    }
    const pokemon = await response.json();
    const pokemonTypes = this.mapPokemonTypes(pokemon.types);
    return new PokemonAggregate(pokemon.id, pokemon.name, pokemonTypes);
  }

  private mapPokemonTypes(pokemonTypes: any[]): PokemonType[] {
    return pokemonTypes.map((pokemonType: any) => {
      return new PokemonType(pokemonType.type.name, pokemonType.type.url);
    });
  }
}

export default PokemonRepository;
