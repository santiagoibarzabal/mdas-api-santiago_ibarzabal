import UserAggregate from "../../domain/user.aggregate";
import UserCreatorService from "../../domain/services/user-creator.service";
import CreateUserDTO from "../dtos/create-user.dto";
import { UserRepositoryInterface } from "../../domain/interfaces/user-repository.interface";
import { UserId, UserName } from "../../domain/value-objects";

class CreateUserUseCase {
  private creatorService: UserCreatorService;

  constructor(repository: UserRepositoryInterface) {
    const creatorService = new UserCreatorService(repository);
    this.creatorService = creatorService;
  }

  execute(userDto: CreateUserDTO): void {
    const newUser = new UserAggregate(
      new UserId(userDto.id),
      new UserName(userDto.name),
    );
    this.creatorService.create(newUser);
  }
}

export default CreateUserUseCase;
