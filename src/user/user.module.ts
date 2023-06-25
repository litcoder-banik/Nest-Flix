import { Module } from "@nestjs/common";

import { UserController } from "./user.controller";
import { UserService } from "./user.service";
import { UserEntity } from "./user.entity";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ActorEntity } from "src/entities/actor.entity";
import { DirectorEntity } from "src/entities/director.entity";
import { MovieEntity } from "src/entities/movie.entity";
import { TvEntity } from "src/entities/tv.entity";

@Module({

    imports: [TypeOrmModule.forFeature([
        UserEntity,
        ActorEntity,
        DirectorEntity,
        MovieEntity,
        TvEntity,
    ])],
    controllers: [UserController,],
    providers: [UserService],
})

export class UserModule{}