import GetPokemonTypesUseCase from "../../application/use-cases/get-pokemon-types.use-case";
import PokemonRepository from "../../infrastructure/repositories/pokemon.repository";

class GetPokemonTypesController {
  private getPokemonTypesUseCase: GetPokemonTypesUseCase;

  constructor() {
    this.getPokemonTypesUseCase = new GetPokemonTypesUseCase(new PokemonRepository());
  }

  async execute(name: string) {
    return await this.getPokemonTypesUseCase.execute(name);
  }
}

export default GetPokemonTypesController;