import { IsAlpha, IsEmail, IsNotEmpty, MaxLength, MinLength } from "class-validator";

export class AdminReg {

    @IsNotEmpty({ message: "Name can't be empty." })
    @MinLength(5, { message: "Name must be greater than 5 character." })
    @MaxLength(10, { message: "Name must be less than 10 character." })
    @IsAlpha()
    username: string;

    @IsNotEmpty({ message: "Enter your password." })
    @MinLength(8, { message: "Password must be greater than 8 character." })
    password: string;

    @IsNotEmpty({ message: "Enter Your Email." })
    @IsEmail()
    email: string;

}

export class AdminLogin {

    @IsNotEmpty({ message: "Name can't be empty." })
    @MinLength(5, { message: "Name must be greater than 5 character." })
    @MaxLength(10, { message: "Name must be less than 10 character." })
    @IsAlpha()
    username: string;

    @IsNotEmpty({ message: "Enter your password." })
    @MinLength(8, { message: "Password must be greater than 8 character." })
    password: string;

}