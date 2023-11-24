import { Auth } from '@firebase/auth';

export abstract class AuthServices {
  abstract getAuthService(): Auth;
}
