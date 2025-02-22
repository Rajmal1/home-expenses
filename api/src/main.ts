import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ApiAcceptedResponse, DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

const config = new DocumentBuilder()
.setTitle('Home Expenses Api')
.setDescription('Api for control home expenses')
.setVersion('3.0')
.addTag('expenses')
.build();

const documentFactory = ()=> SwaggerModule.createDocument(app, config);
SwaggerModule.setup('api', app, documentFactory);

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
