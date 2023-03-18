import UserCreatorService from "../../../../src/poke-dex/users/domain/services/user-creator.service";
import InMemoryUserRepository from "../../../../src/poke-dex/users/infrastructure/repository/in-memory-user.repository";
import UserAggregate from "../../../../src/poke-dex/users/domain/user.aggregate";
import { UserAlreadyExistsException } from "../../../../src/poke-dex/users/domain/exceptions/user-already-exists.exception";

describe("User creator service tests", () => {

    it("should be defined", () => {
      expect(UserCreatorService).toBeDefined();
    });

    it("should be able to create a new user", () => {
        // Given
        const repository = new InMemoryUserRepository 
        const creator = new UserCreatorService(repository);
        const userId = 1
        const name = 'Test'
        const user = new UserAggregate(userId, name)        
    
        // When
        creator.create(user)
        const userCreated = repository.findUserById(userId)
    
        // Then
        expect(userCreated).toBeDefined();
    });

    it("should throw exception when user already exists", () => {
        // Given
        const repository = new InMemoryUserRepository 
        const creator = new UserCreatorService(repository);
        const userId = 1
        const name = 'Test'
        const user = new UserAggregate(userId, name)        
    
        // When
        const t = () => {
            creator.create(user)
            creator.create(user)
        };
          
        // Then
        expect(t).toThrowError(UserAlreadyExistsException);
    });
  
})