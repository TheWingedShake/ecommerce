import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ConcreteProduct } from './concrete-product.entity';
import { Repository, UpdateResult, DeleteResult } from 'typeorm';

@Injectable()
export class ConcreteProductService {

    constructor(
        @InjectRepository(ConcreteProduct)
        private readonly concreteProductRepository: Repository<ConcreteProduct>,
    ) {}

    async findAll(params: any = {}): Promise<ConcreteProduct[]> {
        return this.concreteProductRepository.find(params);
    }

    async findOne(id: number, params: any = {}): Promise<ConcreteProduct> {
        return this.concreteProductRepository.findOne(id, params);
    }

    async create(concreteProduct: ConcreteProduct): Promise<ConcreteProduct> {
        return this.concreteProductRepository.save(concreteProduct);
    }

    async update(concreteProduct: ConcreteProduct): Promise<ConcreteProduct> {
        return this.concreteProductRepository.save(concreteProduct);
    }

    async delete(id): Promise<DeleteResult> {
        return await this.concreteProductRepository.delete(id);
    }

}
