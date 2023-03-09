import express from "express";
import path from "path";

import { registerPokemonRoutes } from "./pokemons/infrastructure/apirest/routes";

// Create Express server
const app = express();

// Express configuration
app.set("port", process.env.PORT ?? 3000);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "../public"), { maxAge: 31557600000 }));

registerPokemonRoutes(app);

const server = app.listen(app.get("port"), () => {
	console.log(
		"  App is running at http://localhost:%d in %s mode",
		app.get("port"),
		app.get("env")
	);
	console.log("  Press CTRL-C to stop\n");
});

export default server;