import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ActorEntity } from "src/entities/actor.entity";
import { DirectorEntity } from "src/entities/director.entity";
import { MovieEntity } from "src/entities/movie.entity";
import { MovieActorEntity } from "src/entities/movieactor.entity";
import { MovieDirectorEntity } from "src/entities/moviedirector.entity";
import { TvEntity } from "src/entities/tv.entity";
import { TvActorEntity } from "src/entities/tvactor.entity";
import { TvDirectorEntity } from "src/entities/tvdirector.entity";
import { UserEntity } from "src/user/user.entity";
import { Repository } from "typeorm";
import { AdminEntity } from "./admin.entity";
import { AddMovie } from "./admin.dto";

@Injectable()
export class AdminService {

    constructor(
        @InjectRepository(AdminEntity) private adminRepo: Repository<AdminEntity>,
        @InjectRepository(UserEntity) private userRepo: Repository<UserEntity>,
        @InjectRepository(ActorEntity) private actorRepo: Repository<ActorEntity>,
        @InjectRepository(DirectorEntity) private directorRepo: Repository<DirectorEntity>,
        @InjectRepository(MovieEntity) private movieRepo: Repository<MovieEntity>,
        @InjectRepository(MovieActorEntity) private movieactorRepo: Repository<MovieActorEntity>,
        @InjectRepository(MovieDirectorEntity) private moviedirectorRepo: Repository<MovieDirectorEntity>,
        @InjectRepository(TvEntity) private tvRepo: Repository<TvEntity>,
        @InjectRepository(TvActorEntity) private tvactorRepo: Repository<TvActorEntity>,
        @InjectRepository(TvDirectorEntity) private tvdirectorRepo: Repository<TvDirectorEntity>,
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


    //-----Show All Movie-----//
    async slowallMovie(): Promise<any> {
        return this.movieRepo.find({
          relations: ['actors', 'directors'],
        });
    }


}