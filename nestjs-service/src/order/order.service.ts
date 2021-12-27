import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Order, OrderDocument } from "./order.model";
import { OrderData } from "./order.interface";

@Injectable()
export class OrderService {
  constructor(
    @InjectModel(Order.name)
    private OrderModel: Model<OrderDocument>,
  ) {}
  async findAll() {
    return this.OrderModel.find().lean();
  }
  async create(data: OrderData): Promise<Order> {
    return new this.OrderModel(data).save();
  }
}
