import RabbitMqPokemonSelectedAsFavoriteSubscriber
  from "../../poke-dex/pokemons/infrastructure/suscribers/rabbit-mq-pokemon-selected-as-favorite-subscriber";
import RestPokemonRepository from "../../poke-dex/pokemons/infrastructure/repositories/rest-pokemon.repository";

export default class SubscribersRegisterer {
  public registerRabbitMqPokemonSelectedAsFavoriteSubscriber() {
    const subscriber = new RabbitMqPokemonSelectedAsFavoriteSubscriber(new RestPokemonRepository());
    subscriber.connect();
  }
}
