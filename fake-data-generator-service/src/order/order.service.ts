import { Inject, Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { ClientProxy } from '@nestjs/microservices';
import { OrderData } from './order.interface';

@Injectable()
export class OrderService {
  constructor(
    @Inject('RABBITMQ_SERVICE') private readonly client: ClientProxy,
  ) {}

  async generateOrderData() {
    const order: OrderData = {
      id: uuidv4(),
      name: 'test ' + uuidv4(),
      addressInformation: 'addressInfo ' + uuidv4(),
      price: Math.random(),
    };
    return this.client.emit('createOrder', order);
  }
}
