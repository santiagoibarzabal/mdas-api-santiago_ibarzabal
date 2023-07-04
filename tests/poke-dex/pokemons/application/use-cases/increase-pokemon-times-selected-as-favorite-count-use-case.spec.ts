import IncreasePokemonTimesSelectedAsFavoriteCountUseCase from "../../../../../src/poke-dex/pokemons/application/use-cases/increase-pokemon-times-selected-as-favorite-count-use-case";
import PokemonType from "../../../../../src/poke-dex/pokemons/domain/entities/pokemon-type.entity";
import {
    PokemonHeight,
    PokemonId,
    PokemonName,
    PokemonTypeName,
    PokemonTypeUrl, PokemonWeight
} from "../../../../../src/poke-dex/pokemons/domain/value-objects";
import PokemonAggregate from "../../../../../src/poke-dex/pokemons/domain/pokemon.aggregate";
const pokemonType = new PokemonType(
  new PokemonTypeName("Electric"),
  new PokemonTypeUrl("https://valid-url.com"),
);
const pokemon = new PokemonAggregate(
  new PokemonId(1),
  new PokemonName("Pikachu"),
  [pokemonType],
  new PokemonHeight(20),
  new PokemonWeight(20),
);

const mockPokemonRepository = {
    getPokemonByName: jest.fn().mockReturnValue(pokemon),
    getPokemonById: jest.fn().mockReturnValue(pokemon),
    update: jest.fn().mockImplementation(),
};

describe('IncreasePokemonTimesSelectedAsFavoriteUseCase', () => {
    it('should be defined', () => {
        expect(IncreasePokemonTimesSelectedAsFavoriteCountUseCase).toBeDefined();
    });

    it('should be executed', () => {
        const useCase = new IncreasePokemonTimesSelectedAsFavoriteCountUseCase(mockPokemonRepository);
        useCase.execute(1);
        expect(mockPokemonRepository.getPokemonById).toBeCalledTimes(1);
    });
});
