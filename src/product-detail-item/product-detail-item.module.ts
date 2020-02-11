import { Module } from '@nestjs/common';
import { ProductDetailItemService } from './product-detail-item.service';
import { ProductDetailItem } from './product-detail-item.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ProductDetailItem])],
  providers: [ProductDetailItemService],
})
export class ProductDetailItemModule {}
