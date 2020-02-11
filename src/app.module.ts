import { Module } from '@nestjs/common';
import { BootstrapModule } from './bootstrap/bootstrap.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductModule } from './product/product.module';
import { ProductDetailModule } from './product-detail/product-detail.module';
import { ConcreteProductModule } from './concrete-product/concrete-product.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ProductDetailItemModule } from './product-detail-item/product-detail-item.module';
import config from './config/config';

@Module({
  imports: [
    BootstrapModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: config.db_host,
      port: config.db_port,
      username: config.username,
      password: config.password,
      database: config.database,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    ProductModule,
    ProductDetailModule,
    ConcreteProductModule,
    UsersModule,
    AuthModule,
    ProductDetailItemModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
