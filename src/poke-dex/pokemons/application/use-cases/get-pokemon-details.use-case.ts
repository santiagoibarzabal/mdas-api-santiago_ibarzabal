import { PokemonRepository } from "../../domain/interfaces/pokemon-repository.interface";
import { PokemonId } from "../../domain/value-objects";

class GetPokemonDetailsUseCase {
    private pokemonRepository: PokemonRepository;

    constructor(pokemonRepository: PokemonRepository) {
        this.pokemonRepository = pokemonRepository;
    }

    async execute(pokemon_id: number) {
        return await this.pokemonRepository.getPokemonById(new PokemonId(pokemon_id));
    }
}

export default GetPokemonDetailsUseCase;
