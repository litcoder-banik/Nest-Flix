import { IsNotEmpty, IsString} from 'class-validator';

export class AppLogin {
    @IsNotEmpty({ message: "Username should not be empty!" })
    @IsString({ message: "Username should not be character!" })
    username: string;

    @IsNotEmpty({ message: "Password should not be empty!" })
    @IsString({ message: "Password should not be character!" })
    password: string;
}