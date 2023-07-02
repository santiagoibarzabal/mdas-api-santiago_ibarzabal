import PokemonType from "./entities/pokemon-type.entity"
import { PokemonId, PokemonName, PokemonHeight, PokemonWeight } from "./value-objects";
import PokemonTimesSelectedAsFavoriteCount from "./value-objects/pokemon-times-selected-as-favorite-count";


class PokemonAggregate {
  private readonly id: PokemonId;
  private readonly name: PokemonName;
  private readonly types: PokemonType[];
  private readonly height: PokemonHeight;
  private readonly weight: PokemonWeight;
  private readonly timesSelectedAsFavorite: PokemonTimesSelectedAsFavoriteCount

  constructor(
    id: PokemonId,
    name: PokemonName,
    types: PokemonType[],
    height: PokemonHeight,
    weight: PokemonWeight,
    timesAddedAsFavorite: PokemonTimesSelectedAsFavoriteCount = new PokemonTimesSelectedAsFavoriteCount(0),
  ) {
      this.id = id;
      this.name = name;
      this.types = types;
      this.height = height;
      this.weight = weight;
      this.timesSelectedAsFavorite = timesAddedAsFavorite ?? new PokemonTimesSelectedAsFavoriteCount(0);
  }

  public getId(): PokemonId {
    return this.id;
  }

  public getTypes(): PokemonType[] {
    return this.types;
  }

  public getName(): PokemonName {
    return this.name;
  }

  public getHeight(): PokemonHeight {
    return this.height;
  }

  public getWeight(): PokemonWeight {
    return this.weight;
  }

  public selectedAsFavoriteCount(): PokemonTimesSelectedAsFavoriteCount {
    return this.timesSelectedAsFavorite;
  }

  public incrementSelectedAsFavoriteCount(): void {
    this.timesSelectedAsFavorite.increment();
  }

}

export default PokemonAggregate;
