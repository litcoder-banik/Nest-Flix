import { Injectable } from '@nestjs/common';
import { AppLogin } from './app.dto';
import { AdminEntity } from './admin/admin.entity';
import { UserEntity } from './user/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class AppService {

    constructor(
        @InjectRepository(UserEntity) private userRepo: Repository<UserEntity>,
        @InjectRepository(AdminEntity) private adminRepo: Repository<AdminEntity>,
    ){}

    getHello(): string {
        return 'Hello World!';
    }

    async loginUser(logindto: AppLogin){
        try{
            const admin = await this.adminRepo.findOneBy({
                adminname: logindto.username
            });

            const user = await this.userRepo.findOneBy({
                username: logindto.username
            });

            if(admin){
                if(logindto.password == admin.password){
                    return{ isLogin: true, admin: admin, data: "admin" }
                }
                else{
                    return { isLogin: false };
                }                    
            }

            else if(user){
                if(logindto.password == user.password){
                    return{ isLogin: true, user: user, data: "user" }
                }
                else{
                    return { isLogin: false };
                }
            }

        }
        catch {
            return { isLogin: false };
        }
    }
}
