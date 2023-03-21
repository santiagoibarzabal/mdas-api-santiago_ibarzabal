import PokemonAggregate from "../../../../src/poke-dex/pokemons/domain/pokemon.aggregate";
import PokemonTypeEntity from "../../../../src/poke-dex/pokemons/domain/entities/pokemon-type.entity";
import {
  PokemonId,
  PokemonName,
  PokemonTypeName,
  PokemonTypeUrl
} from "../../../../src/poke-dex/pokemons/domain/value-objects";

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

    // When
    const pokemonAggregate = new PokemonAggregate(id, name, []);

    // Then
    expect(pokemonAggregate).toBeDefined();
  });


  it("should be able to create a new instance with pokemon types", () => {
    // Given
    const id = new PokemonId(1);
    const name = new PokemonName("Bulbasaur");
    const grassTypeMock = new mockedPokemonTypeEntity(new PokemonTypeName("grass"), new PokemonTypeUrl("https://pokeapi.co/api/v2/type/12/"));
    const poisonTypeMock = new mockedPokemonTypeEntity(new PokemonTypeName("poison"), new PokemonTypeUrl("https://pokeapi.co/api/v2/type/4/"));

    // When
    const pokemonAggregate = new PokemonAggregate(id, name, [grassTypeMock, poisonTypeMock]);

    // Then
    expect(pokemonAggregate).toBeDefined();
  });
});
