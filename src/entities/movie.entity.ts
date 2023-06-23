import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { MovieActorEntity } from "./movieactor.entity";
import { MovieDirectorEntity } from "./moviedirector.entity";

@Entity("Movies")
export class MovieEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    description: string;

    @Column()
    release_date: Date;

    @Column()
    duration: number;

    @Column()
    rating: number;

    @Column()
    created_at: Date;

    @Column()
    updated_at: Date;

    @OneToMany(() => MovieActorEntity, (movieactors) => movieactors.movie)
    movieactors: MovieActorEntity[];

    @OneToMany(() => MovieDirectorEntity, (moviedirectors) => moviedirectors.movie)
    moviedirectors: MovieDirectorEntity[];
}