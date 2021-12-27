import { Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { ProductService } from "./product.service";
import { EventPattern } from "@nestjs/microservices";
import { ProductData } from "./product.interface";

@Controller('products')
export class ProductController {
  constructor(private productService: ProductService) {}

  @EventPattern('create_product')
  async createRandomProduct(data: ProductData){
    console.log(data);
    return this.productService.create(data);
  }

  @Post()
  async createProduct(data: ProductData){
    return this.productService.create(data);
  }

  @Get(':id')
  async getProduct(@Param('id') id: string): Promise<ProductData> {
    return this.productService.findOne(id);
  }

  @Get()
  async getProducts(): Promise<ProductData[]> {
    return this.productService.findAll();
  }

  @Post()
  async updateProduct(id: string, data: ProductData){
    return this.productService.update(id, data);
  }

  @Delete(':id')
  async deleteProduct(@Param('id') id: string): Promise<void> {
    await this.productService.delete(id);
  }
}
