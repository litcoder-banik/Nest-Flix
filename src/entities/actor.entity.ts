import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity("Actors")
export class ActorEntity{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;
}