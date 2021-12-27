import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Product, ProductDocument } from "./product.model";
import { ProductData } from "./product.interface";

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product.name)
    private ProductModel: Model<ProductDocument>,
  ) {}

  async create(data: any): Promise<Product> {
    return new this.ProductModel(data).save();
  }

  async findOne(id: string): Promise<Product> {
    return this.ProductModel.findOne({ id: id }).lean();
  }

  async findAll(): Promise<Product[]> {
    return this.ProductModel.find().lean();
  }

  async update(id: string, data: ProductData): Promise<Product> {
    return this.ProductModel.findOneAndUpdate({ id }, data).lean();
  }

  async delete(id: string): Promise<void> {
    await this.ProductModel.deleteOne({ id }).lean();
  }
}
