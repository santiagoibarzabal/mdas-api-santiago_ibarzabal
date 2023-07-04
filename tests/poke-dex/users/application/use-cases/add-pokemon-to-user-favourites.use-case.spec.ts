import AddPokemonToUserFavourites from "../../../../../src/poke-dex/users/application/use-cases/add-pokemon-to-user-favourites.use-case";
import InMemoryUserRepository
  from "../../../../../src/poke-dex/users/infrastructure/repository/in-memory-user.repository";
import RabbitMqEventPublisher from "../../../../../src/shared/infrastructure/rabbit-mq-event-publisher";
import UserAggregate from "../../../../../src/poke-dex/users/domain/user.aggregate";
import { UserId, UserName } from "../../../../../src/poke-dex/users/domain/value-objects";

jest.mock("../../../../../src/poke-dex/users/infrastructure/repository/in-memory-user.repository");
const MockUserRepository = InMemoryUserRepository as jest.MockedClass<typeof InMemoryUserRepository>
const MockPublisher = RabbitMqEventPublisher as jest.MockedClass<typeof RabbitMqEventPublisher>

describe('AddPokemonToUserFavourites', () => {
  it('should be defined', () => {
    expect(AddPokemonToUserFavourites).toBeDefined();
  });

  it('should be executed', () => {
    const mockUserRepository = new MockUserRepository();
    const mockPublisher = new MockPublisher();
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    mockUserRepository.addFavouritePokemon.mockImplementation(() => {
      return new UserAggregate(new UserId(1), new UserName('John'));
    })
    const useCase = new AddPokemonToUserFavourites(mockUserRepository, mockPublisher);
    useCase.execute(1, 1);
    expect(mockUserRepository.addFavouritePokemon).toBeCalledTimes(1);
  });
});
