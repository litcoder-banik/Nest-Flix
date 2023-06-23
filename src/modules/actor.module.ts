import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ActorEntity } from "src/entities/actor.entity";

@Module({
    imports: [TypeOrmModule.forFeature([ActorEntity,])]
})

export class ActorModule{}