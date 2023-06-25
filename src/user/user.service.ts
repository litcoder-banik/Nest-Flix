import { Injectable } from "@nestjs/common";
import { UserEntity } from "./user.entity";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { ActorEntity } from "src/entities/actor.entity";
import { DirectorEntity } from "src/entities/director.entity";
import { MovieEntity } from "src/entities/movie.entity";
import { MovieActorEntity } from "src/entities/movieactor.entity";
import { MovieDirectorEntity } from "src/entities/moviedirector.entity";
import { TvEntity } from "src/entities/tv.entity";
import { TvActorEntity } from "src/entities/tvactor.entity";
import { TvDirectorEntity } from "src/entities/tvdirector.entity";

@Injectable()
export class UserService{
    
    constructor(
        @InjectRepository(UserEntity) private userRepo: Repository<UserEntity>,
        @InjectRepository(ActorEntity) private actorRepo: Repository<ActorEntity>,
        @InjectRepository(DirectorEntity) private directorRepo: Repository<DirectorEntity>,
        @InjectRepository(MovieEntity) private movieRepo: Repository<MovieEntity>,
        @InjectRepository(MovieActorEntity) private movieactorRepo: Repository<MovieActorEntity>,
        @InjectRepository(MovieDirectorEntity) private moviedirectorRepo: Repository<MovieDirectorEntity>,
        @InjectRepository(TvEntity) private tvRepo: Repository<TvEntity>,
        @InjectRepository(TvActorEntity) private tvactorRepo: Repository<TvActorEntity>,
        @InjectRepository(TvDirectorEntity) private tvdirectorRepo: Repository<TvDirectorEntity>,
    ){}

    async getDashboard(): Promise<any>{
        return "This is Dashboard.";
    }

    //-----Show All Movie-----//
    async slowallMovie(): Promise<any> {
        return this.movieRepo.find({
          relations: ['actors', 'directors'],
        });
    }


    //-----Show All Tv-series-----//
    async slowallTv(): Promise<any> {
        return this.tvRepo.find({
          relations: ['actors', 'directors'],
        });
    }
}