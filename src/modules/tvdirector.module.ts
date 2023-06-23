import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { DirectorEntity } from "src/entities/director.entity";
import { TvEntity } from "src/entities/tv.entity";
import { TvDirectorEntity } from "src/entities/tvdirector.entity";

@Module({
    imports: [TypeOrmModule.forFeature([TvEntity, DirectorEntity, TvDirectorEntity,])]
})

export class TvDirectorModule{}