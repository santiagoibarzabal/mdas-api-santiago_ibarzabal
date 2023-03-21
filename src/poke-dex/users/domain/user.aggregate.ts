import { UserPokemonAlreadyInFavouritesException } from "./exceptions/user-pokemon-already-in-favourites.exception";
import { UserId, UserName } from "./value-objects";
import { PokemonId } from "../../pokemons/domain/value-objects";

class UserAggregate {
  private id: UserId;
  private name: UserName;
  private favouritePokemonIds: number[];

  constructor(id: UserId, name: UserName, favouritePokemonIds: number[] = []) {
    this.id = id;
    this.name = name;
    this.favouritePokemonIds = favouritePokemonIds;
  }

  public getId(): UserId {
    return this.id;
  }

  public getFavouritePokemons(): number[] {
    return this.favouritePokemonIds;
  }

  public addFavouritePokemon(pokemonId: PokemonId): void {
    this.validatePokemonIsAlreadyFavourite(pokemonId);
    this.favouritePokemonIds.push(pokemonId.value);
  }

  private validatePokemonIsAlreadyFavourite(pokemonId: PokemonId) {
    if (this.favouritePokemonIds.includes(pokemonId.value)) {
      throw new UserPokemonAlreadyInFavouritesException();
    }
  }
}

export default UserAggregate;
