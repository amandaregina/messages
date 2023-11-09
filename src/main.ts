import { NestFactory } from '@nestjs/core';
import { MessagesModule } from './messages/messages.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(MessagesModule);

  const config = new DocumentBuilder()
  .setTitle('Messages')
  .setDescription('The messages API description')
  .setVersion('1.0')
  .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
