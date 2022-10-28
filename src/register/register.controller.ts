import { Controller, Post, Body, HttpException, HttpStatus } from '@nestjs/common';
import { RegisterUserDTO } from './dto/registerUser.dto';
import { RegisterService } from './register.service';

@Controller('register')
export class RegisterController {
    constructor(private readonly registerService: RegisterService){}


    @Post ()
    async registerUser(@Body() req:RegisterUserDTO):Promise<string>{
       return this.registerService.registerUser(req)
    }
}