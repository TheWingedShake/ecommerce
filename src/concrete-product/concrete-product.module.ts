import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConcreteProduct } from './concrete-product.entity';
import { ConcreteProductService } from './concrete-product.service';
import { ConcreteProductController } from './concrete-product.controller';
import { ProductModule } from 'src/product/product.module';
import { ProductDetailModule } from 'src/product-detail/product-detail.module';

@Module({
    imports: [TypeOrmModule.forFeature([ConcreteProduct]), ProductModule, ProductDetailModule],
    providers: [ConcreteProductService],
    controllers: [ConcreteProductController],
    exports: [ConcreteProductService],
})
export class ConcreteProductModule {}
