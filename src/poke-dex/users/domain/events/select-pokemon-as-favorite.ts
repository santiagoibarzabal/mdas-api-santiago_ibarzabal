import DomainEvent from "../../../../shared/domain/domain-event";

export default class SelectPokemonAsFavorite extends DomainEvent {
  private readonly pokemonId: number;

  public getPokemonId(): number {
    return this.pokemonId;
  }

  constructor(
    aggregateId: number,
    pokemonId: number
  ) {
    super(aggregateId, "poke-dex.users.domain.user.select-pokemon-as-favorite");
    this.pokemonId = pokemonId;
  }
}
