import { UserRepositoryInterface } from "../interfaces/user-repository.interface";
import { UserAlreadyExistsException } from "../exceptions/user-already-exists.exception";
import UserAggregate from "../user.aggregate";

class UserCreatorService {
  private repository: UserRepositoryInterface;

  constructor(repository: UserRepositoryInterface) {
    this.repository = repository;
  }

  create(user: UserAggregate): void {
    this.guard(user);

    this.repository.save(user);
  }

  private guard(user: UserAggregate): void {
    const userFound = this.repository.findUserById(user.getId());
    if (userFound) {
      throw new UserAlreadyExistsException();
    }
  }
}

export default UserCreatorService;
