import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { useContainer } from 'class-validator';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  useContainer(app.select(AppModule), { fallbackOnErrors: true });

  app.useGlobalPipes(new ValidationPipe({
    stopAtFirstError: true,
    transform: true, //para castear un objeto JSON automaticamente a una clase DTO
    whitelist: true, //Ignora las propiedades enviados que no son se requieren en el metodo
    //forbidNonWhitelisted: true, //opcional Ignora, genera error y notifica propiedades adicionales enviadas al metodo
    transformOptions: {
      enableImplicitConversion: true,
    }
  }));
  app.enableCors();
  await app.listen(AppModule.port);
}
bootstrap();
