import DomainEvent from "../../../../shared/domain/domain-event";
import { SelectPokemonAsFavoriteEventType } from "./select-pokemon-as-favorite-event-type";

export default class SelectPokemonAsFavorite extends DomainEvent {
  readonly pokemonId: number;

  constructor(
    aggregateId: number,
    pokemonId: number
  ) {
    super(aggregateId, SelectPokemonAsFavoriteEventType);
    this.pokemonId = pokemonId;
  }

}
