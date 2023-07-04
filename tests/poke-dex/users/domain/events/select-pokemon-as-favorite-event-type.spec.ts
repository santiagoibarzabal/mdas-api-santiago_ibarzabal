export const SelectPokemonAsFavoriteEventTypeSpec = "poke-dex.users.select-pokemon-as-favorite";
import {
  SelectPokemonAsFavoriteEventType
} from "../../../../../src/poke-dex/users/domain/events/select-pokemon-as-favorite-event-type";

describe("SelectPokemonAsFavoriteEventType", () => {
  it("should be defined", () => {
    expect(SelectPokemonAsFavoriteEventType).toBeDefined();
  });
})
