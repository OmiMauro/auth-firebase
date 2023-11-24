import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { FirebaseService } from './firebase/firebase.service';
import { AuthServices } from 'src/common/abstracts';
@Module({
  imports: [ConfigModule],
  providers: [
    FirebaseService,
    {
      provide: AuthServices,
      useClass: FirebaseService,
    },
  ],
  exports: [AuthServices],
})
export class AuthModule {}
