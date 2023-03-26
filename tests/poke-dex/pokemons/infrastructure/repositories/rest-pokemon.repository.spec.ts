import RestPokemonRepository from "../../../../../src/poke-dex/pokemons/infrastructure/repositories/rest-pokemon.repository";
import PokemonAggregate from "../../../../../src/poke-dex/pokemons/domain/pokemon.aggregate";
import { PokemonId, PokemonName } from "../../../../../src/poke-dex/pokemons/domain/value-objects";

describe("RestPokemonRepository", () => {
  const pokemonRepository = new RestPokemonRepository();

  describe("getPokemonByName", () => {

    it("should return a PokemonAggregate", async () => {
      // Given
      const pokemonName = new PokemonName("pikachu");

      // When
      const pokemon = await pokemonRepository.getPokemonByName(pokemonName);

      // Then
      expect(pokemon).toBeInstanceOf(PokemonAggregate);
      expect(pokemon.getName()).toEqual(pokemonName);
    });

    it("should throw an error when the pokemon is not found", async () => {
      // Given
      const pokemonName = new PokemonName("pikachuu");

      // When
      const pokemon = pokemonRepository.getPokemonByName(pokemonName);

      // Then
      await expect(pokemon).rejects.toThrowError();
    });

    afterEach(() => {
      jest.restoreAllMocks();
    });

  });

  describe("getPokemonById", () => {

    it("should return a PokemonAggregate", async () => {
      // Given
      const pokemonId = new PokemonId(1);

      // When
      const pokemon = await pokemonRepository.getPokemonById(pokemonId);

      // Then
      expect(pokemon).toBeInstanceOf(PokemonAggregate);
      expect(pokemon.getId()).toEqual(pokemonId);
    });

    it("should throw an error when the pokemon is not found by id", async () => {
      // Given
      const pokemonId = new PokemonId(23232);

      // When
      const pokemon = pokemonRepository.getPokemonById(pokemonId);

      // Then
      await expect(pokemon).rejects.toThrowError();
    });

    afterEach(() => {
      jest.restoreAllMocks();
    });

  });

});
