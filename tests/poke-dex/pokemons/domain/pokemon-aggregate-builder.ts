import PokemonTimesSelectedAsFavoriteCount
  from "../../../../src/poke-dex/pokemons/domain/value-objects/pokemon-times-selected-as-favorite-count";
import {
  PokemonHeight,
  PokemonId,
  PokemonName,
  PokemonWeight
} from "../../../../src/poke-dex/pokemons/domain/value-objects";
import PokemonAggregate from "../../../../src/poke-dex/pokemons/domain/pokemon.aggregate";

export default class PokemonAggregateBuilder {
  private defaultValues = {
    id: new PokemonId(1),
    name: new PokemonName('pikachu'),
    types: [],
    height: new PokemonHeight(1),
    weight: new PokemonWeight(1),
    timesSelectedAsFavorite: new PokemonTimesSelectedAsFavoriteCount(0),
  };

  public static create(): PokemonAggregateBuilder {
    return new PokemonAggregateBuilder();
  }

  public withTimesSelectedAsFavorite(pokemonTimesSelectedAsFavoriteCount: PokemonTimesSelectedAsFavoriteCount): PokemonAggregateBuilder {
    this.defaultValues.timesSelectedAsFavorite = pokemonTimesSelectedAsFavoriteCount;
    return this;
  }

  public build(): PokemonAggregate {
    return new PokemonAggregate(
      this.defaultValues.id,
      this.defaultValues.name,
      this.defaultValues.types,
      this.defaultValues.height,
      this.defaultValues.weight,
      this.defaultValues.timesSelectedAsFavorite,
    );
  }
}
