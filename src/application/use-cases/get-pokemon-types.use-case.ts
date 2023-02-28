import { PokemonRepositoryInterface } from "../../domain/interfaces/pokemon-repository.interface";

class GetPokemonTypesUseCase {
  private pokemonRepository: PokemonRepositoryInterface;

  constructor(pokemonRepository: PokemonRepositoryInterface) {
    this.pokemonRepository = pokemonRepository;
  }

  async execute(name: string) {
    const pokemon = await this.pokemonRepository.getPokemonByName(name);
    return pokemon.types;
  }
}

export default GetPokemonTypesUseCase;
