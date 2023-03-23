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

  public get value(): string {
    return this._value;
  }

  private validate(value: string): boolean {
    if (value === undefined) return false
    return this._patternRegex.test(value);
  }
}

export default UserNameValueObject;
