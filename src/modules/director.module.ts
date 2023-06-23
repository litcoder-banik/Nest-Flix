import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { DirectorEntity } from "src/entities/director.entity";

@Module({
    imports: [TypeOrmModule.forFeature([DirectorEntity,])]
})

export class DirectorModule{}