import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

/*eslint-disable */
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
  .setTitle('nest apiii')
  .setDescription("byeee")
  .setVersion('1.0')
  .build();
  //tying the application & configuration together
  const document = SwaggerModule.createDocument(app, config); 
  SwaggerModule.setup('api', app, document);
  await app.listen(3000);
}

bootstrap();
