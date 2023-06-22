import DomainEvent from "../../../../shared/domain/domain-event";

export default class SelectPokemonAsFavorite extends DomainEvent {
  private pokemonId: number;

  constructor(
    aggregateId: number,
    pokemonId: number
  ) {
    super(aggregateId, "poke-dex.users.domain.user.select-pokemon-as-favorite");
    this.pokemonId = pokemonId;
  }
}
