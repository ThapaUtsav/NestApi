import { Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

//global decorater where  localhost:3000/auth/login
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @Post('login')
  login() {
    return this.authService.login();
    //return { msg: 'User logged in', role: 'user' };
  }
  @Post('register')
  register() {
    return this.authService.register();
    //return { msg: 'User registered', role: 'registered' };
  }
}
