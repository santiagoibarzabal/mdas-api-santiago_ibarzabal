import UserAggregate from "../../../../src/poke-dex/users/domain/user.aggregate";

describe("User aggregate tests", () => {

    it("should be defined", () => {
      expect(UserAggregate).toBeDefined();
    });

    it("should be able to create a new instance", () => {
      // Given
      const id = 1;
      const name = 'Test';
  
      // When
      const userAggregate = new UserAggregate(id, name);
  
      // Then
      expect(userAggregate).toBeDefined();
    });

    it("should be able to create a new instance with some favorites pokemons", () => {
      // Given
      const id = 1;
      const name = 'Test';
      const favouritePokemonIds = [4, 11]
  
      // When
      const userAggregate = new UserAggregate(id, name, favouritePokemonIds);
  
      // Then
      expect(userAggregate).toBeDefined();
    });

  
})