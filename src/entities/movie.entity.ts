import { Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ActorEntity } from "./actor.entity";
import { DirectorEntity } from "./director.entity";

@Entity("Movies")
export class MovieEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    description: string;

    @Column()
    releasedate: Date;

    @Column()
    duration: number;

    @Column()
    rating: number;

    @Column()
    createdat: Date;

    @Column()
    updatedat: Date;

    @ManyToMany(() => ActorEntity)
    @JoinTable()
    actors: ActorEntity[];

    @ManyToMany(() => DirectorEntity)
    @JoinTable()
    directors: DirectorEntity[];
}