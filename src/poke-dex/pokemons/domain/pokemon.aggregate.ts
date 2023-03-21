import PokemonType from "./entities/pokemon-type.entity"
import { PokemonId, PokemonName } from "./value-objects";

class PokemonAggregate {
  private readonly id: PokemonId;
  private readonly name: PokemonName;
  private readonly types: PokemonType[];

  constructor(id: PokemonId, name: PokemonName, types: PokemonType[]) {
    this.id = id;
    this.name = name;
    this.types = types;
  }

  public getTypes(): PokemonType[] {
    return this.types;
  }

  public getName(): PokemonName {
    return this.name;
  }

}

export default PokemonAggregate;
