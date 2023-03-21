import { PokemonInvalidNameException } from '../exceptions/pokemon-invalid-name.exception';

class PokemonNameValueObject {
  private readonly _value: string;
  private _patternRegex = new RegExp(/^[a-zA-Z0-9]{3,20}$/);

  constructor(value: string) {
    if (!this.validate(value)) {
      throw new PokemonInvalidNameException();
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

export default PokemonNameValueObject;
