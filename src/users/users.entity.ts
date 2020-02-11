import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Users {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 50})
    firstName: string;

    @Column({length: 50})
    lastName: string;

    @Column({length: 50})
    email: string;

    @Column()
    password: string;

    @Column()
    isSuperUser: boolean;

}
