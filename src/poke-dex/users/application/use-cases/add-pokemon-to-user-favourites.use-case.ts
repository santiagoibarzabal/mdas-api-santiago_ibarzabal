import { UserRepositoryInterface } from "../../domain/interfaces/user-repository.interface";

class AddPokemonToUserFavouritesUseCase {
  private repository: UserRepositoryInterface;

  constructor(repository: UserRepositoryInterface) {
    this.repository = repository;
  }

  execute(userId: number, pokemonId: number): void {
    this.repository.addFavouritePokemon(userId, pokemonId);
  }
}

export default AddPokemonToUserFavouritesUseCase;
