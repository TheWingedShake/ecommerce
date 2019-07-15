import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductDetail } from './product-detail.entity';
import { Repository, UpdateResult, DeleteResult } from 'typeorm';

@Injectable()
export class ProductDetailService {

    constructor(
        @InjectRepository(ProductDetail)
        private readonly productDetailRepository: Repository<ProductDetail>
    ) {}

    async findAll(params: any = {}): Promise<ProductDetail[]> {
        return await this.productDetailRepository.find(params);
    }

    async findOne(id: number, params: any = {}): Promise<ProductDetail> {
        return await this.productDetailRepository.findOne(id, params);
    }

    async create(productDetail: ProductDetail): Promise<ProductDetail> {
        return await this.productDetailRepository.save(productDetail);
    }

    async edit(productDetail: ProductDetail): Promise<UpdateResult> {
        return await this.productDetailRepository.update(productDetail.id, productDetail);
    }

    async delete(id: number): Promise<DeleteResult> {
        return await this.productDetailRepository.delete(id);
    }

}
