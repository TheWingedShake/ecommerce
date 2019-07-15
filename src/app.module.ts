import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductModule } from './product/product.module';
import { ProductDetailModule } from './product-detail/product-detail.module';
import { ConcreteProductModule } from './concrete-product/concrete-product.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5433,
      username: 'postgres',
      password: 'postgres',
      database: 'ecommerce',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    ProductModule,
    ProductDetailModule,
    ConcreteProductModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
