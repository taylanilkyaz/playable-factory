import { Controller, Get } from "@nestjs/common";
import { OrderService } from "./order.service";
import { EventPattern } from "@nestjs/microservices";
import { OrderData } from "./order.interface";

@Controller('orders')
export class OrderController {
  constructor(private orderService: OrderService) {}

  @EventPattern('getOrders')
  findAll() {
    return this.orderService.findAll();
  }

  @EventPattern('createOrder')
  async createOrder(data: OrderData){
    console.log(data);
    await this.orderService.create(data);
  }
}
