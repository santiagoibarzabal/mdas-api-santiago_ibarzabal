import AddPokemonToUserFavourites from "../../../../../src/poke-dex/users/application/use-cases/add-pokemon-to-user-favourites.use-case";
import InMemoryUserRepository
  from "../../../../../src/poke-dex/users/infrastructure/repository/in-memory-user.repository";

jest.mock("../../../../../src/poke-dex/users/infrastructure/repository/in-memory-user.repository");
const MockUserRepository = InMemoryUserRepository as jest.MockedClass<typeof InMemoryUserRepository>

describe('AddPokemonToUserFavourites', () => {
  it('should be defined', () => {
    expect(AddPokemonToUserFavourites).toBeDefined();
  });

  it('should be executed', () => {
    const mockUserRepository = new MockUserRepository();
    const useCase = new AddPokemonToUserFavourites(mockUserRepository);
    useCase.execute(1, 1);
    expect(mockUserRepository.addFavouritePokemon).toBeCalledTimes(1);
  });
});
