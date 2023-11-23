import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { configuration } from './config/configuration';
const envFilePath: string = process.env.NODE_ENV
  ? `.env.${process.env.NODE_ENV}`
  : '.env';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath,
      isGlobal: true,
      load: [configuration],
      cache: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
