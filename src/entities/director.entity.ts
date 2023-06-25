import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { MovieDirectorEntity } from "./moviedirector.entity";
import { TvDirectorEntity } from "./tvdirector.entity";

@Entity("Directors")
export class DirectorEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    // @OneToMany(() => MovieDirectorEntity, (moviedirectors) => moviedirectors.director)
    // moviedirectors: MovieDirectorEntity[];

    // @OneToMany(() => TvDirectorEntity, (tvdirectors) => tvdirectors.director)
    // tvdirectors: TvDirectorEntity[];
}