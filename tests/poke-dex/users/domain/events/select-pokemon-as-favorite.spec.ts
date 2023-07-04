import SelectPokemonAsFavorite from "../../../../../src/poke-dex/users/domain/events/select-pokemon-as-favorite";

describe("SelectPokemonAsFavoriteEvent", () => {
  it("should be defined", () => {
    expect(SelectPokemonAsFavorite).toBeDefined();
  });
  it("should have a pokemonId", () => {
    const event = new SelectPokemonAsFavorite(1,1);
    expect(event.pokemonId).toBe(1);
  });
});
