import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { Logger } from '@nestjs/common';
import { NestExpressApplication } from '@nestjs/platform-express';
async function bootstrap() {
  const URL_CLIENT = process.env.URL_CLIENT;
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    cors: { origin: URL_CLIENT },
    rawBody: true,
  });
  const config = app.get(ConfigService);

  const PORT = config.get('PORT');
  const URL_API = config.get('URL_API');

  await app.listen(PORT, () => {
    Logger.log(`Server running on ${URL_API} in ${PORT} port`);
  });
}
bootstrap();
