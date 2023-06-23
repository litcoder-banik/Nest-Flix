import { Entity, JoinTable, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { MovieEntity } from "./movie.entity";
import { DirectorEntity } from "./director.entity";

@Entity("Movie_Director")
export class MovieDirectorEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => MovieEntity, (movie) => movie.moviedirectors)
    @JoinTable()
    movie: MovieEntity;

    @ManyToOne(() => DirectorEntity, (director) => director.moviedirectors)
    @JoinTable()
    director: DirectorEntity;
}