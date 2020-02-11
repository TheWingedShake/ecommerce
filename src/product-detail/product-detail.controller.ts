import { Controller, Get, Post, Body, Put, Delete } from '@nestjs/common';
import { ProductDetailService } from './product-detail.service';
import { ProductDetail } from './product-detail.entity';

@Controller()
export class ProductDetailController {

    constructor(private readonly productDetailService: ProductDetailService) {}

    @Get('product-detail')
    getProductDetail(): Promise<ProductDetail[]> {
        return this.productDetailService.findAll({relations: ['productDetailItems']});
    }

    @Post('product-detail')
    createProductDetail(@Body() productDetailData: ProductDetail ): Promise<any> {
        return this.productDetailService.create(productDetailData);
    }

    @Put('product-detail')
    editProductDetail(@Body() productDetailData: ProductDetail): Promise<any> {
        return this.productDetailService.edit(productDetailData);
    }

    @Delete('product-detail')
    deleteProductDetail(@Body() productDetailData: ProductDetail): Promise<any> {
        return this.productDetailService.delete(productDetailData.id);
    }

}
