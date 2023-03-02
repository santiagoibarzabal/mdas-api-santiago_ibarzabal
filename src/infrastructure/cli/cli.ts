import { Command } from "commander";
import GetPokemonTypesUseCase from "../../application/use-cases/get-pokemon-types.use-case";
import PokemonRepository from "../repositories/pokemon.repository";


const CLI = () => {
	const program = new Command();
	program.version("1.0.0");
	program.name("Pokemon Types");
	program.description("Command line tool to perform Pokemon operations.");

	program
		.command("types")
		.requiredOption("-n, --name <name>", "Pokemon name")
		.description("Return Pokemon types")
		.action((options) => {
			const getPokemonTypesUseCase = new GetPokemonTypesUseCase(new PokemonRepository())
			
			getPokemonTypesUseCase.execute(options.name).then((types) => {
				console.log(types);
			});
		});

	return program;
};

module.exports = CLI;
