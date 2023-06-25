import { Body, Controller, Get, Post, Res, Session, UsePipes, ValidationPipe } from '@nestjs/common';
import { AppService } from './app.service';
import session from 'express-session';
import { AppLogin } from './app.dto';
import { Response } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  //-----Login-----//
  @Post("/login")
  @UsePipes(new ValidationPipe())
  async login(
    @Session() session, 
    @Body() logindto: AppLogin, 
    @Res({passthrough: true}) res: Response
    ){
    let user = await this.appService.loginUser(logindto);
    
    try{
        if(user.isLogin){
            res.cookie('connect.sid', session.id, { httpOnly: true });

            switch(user.data) {
                case 'admin':
                    session.id = user.admin.id;
                    session.adminname = user.admin.adminname;
                    session.password = user.admin.password;
                    session.email = user.admin.email;
                    break;

                case 'user':
                    session.id = user.user.id;
                    session.username = user.user.username;
                    session.password = user.user.password;
                    session.email = user.user.email;

                default:
                    return { message: "Username or Password Invalid!", success: false };
            }
            return { session, message: "Login Successfull!", success: true, user: user.data, sessionID: session.id };
        }
        else {
            return { message: "Username or Password Invalid!", success: false };
        }
    }
    catch {
        return { message: "Username or Password Invalid!", success: false };
    }
  }

}
