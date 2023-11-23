import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { Logger } from '@nestjs/common';
async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: { origin: '*' },
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
