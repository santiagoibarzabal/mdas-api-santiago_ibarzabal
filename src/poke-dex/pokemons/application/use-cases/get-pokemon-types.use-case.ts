import { PokemonRepository } from "../../domain/interfaces/pokemon-repository.interface";

class GetPokemonTypesUseCase {
  private pokemonRepository: PokemonRepository;

  constructor(pokemonRepository: PokemonRepository) {
    this.pokemonRepository = pokemonRepository;
  }

  async execute(name: string) {
    return await this.pokemonRepository.getPokemonByName(name);
  }
}

export default GetPokemonTypesUseCase;
