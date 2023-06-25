import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from 'express-session';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(
    session({
        secret: process.env.SESSION_SECRET || 'secret',
        resave: true,
        saveUninitialized: false,
        cookie: {
            maxAge: 30000
        }
    })
);
await app.listen(5000);
}
bootstrap();
