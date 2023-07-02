import { PokemonRepository } from "../../domain/interfaces/pokemon-repository.interface";
import { PokemonId } from "../../domain/value-objects";

class IncreasePokemonTimesSelectedAsFavoriteCountUseCase {
    private pokemonRepository: PokemonRepository;

    constructor(pokemonRepository: PokemonRepository) {
        this.pokemonRepository = pokemonRepository;
    }

    async execute(pokemon_id: number): Promise<void> {
        const pokemon = await this.pokemonRepository.getPokemonById(new PokemonId(pokemon_id));
        pokemon.incrementSelectedAsFavoriteCount();
        await this.pokemonRepository.update(pokemon);
    }
}

export default IncreasePokemonTimesSelectedAsFavoriteCountUseCase;
