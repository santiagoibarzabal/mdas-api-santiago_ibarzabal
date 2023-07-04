import IncreasePokemonTimesSelectedAsFavoriteCountUseCase
  from "../../application/use-cases/increase-pokemon-times-selected-as-favorite-count-use-case";
import amqp from 'amqplib/callback_api';
import { PokemonRepository } from "../../domain/interfaces/pokemon-repository.interface";
import { Subscriber } from "../../../../shared/domain/suscriber";
import SelectPokemonAsFavorite from "../../../users/domain/events/select-pokemon-as-favorite";
import { SelectPokemonAsFavoriteEventType } from "../../../users/domain/events/select-pokemon-as-favorite-event-type";

class RabbitMQPokemonFavoritesSubscriber implements Subscriber {
  private readonly pokemonRepository: PokemonRepository;
  private connectionConfig;

  constructor(pokemonRepository: PokemonRepository) {
    this.connectionConfig = {
      clientProperties: {
        connection_name: 'domain-events'
      },
      queueName: `domain-events.${SelectPokemonAsFavoriteEventType}`,
      url: `amqp://${process.env.RABBITMQ_USER}:${process.env.RABBITMQ_PASSWORD}@${process.env.RABBITMQ_HOST}`
    }
    this.pokemonRepository = pokemonRepository;
  }

  connect() {
    amqp.connect(this.connectionConfig.url, this.connectionConfig.clientProperties, (error, connection) => {
      if (error) {
        throw error;
      }

      connection.createChannel((connErr, channel) => {
        if (connErr) {
          throw connErr;
        }

        console.log('suscriber: ' + this.connectionConfig.queueName);
        channel.assertQueue(this.connectionConfig.queueName, { durable: true });

        channel.prefetch(1);

        channel.consume(this.connectionConfig.queueName, (msg) => {
          if (msg !== null) {
            this.on(JSON.parse(msg.content.toString()));
          }
        }, {
          noAck: true
        });
      });
    });
  }

  on(event: SelectPokemonAsFavorite): void {
    const useCase = new IncreasePokemonTimesSelectedAsFavoriteCountUseCase(this.pokemonRepository);
    const pokemonId = event.pokemonId;
    useCase.execute(pokemonId);
  }
}

export default RabbitMQPokemonFavoritesSubscriber;
