import { Controller, Get } from '@nestjs/common';
import { OrderService } from './order.service';

@Controller('orders')
export class OrderController {
  constructor(private orderService: OrderService) {}

  @Get()
  async fakeDataGenerate() {
    await this.orderService.generateOrderData();
  }
}
