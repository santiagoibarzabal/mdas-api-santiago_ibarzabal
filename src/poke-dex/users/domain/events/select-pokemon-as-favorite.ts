import DomainEvent from "../../../../shared/domain/domain-event";

export default class SelectPokemonAsFavorite extends DomainEvent {
  readonly pokemonId: number;

  constructor(
    aggregateId: number,
    pokemonId: number
  ) {
    super(aggregateId, "poke-dex.users.select-pokemon-as-favorite");
    this.pokemonId = pokemonId;
  }

}
