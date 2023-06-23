import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { MovieEntity } from "src/entities/movie.entity";

@Module({
    imports: [TypeOrmModule.forFeature([MovieEntity])],
})

export class MovieModule{}