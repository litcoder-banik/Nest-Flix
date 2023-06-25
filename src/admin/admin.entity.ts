import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("Admins")
export class AdminEntity{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    adminname: string;

    @Column()
    password: string;

    @Column()
    email: string;
}