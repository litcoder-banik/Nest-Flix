import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { UserEntity } from './user/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdminEntity } from './admin/admin.entity';
import { MovieEntity } from './entities/movie.entity';
import { AdminModule } from './admin/admin.module';
import { ActorEntity } from './entities/actor.entity';
import { MovieActorEntity } from './entities/movieactor.entity';
import { DirectorEntity } from './entities/director.entity';
import { MovieDirectorEntity } from './entities/moviedirector.entity';
import { TvEntity } from './entities/tv.entity';
import { TvActorEntity } from './entities/tvactor.entity';
import { TvDirectorEntity } from './entities/tvdirector.entity';
import { MovieModule } from './modules/movie.module';
import { TvModule } from './modules/tv.module';
import { ActorModule } from './modules/actor.module';
import { DirectorModule } from './modules/director.module';
import { MovieActorModule } from './modules/movieactor.module';
import { TvActorModule } from './modules/tvactor.module';
import { MovieDirectorModule } from './modules/moviedirector.module';
import { TvDirectorModule } from './modules/tvdirector.module';

@Module({
    imports: [
        TypeOrmModule.forFeature([
            UserEntity,
            AdminEntity,
            MovieEntity,
            TvEntity,
            ActorEntity,
            DirectorEntity,
            MovieActorEntity,
            TvActorEntity,
            MovieDirectorEntity,
            TvDirectorEntity,
        ]),

        UserModule,
        AdminModule,
        MovieModule,
        TvModule,
        ActorModule,
        DirectorModule,
        MovieActorModule,
        TvActorModule,
        MovieDirectorModule,
        TvDirectorModule,

        TypeOrmModule.forRoot({
            type: 'postgres',
            host: 'localhost',
            port: 5432,
            username: 'postgres',
            password: 'finix',
            database: 'nestflix',
            autoLoadEntities: true,
            synchronize: true,
        })

    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule { }
