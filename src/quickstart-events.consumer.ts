import { Injectable, OnModuleInit } from '@nestjs/common';
import ConsumerService from './kafka/consumer.service';

@Injectable()
export class QuickStartConsumer implements OnModuleInit {
  constructor(private consumerService: ConsumerService) {}
  async onModuleInit() {
    await this.consumerService.consume(
      { topics: ['quickstart-events'] },
      {
        eachMessage: async ({ topic, partition, message }) => {
          console.log({
            values: message.value.toString(),
            topic: topic.toString(),
            partition: partition.toString(),
          });
        },
      },
    );
  }
}
