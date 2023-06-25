import { Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { TvActorEntity } from "./tvactor.entity";
import { TvDirectorEntity } from "./tvdirector.entity";
import { ActorEntity } from "./actor.entity";
import { DirectorEntity } from "./director.entity";

@Entity("Tvs")
export class TvEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    description: string;

    @Column()
    releasedate: Date;

    @Column()
    season: number;

    @Column()
    rating: number;

    @Column()
    createdat: Date;

    @Column()
    updatedat: Date;

    // @OneToMany(() => TvActorEntity, (tvactors) => tvactors.tv)
    // tvactors: TvActorEntity[];

    // @OneToMany(() => TvDirectorEntity, (tvdirectors) => tvdirectors.tv)
    // tvdirectors: TvDirectorEntity[];

    @ManyToMany(() => ActorEntity)
    @JoinTable()
    actors: ActorEntity[];

    @ManyToMany(() => DirectorEntity)
    @JoinTable()
    directors: DirectorEntity[];
}