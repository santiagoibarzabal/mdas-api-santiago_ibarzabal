import { PokemonRepository } from "../../domain/interfaces/pokemon-repository.interface";
import { PokemonName } from "../../domain/value-objects";

class GetPokemonTypesUseCase {
  private pokemonRepository: PokemonRepository;

  constructor(pokemonRepository: PokemonRepository) {
    this.pokemonRepository = pokemonRepository;
  }

  async execute(name: string) {
    return await this.pokemonRepository.getPokemonByName(new PokemonName(name));
  }
}

export default GetPokemonTypesUseCase;
