import { IsAlpha, IsEmpty, IsNotEmpty, MaxLength, MinLength } from "class-validator";

export class UserLogin {

    @IsNotEmpty({ message: "Name can't be empty." })
    @MinLength(5, { message: "Instructor Name Must be Greater Than 5 Character." })
    @MaxLength(50, { message: "Instructor Name Must be Less Than 50 Character." })
    @IsAlpha()
    username: string;

    @IsNotEmpty({ message: "Enter Your Password." })
    @MinLength(8, { message: "Password Must be Greater Than 8 Character." })
    password: string;
}