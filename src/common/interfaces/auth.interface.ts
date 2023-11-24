import { Auth } from '@firebase/auth';

export abstract class IAuthServices {
  abstract getAuthService(): Auth;
}
