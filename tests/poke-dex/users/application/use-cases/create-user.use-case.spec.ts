import CreateUserUseCase from "../../../../../src/poke-dex/users/application/use-cases/create-user.use-case";
import InMemoryUserRepository from "../../../../../src/poke-dex/users/infrastructure/repository/in-memory-user.repository";
import CreateUserDto from "../../../../../src/poke-dex/users/application/dtos/create-user.dto";

jest.mock("../../../../../src/poke-dex/users/application/dtos/create-user.dto");
const MockDto = CreateUserDto as jest.MockedClass<typeof CreateUserDto>

jest.mock("../../../../../src/poke-dex/users/infrastructure/repository/in-memory-user.repository");
const MockUserRepository = InMemoryUserRepository as jest.MockedClass<typeof InMemoryUserRepository>


describe('CreateUserUseCase', () => {
    it('should be defined', () => {
        expect(CreateUserUseCase).toBeDefined();
    });

    it('should be executed', () => {
        const dto = new MockDto();
        dto.name = 'Santiago';
        dto.id = 1;
        const useCase = new CreateUserUseCase(new MockUserRepository());
        useCase.execute(dto);
    });
});
