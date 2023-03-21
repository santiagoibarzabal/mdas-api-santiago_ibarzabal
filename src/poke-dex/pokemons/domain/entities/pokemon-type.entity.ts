import { PokemonTypeName, PokemonTypeUrl } from "../value-objects";

class PokemonTypeEntity {
	private readonly name: PokemonTypeName;
	private readonly url: PokemonTypeUrl;

	constructor(name: PokemonTypeName, url: PokemonTypeUrl) {
		this.name = name;
		this.url = url;
	}

	public getName(): PokemonTypeName {
		return this.name;
	}
}

export default PokemonTypeEntity;
