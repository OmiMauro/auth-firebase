import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { FirebaseService } from './firebase/firebase.service';
import { IAuthServices } from 'src/common/interfaces';
@Module({
  imports: [ConfigModule],
  providers: [
    FirebaseService,
    {
      provide: IAuthServices,
      useClass: FirebaseService,
    },
  ],
  exports: [IAuthServices],
})
export class AuthModule {}
