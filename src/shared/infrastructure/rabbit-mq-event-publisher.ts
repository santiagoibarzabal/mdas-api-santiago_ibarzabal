import amqp, { Connection } from 'amqplib/callback_api'
import DomainEvent from "../domain/domain-event";

export default class RabbitMqEventPublisher {
  private connectionConfig;

  constructor() {
    this.connectionConfig = {
      clientProperties: {
          connection_name: 'domain-events'
      },
      queueName: 'domain-events',
      url: `amqp://:${process.env.RABBITMQ_PASSWORD}@${process.env.RABBITMQ_HOST}`
    }
  }

  public publish = (events: DomainEvent[]): void => {
    console.log('Connecting to RabbitMQ...')
    amqp.connect(this.connectionConfig.url, (connectionError: Error, connection: Connection) => {
      if (connectionError) {
        console.log('Error connecting to RabbitMQ: ', connectionError)
        return
      }
      connection.createChannel((channelError, channel) => {
        if (channelError) {
          console.log('Error creating channel: ', channelError)
          return
        }
        events.forEach((event) => {
            const eventType = event.eventType();
            channel.assertQueue(`${this.connectionConfig.queueName}.${eventType}`, {})
            channel.sendToQueue(`${this.connectionConfig.queueName}.${eventType}`, Buffer.from(JSON.stringify(event)), {});
        });
      })
    });
  }
}
