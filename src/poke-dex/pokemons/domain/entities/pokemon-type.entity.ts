class PokemonTypeEntity {
	private name: string;
	private url: string;

	constructor(name: string, url: string) {
		this.name = name;
		this.url = url;
	}

	public getName(): string {
		return this.name;
	}
}

export default PokemonTypeEntity;
