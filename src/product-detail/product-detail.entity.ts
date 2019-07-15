import { Entity, PrimaryGeneratedColumn, Column, JoinTable, ManyToMany } from 'typeorm';
import { ConcreteProduct } from 'src/concrete-product/concrete-product.entity';

@Entity()
export class ProductDetail {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 100})
    name: string;

    @Column('text')
    description: string;

    @ManyToMany(type => ConcreteProduct)
    concreteProducts: ConcreteProduct[];

}
