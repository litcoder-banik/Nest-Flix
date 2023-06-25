import { Controller, Get, UseGuards } from "@nestjs/common";
import { UserService } from "./user.service";
import { UserSessionGuard } from "./session.gaurd";

@Controller("/user")
export class UserController{
    
    constructor(private userservice: UserService){}

    @Get("/dashboard")
    //@UseGuards(UserSessionGuard)
    getDashboard(): any{
        return this.userservice.getDashboard();
    }

    
}
