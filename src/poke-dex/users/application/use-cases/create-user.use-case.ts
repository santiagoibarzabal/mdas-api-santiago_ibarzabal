import UserAggregate from "../../domain/user.aggregate";
import UserCreatorService from "../../domain/services/user-creator.service";
import CreateUserDTO from "../dtos/create-user.dto";

class CreateUserUseCase {
  private creatorService: UserCreatorService;

  constructor(creatorService: UserCreatorService) {
    this.creatorService = creatorService;
  }

  execute(userDto: CreateUserDTO): void {
    const newUser = new UserAggregate(userDto.id, userDto.name);
    this.creatorService.create(newUser);
  }
}

export default CreateUserUseCase;
