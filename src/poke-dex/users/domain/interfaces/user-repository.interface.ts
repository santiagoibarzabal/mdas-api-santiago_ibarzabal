import UserAggregate from "../user.aggregate";
import { UserId } from "../value-objects";
import { PokemonId } from "../../../pokemons/domain/value-objects";

export interface UserRepositoryInterface {
  save(user: UserAggregate): void;
  addFavouritePokemon(userId: UserId, pokemonId: PokemonId): void;
  findUserById(userId: UserId): UserAggregate | undefined;
}
