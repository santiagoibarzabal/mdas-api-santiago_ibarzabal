import { UserInvalidNameException } from '../exceptions/user-invalid-name.exception';

class UserNameValueObject {
  private readonly _value: string;
  private _patternRegex = new RegExp(/^[a-zA-Z0-9]{3,20}$/);

  constructor(value: string) {
    if (!this.validate(value)) {
      throw new UserInvalidNameException();
    }
    this._value = value;
  }

  get value(): string {
    return this._value;
  }

  private validate(value: string): boolean {
    return this._patternRegex.test(value);
  }
}

export default UserNameValueObject;
