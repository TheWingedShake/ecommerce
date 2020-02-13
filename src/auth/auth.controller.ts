import { Controller, Post, Request, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersService } from '../users/users.service';
import { Users } from '../users/users.entity';

@Controller('auth')
export class AuthController {

    constructor(
        private readonly authService: AuthService,
        private readonly usersService: UsersService,
    ) {}

    @Post('login')
    async login(@Body() userData: Users) {
        const user = await this.authService.validateUser(userData.email, userData.password);
        if (user) {
            return this.authService.login(user);
        }
        return {message: 'Email or password is incorrect'};
    }

    @Post('signup')
    async signup(@Body() userData: Users) {
        return await this.usersService.create(userData);
    }

}
