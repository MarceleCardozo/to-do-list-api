import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.listen(process.env.PORT || 8080);
  const logger = new Logger('Application');
  logger.log('App started at http://localhost:8080');
}

bootstrap();
