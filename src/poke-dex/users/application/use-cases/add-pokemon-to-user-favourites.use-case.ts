import { UserRepositoryInterface } from "../../domain/interfaces/user-repository.interface";
import { UserId } from "../../domain/value-objects";
import { PokemonId } from "../../../pokemons/domain/value-objects";
import EventPublisher from "../../../../shared/domain/event-publisher";
import userAggregate from "../../domain/user.aggregate";
import DomainEvent from "../../../../shared/domain/domain-event";

class AddPokemonToUserFavouritesUseCase {
  private repository: UserRepositoryInterface;
  private publisher: EventPublisher;

  constructor(repository: UserRepositoryInterface, publisher: EventPublisher) {
    this.repository = repository;
    this.publisher = publisher;
  }

  execute(userId: number, pokemonId: number): void {
    const user: userAggregate = this.repository.addFavouritePokemon(new UserId(userId), new PokemonId(pokemonId));
    const pulledEvents: DomainEvent[] = user.pullDomainEvents();
    this.publisher.publish(pulledEvents);
  }
}

export default AddPokemonToUserFavouritesUseCase;
