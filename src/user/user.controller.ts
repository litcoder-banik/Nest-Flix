import { Controller, Get, UseGuards } from "@nestjs/common";
import { UserService } from "./user.service";
import { UserSessionGuard } from "./session.gaurd";

@Controller("/user")
export class UserController {

    constructor(private userservice: UserService) { }

    
    //-----User Dashboard-----//
    @Get("/dashboard")
    @UseGuards(UserSessionGuard)
    getDashboard(): any {
        return this.userservice.getDashboard();
    }


    //-----Show All Tv-series with Actor and Director names-----//
    @Get("/showmovie")
    @UseGuards(UserSessionGuard)
    async slowallMovie() {
        const movies = await this.userservice.slowallMovie();
        return { data: movies };
    }


    //-----Show All Tv-series with Actor and Director names-----//
    @Get("/showtv")
    @UseGuards(UserSessionGuard)
    async slowallTv() {
        const tv = await this.userservice.slowallTv();
        return { data: tv };
    }
}
