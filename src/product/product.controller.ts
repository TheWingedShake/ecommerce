import { Controller, Get, Post, Body, Delete, Param } from '@nestjs/common';
import { ProductService } from './product.service';
import { Product } from './product.entity';

@Controller()
export class ProductController {

    constructor(private readonly productService: ProductService) {}

    @Get('product')
    getProduct(): Promise<Product[]> {
        return this.productService.findAll();
    }

    @Get('product/:id')
    getProductById(): string {
        return 'id';
    }

    @Post('product')
    async createProduct(@Body() productData: Product): Promise<any> {
        return this.productService.create(productData);
    }

    @Delete('product')
    async deleteProduct(@Param('id') id: number): Promise<any> {
        return this.productService.delete(id);
    }

}
