import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ActorEntity } from "src/entities/actor.entity";
import { MovieEntity } from "src/entities/movie.entity";
import { MovieActorEntity } from "src/entities/movieactor.entity";

@Module({
    imports: [TypeOrmModule.forFeature([MovieEntity, ActorEntity, MovieActorEntity,])]
})

export class MovieActorModule{}