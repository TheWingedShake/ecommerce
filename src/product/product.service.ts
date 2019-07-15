import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './product.entity';
import { Repository, UpdateResult, DeleteResult } from 'typeorm';

@Injectable()
export class ProductService {

    constructor(
        @InjectRepository(Product)
        private readonly productRepository: Repository<Product>,
    ) {}

    async findAll(): Promise<Product[]> {
        return await this.productRepository.find();
    }

    async findOne(id: number): Promise<Product> {
        return await this.productRepository.findOne(id);
    }

    async create(product: Product): Promise<Product> {
        return await this.productRepository.save(product);
    }

    async update(product: Product): Promise<UpdateResult> {
        return await this.productRepository.update(product.id, product);
    }

    async delete(id): Promise<DeleteResult> {
        return await this.productRepository.delete(id);
    }

}
