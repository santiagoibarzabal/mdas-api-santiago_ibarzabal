import amqp from "amqplib/callback_api";
import RabbitMqPokemonSelectedAsFavoriteSubscriber
  from "../../../../../src/poke-dex/pokemons/infrastructure/suscribers/rabbit-mq-pokemon-selected-as-favorite-subscriber";
import RestPokemonRepository
  from "../../../../../src/poke-dex/pokemons/infrastructure/repositories/rest-pokemon.repository";
import { ConnectionStatus } from "../../../../../src/shared/domain/connection-status";

describe("RabbitMqPokemonSelectedAsFavoriteSubscriber", () => {
  it("should connect and return ConnectionStatus.OK", () => {
    const subscriber = new RabbitMqPokemonSelectedAsFavoriteSubscriber(new RestPokemonRepository());
    const connectionStatus = subscriber.connect();
    expect(connectionStatus).toBe(ConnectionStatus.OK);
  });
});
