import { Entity, JoinTable, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { TvEntity } from "./tv.entity";
import { ActorEntity } from "./actor.entity";

@Entity("Tv_Actor")
export class TvActorEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => TvEntity, (tv) => tv.tvactors)
    @JoinTable()
    tv: TvEntity;

    @ManyToOne(() => ActorEntity, (actor) => actor.tvactors)
    @JoinTable()
    actor: ActorEntity;
}