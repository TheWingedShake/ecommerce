import { Controller, Get, Post, Body, Delete, Param, Put } from '@nestjs/common';
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

    @Put('product')
    async EditProduct(@Body() productData: Product): Promise<any> {
        return this.productService.update(productData);
    }

    @Delete('product')
    async deleteProduct(@Body() productData: Product): Promise<any> {
        return this.productService.delete(productData.id);
    }

}
