import { PokemonInvalidTypeUrlException } from '../exceptions/pokemon-invalid-type-url.exception';

class PokemonTypeUrlValueObject {
  private readonly _value: string;
  private _patternRegex = new RegExp(
    /(http|https)?:\/\/(\S+)/
  );

  constructor(value: string) {
    if (!this.validate(value)) {
      throw new PokemonInvalidTypeUrlException();
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

export default PokemonTypeUrlValueObject;
