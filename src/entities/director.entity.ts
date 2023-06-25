import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity("Directors")
export class DirectorEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;
}