import { PokemonRepositoryInterface } from "../../domain/interfaces/pokemon-repository.interface";
import ModelNotFound from "../../domain/exceptions/pokemon-not-found.exception";

class GetPokemonTypesUseCase {
  private pokemonRepository: PokemonRepositoryInterface;

  constructor(pokemonRepository: PokemonRepositoryInterface) {
    this.pokemonRepository = pokemonRepository;
  }

  async execute(name: string) {
    return await this.pokemonRepository.getPokemonByName(name);
  }
}

export default GetPokemonTypesUseCase;
