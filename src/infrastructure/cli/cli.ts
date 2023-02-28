import { Command } from "commander";
import GetPokemonTypesController from "../controllers/get-pokemon-types.controller";

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
			const getPokemonTypesController = new GetPokemonTypesController();
			getPokemonTypesController.execute(options.name).then((types) => {
				console.log(types);
			});
		});

	return program;
};

module.exports = CLI;
