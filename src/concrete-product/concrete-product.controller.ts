import { Controller, Get, Body, Post, Delete, Put } from '@nestjs/common';
import { ConcreteProductService } from './concrete-product.service';
import { ConcreteProduct } from './concrete-product.entity';
import { ProductService } from '../product/product.service';
import { ProductDetail } from '../product-detail/product-detail.entity';
import { ProductDetailService } from '../product-detail/product-detail.service';

@Controller()
export class ConcreteProductController {

    constructor(
        private readonly concreteProductService: ConcreteProductService,
        private readonly productService: ProductService,
        private readonly productDetailService: ProductDetailService,
        ) {}

    @Get('concrete-product')
    getConcreteProduct(): Promise<ConcreteProduct[]> {
        return this.concreteProductService.findAll({relations: ['product', 'productDetails']});
    }

    @Post('concrete-product')
    async createConcreteProduct(@Body() concreteProductData: ConcreteProduct): Promise<any> {
        const concreteProduct = await this.concreteProductService.create(concreteProductData);
        return this.concreteProductService.findOne(concreteProduct.id, {relations: ['product']});
    }

    @Put('concrete-product')
    async editConcreteProduct(@Body() concreteProductData: ConcreteProduct): Promise<any> {
        await this.concreteProductService.update(concreteProductData);
        return this.concreteProductService.findOne(concreteProductData.id, {relations: ['product', 'productDetails']});
    }

    @Delete('concrete-product')
    deleteConcreteProduct(@Body() concreteProductData: ConcreteProduct): Promise<any> {
        return this.concreteProductService.delete(concreteProductData.id);
    }

}
