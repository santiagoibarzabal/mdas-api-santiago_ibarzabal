import PokemonAggregate from "../../../../src/poke-dex/pokemons/domain/pokemon.aggregate";
import PokemonTypeEntity from "../../../../src/poke-dex/pokemons/domain/entities/pokemon-type.entity";

jest.mock("../../../../src/poke-dex/pokemons/domain/entities/pokemon-type.entity");
const mockedPokemonTypeEntity = PokemonTypeEntity as jest.MockedClass<typeof PokemonTypeEntity>;

describe("PokemonAggregate", () => {
  it("should be defined", () => {
    expect(PokemonAggregate).toBeDefined();
  });

  it("should be able to create a new instance", () => {
    // Given
    const id = 1;
    const name = "Bulbasaur";

    // When
    const pokemonAggregate = new PokemonAggregate(id, name, []);

    // Then
    expect(pokemonAggregate).toBeDefined();
  });


  it("should be able to create a new instance with pokemon types", () => {
    // Given
    const id = 1;
    const name = "Bulbasaur";
    const grassTypeMock = new mockedPokemonTypeEntity("grass", "https://pokeapi.co/api/v2/type/12/");
    const poisonTypeMock = new mockedPokemonTypeEntity("poison", "https://pokeapi.co/api/v2/type/4/");

    // When
    const pokemonAggregate = new PokemonAggregate(id, name, [grassTypeMock, poisonTypeMock]);

    // Then
    expect(pokemonAggregate).toBeDefined();
  });
});