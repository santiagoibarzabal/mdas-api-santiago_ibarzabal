import { UserPokemonAlreadyInFavouritesException } from "./exceptions/user-pokemon-already-in-favourites.exception";

class UserAggregate {
  private id: number;
  private name: string;
  private favouritePokemonIds: number[];

  constructor(id: number, name: string, favouritePokemonIds: number[] = []) {
    this.id = id;
    this.name = name;
    this.favouritePokemonIds = favouritePokemonIds;
  }

  public getId(): number {
    return this.id;
  }

  public addFavouritePokemon(pokemonId: number): void {
    this.validatePokemonIsAlreadyFavourite(pokemonId);
    this.favouritePokemonIds.push(pokemonId);
  }

  private validatePokemonIsAlreadyFavourite(pokemonId: number) {
    if (this.favouritePokemonIds.includes(pokemonId)) {
      throw new UserPokemonAlreadyInFavouritesException();
    }
  }
}

export default UserAggregate;
