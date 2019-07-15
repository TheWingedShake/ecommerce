import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, ManyToMany, JoinTable } from 'typeorm';
import { Product } from 'src/product/product.entity';
import { ProductDetail } from 'src/product-detail/product-detail.entity';

@Entity()
export class ConcreteProduct {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 100})
    name: string;

    @Column('text')
    description: string;

    @ManyToOne(type => Product)
    product: Product;

    productId: number;

    @ManyToMany(type => ProductDetail)
    @JoinTable({
        name: 'concrete_product_product_details_product_detail',
        joinColumn: { name: 'concreteProductId', referencedColumnName: 'id'},
        inverseJoinColumn: { name: 'productDetailId', referencedColumnName: 'id'},
    })
    productDetails: ProductDetail[];

}
