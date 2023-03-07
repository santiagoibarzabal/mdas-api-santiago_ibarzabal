import { PokemonRepositoryInterface } from "../../domain/interfaces/pokemon-repository.interface";

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
