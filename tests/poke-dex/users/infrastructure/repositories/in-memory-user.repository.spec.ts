import InMemoryUserRepository from "../../../../../src/poke-dex/users/infrastructure/repository/in-memory-user.repository";
import UserAggregate from "../../../../../src/poke-dex/users/domain/user.aggregate";
import { UserId, UserName } from "../../../../../src/poke-dex/users/domain/value-objects";
import { PokemonId } from "../../../../../src/poke-dex/pokemons/domain/value-objects";

describe("InMemoryUserRepository", () => {
  let inMemoryUserRepository: InMemoryUserRepository;

  beforeEach(() => {
    inMemoryUserRepository = new InMemoryUserRepository();
  });

  describe("save", () => {
    it("should save a user", () => {
      // Given
      const userId = new UserId(1);
      const userName = new UserName("John");
      const user = new UserAggregate(userId, userName);

      // When
      inMemoryUserRepository.save(user);

      // Then
      expect(inMemoryUserRepository.findUserById(user.getId())).toEqual(user);
    });
  });

  describe("addFavouritePokemon", () => {
    it("should add a favourite pokemon to a user", () => {
      // Given
      const userId = new UserId(1);
      const userName = new UserName("John");
      const user = new UserAggregate(userId, userName);
      const pokemonId = new PokemonId(1);
      inMemoryUserRepository.save(user);

      // When
      inMemoryUserRepository.addFavouritePokemon(userId, pokemonId);

      // Then
      expect(inMemoryUserRepository.findUserById(
        user.getId())?.getFavouritePokemons()
      ).toEqual(
        [pokemonId.value]
      );
    });

    it("should not add a favourite pokemon to a user if the user does not exist", () => {
      // Given
      const userId = new UserId(1);
      const pokemonId = new PokemonId(1);

      // When
      inMemoryUserRepository.addFavouritePokemon(userId, pokemonId);

      // Then
      expect(inMemoryUserRepository.findUserById(userId)).toBeUndefined();
    });
  });

  describe("findUserById", () => {
    it("should find a user by id", () => {
      // Given
      const userId = new UserId(1);
      const userName = new UserName("John");
      const user = new UserAggregate(userId, userName);
      inMemoryUserRepository.save(user);

      // When
      const foundUser = inMemoryUserRepository.findUserById(userId);

      // Then
      expect(foundUser).toEqual(user);
    });

    it("should return undefined if the user does not exist", () => {
      // Given
      const userId = new UserId(1);

      // When
      const foundUser = inMemoryUserRepository.findUserById(userId);

      // Then
      expect(foundUser).toBeUndefined();
    });
  });

});
