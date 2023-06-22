import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { UserEntity } from './user/user.entity';
import { TypeORMError } from 'typeorm';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([
        UserEntity,
    ]),

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
export class AppModule {}
