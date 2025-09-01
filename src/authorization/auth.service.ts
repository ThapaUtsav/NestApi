import { Injectable } from '@nestjs/common';

//implement a typescript fot the data
export type AuthResult = { msg: string; role: string };

@Injectable({})
export class AuthService {
  async login(): Promise<AuthResult> {
    await new Promise((resolve) => setTimeout(resolve, 1));
    return {
      msg: 'User logged in',
      role: 'user',
    };
  }
  async register(): Promise<AuthResult> {
    await new Promise((resolve) => setTimeout(resolve, 1));

    return { msg: 'User registered', role: 'registered' };
  }
}

// @Injectable()
// export class AuthService {
//   login(): string {
//     return 'hello';
//   }
//   register() {
//     return { msg: 'user hello' };
//   }
// }
