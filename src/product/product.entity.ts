import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { ConcreteProduct } from '../concrete-product/concrete-product.entity';

@Entity()
export class Product {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 100})
    name: string;

    @Column('text')
    description: string;

    @OneToMany(type => ConcreteProduct, concreteProduct => concreteProduct.product)
    concreteProducts: ConcreteProduct[];

}
