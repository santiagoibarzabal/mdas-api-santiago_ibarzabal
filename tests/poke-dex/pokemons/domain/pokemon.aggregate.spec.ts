import PokemonAggregate from "../../../../src/poke-dex/pokemons/domain/pokemon.aggregate";
import PokemonTypeEntity from "../../../../src/poke-dex/pokemons/domain/entities/pokemon-type.entity";
import {
  PokemonHeight,
  PokemonId,
  PokemonName,
  PokemonTypeName,
  PokemonTypeUrl, PokemonWeight
} from "../../../../src/poke-dex/pokemons/domain/value-objects";
import PokemonAggregateBuilder from "./pokemon-aggregate-builder";

jest.mock("../../../../src/poke-dex/pokemons/domain/entities/pokemon-type.entity");
const mockedPokemonTypeEntity = PokemonTypeEntity as jest.MockedClass<typeof PokemonTypeEntity>;

describe("PokemonAggregate", () => {
  it("should be defined", () => {
    expect(PokemonAggregate).toBeDefined();
  });

  it("should be able to create a new instance", () => {
    // Given
    const id = new PokemonId(1);
    const name = new PokemonName("Bulbasaur");
    const height = new PokemonHeight(20);
    const weight = new PokemonWeight(20);

    // When
    const pokemonAggregate = new PokemonAggregate(id, name, [], height, weight);

    // Then
    expect(pokemonAggregate).toBeDefined();
  });

  it("should be able to create a new instance with pokemon types", () => {
    // Given
    const id = new PokemonId(1);
    const name = new PokemonName("Bulbasaur");
    const grassTypeMock = new mockedPokemonTypeEntity(new PokemonTypeName("grass"), new PokemonTypeUrl("https://pokeapi.co/api/v2/type/12/"));
    const poisonTypeMock = new mockedPokemonTypeEntity(new PokemonTypeName("poison"), new PokemonTypeUrl("https://pokeapi.co/api/v2/type/4/"));
    const height = new PokemonHeight(20);
    const weight = new PokemonWeight(20);
    // When
    const pokemonAggregate = new PokemonAggregate(id, name, [grassTypeMock, poisonTypeMock], height, weight);

    // Then
    expect(pokemonAggregate).toBeDefined();
  });

  it("should be able to increment times selected as favorite count", () => {
    // Given
    const pokemonAggregate = PokemonAggregateBuilder.create().build();
    // When
    pokemonAggregate.incrementSelectedAsFavoriteCount();
    pokemonAggregate.incrementSelectedAsFavoriteCount();
    // Then
    expect(pokemonAggregate.selectedAsFavoriteCount().value).toBe(2);
  });
});
