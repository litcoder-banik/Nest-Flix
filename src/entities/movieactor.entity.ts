import { Entity, JoinTable, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { MovieEntity } from "./movie.entity";
import { ActorEntity } from "./actor.entity";

@Entity("Movie_Actor")
export class MovieActorEntity{
    @PrimaryGeneratedColumn()
    id: number;

    // @ManyToOne(() => MovieEntity, (movie) => movie.movieactors)
    // @JoinTable()
    // movie: MovieEntity;

    // @ManyToOne(() => ActorEntity, (actor) => actor.movieactors)
    // @JoinTable()
    // actor: ActorEntity;
}