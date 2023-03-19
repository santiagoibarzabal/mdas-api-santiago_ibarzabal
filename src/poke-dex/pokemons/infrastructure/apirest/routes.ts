/* eslint-disable @typescript-eslint/no-explicit-any */
import { Application, Request, Response } from "express";
import GetPokemonTypesUseCase from "../../application/use-cases/get-pokemon-types.use-case";
import RestPokemonRepository from "../repositories/rest-pokemon.repository";
import PokemonNotFoundException from "../../domain/exceptions/pokemon-not-found.exception";

export const registerPokemonRoutes = (app: Application): void => {
	app.get("/type", (req: Request, res: Response) => {
		const pokemonName = req?.query?.pokemon_name as string
		const getPokemonTypesUseCase = new GetPokemonTypesUseCase(new RestPokemonRepository())

		getPokemonTypesUseCase.execute(pokemonName).then((pokemon) => {
			return res.status(200).send(pokemon.getTypes());
		}).catch((error: any) => {
			if (error instanceof PokemonNotFoundException) {
				return res.status(404).send('Pokemon not found');
			}
			return res.status(502).send('No connection');
		});
	});
};
