import UserAggregate from "../user.aggregate";

export interface UserRepositoryInterface {
  save(user: UserAggregate): void;
  addFavouritePokemon(userId: number, pokemonId: number): void;
  findUserById(userId: number): UserAggregate | undefined;
}
