import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { DirectorEntity } from "src/entities/director.entity";
import { MovieEntity } from "src/entities/movie.entity";
import { MovieDirectorEntity } from "src/entities/moviedirector.entity";

@Module({
    imports: [TypeOrmModule.forFeature([MovieEntity, DirectorEntity, MovieDirectorEntity,])]
})

export class MovieDirectorModule{}