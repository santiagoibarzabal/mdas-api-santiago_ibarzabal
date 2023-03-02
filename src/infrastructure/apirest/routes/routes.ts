import { Application, Request, Response } from "express";
import GetPokemonTypesUseCase from "../../../application/use-cases/get-pokemon-types.use-case";
import PokemonRepository from "../../repositories/pokemon.repository";

export const loadApiEndpoints = (app: Application): void => {
	app.get("/type", (req: Request, res: Response) => {
        const pokemonName = req.query.pokemon_name as string
        const getPokemonTypesUseCase = new GetPokemonTypesUseCase(new PokemonRepository())
			
			getPokemonTypesUseCase.execute(pokemonName).then((types) => {
                return res.status(200).send(types);
			});

	});
};