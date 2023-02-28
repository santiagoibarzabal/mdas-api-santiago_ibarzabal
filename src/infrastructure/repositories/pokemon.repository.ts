import { PokemonRepositoryInterface } from "../../domain/interfaces/pokemon-repository.interface";
import PokemonEntity from "../../domain/entities/pokemon.entity";
import PokemonType from "../../domain/entities/pokemon-type.entity";

class PokemonRepository implements PokemonRepositoryInterface {
  async getPokemonByName(name: string): Promise<PokemonEntity> {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
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