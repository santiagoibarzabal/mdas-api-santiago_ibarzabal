import RabbitMQPokemonFavouritesSubscriber
  from "../../poke-dex/pokemons/infrastructure/suscribers/rabbit-mq-pokemon-favorite-suscribers";
import InMemoryPokemonRepository
  from "../../poke-dex/pokemons/infrastructure/repositories/in-memory-pokemon.repository";

export function registerSubscribers() {
  const SUBSCRIBERS = [
    new RabbitMQPokemonFavouritesSubscriber(new InMemoryPokemonRepository()),
  ]

  SUBSCRIBERS.forEach(subscriber => subscriber.connect());
}
