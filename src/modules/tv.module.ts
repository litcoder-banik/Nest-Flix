import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TvEntity } from "src/entities/tv.entity";

@Module({
    imports: [TypeOrmModule.forFeature([TvEntity])],

})
export class TvModule{}