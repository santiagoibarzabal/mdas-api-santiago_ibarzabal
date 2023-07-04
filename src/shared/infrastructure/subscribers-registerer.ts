import RabbitMQPokemonFavouritesSubscriber
  from "../../poke-dex/pokemons/infrastructure/suscribers/rabbit-mq-pokemon-favorite-suscribers";
import InMemoryPokemonRepository
  from "../../poke-dex/pokemons/infrastructure/repositories/in-memory-pokemon.repository";

export default class suscribersRegisterer {
  public registerRabbitMqPokemonsSelectedAsFavoriteSubscriber() {
    const subscriber = new RabbitMQPokemonFavouritesSubscriber(new InMemoryPokemonRepository());
    subscriber.connect();
  }
}
