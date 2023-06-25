import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ActorEntity } from "src/entities/actor.entity";
import { DirectorEntity } from "src/entities/director.entity";
import { MovieEntity } from "src/entities/movie.entity";
import { TvEntity } from "src/entities/tv.entity";
import { UserEntity } from "src/user/user.entity";
import { Repository } from "typeorm";
import { AdminEntity } from "./admin.entity";

@Injectable()
export class AdminService {

    constructor(
        @InjectRepository(AdminEntity) private adminRepo: Repository<AdminEntity>,
        @InjectRepository(UserEntity) private userRepo: Repository<UserEntity>,
        @InjectRepository(ActorEntity) private actorRepo: Repository<ActorEntity>,
        @InjectRepository(DirectorEntity) private directorRepo: Repository<DirectorEntity>,
        @InjectRepository(MovieEntity) private movieRepo: Repository<MovieEntity>,
        @InjectRepository(TvEntity) private tvRepo: Repository<TvEntity>,
    ) { }


    //-----Add Movie-----//
    async addMovie(movieTitle: string, description: string, relesedate: Date, duration: number, rating: number, createat: Date, updateat:Date, actorNames: string[], directorNames: string[]): Promise<any> {
        const movie = new MovieEntity();
        movie.title = movieTitle;
        movie.description = description;
        movie.releasedate = relesedate;
        movie.duration = duration;
        movie.rating = rating;
        movie.createdat = createat;
        movie.updatedat = updateat;

        const actors: ActorEntity[] = [];
        for (const actorName of actorNames) {
            let actor = await this.actorRepo.findOne({ where: { name: actorName } });
            if (!actor) {
                actor = new ActorEntity();
                actor.name = actorName;
                actor = await this.actorRepo.save(actor);
            }
            actors.push(actor);
        }

        const directors: DirectorEntity[] = [];
        for (const directorName of directorNames){
            let director = await this.directorRepo.findOne({ where: { name: directorName } });
            if(!director){
                director = new DirectorEntity();
                director.name = directorName;
                director = await this.directorRepo.save(director);
            }
            directors.push(director);
        }

        movie.actors = actors;
        movie.directors = directors;
        return this.movieRepo.save(movie);
    }


    //-----Add Tv-series-----//
    async addTv(tvTitle: string, description: string, relesedate: Date, season: number, rating: number, createat: Date, updateat:Date, actorNames: string[], directorNames: string[]): Promise<any> {
        const tv = new TvEntity();
        tv.title = tvTitle;
        tv.description = description;
        tv.releasedate = relesedate;
        tv.season = season;
        tv.rating = rating;
        tv.createdat = createat;
        tv.updatedat = updateat;

        const actors: ActorEntity[] = [];
        for (const actorName of actorNames) {
            let actor = await this.actorRepo.findOne({ where: { name: actorName } });
            if (!actor) {
                actor = new ActorEntity();
                actor.name = actorName;
                actor = await this.actorRepo.save(actor);
            }
            actors.push(actor);
        }

        const directors: DirectorEntity[] = [];
        for (const directorName of directorNames){
            let director = await this.directorRepo.findOne({ where: { name: directorName } });
            if(!director){
                director = new DirectorEntity();
                director.name = directorName;
                director = await this.directorRepo.save(director);
            }
            directors.push(director);
        }

        tv.actors = actors;
        tv.directors = directors;
        return this.tvRepo.save(tv);
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