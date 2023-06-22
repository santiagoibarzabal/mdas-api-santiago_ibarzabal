import { UserPokemonAlreadyInFavouritesException } from "./exceptions/user-pokemon-already-in-favourites.exception";
import { UserId, UserName } from "./value-objects";
import { PokemonId } from "../../pokemons/domain/value-objects";
import DomainEvent from "../../../shared/domain/domain-event";
import SelectPokemonAsFavorite from "./events/select-pokemon-as-favorite";

class UserAggregate {
  private readonly id: UserId;
  private name: UserName;
  private readonly favouritePokemonIds: number[];
  private events: DomainEvent[] = [];

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
    const event = new SelectPokemonAsFavorite(this.id.value, pokemonId.value)
    this.raise(event);
  }

  private validatePokemonIsAlreadyFavourite(pokemonId: PokemonId) {
    if (this.favouritePokemonIds.includes(pokemonId.value)) {
      throw new UserPokemonAlreadyInFavouritesException();
    }
  }

  public pullDomainEvents(): DomainEvent[] {
    const recordedEvents = this.events;
    this.events = [];
    return recordedEvents;
  }

  private raise(event: DomainEvent): void {
    this.events.push(event);
  }


}

export default UserAggregate;
