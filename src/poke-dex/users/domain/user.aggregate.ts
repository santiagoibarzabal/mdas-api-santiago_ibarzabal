import Pokemon from '../../pokemons/domain/pokemon.aggregate';

class UserAggregate {
  private id: number;
  private name: string;
  private favouritePokemons: Pokemon[];

  constructor(id: number, name: string, favouritePokemons: Pokemon[] = []) {
    this.id = id;
    this.name = name;
    this.favouritePokemons = favouritePokemons;
  }
}

export default UserAggregate;
