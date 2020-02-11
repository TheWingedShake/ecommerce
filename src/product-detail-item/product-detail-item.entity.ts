import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, ManyToMany } from 'typeorm';
import { ProductDetail } from 'src/product-detail/product-detail.entity';
import { ConcreteProduct } from 'src/concrete-product/concrete-product.entity';

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
