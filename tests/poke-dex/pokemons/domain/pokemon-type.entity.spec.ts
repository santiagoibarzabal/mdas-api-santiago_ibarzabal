import PokemonTypeEntity from "../../../../src/poke-dex/pokemons/domain/entities/pokemon-type.entity";
import { PokemonTypeName, PokemonTypeUrl } from "../../../../src/poke-dex/pokemons/domain/value-objects";

describe("PokemonTypeEntity", () => {
  it("should be defined", () => {
    expect(PokemonTypeEntity).toBeDefined();
  });

  it("should be able to create a new instance", () => {
    // Given
    const name = new PokemonTypeName("grass");
    const url = new PokemonTypeUrl("https://pokeapi.co/api/v2/type/12/");

    // When
    const pokemonTypeEntity = new PokemonTypeEntity(name, url);

    // Then
    expect(pokemonTypeEntity).toBeDefined();
  });
});
