import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { KafkaModule } from './kafka/kafka.module';
import { QuickStartConsumer } from './quickstart-events.consumer';

@Module({
  imports: [
    // ClientsModule.register([
    //   {
    //     name: 'HERO_SERVICE',
    //     transport: Transport.KAFKA,
    //     options: {
    //       client: {
    //         clientId: 'hero',
    //         brokers: ['localhost:9092'],
    //       },
    //       consumer: {
    //         groupId: 'hero-consumer',
    //       },
    //     },
    //   },
    // ]),
    KafkaModule,
  ],
  controllers: [AppController],
  providers: [AppService, QuickStartConsumer],
})
export class AppModule {}
