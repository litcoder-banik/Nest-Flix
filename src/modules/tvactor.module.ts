import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ActorEntity } from "src/entities/actor.entity";
import { TvEntity } from "src/entities/tv.entity";
import { TvActorEntity } from "src/entities/tvactor.entity";

@Module({
    imports: [TypeOrmModule.forFeature([TvEntity, ActorEntity, TvActorEntity,])]
})

export class TvActorModule{}