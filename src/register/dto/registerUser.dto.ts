import { IsString, IsNotEmpty, IsPhoneNumber,  MinLength, IsEmail } from "class-validator";
export class RegisterUserDTO{

    @IsString()
    @IsNotEmpty()
    name:string

    @IsEmail()
    @IsNotEmpty()
    email:string;

    @MinLength(6)
    @IsNotEmpty()
    password:string;

    @IsNotEmpty()
    @IsString()
    site:string;

    @IsPhoneNumber()
    phone:string;
}