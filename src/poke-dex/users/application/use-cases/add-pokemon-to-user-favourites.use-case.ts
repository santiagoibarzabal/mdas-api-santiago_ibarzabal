import { UserRepositoryInterface } from "../../domain/interfaces/user-repository.interface";
import { UserId } from "../../domain/value-objects";
import { PokemonId } from "../../../pokemons/domain/value-objects";

class AddPokemonToUserFavouritesUseCase {
  private repository: UserRepositoryInterface;

  constructor(repository: UserRepositoryInterface) {
    this.repository = repository;
  }

  execute(userId: number, pokemonId: number): void {
    this.repository.addFavouritePokemon(new UserId(userId), new PokemonId(pokemonId));
  }
}

export default AddPokemonToUserFavouritesUseCase;
