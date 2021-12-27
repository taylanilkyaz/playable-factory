import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {Transport} from "@nestjs/microservices";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api/v1');
  await app.listen(8000);

  const microservicePort = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.RMQ,
    options: {
      urls: ['amqps://bgfhiifh:QLipyUxwr8ejqT1-Y8cxgcidM6ZiTOgE@roedeer.rmq.cloudamqp.com/bgfhiifh'],
      queue: 'nest_queue',
      queueOptions: {
        durable: false,
      },
    },
  });


  microservicePort.listen().then(o => console.log('Microservice is listening'));
}
bootstrap();
