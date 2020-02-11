import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, ManyToMany } from 'typeorm';
import { Product } from 'src/product/product.entity';
import { ProductDetailItem } from 'src/product-detail-item/product-detail-item.entity';

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

    @ManyToMany(type => ProductDetailItem)
    productDetailItems: ProductDetailItem[];

}
