import UserAggregate from "../../domain/user.aggregate";
import UserCreatorService from "../../domain/services/user-creator.service";
import CreateUserDTO from "../dtos/create-user.dto";
import { UserRepositoryInterface } from "../../domain/interfaces/user-repository.interface";

class CreateUserUseCase {
  private creatorService: UserCreatorService;

  constructor(repository: UserRepositoryInterface) {
    const creatorService = new UserCreatorService(repository);
    this.creatorService = creatorService;
  }

  execute(userDto: CreateUserDTO): void {
    const newUser = new UserAggregate(userDto.id, userDto.name);
    this.creatorService.create(newUser);
  }
}

export default CreateUserUseCase;
