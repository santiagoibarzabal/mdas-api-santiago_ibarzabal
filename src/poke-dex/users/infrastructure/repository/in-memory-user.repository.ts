import { UserRepositoryInterface } from "../../domain/interfaces/user-repository.interface";
import UserAggregate from "../../domain/user.aggregate";

class InMemoryUserRepository implements UserRepositoryInterface {
  private users: UserAggregate[] = [];

  save(user: UserAggregate): void {
    this.users.push(user);
  }

  addFavouritePokemon(userId: number, pokemonId: number): void {
    const user = this.users.find((user) => user.getId() === userId);
    if (user) {
      user.addFavouritePokemon(pokemonId);
    }
  }

  findUserById(userId: number): UserAggregate | undefined {
    return this.users.find((user) => user.getId() === userId);
  }
}

export default InMemoryUserRepository;