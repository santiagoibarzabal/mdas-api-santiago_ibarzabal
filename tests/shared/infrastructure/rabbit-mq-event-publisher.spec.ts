import RabbitMqPokemonSelectedAsFavoriteSubscriber
  from "../../../src/poke-dex/pokemons/infrastructure/suscribers/rabbit-mq-pokemon-selected-as-favorite-subscriber";
import RestPokemonRepository from "../../../src/poke-dex/pokemons/infrastructure/repositories/rest-pokemon.repository";
import RabbitMqEventPublisher from "../../../src/shared/infrastructure/rabbit-mq-event-publisher";
import SelectPokemonAsFavorite from "../../../src/poke-dex/users/domain/events/select-pokemon-as-favorite";
import { ConnectionStatus } from "../../../src/shared/domain/connection-status";

describe("RabbitMqEventPublisher", () => {
  it("should connect and return ConnectionStatus.OK", () => {
    const publisher = new RabbitMqEventPublisher();
    const event = new SelectPokemonAsFavorite(1, 1);
    const connectionStatus = publisher.publish([event]);
    expect(connectionStatus).toBe(ConnectionStatus.OK);
  });
});
