import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { MovieActorEntity } from "./movieactor.entity";
import { TvActorEntity } from "./tvactor.entity";

@Entity("Actors")
export class ActorEntity{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    actorname: string;

    @OneToMany(() => MovieActorEntity, (movieactors) => movieactors.actor)
    movieactors: MovieActorEntity[];

    @OneToMany(() => TvActorEntity, (tvactors) => tvactors.actor)
    tvactors: TvActorEntity[];
}