import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductDetail } from './product-detail.entity';
import { ProductDetailService } from './product-detail.service';
import { ProductDetailController } from './product-detail.controller';

@Module({
    imports: [TypeOrmModule.forFeature([ProductDetail])],
    providers: [ProductDetailService],
    controllers: [ProductDetailController],
    exports: [ProductDetailService]
})
export class ProductDetailModule {}
