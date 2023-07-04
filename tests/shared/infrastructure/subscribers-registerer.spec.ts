import SubscribersRegisterer from "../../../src/shared/infrastructure/subscribers-registerer";
import RabbitMqPokemonSelectedAsFavoriteSubscriber
  from "../../../src/poke-dex/pokemons/infrastructure/suscribers/rabbit-mq-pokemon-selected-as-favorite-subscriber";
import RestPokemonRepository from "../../../src/poke-dex/pokemons/infrastructure/repositories/rest-pokemon.repository";

describe('SubscribersRegisterer', () => {
  it("should be defined", () => {
    expect(SubscribersRegisterer).toBeDefined();
  });

  it("should create a new instance", () => {
    new SubscribersRegisterer();
  });

  it("should register subscribers", () => {
    new SubscribersRegisterer().registerRabbitMqPokemonSelectedAsFavoriteSubscriber();
  });
});
