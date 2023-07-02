class PokemonTimesSelectedAsFavoriteCount {
  private _value: number;

  constructor(value: number) {
    this._value = value;
  }

  get value(): number {
    return this._value;
  }

  public increment(): void {
    this._value = this._value + 1;
  }
}

export default PokemonTimesSelectedAsFavoriteCount;
