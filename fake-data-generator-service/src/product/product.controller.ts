import { Controller, Inject, Post } from '@nestjs/common';
import { ProductService } from './product.service';
import { ClientProxy } from '@nestjs/microservices';
const { performance } = require('perf_hooks');

@Controller('products')
export class ProductController {
  constructor(
    private productService: ProductService,
    @Inject('RABBITMQ_SERVICE') private readonly client: ClientProxy,
  ) {}

  @Post()
  async generateProduct() {
    const product = await this.productService.generateProductData();
    const startTime = performance.now();
    await this.client.emit('create_product', product);
    const endTime = performance.now();
    return `Fake product data sent to nest-service and saved in db. Recording time: ${
      endTime - startTime
    }`;
  }
}
