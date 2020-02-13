import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, ManyToMany } from 'typeorm';
import { ProductDetail } from '../product-detail/product-detail.entity';
import { ConcreteProduct } from '../concrete-product/concrete-product.entity';

@Entity()
export class ProductDetailItem {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 100})
    name: string;

    @Column('text')
    description: string;

    @Column()
    price: number;

    @ManyToOne(type => ProductDetail)
    productDetail: ProductDetail;

    @ManyToMany(type => ConcreteProduct)
    concreteProducts: ConcreteProduct[]

}
