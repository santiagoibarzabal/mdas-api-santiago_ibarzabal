/* eslint-disable @typescript-eslint/no-explicit-any */
import { Command } from 'commander';
import GetPokemonTypesUseCase from '../../application/use-cases/get-pokemon-types.use-case';
import RestPokemonRepository from '../repositories/rest-pokemon.repository';
import PokemonNotFoundException from "../../domain/exceptions/pokemon-not-found.exception";

const CLI = () => {
  const program = new Command();
  program.version('1.0.0');
  program.name('Pokemon Types');
  program.description('Command line tool to perform Pokemon operations.');
  program
    .command('types')
    .requiredOption('-n, --name <name>', 'Pokemon name')
    .description('Return Pokemon types')
    .action((options) => {
      const getPokemonTypesUseCase = new GetPokemonTypesUseCase(new RestPokemonRepository());
      getPokemonTypesUseCase.execute(options.name).then((pokemon) => {
        const pokemonNames = pokemon.getTypes().map((pokemonType) => {
          return pokemonType.getName().value;
        });
        const outputMessage = `Pokemon types for ${options.name}: ${pokemonNames.join(', ')}`;
        console.log(outputMessage);
      }).catch((error: any) => {
        if (error instanceof PokemonNotFoundException) {
          console.log("Pokemon not found");
        } else {
          console.log("Connection Error");
        }
      });
    });

  return program;
};

module.exports = CLI;
