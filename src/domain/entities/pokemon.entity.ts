import PokemonType from "./pokemon-type.entity"

class PokemonEntity {
  id: number;
  name: string;
  types: PokemonType[];

  constructor(id: number, name: string, types: PokemonType[]) {
    this.id = id;
    this.name = name;
    this.types = types;
  }
}

export default PokemonEntity;
