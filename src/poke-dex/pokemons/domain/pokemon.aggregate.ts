import PokemonType from "./entities/pokemon-type.entity"

class PokemonAggregate {
  private readonly id: number;
  private readonly name: string;
  private readonly types: PokemonType[];

  constructor(id: number, name: string, types: PokemonType[]) {
    this.id = id;
    this.name = name;
    this.types = types;
  }

  public getTypes(): PokemonType[] {
    return this.types;
  }


}

export default PokemonAggregate;
