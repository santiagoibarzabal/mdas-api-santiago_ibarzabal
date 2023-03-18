import app from '../../../../src/poke-dex/app';
import GetPokemonTypesUseCase from "../../../../src/poke-dex/pokemons/application/use-cases/get-pokemon-types.use-case";
import PokemonType from "../../../../src/poke-dex/pokemons/domain/entities/pokemon-type.entity";
import PokemonAggregate from '../../../../src/poke-dex/pokemons/domain/pokemon.aggregate';

afterAll(() => {
    app.close();
});


describe('Pokemon use case unit test', () => {
    it("Should be return Electric pokemon type", () => {
        const pokemonType = new PokemonType("Electric", "");
        const pokemon = new PokemonAggregate(1, "Pikachu", [pokemonType]);
        const mockpokemonRepositoryimp = {
            getPokemonByName: jest.fn().mockReturnValue(pokemon) //
        }
        const getPokemonTypesUseCase = new GetPokemonTypesUseCase(mockpokemonRepositoryimp);
        getPokemonTypesUseCase.execute("Pikachu").then((pokemon) => {
            const pokemonNames = pokemon.getTypes().map((pokemonType) => {
                return pokemonType.getName();
            });
            expect(pokemonNames).toStrictEqual(["Electric"]);

        })
    });
});