import { ValidationPipe } from '@nestjs/common'
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // this removes unwanted or invalid properties
      transform: true, // transforms objects to match the dto object
      forbidNonWhitelisted: true, // when true, this will return an error if a whitelisted item is sent
      transformOptions: {
        enableImplicitConversion: true
      }
    })
  );
  await app.listen(3000);
}
bootstrap();
