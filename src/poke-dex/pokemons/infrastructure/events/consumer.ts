import amqp from 'amqplib/callback_api';

const options = {
  clientProperties:
  {
    connection_name: 'producer-service'
  }
};

amqp.connect('amqp://rabbitmquser:rabbitmqpassword@localhost', options, (error, connection) => {
  if (error) {
    throw error;
  }

  connection.createChannel((connErr, channel) => {
    if (connErr) {
      throw connErr;
    }

    channel.assertQueue('test_queue', { durable: true });

    channel.prefetch(1);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    channel.consume('test_queue', (msg: any) => {
      console.log(msg.content.toString());

      setTimeout(() => {
        connection.close();
        process.exit(0);
      }, 500);
    }, {
      noAck: true
    });
  });
});