import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from "./product/product.module";

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://taylan:asd123@cluster0.ojqk4.mongodb.net/playable-db', { autoCreate: true }),
    ProductModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
