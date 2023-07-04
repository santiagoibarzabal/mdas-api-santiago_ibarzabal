import GetPokemonTypesUseCase from "../../../../../src/poke-dex/pokemons/application/use-cases/get-pokemon-types.use-case";
import PokemonType from "../../../../../src/poke-dex/pokemons/domain/entities/pokemon-type.entity";
import PokemonAggregate from '../../../../../src/poke-dex/pokemons/domain/pokemon.aggregate';
import {
    PokemonHeight,
    PokemonId,
    PokemonName,
    PokemonTypeName,
    PokemonTypeUrl, PokemonWeight
} from "../../../../../src/poke-dex/pokemons/domain/value-objects";

describe('Pokemon use case unit test', () => {
    it("Should be return Electric pokemon type", () => {
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
        const mockpokemonRepositoryimp = {
            getPokemonByName: jest.fn().mockReturnValue(pokemon), //
            getPokemonById: jest.fn().mockReturnValue(pokemon), //
            update: jest.fn().mockReturnValue(pokemon)
        }
        const getPokemonTypesUseCase = new GetPokemonTypesUseCase(mockpokemonRepositoryimp);
        getPokemonTypesUseCase.execute("Pikachu").then((pokemon) => {
            const pokemonNames = pokemon.getTypes().map((pokemonType) => {
                return pokemonType.getName().value;
            });
            expect(pokemonNames).toStrictEqual(["Electric"]);

        })
    });
});
