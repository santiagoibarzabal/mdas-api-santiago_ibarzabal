import { PokemonRepositoryInterface } from "../../domain/interfaces/pokemon-repository.interface";
import PokemonEntity from "../../domain/entities/pokemon.entity";
import PokemonType from "../../domain/entities/pokemon-type.entity";
import PokemonNotFound from "../../domain/exceptions/pokemon-not-found.exception";
import ConnectionError from "../../domain/exceptions/connection-error.exception";

class PokemonRepository implements PokemonRepositoryInterface {
  async getPokemonByName(name: string): Promise<PokemonEntity> {
    let response;
    try {
      response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    }
    catch (Error) {
      throw new ConnectionError();
    }
    if (response.status === 404) {
      throw new PokemonNotFound();
    }
    const pokemon = await response.json();
    const pokemonTypes = this.mapPokemonTypes(pokemon.types);
    return new PokemonEntity(pokemon.id, pokemon.name, pokemonTypes);
  }

  private mapPokemonTypes(pokemonTypes: any[]): PokemonType[] {
    return pokemonTypes.map((pokemonType: any) => {
      return new PokemonType(pokemonType.type.name, pokemonType.type.url);
    });
  }
}

export default PokemonRepository;