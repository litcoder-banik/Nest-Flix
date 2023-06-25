import { Entity, JoinTable, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { TvEntity } from "./tv.entity";
import { DirectorEntity } from "./director.entity";

@Entity("Tv_Director")
export class TvDirectorEntity{
    @PrimaryGeneratedColumn()
    id: number;

    // @ManyToOne(() => TvEntity, (tv) => tv.tvdirectors)
    // @JoinTable()
    // tv: TvEntity;

    // @ManyToOne(() => DirectorEntity, (director) => director.tvdirectors)
    // @JoinTable()
    // director: DirectorEntity;
}