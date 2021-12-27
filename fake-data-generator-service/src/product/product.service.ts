import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { ProductData } from './product.interface';

@Injectable()
export class ProductService {
  async generateProductData() {
    const product: ProductData = {
      id: uuidv4(),
      name: 'test' + uuidv4(),
      description: 'test desc' + uuidv4(),
    };
    return product;
  }
}
