import GetPokemonTypesUseCase from "../../application/use-cases/get-pokemon-types.use-case";
import PokemonRepository from "../../infrastructure/repositories/pokemon.repository";
import ConnectionError from "../../domain/exceptions/connection-error.exception";
import PokemonNotFoundException from "../../domain/exceptions/pokemon-not-found.exception";
class GetPokemonTypesController {
  private getPokemonTypesUseCase: GetPokemonTypesUseCase;

  constructor() {
    this.getPokemonTypesUseCase = new GetPokemonTypesUseCase(new PokemonRepository());
  }

  async execute(name: string) {
    try {
      return (await this.getPokemonTypesUseCase.execute(name)).types;
    } catch (error: any) {
      if (error instanceof PokemonNotFoundException) {
        return "Pokemon not found";
      }
      return "Connection Error";
    }

  }
}

export default GetPokemonTypesController;