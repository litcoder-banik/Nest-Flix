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
import { DirectorEntity } from './entities/director.entity';
import { TvEntity } from './entities/tv.entity';
import { MovieModule } from './modules/movie.module';
import { TvModule } from './modules/tv.module';
import { ActorModule } from './modules/actor.module';
import { DirectorModule } from './modules/director.module';
import { AdminController } from './admin/admin.controller';
import { AdminService } from './admin/admin.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([
            UserEntity,
            AdminEntity,
            MovieEntity,
            TvEntity,
            ActorEntity,
            DirectorEntity,
        ]),

        UserModule,
        AdminModule,
        MovieModule,
        TvModule,
        ActorModule,
        DirectorModule,

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
    controllers: [AppController, AdminController,],
    providers: [AppService, AdminService,],
})
export class AppModule { }
