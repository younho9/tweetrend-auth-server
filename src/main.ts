import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import * as session from 'express-session';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );
  app.use(
    session({
      secret: app.get('ConfigService').get('JWT_EXPIRESIN'),
      resave: false,
      saveUninitialized: false,
    }),
  );
  app.enableCors();

  await app.listen(3000);
}
bootstrap();
