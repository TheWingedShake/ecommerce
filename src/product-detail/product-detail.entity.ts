import { Entity, PrimaryGeneratedColumn, Column,  OneToMany } from 'typeorm';
import { ProductDetailItem } from 'src/product-detail-item/product-detail-item.entity';

@Entity()
export class ProductDetail {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 100})
    name: string;

    @Column('text')
    description: string;

    @OneToMany(type => ProductDetailItem, productDetailItem => productDetailItem.productDetail)
    productDetailItems: ProductDetailItem[];

}
